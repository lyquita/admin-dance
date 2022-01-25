import { Box, Container, Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Avatar, TablePagination, Button} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../components/global/Layout';
import { IUser } from '../interfaces/User';
import axiosInstance from '../untils/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';


const UserList = () => {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState<IUser[] | null>(null);
    const [selectedRow, setSelectedRow] = useState<string>(null);
    useEffect(()=>{
        axiosInstance.get('/user/all')
        .then(res=> 
            {
                setTableData(res.data.rows);
                console.log('userlist', res.data);
            } 
          )
        .catch(err=>console.log('user', err));
    }, [selectedRow]);


    const handleView = (event: React.MouseEvent<HTMLButtonElement>) => {
      navigate(`/user/${event.currentTarget.value}`);
      
    };


    if(tableData){
        return(
            <Container style={{ padding: '100px 20px 50px 20px' }} maxWidth={false}>
            <Layout />
            <Container sx={{ width: '100%', padding: '30px 0' }} maxWidth={false}>
        <Box
          sx={{
            background: 'white',
            borderRadius: '4px',
            boxShadow:
              'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(63 63 68 / 15%) 0px 1px 2px 0px',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            display: 'flex',
            overflow: 'scroll',
            flexDirection: 'column',
          }}
        >
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell> Avatar</TableCell>
                  <TableCell> Username</TableCell>
                  <TableCell> Email</TableCell>
                  <TableCell> Admin</TableCell>
                  <TableCell>Operate</TableCell>
                </TableRow>
              </TableHead>
              {
                tableData.map((item) => (
                  <TableBody key={item.id}>
                  <TableCell > 
                    <Avatar src={item.avatar}></Avatar>
                  </TableCell>
                  <TableCell > {item.username} </TableCell>
                  <TableCell > {item.email} </TableCell>
                  <TableCell > 
                    { item.admin ? 'true' : 'false' }  
                  </TableCell>
                  <TableCell> 
                      <Button variant='contained' onClick={handleView} value={item.username} >View</Button>
                  </TableCell>
                </TableBody>
                ))
              }
            </Table>
          </TableContainer>
        </Box>
      </Container>
            </Container>
    );
    }
    else{
        return(
            <Container style={{ padding: '100px 20px 50px 20px' }} maxWidth={false}>
            <Layout />
            <Container sx={{ width: '100%', padding: '30px 0' }} maxWidth={false}>
        <Box
          sx={{
            background: 'white',
            borderRadius: '4px',
            boxShadow:
              'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(63 63 68 / 15%) 0px 1px 2px 0px',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            display: 'flex',
            overflow: 'scroll',
            flexDirection: 'column',
          }}
        >
            There is no data
        </Box>
      </Container>
            </Container>
    );
    }

   
};


export default UserList;