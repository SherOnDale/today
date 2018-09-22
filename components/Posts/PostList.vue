<template>
    <section class="posts">
      <PostPreview v-for="post in posts" :key="post.id" :is-admin="isAdmin" :id="post.id" :title="post.title" :previewText="post.previewText" :thumbnail="post.thumbnail"/>
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>
.posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
