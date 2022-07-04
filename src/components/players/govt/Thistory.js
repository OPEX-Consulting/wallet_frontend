import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "allticket", label: "All Ticket", minWidth: 170 },
  { id: "reverseticket", label: "Reverse Ticket", minWidth: 100 },
  { id: "creditfromagent", label: "CreditFromAgent", minWidth: 100 },
  { id: "tickettosubag", label: "Ticket To SubAg", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
];

function createData(
  allticket,
  reverseticket,
  creditfromagent,
  tickettosubag,
  date
) {
  return { allticket, reverseticket, creditfromagent, tickettosubag, date };
}

const rows = [
  createData("300", "50", "300,000", "200", "04,May,2022"),
  createData("100", "30", "100,000", "200", "05,May,2022"),
  createData("200", "20", "200,000", "200", "06,May,2022"),
  createData("350", "60", "300,000", "200", "07,May,2022"),
  createData("300", "50", "300,000", "200", "08,May,2022"),
  createData("300", "50", "300,000", "200", "09,May,2022"),
  createData("300", "50", "300,000", "200", "10,May,2022"),
  createData("300", "50", "300,000", "200", "11,May,2022"),
  createData("300", "50", "300,000", "200", "12,May,2022"),
  createData("300", "50", "300,000", "200", "13,May,2022"),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
