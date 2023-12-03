import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./styles.css";
import React, { useState, useEffect } from "react";
import { getReservationsByUserEndpoint } from "/src/api/endpoints";
import { getUserId } from "../../../utils/localStorageHandler";

const ReservationsTable = () => {
  const id = getUserId();
  console.log("User ID:", id);
  const [userReservations, setUserReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const userRes = await fetch(getReservationsByUserEndpoint({ id }));
        const userResData = await userRes.json();
        console.log("User reservations data:", userResData); // Log the response data
        if (Array.isArray(userResData)) {
          // Check if the response data is an array
          setUserReservations(userResData);
        } else {
          console.error("Expected an array but received:", userResData);
        }
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [id]);

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <h3>ID</h3>
            </TableCell>
            <TableCell align="left">
              <h3>Producto</h3>
            </TableCell>
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
          {userReservations.map((reservation, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{reservation.id}</TableCell>
              <TableCell align="left">{reservation.product.name}</TableCell>
              <TableCell align="center">
                {reservation.reservationFrom}
              </TableCell>
              <TableCell align="center">{reservation.reservationTo}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="error">
                  Cancelar Reserva
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservationsTable;
