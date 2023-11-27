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
import { getInformationFromEndpoints, patchEditedInformation } from "../../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../../api/constants"
import { useContext, useEffect, useState } from "react"
import { ContextGlobal } from "../../../api/global.context.helper"

const UsersTable = () => {
  const { users, usersAll } = useContext(ContextGlobal)

  const [isRoleChanged, setIsRoleChanged] = useState(false)
  const headerTitles = ["ID", "Nombre", "Apellido", "Email", "Activo", "Rol", "Acciones"]

  useEffect(() => {
    getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.USERS_ALL }).then((response) => usersAll(response))
  }, [isRoleChanged])

  const handleChangeRole = async (id, esAdmin) => {
    const response = await patchEditedInformation(ENDPOINTS_CODE.USER_EDIT_ROLE, !esAdmin, id)
    if (response.status === 200) {
      setIsRoleChanged(!isRoleChanged)
    }
  }

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
          {users.map(({ id, name, lastName, email, esAdmin, esActive }) => (
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
                  <Button variant="contained" type="submit" className="button button-edit" onClick={() => handleChangeRole(id, esAdmin)}>
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
