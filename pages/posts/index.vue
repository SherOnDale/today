<template>
<main>
  <PostList />
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
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
