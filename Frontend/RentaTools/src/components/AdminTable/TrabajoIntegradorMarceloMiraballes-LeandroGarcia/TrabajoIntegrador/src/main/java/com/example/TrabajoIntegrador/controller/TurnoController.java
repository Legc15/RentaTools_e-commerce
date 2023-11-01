package com.example.TrabajoIntegrador.controller;
import com.example.TrabajoIntegrador.dto.PacienteDTO;
import com.example.TrabajoIntegrador.dto.TurnoDTO;
import com.example.TrabajoIntegrador.service.PacienteService;
import com.example.TrabajoIntegrador.service.TurnoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@RequestMapping("/turnos")
public class TurnoController {
    private final static Logger logger = LoggerFactory.getLogger(TurnoController.class);
        @Autowired
        TurnoService turnoService;

        @PostMapping
        public ResponseEntity<?> addTurno(@RequestBody TurnoDTO turnoDTO){
            try {
                logger.info("Recibida la solicitud para agregar un nuevo turno", turnoDTO);
                turnoService.crearTurno(turnoDTO);
                return ResponseEntity.ok(HttpStatus.OK);
            } catch (Exception e) {
                logger.error("Error al agregar el Turno",e);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
            }
        }

        @ExceptionHandler(Exception.class)
        public ResponseEntity<?> handleException(Exception e) {
            logger.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

        @GetMapping("/lista")
        public Collection<TurnoDTO> listTurnos() throws Exception {
            try{
                logger.info("Recibida la solicitud para obtener la lista de turnos");
                return turnoService.ListarTurnos();
            } catch (Exception e) {
                logger.error("Error al obtener la lista de turnos",e);
                return null;
            }


        }

        @GetMapping("/id")
        public Collection<TurnoDTO> listTurnosbyOdontologoId (Long id) {
            logger.info("Recibida la solicitud para obtener la lista de turnos por odontologo", id);
            return turnoService.listarTurnosPorOdontologo(id);
        }
}
