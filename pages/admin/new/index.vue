<template>
  <main>
    <section class="new-post-form">
      <PostForm />
    </section>
  </main>
</template>

<script>
import PostForm from '@/components/UI/PostForm'

export default {
  components: {
    PostForm
  },
  layout: 'admin'
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>

