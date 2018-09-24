<template>
  <main>
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate | date }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <div class="post-content" v-html="loadedPost.content"></div>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:sherinbinu@hotmail.com">sherinbinu@hotmail.com</a></p>
    </section>
  </main>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


export default {
    computed: {
        loadedPost() {
            const id = this.$route.params.id
            const loadedPosts = this.$store.getters.loadedPosts;
            const post = loadedPosts.filter(post => post.id == id)[0];
            return post;
        }
    },
    mounted() {
        Prism.highlightAll();
    }
}
</script>

<style scoped>
main {
    padding: 30px;
    box-sizing: border-box;
}

.post {
    width: 100%;
}

@media (min-width: 768px) {
    .post {
        width: 600px;
        margin: auto;
    }
}

.post-title {
    margin: 0;
}

.post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 768px) {
    .post-details {
        flex-direction: row;
    }
}

.post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
}

.post-feedback {
    text-align: center;
}

.post-feedback a {
    color: red;
    text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
    color: salmon;
}
</style>
