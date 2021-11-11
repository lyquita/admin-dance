import { Grid, Box, Typography, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { FC } from 'react';
import { ToolkitProps } from '../../interfaces/Dashboard';


const Toolkit: React.FC<ToolkitProps> =() =>{


    return(
        <>
            <Box sx={{
                background: 'white',
                borderRadius:'4px',
                boxShadow: 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(63 63 68 / 15%) 0px 1px 2px 0px',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
            }}>
                <Grid container direction='column'>
                    <Grid item padding='20px 50px'>
                        <Stack direction='row' justifyContent='space-between'>
                        <Typography>Location based analysis</Typography>
                        <Typography>Last 7 days</Typography>
                        </Stack>
                    </Grid>
                    <Grid item sx={{padding:'10px 40px'}}>
                        <FormControl sx={{ width : { xs: '100%', md: '50%'  }}} >
                            <InputLabel id='placename'>Wanna check another places?</InputLabel>
                            <Select id='placename' labelId='placename'>
                                <MenuItem>环宇荟</MenuItem>
                                <MenuItem>世纪大道</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Toolkit;