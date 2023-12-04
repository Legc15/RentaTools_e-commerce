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
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ReservationsTable = () => {
  const id = getUserId();
  const [userReservations, setUserReservations] = useState([]);
  const [dateFilter, setDateFilter] = useState("desc"); // 'asc' para ascendente, 'desc' para descendente

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    // Aquí va el código para confirmar la reserva
    handleClose();
  };

  const handleCancel = () => {
    // Aquí va el código para cancelar la reserva
    handleClose();
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

  const [filter, setFilter] = useState("active"); // 'all' para todas las reservas, 'active' para reservas activas, 'finished' para reservas finalizadas

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <TableContainer omponent={Paper} className="table-Container">
      <div className="filter-buttons">


        <Button
          onClick={() => handleFilterChange("active")}
          variant="contained"
          color="primary"
          style={filter === "active" ? { backgroundColor: "green" } : {}}
          size={isMobile ? "small" : "medium"}
        >
          reservas activas
        </Button>

        <Button
          onClick={() => handleFilterChange("finished")}
          variant="contained"
          color="primary"
          style={filter === "finished" ? { backgroundColor: "green" } : {}}
          size={isMobile ? "small" : "medium"}
        >
          reservas finalizadas
        </Button>
        <Button
          onClick={() => handleFilterChange("all")}
          variant="contained"
          color="primary"
          style={filter === "all" ? { backgroundColor: "green" } : {}}
          size={isMobile ? "small" : "medium"}
        >
          todas las reservas
        </Button>

        <Button onClick={toggleDateFilter} variant="contained" color="primary">
          {dateFilter === "asc" ? "Orden Ascendente" : "Orden  descendente"}
        </Button>
      </div>

        <Table
          className="tabla-reservas"
          sx={{ minWidth: 200, margin: isMobile ? "0" : "auto" }}
          aria-label="simple table"
          style={{ display: 'block', maxHeight: '500px', overflowY: 'auto' }}
        >
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
            {userReservations
              .filter((reservation) => {
                if (filter === "all") return true;
                if (filter === "active")
                  return new Date(reservation.reservationTo) > new Date();
                if (filter === "finished")
                  return new Date(reservation.reservationTo) <= new Date();
              })
              .map((reservation, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={
                    new Date(reservation.reservationTo) > new Date()
                      ? { backgroundColor: "whitesmoke" }
                      : {}
                  }
                >
                  <TableCell
                    align="center"
                    style={{ fontSize: isMobile ? "10px" : "14px" }}
                  >
                    {reservation.id}
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontSize: isMobile ? "10px" : "14px" }}
                  >
                    {reservation.product.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontSize: isMobile ? "10px" : "14px" }}
                  >
                    {reservation.reservationFrom}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontSize: isMobile ? "10px" : "14px" }}
                  >
                    {reservation.reservationTo}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontSize: isMobile ? "10px" : "14px" }}
                  >
                    {new Date(reservation.reservationTo) > new Date() ? (
                      <Typography
                        className="active"
                        color="green"
                        style={{ fontWeight: isMobile ? 300 : 500 }}
                        variant={"subtitle2"}
                      >
                        ACTIVO
                      </Typography>
                    ) : (
                      <Typography color="grey" variant="subtitle2">
                        FINALIZADA
                      </Typography>
                    )}
                  </TableCell>

                  <TableCell align="center">
                    {new Date(reservation.reservationTo) > new Date() ? (
                      <Button
                        style={{
                          fontSize: isMobile ? "15px" : "initial",
                          borderRadius: isMobile ? "50%" : "4px",
                          height: isMobile ? "25px" : "initial",
                          width: isMobile ? "25px" : "initial",
                          padding: "4px",
                          margin: "5px",
                          minWidth: isMobile ? "0" : "initial", // Esto es para anular el ancho mínimo predeterminado de los botones de Material-UI
                        }}
                        onClick={handleClickOpen}
                        variant="contained"
                      >
                        {isMobile ? " + " : "modificar"}
                      </Button>
                    ) : (
                      "-----"
                    )}
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Elija una opción"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Para salir presione fuera del recuadro
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                          Cancelar reserva
                        </Button>
                        <Button
                          onClick={handleConfirm}
                          color="primary"
                          autoFocus
                        >
                          Modificar reserva
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
    </TableContainer>
  );
};

export default ReservationsTable;
