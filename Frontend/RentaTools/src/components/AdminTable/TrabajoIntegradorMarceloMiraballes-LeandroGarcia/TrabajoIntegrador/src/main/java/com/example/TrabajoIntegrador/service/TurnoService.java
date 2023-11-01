package com.example.TrabajoIntegrador.service;

import com.example.TrabajoIntegrador.dto.OdontologoDTO;
import com.example.TrabajoIntegrador.dto.PacienteDTO;
import com.example.TrabajoIntegrador.dto.TurnoDTO;
import com.example.TrabajoIntegrador.entity.Odontologo;
import com.example.TrabajoIntegrador.entity.Paciente;
import com.example.TrabajoIntegrador.entity.Turno;
import com.example.TrabajoIntegrador.repository.ITurnoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service
public class TurnoService {
    private static final Logger logger = LoggerFactory.getLogger(TurnoService.class);
    @Autowired
    ITurnoRepository turnoRepository;
    @Autowired
    ObjectMapper mapper;


    public void crearTurno(TurnoDTO turnoDTO) {
        logger.info("Creando turno: {}", turnoDTO);
        Turno turno = mapper.convertValue(turnoDTO, Turno.class);
        turnoRepository.save(turno);
        logger.info("Turno creado exitosamente");
    }

    public Set<TurnoDTO> listarTurnosPorOdontologo (Long Id){
        logger.info("Listando los turnos por odontologo con ID: {}", Id);
        Set<Turno> turnos = turnoRepository.getTurnosByOdontologoId(Id);
        Set<TurnoDTO> turnosDTO = new HashSet<TurnoDTO>();

        for (Turno turno: turnos){
            turnosDTO.add(mapper.convertValue(turno, TurnoDTO.class));
        }
        logger.info("Turnos listados exitosamente por Odontólogo con ID: {}", turnosDTO);
        return turnosDTO;
    }

    public Set<TurnoDTO> ListarTurnos() throws Exception {
        logger.info("Listando turnos");
        List<Turno> turnos = turnoRepository.findAll();
        Set<TurnoDTO> turnosDTO = new HashSet<>();

        for(Turno turno : turnos){
            turnosDTO.add(mapper.convertValue(turno, TurnoDTO.class));
        }
        logger.info("Turnos listados exitosamente");
        return turnosDTO;
    }
}