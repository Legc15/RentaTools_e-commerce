import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import "./styles.css"
import { useEffect, useState } from "react"
import { getInformationFromEndpoints } from "../../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../../api/constants"
import { getUserId } from "../../../utils/localStorageHandler"

const UserReservationDetailTable = () => {

  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email: ""
  });

  useEffect(() => { getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.USER_ID, id: getUserId() }).then(response => setUserInfo(response)) }, [])


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
            <TableCell align="center">{userInfo.name}</TableCell>
            <TableCell align="center">{userInfo.lastName}</TableCell>
            <TableCell align="center">{userInfo.email}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserReservationDetailTable
