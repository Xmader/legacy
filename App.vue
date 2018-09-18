
<template>
    <div class="search-box">
        <div class="wrapper">
            <div class="card" v-for="(post, index) in postList" :key="index">
                <a v-bind:href="post.link" target="_blank">
                    <img v-bind:src="post.img" />
                    <small>Posted by: {{ post.author }}</small> {{ post.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
class Post {
    constructor(title, link, author, img) {
        this.title = title;
        this.link = link;
        this.author = author;
        this.img = img;
    }
}

export default {
    data() {
        return {
            keyword: '',
            postList: [
                new Post(
                    'Vue.js',
                    'https://vuejs.org/',
                    'Chris',
                    'https://vuejs.org//images/logo.png'
                ),
            ]
        }
    }
}
</script>

<style lang="less">
@import "./App.less";
</style>
