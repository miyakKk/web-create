import React,{useState} from 'react';

import { register } from '../services/ResisterService';
import { TextField } from '@mui/material';

const RegisterPage = () =>{
    const [error,setError] = useState('')
    const [uname, setUname] = useState('')
    const [rank,setRank] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


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
        <div>
            <TextField type=""></TextField>
            <TextField type="email" value={uname} onChange={(e)=> setUname(e.target.value)}/>
            <TextField type="email" value={rank} onChange={(e)=> setRank(e.target.value)}/>
            <TextField type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <TextField type="email" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
    )
}

export default RegisterPage;