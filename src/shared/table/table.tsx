import React from 'react';
import {
  Paper,
  Table as LibraryTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '../wrappers/material-ui';
import { useStyles } from './table.styles';

interface Column {
    id: string;
    label: string;
}

interface Data {
    key: string;
}

interface TableProps {
    columns: Column[],
    data: Array<any>
}

const renderHeader = (columns) => (
  <TableHead>
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.id}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

const renderTableBody = ({
  data,
  columns,
  page,
  rowsPerPage,
}) => (
  <TableBody>
    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
      <TableRow hover role="checkbox" tabIndex={-1} key={row.key}>
        {columns.map((column) => {
          const value = row[column.id];

          return (
            <TableCell key={column.id}>
              {value}
            </TableCell>
          );
        })}
      </TableRow>
    ))}
  </TableBody>

);
export const Table = ({
  columns,
  data,
}: TableProps) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <LibraryTable stickyHeader aria-label="sticky table">
          {renderHeader(columns)}
          {renderTableBody({
            data,
            columns,
            page,
            rowsPerPage,

          })}
        </LibraryTable>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};
