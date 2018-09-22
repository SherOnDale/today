<template>
  <main>
    <section class="new-post">
      <button @click="$router.push('/admin/new')">Create Post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList />
    </section>
  </main>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  }
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

