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

import "sweetalert2/src/sweetalert2.scss"

const FeaturesTable = ({ features }) => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="table-header">
              ID
            </TableCell>
            <TableCell align="center" className="table-header">
              Característica
            </TableCell>
            <TableCell align="center" className="table-header">
              Ícono asociado{" "}
            </TableCell>
            <TableCell align="center" className="table-header">
              Acción
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {features.map(({ id, name, icon }) => (
            <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                {id}
              </TableCell>

              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">
                {" "}
                <i className={`fa-solid ${icon}`}></i>
              </TableCell>
              <TableCell align="center">
                <div className="table-buttons">
                  <Button variant="outlined" className="button button-delete">
                    Eliminar
                  </Button>
                  <Button variant="contained" type="submit" className="button button-edit">
                    Editar
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FeaturesTable
