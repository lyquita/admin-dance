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
} from '@mui/material';
import React from 'react';

const CourseTable = () => {
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
          <TableContainer sx={{ maxHeight: 800 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell> dd</TableCell>
                  <TableCell> mm</TableCell>
                  <TableCell> dcc</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>33</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={15}
            rowsPerPage={20}
            page={5}
            onPageChange={() => {}}
          />
        </Box>
      </Container>
    </>
  );
};

export default CourseTable;
