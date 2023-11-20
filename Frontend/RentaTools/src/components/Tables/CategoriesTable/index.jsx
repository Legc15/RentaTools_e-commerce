import React from 'react';
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"


const CategoriesTable = () => {
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
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row" align="center">
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
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
                </TableBody>

            </Table>
        </TableContainer>

    );
};

export default CategoriesTable;