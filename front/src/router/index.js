// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/Login.vue'

const routes = [
  { path: '/', redirect: '/login' }, //
  { path: '/login', name: 'Login', component: LoginPage } // /loginにアクセスしたときLoginPageコンポーネントを表示する
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router