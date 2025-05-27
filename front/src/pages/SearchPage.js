import { Button } from "@mui/material";
import { Search } from "../services/SearchService";
import { useState } from "react";
const SearchPage = () => {
    const [name,setName] = useState();
    const [error,setError] = useState();
    const handleSearch = async (e) =>{
        e.preventDefault();
        setName();
        try{
            const result = await Search(name);
            console.log('取得したデータ',result);
        }catch(err){
            console.error('データを取得できませんでした。');
            setError();
        }
    }

    return (
        <Button onSubmit={handleSearch}></Button>
    )
}
export default SearchPage;