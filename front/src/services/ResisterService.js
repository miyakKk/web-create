import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const register = async (uname,rank,email,password) =>{
    try{
        const response = await axios.post(`${API_URL}/register`,{
            uname,
            rank,
            email,
            password
        });
        const data = response.data;
        console.log('データ登録が完了', data);
        return data;
    }catch(err){
        console.err("ユーザー登録に失敗しました。",err);
    }
}