<template>
<main>
  <PostList :posts="loadedPosts" />
</main>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>


<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
