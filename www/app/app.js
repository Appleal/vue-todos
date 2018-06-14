import Vue from "vue";
import app from "./app.vue"
import Vuex from "vuex"
import {storeObj}  from "./store/store.js"
Vue.use(Vuex);

const store = new Vuex.Store(storeObj);
new Vue({
    el:"#app",
    render:h=>h(app),
    store
})