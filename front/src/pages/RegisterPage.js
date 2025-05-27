import React,{useState} from 'react';

import { register } from '../services/ResisterService';

const RegisterPage = () =>{
    const [error,setError] = useState('')
    console.log("登録ページの表示");
    const handleRegister = async(e) => {
        try{
            const result = await register(uname,rank,email,password);
            console.log('ユーザー登録が完了しました。',result);
        }catch(err){
            setError(err.message || 'ユーザー登録に失敗しました。');
        }
    }

    return (
        <div></div>
    )
}

export default RegisterPage;