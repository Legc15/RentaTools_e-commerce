import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./styles.css";
import { useState, useEffect } from "react";
import { getReservationsByUserEndpoint } from "/src/api/endpoints";
import { getUserId } from "../../../utils/localStorageHandler";
import Swal from "sweetalert2/dist/sweetalert2";
import Typography from "@mui/material/Typography";

const ReservationsTable = () => {
  const id = getUserId();
  const [userReservations, setUserReservations] = useState([]);
  const [dateFilter, setDateFilter] = useState("desc"); // 'asc' para ascendente, 'desc' para descendente

  const handleCancelReserve = () => {
    Swal.fire({
      text: "Esta seguro que desea cancelar esta reserva?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };

  const toggleDateFilter = () => {
    setDateFilter((prevFilter) => (prevFilter === "asc" ? "desc" : "asc"));
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const userRes = await fetch(getReservationsByUserEndpoint({ id }));
        let userResData = await userRes.json();
        if (Array.isArray(userResData)) {
          // Ordena las reservaciones por fecha
          userResData = userResData.sort((a, b) => {
            const dateA = new Date(a.reservationFrom);
            const dateB = new Date(b.reservationFrom);

            return dateFilter === "asc" ? dateA - dateB : dateB - dateA;
          });

          setUserReservations(userResData);
        }
      } catch (error) {
        // Maneja el error
      }
    };

    fetchReservations();
  }, [id, dateFilter]); // Agrega dateFilter como dependencia para que el efecto se ejecute cuando cambie

  const [filter, setFilter] = useState('active'); // 'all' para todas las reservas, 'active' para reservas activas, 'finished' para reservas finalizadas

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

  return (
    <TableContainer component={Paper} className="table-Container">
      <div className="filter-buttons">
        <Button onClick={toggleDateFilter} variant="contained" color="primary">
          {dateFilter === "asc" ? "Orden Ascendente" : "Orden descendente"}
        </Button>

        <Button onClick={() => handleFilterChange('active')} 
          variant="contained" 
          color="primary" 
          style={filter === 'active' ? { backgroundColor: 'green' } : {}}
        >
          reservas activas
        </Button>

        <Button onClick={() => handleFilterChange('finished')} 
          variant="contained" 
          color="primary"
          style={filter === 'finished' ? { backgroundColor: 'green' } : {}}
        
          >
          reservas finalizadas
        </Button>
        <Button onClick={() => handleFilterChange('all')} 
          variant="contained" 
          color="primary"
          style={filter === 'all' ? { backgroundColor: 'green' } : {}}
          >
          HISTORIAL COMPLETO
        </Button>
      </div>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <h3>ID</h3>
            </TableCell>
            <TableCell align="left">
              <h3>PRODUCTO</h3>
            </TableCell>
            <TableCell align="center" className="table-header">
              <h3>DESDE</h3>
            </TableCell>
            <TableCell align="center" className="table-header">
              <h3>HASTA</h3>
            </TableCell>
            <TableCell align="center" className="table-header">
              <h3>ESTADO</h3>
            </TableCell>
            <TableCell align="center" className="table-header">
              <h3>ACCIÓN</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">

          {userReservations.filter(reservation => {
            if (filter === 'all') return true;
            if (filter === 'active') return new Date(reservation.reservationTo) > new Date();
            if (filter === 'finished') return new Date(reservation.reservationTo) <= new Date();
          }).map((reservation, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={new Date(reservation.reservationTo) > new Date() ? { backgroundColor: 'whitesmoke' } : {}}
            >
              <TableCell align="center">{reservation.id}</TableCell>
              <TableCell align="left">{reservation.product.name}</TableCell>
              <TableCell align="center">
                {reservation.reservationFrom}
              </TableCell>
              <TableCell align="center">{reservation.reservationTo}</TableCell>
              <TableCell align="center">
                {new Date(reservation.reservationTo) > new Date()
                  ? (
                    <Typography className="active" color="green" variant="h6" style={{ fontWeight: 600 }}>
                      ACTIVO
                    </Typography>)
                  : (
                    <Typography color="grey" variant="subtitle2">
                      FINALIZADA
                    </Typography>)}
              </TableCell>

              <TableCell align="center">
                {new Date(reservation.reservationTo) > new Date() ? (
                  <Button
                    onClick={handleCancelReserve}
                    variant="contained"
                    color="error"
                  >
                    Cancelar Reserva
                  </Button>
                ) : (
                  "-----"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservationsTable;
