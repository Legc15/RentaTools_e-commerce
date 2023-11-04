/* eslint-disable react/prop-types */
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import "./styles.css"
// import Swal from "sweetalert2/dist/sweetalert2.js"

import "sweetalert2/src/sweetalert2.scss"

const UsersTable = ({ userList }) => {
  const headerTitles = ["ID", "Nombre", "Apellido", "Email", "Activo", "Rol", "Acciones"]
  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerTitles.map((title, index) => {
              return (
                <TableCell align="center" className="table-header" key={index}>
                  {title}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map(({ id, name, lastName, email, esAdmin, esActive }) => (
            <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                {id}
              </TableCell>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">{lastName}</TableCell>
              <TableCell align="center">{email}</TableCell>
              <TableCell align="center">
                {esActive ? <FontAwesomeIcon icon={faCircleCheck} size="lg" className="active-icon" /> : "Simple mortal"}
              </TableCell>
              <TableCell align="center">{esAdmin ? "Admin" : "Simple mortal"}</TableCell>
              <TableCell align="center">
                <div className="table-buttons">
                  <Button variant="contained" type="submit" className="button button-edit" onClick={() => console.log("cambiar rol")}>
                    Cambiar rol
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

export default UsersTable
