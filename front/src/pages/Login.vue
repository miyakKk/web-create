<!-- src/pages/Login.vue -->
<template>
  <div class="login-container">
    <h2>ログイン</h2>
    <form @submit.prevent="handleLogin"> <!--@submit.prevent は submit イベントを受け取りつつ ページリロードを防ぐ（prevent）-->
      <input v-model="email" type="email" placeholder="メールアドレス" required /> <!--v-model="email" で双方向バインディング（入力された内容が email 変数に即時反映-->
      <input v-model="password" type="password" placeholder="パスワード" required />
      <button type="submit">ログイン</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p> <!-- v-ifはテンプレート内で条件分岐を書くため-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { login } from '@/services/authService'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async() => {
    error.value = '' //エラー初期化

    try{
        const data = await login(email.value,password.value) //valueはref機能を使用しているため。使わないとエラーになるとのこと
        if(data.token){ //バックエンドから帰ってきたデータに対して変更
            alert('ログイン成功')
        }else{
            error.value = 'ログイン失敗'
        }
    }catch(err){
        error.value = 'ログイン失敗:'+ (err.response?.data?.message || '不明なエラー')
    }
}
</script>
<!--scoped を付けることで、このCSSは他のコンポーネントに影響しない。-->
<style scoped> 
.login-container {
  max-width: 400px;
  margin: 50px auto;
}
input {
  display: block;
  margin-bottom: 10px;
  width: 100%;
}
.error {
  color: red;
}
</style>