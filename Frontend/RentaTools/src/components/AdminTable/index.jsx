/* eslint-disable react/prop-types */
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import "./styles.css"

const AdminTable = ({ products }) => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="table-header">
              Nombre
            </TableCell>
            <TableCell align="center" className="table-header">
              Código de producto
            </TableCell>
            <TableCell align="center" className="table-header">
              Descripción corta
            </TableCell>
            <TableCell align="center" className="table-header">
              Categoría
            </TableCell>
            <TableCell align="center" className="table-header">
              Eliminar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                {product.name}
              </TableCell>
              <TableCell align="center">{product.productCode}</TableCell>
              <TableCell align="center">{product.shortDescription}</TableCell>
              <TableCell align="center">{product.category.id}</TableCell>
              <TableCell align="center">Eliminar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminTable
