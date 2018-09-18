
<template>
    <div class="search-box">
        <div class="wrapper">
            <div class="card" v-for="(post, index) in postList" :key="index">
                <a v-bind:href="post.link" target="_blank">
                    <img v-bind:src="post.img" />
                    <small>{{ post.description }}</small>
                    {{ post.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
class Post {
    constructor(title, link, description, img) {
        this.title = title;
        this.link = link;
        this.description = description || " "; // 引号里的不是空格，而是 U+2002 &ensp; En Space
        this.img = img;
    }
}

export default {
    data() {
        return {
            keyword: '',
            postList: [
                new Post(
                    '膜乎 App',
                    'https://github.com/Xmader/mohu',
                    '',
                    'https://raw.githubusercontent.com/Xmader/mohu/master/resources/app/logo.png'
                ),
                new Post(
                    '膜法指南 网页版',
                    'https://github.com/Xmader/mogicians_manual',
                    '无可奉告',
                    'https://raw.githubusercontent.com/Xmader/mogicians_manual/master/icon.png'
                ),
                new Post(
                    '乳包指南',
                    'https://github.com/Xmader/rubao_manual',
                    '',
                    'https://raw.githubusercontent.com/Xmader/rubao_manual/master/icon.jpg'
                ),
            ]
        }
    }
}
</script>

<style lang="less">
@import "./App.less";
</style>
