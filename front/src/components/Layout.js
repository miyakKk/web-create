import React from 'react'
import {Box} from '@mui/material';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
const Layout = ({children}) =>{
    return(
        <Box>
            <Sidebar/>
            <Box>
                {children}
                <Outlet/>
            </Box>
        </Box>
    );
}
export default Layout;