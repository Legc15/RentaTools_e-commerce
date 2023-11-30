import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"
import "./styles.css"


const RentTable2 = () => {
 
  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="table-header">
              Desde
            </TableCell>
            <TableCell align="center" className="table-header">
              Hasta
            </TableCell>
            <TableCell align="center" className="table-header">
              Accion
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>

              <TableCell align="center">14 de febrero de 2028</TableCell>
              <TableCell align="center">17 de febrero de 2028</TableCell>
              <TableCell align="center">
                <Button>Modificar Fecha</Button>
              </TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RentTable2
