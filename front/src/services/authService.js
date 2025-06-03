import api from './api'

export const login = async(email , password) =>{
    const response = await api.post('/login',{email,password}) //一旦emailとpassword  読み込んでいるapiでhttpを指定
    return response.data
}