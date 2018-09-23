<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedPost.title">Title</AppControlInput>

    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>

    <!-- <AppControlInput
              control-type="textarea"
              v-model="editedPost.content">Content</AppControlInput>

    <AppControlInput
              control-type="textarea"
              v-model="editedPost.previewText">Preview Text</AppControlInput> -->
    <Editor api-key="8emogs8yqskwopjg2onxasg1jwx4oasdf6nhsb1dhr88nx7y" v-model="editedPost.content">Content</Editor>

    <Editor api-key="8emogs8yqskwopjg2onxasg1jwx4oasdf6nhsb1dhr88nx7y" v-model="editedPost.previewText">Preview Text</Editor>

    <AppButton type="submit"> {{ post ? 'Update' : 'Save' }} </AppButton>

    <AppButton v-if="post" type="button" style="margin-left: 10px" @click="onDelete">Delete</AppButton>

    <AppButton
              type="button"
              style="margin-left: 10px"
              btn-style="cancel"
              @click="onCancel">Cancel</AppButton>
</form>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  components: {
    Editor
  },
  data () {
    return {
      editedPost: this.post ? { ...this.post } : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        previewText: ''
      }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.go(-1);
    },
    onDelete() {
      this.$emit('delete', this.editedPost.id);
    }
  }
}
</script>