package com.example.TrabajoIntegrador.repository;

import com.example.TrabajoIntegrador.entity.Domicilio;
import com.example.TrabajoIntegrador.entity.Odontologo;
import com.example.TrabajoIntegrador.entity.Paciente;
import com.example.TrabajoIntegrador.entity.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Set;

@Repository
public interface ITurnoRepository extends JpaRepository<Turno, Long> {

    @Query("from Turno t where t.odontologo.id like %:id%")
    Set<Turno> getTurnosByOdontologoId(@Param("id") Long Id);

}
