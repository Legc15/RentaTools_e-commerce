package com.example.TrabajoIntegrador.service;

import com.example.TrabajoIntegrador.dto.OdontologoDTO;
import com.example.TrabajoIntegrador.repository.IOdontologoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.TrabajoIntegrador.entity.Odontologo;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class OdontologoService{
    private static final Logger logger = LoggerFactory.getLogger(OdontologoService.class);
    @Autowired
    private final IOdontologoRepository odontologoRepository;

    @Autowired
    ObjectMapper mapper;

    public OdontologoService(IOdontologoRepository odontologoRepository) {
        this.odontologoRepository = odontologoRepository;
    }

    public void crearOdontologo(OdontologoDTO odontologoDTO) {
        logger.info("Creando odontologo: {}", odontologoDTO);
        Odontologo odontologo = mapper.convertValue(odontologoDTO, Odontologo.class);
        odontologoRepository.save(odontologo);
        logger.info("Odontologo creado exitosamente");
    }

    public OdontologoDTO buscarOdontologoPorId(Long id) throws Exception {
        logger.info("Buscando odontologo por id: {}", id);
        Optional<Odontologo> odontologo = odontologoRepository.findById(id);
        OdontologoDTO odontologoDTO = new OdontologoDTO();
        if(odontologo.isPresent()){
            logger.info("Odontologo encontrado:{}");
            return odontologoDTO = mapper.convertValue(odontologo, OdontologoDTO.class);
        }
        else
            logger.error("Odontologo no encontrado con ese ID: {}", id);
            throw new Exception("Odontologo no existe");
    }
    private void guardarOdontologo(OdontologoDTO odontologoDTO) {
        logger.info("Guardando odontologo: {}", odontologoDTO);
        Odontologo newOdontologo = mapper.convertValue(odontologoDTO, Odontologo.class);
        odontologoRepository.save(newOdontologo);
    }
    public void actualizarOdontologo(OdontologoDTO odontologoDTO) {
        logger.info("Actualizando odontologo: {}", odontologoDTO);
        guardarOdontologo(odontologoDTO);
        logger.info("Odontologo actualizado exitosamente");
    }
    public void eliminarOdontologo(Long id) {
        logger.info("Eliminando odontologo con id: {}", id);
        odontologoRepository.deleteById(id);
        logger.info("Odontologo eliminado exitosamente");
    }
    public Set<OdontologoDTO> ListarOdontologos() {
        logger.info("Listando odontologos");
        List<Odontologo> odontologos = odontologoRepository.findAll();
        Set<OdontologoDTO> odontologosDTO = new HashSet<>();

        for(Odontologo odontologo : odontologos){
            odontologosDTO.add(mapper.convertValue(odontologo, OdontologoDTO.class));
        }
        logger.info("Odontologos listados exitosamente");
        return odontologosDTO;
    }
}