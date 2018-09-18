// const Vue = require("vue/dist/vue.js")
import Vue from 'vue/dist/vue.runtime.esm'
import App from "./App.vue"

var vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(
            App,   // tag name 标签名称 或 组件对象
        )
    }
})