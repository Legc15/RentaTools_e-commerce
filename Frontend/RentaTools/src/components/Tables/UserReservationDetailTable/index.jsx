import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import "./styles.css"

const UserReservationDetailTable = () => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="table-header">
              Nombre
            </TableCell>
            <TableCell align="center" className="table-header">
              Apellido
            </TableCell>
            <TableCell align="center" className="table-header">
              Correo Electronico
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="center">Digital</TableCell>
            <TableCell align="center">house</TableCell>
            <TableCell align="center">DigitalHouse@gmail.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserReservationDetailTable
