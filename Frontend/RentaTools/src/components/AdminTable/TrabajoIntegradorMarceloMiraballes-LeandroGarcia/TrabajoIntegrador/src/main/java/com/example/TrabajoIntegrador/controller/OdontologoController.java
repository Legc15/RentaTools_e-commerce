package com.example.TrabajoIntegrador.controller;

import com.example.TrabajoIntegrador.dto.OdontologoDTO;
import com.example.TrabajoIntegrador.service.OdontologoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/odontologo")
public class OdontologoController {
    private static final Logger logger = LoggerFactory.getLogger(OdontologoController.class);
    @Autowired
    OdontologoService odontologoService;

    @PostMapping
    public ResponseEntity<?> addOdontologo(@RequestBody OdontologoDTO odontologoDTO){
        logger.info("Recibida la solicitud para crear un nuevo odontologo", odontologoDTO);
        odontologoService.crearOdontologo(odontologoDTO);
        return ResponseEntity.ok("Odontologo Creado");
    }

    @GetMapping("/{id}")
    public OdontologoDTO getOdontologo (@PathVariable Long id) throws Exception {
        logger.info("Recibida la solicitud para buscar un odontologo por id", id);
        return odontologoService.buscarOdontologoPorId(id);
    }

    @GetMapping("/lista")
    public Collection<OdontologoDTO> listOdontologos() {
        logger.info("Recibida la solicitud para listar todos los odontologos");
        return odontologoService.ListarOdontologos();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeOdontologo(@PathVariable Long id) {
        logger.info("Recibida la solicitud para eliminar un odontologo por id", id);
        ResponseEntity<String> response = null;
        odontologoService.eliminarOdontologo(id);
        response = ResponseEntity.status(HttpStatus.OK).body("Odontologo Eliminado");
        return response;
    }

    @PutMapping()
    public ResponseEntity<?> modifyOdontologo(@RequestBody OdontologoDTO odontologoDTO) {
        logger.info("Recibida la solicitud para modificar el odontologo", odontologoDTO);
        odontologoService.actualizarOdontologo(odontologoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
