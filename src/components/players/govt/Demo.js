import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function ColumnGroupingTable() { 
  const [page, setPage] = React.useState(0); 
  const [rowsPerPage, setRowsPerPage] = React.useState(10); 
  // const { user } = useSelector((state) => state.auth); 
  // const agentTrans = user.transactions.agentTrans; 
  // const subagentTrans = user.transactions.subagentTrans; 
  // console.log(subagentTrans); 
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
    <Table aria-label="simple table"> 
          <TableHead> 
            <TableRow> 
              <TableCell>email</TableCell> 
              <TableCell align="right">CreditAgent</TableCell> 
              <TableCell align="right">Deposit</TableCell> 
              <TableCell align="right">Withdrawers</TableCell> 
              <TableCell align="right">Transfer</TableCell> 
              <TableCell align="right">last Updated</TableCell> 
            </TableRow> 
          </TableHead> 
          <TableBody> 
            {/* {agentTrans.map((trans, key) => (copied from line 43)  */}
            {/* {agentTrans.map((trans, key) => ( 
              <TableRow key={key}> 
                <TableCell component="th" scope="row"> 
                  {trans.email} 
                </TableCell> 
                <TableCell align="right">{trans.creditAgent}</TableCell> 
                <TableCell align="right">{trans.allDeposits}</TableCell> 
                <TableCell align="right">{trans.withdrawals}</TableCell> 
                <TableCell align="right">{trans.transfers}</TableCell> 
                <TableCell align="right">{trans.updatedAt}</TableCell> 
                <TableCell align="right"> 
                </TableCell> 
              </TableRow> 
            ))}  */}
             <TableRow> 
                <TableCell component="th" scope="row"> 
                  hit@yahoo.com 
                </TableCell> 
                <TableCell align="right">g</TableCell> 
                <TableCell align="right">j</TableCell> 
                <TableCell align="right">m</TableCell> 
                <TableCell align="right">c</TableCell> 
                <TableCell align="right">w</TableCell> 
                <TableCell align="right"> 
                </TableCell> 
              </TableRow> 
              <TableRow> 
                <TableCell component="th" scope="row"> 
                  hit@yahoo.com 
                </TableCell> 
                <TableCell align="right">g</TableCell> 
                <TableCell align="right">j</TableCell> 
                <TableCell align="right">m</TableCell> 
                <TableCell align="right">c</TableCell> 
                <TableCell align="right">w</TableCell> 
                <TableCell align="right"> 
                </TableCell> 
              </TableRow>
              <TableRow> 
                <TableCell component="th" scope="row"> 
                  hit@yahoo.com 
                </TableCell> 
                <TableCell align="right">g</TableCell> 
                <TableCell align="right">j</TableCell> 
                <TableCell align="right">m</TableCell> 
                <TableCell align="right">c</TableCell> 
                <TableCell align="right">w</TableCell> 
                <TableCell align="right"> 
                </TableCell> 
              </TableRow>
              <TableRow> 
                <TableCell component="th" scope="row"> 
                  hit@yahoo.com 
                </TableCell> 
                <TableCell align="right">g</TableCell> 
                <TableCell align="right">j</TableCell> 
                <TableCell align="right">m</TableCell> 
                <TableCell align="right">c</TableCell> 
                <TableCell align="right">w</TableCell> 
                <TableCell align="right"> 
                </TableCell> 
              </TableRow>
          </TableBody> 
        </Table> 
      </TableContainer> 
      {/* <TablePagination 
        rowsPerPageOptions={[10, 25, 100]} 
        component="div" 
        count={rows.length} 
        rowsPerPage={rowsPerPage} 
        page={page} 
        onPageChange={handleChangePage} 
        onRowsPerPageChange={handleChangeRowsPerPage} 
      />  */}
    </Paper> 
  ); 
}
 
                                        