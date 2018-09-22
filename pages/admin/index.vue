<template>
  <main>
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </main>
</template>

<script>

export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  layout: 'admin'
}
</script>

<style scoped>
main {
    padding: 20px;
}

.new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
}

.existing-posts h1 {
    text-align: center;
}
</style>

