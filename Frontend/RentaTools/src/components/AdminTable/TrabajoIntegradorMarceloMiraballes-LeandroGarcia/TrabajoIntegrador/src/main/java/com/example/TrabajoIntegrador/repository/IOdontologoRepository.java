package com.example.TrabajoIntegrador.repository;

import com.example.TrabajoIntegrador.entity.Odontologo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOdontologoRepository extends JpaRepository <Odontologo, Long> {


}
