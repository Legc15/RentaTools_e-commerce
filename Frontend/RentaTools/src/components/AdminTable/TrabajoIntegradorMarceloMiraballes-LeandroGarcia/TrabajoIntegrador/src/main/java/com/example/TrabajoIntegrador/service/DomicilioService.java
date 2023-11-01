package com.example.TrabajoIntegrador.service;

import com.example.TrabajoIntegrador.entity.Domicilio;
import com.example.TrabajoIntegrador.repository.IDomicilioRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DomicilioService {
    private static Logger logger = LoggerFactory.getLogger(DomicilioService.class);
    private final IDomicilioRepository domicilioRepository;

    public DomicilioService(IDomicilioRepository domicilioRepository) {

        this.domicilioRepository = domicilioRepository;
    }
    public void crearDomicilio(Domicilio domicilio) {
        logger.info("Creando domicilio: {}", domicilio);
        domicilioRepository.save(domicilio);
        logger.info("Domicilio creado exitosamente");
    }
}
