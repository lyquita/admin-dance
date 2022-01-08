import { Grid, Box, Typography, Stack, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Dialog, List, ListItem } from '@mui/material';
import React, { FC, useState } from 'react';
import { ToolkitProps } from '../../interfaces/Dashboard';
import  placeItems  from '../global/common';

const Toolkit:React.FC<ToolkitProps> = ({ inputValue, setInputValue, viewDuration, setViewDuration } ) => {

    const [selectedValue, setSelectedValue] = useState<string>('');
    const [viewsOpen, setViewsOpen] = useState<boolean>(true);
    const views = [
        {
            id: 1,
            'duration' : 'last_seven_days',
            'duration_des': 'Last Seven Days'
        },
        {
            id:2,
            'duration': 'last_month',
            'duration_des': 'Last Month'
        }
    ];
    
    function handleChange(e: SelectChangeEvent){
        setSelectedValue(e.target.value);
        setInputValue(e.target.value);
        
    }

    function handleDurationChange(e: SelectChangeEvent){
        setViewDuration(e.target.value);
    }

    return(
        <>
            <Box sx={{
                background: 'white',
                borderRadius:'4px',
                boxShadow: 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(63 63 68 / 15%) 0px 1px 2px 0px',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
            }}>
                <Grid container sx={{ flexDirection: { xs:'column', md: 'row'}}}>
                <Grid item sx={{padding:'10px 40px', width:{xs: '100%', md:'50%'}}}>
                        <FormControl sx={{ width : { xs: '100%', md: '50%'  }}}>
                            <InputLabel id='placename'>环宇荟</InputLabel>
                            <Select id='placename' labelId='placename' onChange={handleChange} value={selectedValue} >
                                {
                                    placeItems.map((item)=>(
                                        <MenuItem key={item.id} value={item.placeName}> {item.placeName} </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item  sx={{padding:'10px 40px', width:{xs: '100%', md:'50%'}}}>
                    <FormControl sx={{ width : { xs: '100%', md: '50%'  }}}>
                            <InputLabel id='period'>Period</InputLabel>
                            <Select id='period' value={viewDuration} variant='outlined' onChange={handleDurationChange}>
                                {
                                    views.map(item=>
                                        <MenuItem key={item.id} value={item.duration}>
                                            {item.duration_des}
                                        </MenuItem>)
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