import Vuex from 'vuex';
import Cookie from 'js-cookie';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id == editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
      deletePost(state, postId) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id == postId
        );
        state.loadedPosts.splice(postIndex, 1);
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        // console.log(context.app.$axios.defaults.baseURL);
        return (
          context.app.$axios
            .$get('https://nuxt-blog-13c98.firebaseio.com/posts.json')
            // .$get('/posts')
            .then(data => {
              const postsArray = [];
              for (const key in data) {
                postsArray.push({ ...data[key], id: key });
              }
              vuexContext.commit('setPosts', postsArray);
            })
            .catch(e => context.error(e))
        );
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() };
        console.log(this.$axios.defaults.baseURL);
        return this.$axios
          .$post(
            'https://nuxt-blog-13c98.firebaseio.com/posts.json?auth=' +
              vuexContext.state.token,
            createdPost
          )
          .then(data => {
            vuexContext.commit('addPost', {
              ...createdPost,
              id: data.name
            });
          })
          .catch(error => console.log(error));
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            'https://nuxt-blog-13c98.firebaseio.com/posts/' +
              editedPost.id +
              '.json?auth=' +
              vuexContext.state.token,
            editedPost
          )
          .then(data => {
            vuexContext.commit('editPost', editedPost);
          })
          .catch(error => console.log(error));
      },
      deletePost(vuexContext, postId) {
        return this.$axios
          .$delete(
            'https://nuxt-blog-13c98.firebaseio.com/posts/' +
              postId +
              '.json?auth=' +
              vuexContext.state.token
          )
          .then(data => {
            vuexContext.commit('deletePost', postId);
          })
          .catch(error => console.log(error));
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=';
        if (!authData.isLogin) {
          authUrl =
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=';
        }
        return this.$axios
          .$post(authUrl + process.env.fbAPIKey, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit('setToken', result.idToken);
            localStorage.setItem('token', result.idToken);
            localStorage.setItem(
              'tokenExpiration',
              Date.now() + Number.parseInt(result.expiresIn) * 1000
            );
            Cookie.set('jwt', result.idToken);
            Cookie.set(
              'tokenExpiration',
              Date.now() + Number.parseInt(result.expiresIn) * 1000
            );
          })
          .catch(error => console.log(error));
      },
      initAuth(vuexContext, req) {
        let token, expirationTime;
        if (req) {
          if (!req.headers.cookie) return;
          token = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
            .split('=')[1];
          expirationTime = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('tokenExpiration='))
            .split('=')[1];
        } else if (process.client) {
          token = localStorage.getItem('token');
          expirationTime = localStorage.getItem('tokenExpiration');
        }
        if (!token || !expirationTime || Date.now() > +expirationTime) {
          vuexContext.dispatch('logout');
        } else {
          vuexContext.commit('setToken', token);
        }
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken');
        Cookie.remove('jwt');
        Cookie.remove('tokenExpiration');
        if (process.client) {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiration');
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts.slice(0).sort((a, b) => {
          return (
            new Date(b.updatedDate).getTime() -
            new Date(a.updatedDate).getTime()
          );
        });
      },
      isAuthenticated(state) {
        return state.token != null;
      },
      todayPosts(state) {
        return state.loadedPosts
          .filter(
            post =>
              new Date(post.updatedDate).toDateString() ==
              new Date().toDateString()
          )
          .sort((a, b) => {
            return (
              new Date(b.updatedDate).getTime() -
              new Date(a.updatedDate).getTime()
            );
          });
      }
    }
  });
};

export default createStore;
