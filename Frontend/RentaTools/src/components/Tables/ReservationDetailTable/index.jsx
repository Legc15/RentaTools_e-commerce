/* eslint-disable react/prop-types */
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"
import "./styles.css"

const ReservationDetailTable = ({ reservedDates, isReservationConfirmed, navigateToPrevious }) => {


  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }
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
            {isReservationConfirmed ? "":
            <TableCell align="center" className="table-header">
              Acción
            </TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="center">{reservedDates.reservationFrom.toLocaleDateString("es-ES", options)}</TableCell>
            <TableCell align="center">{reservedDates.reservationTo.toLocaleDateString("es-ES", options)}</TableCell>
            {isReservationConfirmed ? "":
            <TableCell align="center">
              <Button onClick={navigateToPrevious}>Modificar Fecha</Button>
            </TableCell>}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReservationDetailTable
