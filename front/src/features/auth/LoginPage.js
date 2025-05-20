import React, { useState } from 'react'
import {login} from '../../services/authService' //仮で作ったため、仕様変更有
const  LoginPage = () => {
    const [email, setEmail] = useState()
    const [Password,setPassword] = useState()

    const handleSubmit = async (e) =>{
         e.preventDefault();
         try{
            const result = await login(email,password);
         }catch(err){ 
            console.err("ログインに失敗しました",err);
         }
    }
    
  return (
    <div>
      
    </div>
  )
}

export default LoginPage;
