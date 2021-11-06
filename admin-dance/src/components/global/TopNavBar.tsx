import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Dog from '../../assets/svgs/Dog';

const TopNavBar =() => {

    return(
        <>
            <AppBar>
                <Toolbar>
                    <Dog style={{width:'50px', height:'auto'}}/>
                    <Typography> Dog, dont cry! </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};


export default TopNavBar;