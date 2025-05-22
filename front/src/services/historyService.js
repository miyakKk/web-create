import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const history = async () =>{
    try{
        const response = await axios.post(`${API_URL}/history`);
        const data = response.data;
        console.log('データ取得',data.rows);
        return data.rows; //フロント側でセットする
    }catch(err){
        console.error('データが取得できませんでした。',err);
        return [];//念のため空配列を返す
    }
}
export const historyDb = async () => {
    try{
        const dbResponse = await axios.post(`${API_URL}/history/db`);
        const dbData = dbResponse.data;
        console.log('csvファイル取得', dbData);
        return dbData;
    }catch(err){
        console.error('csvファイルでデータが取得できませんでした。',err);
    }
}