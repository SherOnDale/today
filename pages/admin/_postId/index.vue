<template>
  <main>
    <section class="update-form">
      <PostForm :post='loadedPost' />
    </section>
  </main>
</template>

<script>
import PostForm from '@/components/UI/PostForm'

export default {
  components: {
    PostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Sherin Binu',
        title: 'My Awesome Post',
        content: 'Super Amazing, Thanks for that!',
        thumbnailLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gso804XBJK2XLt1MAiQ0NoAPvfF5qyZEkmN8_TeRpDsyp8fudA'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>