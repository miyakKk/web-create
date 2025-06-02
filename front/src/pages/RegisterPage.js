import React,{Suspense, useState} from 'react';

import { register } from '../services/ResisterService';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';


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
            console.log(`uname:${uname}, rank:${rank}, email:${email}, password:${password}の内容を送信します。`);
            //失敗時の通知
            if(!register.ok){
                Snackbar({
                    type:error,
                    message:"データ登録に失敗しました"
                })
            }else{
                Snackbar({
                    type: 'success',
                    message: 'データ登録に成功しました'
                });

            }
            console.log('ユーザー登録が完了しました。',result);
        }catch(err){
            setError(err.message || 'ユーザー登録に失敗しました。');
        }
    }

    return (
        <div>
            <TextField type="email" value={uname} onChange={(e)=> setUname(e.target.value)}/>
            <TextField type="email" value={rank} onChange={(e)=> setRank(e.target.value)}/>
            <TextField type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <TextField type="email" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <Button variant='contained endIcon={<SendIcon/>}' onClick={handleRegister}>登録</Button>
        </div>
    )
}

export default RegisterPage;