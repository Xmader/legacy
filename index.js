// const Vue = require("vue/dist/vue.js")
import Vue from 'vue/dist/vue.esm'
import App from "./App.vue"

var vm = new Vue({
    el: '#app',
    components: {
        "App": App
    }
})