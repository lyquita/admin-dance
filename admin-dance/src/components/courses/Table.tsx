import { Box, Container, Table, TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination} from '@mui/material';
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
            overflow: 'scroll'
          }}
        >
          <Table aria-label='course table'>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                <TableCell align='right'>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">3</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell align="right">5</TableCell>
            </TableBody>
            <TableFooter>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={5}
                rowsPerPage={5}
                page={5}
                onPageChange={()=>{}}
                />
            </TableFooter>
          </Table>
        </Box>
      </Container>
    </>
  );
};

export default CourseTable;
