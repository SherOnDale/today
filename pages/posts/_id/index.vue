<template>
<div>
    <main>
        <section class="post">
        <h1 class="post-title">{{ loadedPost.title }}</h1>
        <div class="post-details">
            <div class="post-detail">Last updated on {{ loadedPost.updatedDate | date }}</div>
            <div class="post-detail">Written by {{ loadedPost.author }}</div>
        </div>
        <div class="post-content" v-html="loadedPost.content"></div>
        </section>
    </main>
    <Footer />
</div>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min'
import 'prismjs/plugins/show-language/prism-show-language.min'
import Footer from '@/components/UI/Footer'


export default {
    components: {
        Footer
    },
    computed: {
        loadedPost() {
            const id = this.$route.params.id
            const loadedPosts = this.$store.getters.loadedPosts;
            const post = loadedPosts.filter(post => post.id == id)[0];
            return post;
        }
    },
    mounted() {
        Prism.highlightAll();
    }
}
</script>

<style scoped>
main {
    padding: 30px;
    box-sizing: border-box;
}

.post {
    width: 100%;
}

@media (min-width: 768px) {
    .post {
        width: 600px;
        margin: auto;
    }
}

.post-title {
    margin: 0;
}

.post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 768px) {
    .post-details {
        flex-direction: row;
    }
}

.post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
}
</style>
