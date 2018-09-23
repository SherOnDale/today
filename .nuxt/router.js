import Vue from 'vue'
import Router from 'vue-router'

const _6dce99fa = () => import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */).then(m => m.default || m)
const _aeee6604 = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _2f5afbd6 = () => import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages_admin_auth_index" */).then(m => m.default || m)
const _4f7feb36 = () => import('..\\pages\\admin\\new\\index.vue' /* webpackChunkName: "pages_admin_new_index" */).then(m => m.default || m)
const _a9c068c8 = () => import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages_admin__postId_index" */).then(m => m.default || m)
const _78464140 = () => import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages_posts__id_index" */).then(m => m.default || m)
const _34228707 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/posts",
			component: _6dce99fa,
			name: "posts"
		},
		{
			path: "/admin",
			component: _aeee6604,
			name: "admin"
		},
		{
			path: "/admin/auth",
			component: _2f5afbd6,
			name: "admin-auth"
		},
		{
			path: "/admin/new",
			component: _4f7feb36,
			name: "admin-new"
		},
		{
			path: "/admin/:postId",
			component: _a9c068c8,
			name: "admin-postId"
		},
		{
			path: "/posts/:id",
			component: _78464140,
			name: "posts-id"
		},
		{
			path: "/",
			component: _34228707,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
