// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router) //Vue Router機能を組み込む
app.mount('#app') // 作成したアプリをindex.html内の<div id="app"></div>に表示する