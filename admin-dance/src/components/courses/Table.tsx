import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  TableContainer,
  Avatar,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ITable, ITableProps } from '../../interfaces/Course';

const CourseTable: React.FC<ITableProps> = ({ tableData, count, rowsPerPage, setRowsPerPage, page, setPage }) => {


const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>{
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
};
  
const handleChangePage = ( event: React.MouseEvent<HTMLButtonElement> | null, newPage: number ) =>{
  setPage(newPage);
};

  return (
    <>
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
                  <TableCell> Coach Name</TableCell>
                  <TableCell> Course Name</TableCell>
                  <TableCell> Course Date</TableCell>
                  <TableCell> Place Name</TableCell>
                  <TableCell> Signed Amount</TableCell>
                  <TableCell> Occupy Rate</TableCell>
                  <TableCell> Cost Per User</TableCell>
                  <TableCell> Fee </TableCell>
                </TableRow>
              </TableHead>
              {
                tableData.map((item) => (
                  <TableBody key={item.id}>
                  <TableCell > 
                    <Avatar src={item.imageurl}></Avatar>
                  </TableCell>
                  <TableCell > {item.coachname} </TableCell>
                  <TableCell > {item.coursename} </TableCell>
                  <TableCell > {item.coursedate} </TableCell>
                  <TableCell > {item.placename} </TableCell>
                  <TableCell > {item.signamount} </TableCell>
                  <TableCell > { Math.round(item.signamount / item.accommodateamount * 100)} % </TableCell>
                  <TableCell > { Math.round(item.fee/ item.signamount *100 ) / 100} </TableCell>
                  <TableCell > {item.fee} </TableCell>
                </TableBody>
                ))
              }
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component='div'
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Container>
    </>
  );
};

export default CourseTable;
