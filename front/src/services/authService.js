import axios from 'axios';


export const login = async (email, password) => {
  try {
    const response = await axios.post(`auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'ログインエラー' };
  }
};