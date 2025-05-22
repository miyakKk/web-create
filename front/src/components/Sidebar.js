import React from 'react'
import {Link} from 'react-router-dom';
import {Box,List,ListItem,ListItemText} from '@mui/material';

const Sidebar = ()=>{
    return(
        <Box>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="ホーム"/>
                </ListItem>
                <ListItem button component={Link} to="/history">
                    <ListItemText primary="履歴"/>
                </ListItem>
            </List>
        </Box>
    )
}
export default Sidebar;
