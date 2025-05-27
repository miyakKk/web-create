import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const Search = async(name) =>{
    try{
        const response = await axios.post(`${API_URL}/history/search`,{
            name
        });
        const data = response.data;
        console.log('検索結果',data.rows);
        return data.rows;
    }catch(err){

    }

}