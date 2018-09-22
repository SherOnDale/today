<template>
  <main>
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

        <AppControlInput v-model="editedPost.title">Title</AppControlInput>

        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>

        <AppControlInput
                  control-type="textarea"
                  v-model="editedPost.content">Content</AppControlInput>

        <AppButton type="submit">Save</AppButton>

        <AppButton
                  type="button"
                  style="margin-left: 10px"
                  btn-style="cancel"
                  @click="onCancel">Cancel</AppButton>
      </form>
    </section>
  </main>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    AppControlInput,
    AppButton
  },
  data () {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: ''
      }
    }
  },
  methods: {
    onSave() {
      console.log(this.editedPost);
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
}
</script>

