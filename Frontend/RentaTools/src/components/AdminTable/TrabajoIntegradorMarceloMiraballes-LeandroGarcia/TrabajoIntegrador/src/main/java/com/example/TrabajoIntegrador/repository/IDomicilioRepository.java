package com.example.TrabajoIntegrador.repository;

import com.example.TrabajoIntegrador.entity.Domicilio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDomicilioRepository extends JpaRepository <Domicilio, Long> {


}
