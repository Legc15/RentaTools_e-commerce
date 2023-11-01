package com.example.TrabajoIntegrador.repository;

import com.example.TrabajoIntegrador.entity.Domicilio;
import com.example.TrabajoIntegrador.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface IPacienteRepository extends JpaRepository<Paciente, Long> {

}
