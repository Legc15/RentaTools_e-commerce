/* eslint-disable react/prop-types */
import { useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"
import "./styles.css"
import Swal from "sweetalert2/dist/sweetalert2"
import { deleteInformation } from "../../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../../api/constants"

const CategoriesTable = ({ categories, setCategoriesForm, setIsNewCategory }) => {
  const [isCategoryDeleted, setIsCategoryDeleted] = useState(false)

  const handleDeleteCategory = (id) => {
    Swal.fire({
      title: "Eliminar categoría",
      text: "Está seguro que desea eliminar esta categoría?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteInformation({ id, endpoint: ENDPOINTS_CODE.CATEGORY_DELETE })
        if (response.status === 200) {
          setIsCategoryDeleted(!isCategoryDeleted)
          Swal.fire("Categoría eliminada.", "", "success")
          window.location.reload()
        } else {
          Swal.fire("No se pudo eliminar la categoría", response.status.toString(), "error")
        }
      } else {
        Swal.fire("Operación cancelada.", "", "info")
      }
    })
  }

  const handleEditCategory = ({ id, name, description }) => {
    setIsNewCategory(false)
    setCategoriesForm({ id, name, description })
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="table-header">
              ID
            </TableCell>
            <TableCell align="center" className="table-header">
              Titulo
            </TableCell>
            <TableCell align="center" className="table-header">
              Descripcion
            </TableCell>
            <TableCell align="center" className="table-header">
              imagen
            </TableCell>
            <TableCell align="center" className="table-header">
              Accion
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map(({ id, name, description, image }) => (
            <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                {id}
              </TableCell>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">{description}</TableCell>
              <TableCell align="center" className="img-categories">
                <img src={image} />
              </TableCell>
              <TableCell align="center">
                <div className="table-buttons">
                  <Button variant="outlined" className="button button-delete" onClick={() => handleDeleteCategory(id)}>
                    Eliminar
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    className="button button-edit"
                    onClick={() => handleEditCategory({ id, name, description })}
                  >
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

export default CategoriesTable
