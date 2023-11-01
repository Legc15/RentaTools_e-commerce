package com.example.TrabajoIntegrador.service;

import com.example.TrabajoIntegrador.dto.OdontologoDTO;
import com.example.TrabajoIntegrador.dto.PacienteDTO;
import com.example.TrabajoIntegrador.entity.Odontologo;
import com.example.TrabajoIntegrador.entity.Paciente;
import com.example.TrabajoIntegrador.repository.IPacienteRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PacienteService {
    private static final Logger logger = LoggerFactory.getLogger(PacienteService.class);
    @Autowired
    IPacienteRepository pacienteRepository;

    @Autowired
    ObjectMapper mapper;
    public void crearPaciente(PacienteDTO pacienteDTO) {
        logger.info("Creando paciente: {}", pacienteDTO);
        Paciente paciente = mapper.convertValue(pacienteDTO, Paciente.class);
        pacienteRepository.save(paciente);
        logger.info("Paciente creado exitosamente");
    }
    public PacienteDTO obtenerPacientePorId(Long id) throws Exception {
        logger.info("Buscando paciente por id: {}", id);
        Optional<Paciente> paciente = pacienteRepository.findById(id);
        PacienteDTO pacienteDTO = new PacienteDTO();
        if(paciente.isPresent()){
            logger.info("Paciente encontrado: {}", paciente);
            return pacienteDTO = mapper.convertValue(paciente, PacienteDTO.class);
        }
        else {
            logger.error("Paciente no encontrado con ese ID: {}", id);
            throw new Exception("Paciente no existe");
        }
    }

    private void guardarPaciente(PacienteDTO pacienteDTO) {
        logger.info("Guardando paciente: {}", pacienteDTO);
        Paciente newPaciente = mapper.convertValue(pacienteDTO, Paciente.class);
        pacienteRepository.save(newPaciente);
        logger.info("Paciente guardado exitosamente");
    }

    public void actualizarPaciente(PacienteDTO pacienteDTO) {
        logger.info("Actualizando paciente: {}", pacienteDTO);
        guardarPaciente(pacienteDTO);
        logger.info("Paciente actualizado exitosamente");
    }

    public void eliminarPaciente(Long id) {
        logger.info("Eliminando paciente con id: {}", id);
        pacienteRepository.deleteById(id);
        logger.info("Paciente eliminado exitosamente");
    }

    public Set<PacienteDTO> ListarPacientes() {
        logger.info("Listando pacientes");
        List<Paciente> pacientes = pacienteRepository.findAll();
        Set<PacienteDTO> pacientesDTO = new HashSet<>();

        for(Paciente paciente : pacientes){
            pacientesDTO.add(mapper.convertValue(paciente, PacienteDTO.class));
        }
        logger.info("Pacientes listados exitosamente");
        return pacientesDTO;
    }
}