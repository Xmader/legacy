
<template>
    <div class="wrapper">
        <div class="card header">
            <a href="https://github.com/Xmader" target="_blank">
                Xmader：一个年轻的业余程序员
            </a>
        </div>

        <div class="card" v-for="(post, index) in postList" :key="index">
            <a v-bind:href="post.link" target="_blank">
                <img v-bind:src="post.img" />
                <small>{{ post.description }}</small>
                {{ post.title }}
            </a>
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
                    'AriaNg GUI',
                    'https://github.com/Xmader/aria-ng-gui',
                    '一个 Aria2 图形界面客户端',
                    'https://raw.githubusercontent.com/Xmader/aria-ng-gui/master/AriaNg.png'
                ),
                new Post(
                    'Hydrogen',
                    'https://coding.net/u/xmader/p/hydrogen/git/blob/linux/README_zh.md',
                    '基于 Git 的 笔记、任务、待办 管理工具',
                    'https://raw.githubusercontent.com/Xmader/hydrogen/linux/resources/app/assets/imgs/logo.png'
                ),
                new Post(
                    'Xmind Zen for Linux',
                    'https://github.com/Xmader/xmind_zen_linux',
                    'Xmind Zen 的 Linux 移植版 (在官方版发布后不再更新)',
                    'https://raw.githubusercontent.com/Xmader/xmind_zen_linux/master/resources/icon.png'
                ),
                new Post(
                    '膜乎 App',
                    'https://github.com/Xmader/mohu',
                    '膜乎免 番羽土啬 APP',
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
                new Post(
                    '🐸ASCII字符画视频流',
                    'https://github.com/Xmader/ascii_live',
                    '实时转换视频到ASCII字符画',
                    'https://raw.githubusercontent.com/Xmader/ascii_live/master/demo.gif'
                ),
            ]
        }
    }
}
</script>

<style lang="less">
@import "./App.less";
</style>
