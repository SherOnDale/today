<template>
  <form @submit.prevent="onSave">
    <!-- <AppControlInput v-model="editedPost.author">Author Name</AppControlInput> -->

    <AppControlInput v-model="editedPost.title" class="title">Title</AppControlInput>


    <!-- <AppControlInput
              control-type="textarea"
              v-model="editedPost.content">Content</AppControlInput> -->

    <AppControlInput v-model="editedPost.previewText" class="preview-text">Preview Text</AppControlInput>

    <Editor api-key="8emogs8yqskwopjg2onxasg1jwx4oasdf6nhsb1dhr88nx7y"
      v-model="editedPost.content"
      class="content"
      :init="{height: 400}"
      plugins="link textcolor wordcount emoticons table fullscreen preview lists image codesample"
      toolbar="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link table image codesample | backcolor forecolor | emoticons">Content</Editor>

    <div class="buttons">
      <AppControlInput v-model="editedPost.thumbnail" class="thumbnail">Thumbnail Link</AppControlInput>

      <AppButton type="submit" class="submit"> {{ post ? 'Update' : 'Save' }} </AppButton>

      <AppButton v-if="post" type="button" @click="onDelete" class="delete">Delete</AppButton>

      <AppButton
                type="button" btn-style="cancel" class="cancel" @click="onCancel">Cancel</AppButton>
    </div>
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
        author: 'Sherin Binu',
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

<style scoped>
@media (min-width: 768px) {
    form {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-gap: 20px;
        grid-template-areas:
            'title preview-text'
            'buttons body';
    }

    .title {
        grid-area: title;
    }

    .buttons {
        grid-area: buttons;
        display: grid;
        max-height: 200px;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        grid-template-areas:
            'thumbnail'
            'submit'
            'delete'
            'cancel';
    }

    .thumbnail {
        grid-area: thumbnail;
    }

    .preview-text {
        grid-area: preview-text;
    }

    .content {
        grid-area: body;
    }

    .submit {
        grid-area: submit;
    }

    .delete {
        grid-area: delete;
    }

    .cancel {
        grid-area: cancel;
    }
}
</style>
