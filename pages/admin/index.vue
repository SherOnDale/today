<template>
  <main>
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin/>
    </section>
  </main>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    PostList,
    AppButton
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

