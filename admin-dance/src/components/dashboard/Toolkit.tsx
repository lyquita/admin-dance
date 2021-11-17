import { Grid, Box, Typography, Stack, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React, { FC, useState } from 'react';
import { ToolkitProps } from '../../interfaces/Dashboard';
import  placeItems  from '../global/common';

const Toolkit:React.FC<ToolkitProps> = ({ inputValue, setInputValue } ) => {

    const [selectedValue, setSelectedValue] = useState<string>('');


    
    function handleChange(e: SelectChangeEvent){
        setSelectedValue(e.target.value);
        setInputValue(e.target.value);
        
    }

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
                            <InputLabel id='placename'>环宇荟</InputLabel>
                            <Select id='placename' labelId='placename' onChange={handleChange} value={selectedValue} >
                                {
                                    placeItems.map((item)=>(
                                        <MenuItem key={item.id} value={item.value}> {item.placeName} </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Toolkit;