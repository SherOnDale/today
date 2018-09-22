<template>
    <section class="posts">
      <PostPreview :is-admin="isAdmin" id="1" title="Hello There" previewText="This is my first post" thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gso804XBJK2XLt1MAiQ0NoAPvfF5qyZEkmN8_TeRpDsyp8fudA"/>
      <PostPreview :is-admin="isAdmin" id="2" title="Hello There" previewText="This is my first post" thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gso804XBJK2XLt1MAiQ0NoAPvfF5qyZEkmN8_TeRpDsyp8fudA"/>
      <PostPreview :is-admin="isAdmin" id="3" title="Hello There" previewText="This is my first post" thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gso804XBJK2XLt1MAiQ0NoAPvfF5qyZEkmN8_TeRpDsyp8fudA"/>
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
