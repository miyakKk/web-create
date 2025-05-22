import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { history,historyDb } from '../services/historyService';
import React,{useEffect, useState} from 'react';
const sample_data =[
  {user:'A',rank:'課長',event:'ログイン', timestamp:'2025-05-22 08:00'},
  {user:'B',rank:'部長',event:'ログアウト', timestamp:'2025-05-22 20:00'},
  {user:'C',rank:'担当',event:'データ抽出ボタン操作', timestamp:'2025-05-22 11:30'}
]

const HistoryPage = () => {
  const [rows,setRows] = useState([]);
  //画面が表示された初回だけAPIを実行
  // useEffect(()=>{
  //   const fetchHistory = async () => {
  //     try{
  //       const result = await history();//API通信
  //       setRows(result); //バックエンドのデータをuseStateで保持
  //       console.log('操作履歴を取得しました。');
  //     }catch(err){
  //       console.error('操作履歴を取得できませんでした。',err);
  //     }
  //   };
  //   fetchHistory();
  // },[]) //初回マウント時だけ指定
  useEffect(() => {
    //バックエンド接続していないため、仮データとして呼び出し。
    setRows(sample_data);
  },[])
  const getInformation = async (e) => {
    try{
      const csv = await historyDb();
      console.log('csvファイルを取得:',csv);
    }catch(err){
      
    }
  }
  return (
    <div>
      <Button variant="contained" color='primary' onClick={getInformation} sx={{ml:'240px',mt:'2'}}>
        データ取得
      </Button>
      <TableContainer component={Paper} sx={{ width: 'calc(100% - 240px)', ml:'240px',overflow: '240px',mt:2}}>
        <Table>
            <TableHead>
                <TableCell>ユーザー名</TableCell>
                <TableCell>ランク</TableCell>
                <TableCell>実行イベント</TableCell>
                <TableCell>操作時間</TableCell>
            </TableHead>
        <TableBody>
            {rows.length === 0 ? (
    <TableRow>
      <TableCell colSpan={4} align="center">
        データがありません
      </TableCell>
    </TableRow>
  ) : (
    rows.map((row, index) => (//rows配列の中身を一つずつ取得
      // 表の1行を作成
      <TableRow key={index}>
        <TableCell>{row.user}</TableCell>
        <TableCell>{row.rank}</TableCell>
        <TableCell>{row.event}</TableCell>
        <TableCell>{row.timestamp}</TableCell>
      </TableRow>
    ))
  )}
        </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}
export default HistoryPage