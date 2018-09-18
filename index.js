// const Vue = require("vue/dist/vue.js")
import App from "./App.vue"
import Vue from 'vue/dist/vue.esm'

var vm = new Vue({
    el: '#app',
    components: {
        "App": App
    }
})