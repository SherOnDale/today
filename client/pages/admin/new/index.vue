<template>
  <main>
    <section class="new-post-form">
      <PostForm @submit="onSubmit"/>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    onSubmit(postData) {
      this.$store.dispatch('addPost', postData)
        .then(() => this.$router.go(-1))
    }
  },
  layout: 'admin'
}
</script>

<style scoped>
.new-post-form {
    width: 90%;
    margin: 20px auto;
}
</style>

