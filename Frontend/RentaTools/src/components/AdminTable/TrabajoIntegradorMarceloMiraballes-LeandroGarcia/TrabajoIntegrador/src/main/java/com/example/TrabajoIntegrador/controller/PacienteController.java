package com.example.TrabajoIntegrador.controller;

import com.example.TrabajoIntegrador.dto.PacienteDTO;
import com.example.TrabajoIntegrador.service.PacienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RequestMapping("/pacientes")
@RestController
public class PacienteController {
    private static final Logger logger = LoggerFactory.getLogger(PacienteController.class);

    @Autowired
    PacienteService pacienteService;

    @PostMapping
    public ResponseEntity<?> addPaciente(@RequestBody PacienteDTO pacienteDTO){
        logger.info("Recibida solicitud para agregar un nuevo paciente", pacienteDTO);
        pacienteService.crearPaciente(pacienteDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public PacienteDTO getPaciente (@PathVariable Long id) throws Exception {
        logger.info("Recibida solicitud para obtener un paciente por id", id);
        return pacienteService.obtenerPacientePorId(id);
    }

    @GetMapping("/lista")
    public Collection<PacienteDTO> listPacientes() {
        logger.info("Recibida solicitud para obtener la lista de pacientes");
        return pacienteService.ListarPacientes();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removePaciente(@PathVariable Long id) {
        logger.info("Recibida solicitud para eliminar un paciente por id", id);
        ResponseEntity<String> response = null;
        pacienteService.eliminarPaciente(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> modifyPaciente(@RequestBody PacienteDTO pacienteDTO) {
        logger.info("Recibida la solicitud para modificar un paciente", pacienteDTO);
        pacienteService.actualizarPaciente(pacienteDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
