<template>
  <main>
    <section class="update-form">
      <PostForm :post='loadedPost' @submit='onSubmit' @delete='onDelete'/>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'admin',
  computed: {
    loadedPost() {
      const id = this.$route.params.postId
      const loadedPosts = this.$store.getters.loadedPosts;
      const post = loadedPosts.filter(post => post.id == id)[0]
      return post;
    }
  },
  methods: {
    onSubmit(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => this.$router.go(-1))
    },
    onDelete(postId) {
      this.$store.dispatch('deletePost', postId)
        .then(() => this.$router.go(-1))
    }
  }
}
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}
</style>