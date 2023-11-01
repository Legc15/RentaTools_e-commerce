package com.example.TrabajoIntegrador.dto;

import com.example.TrabajoIntegrador.entity.Odontologo;
import com.example.TrabajoIntegrador.entity.Paciente;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class TurnoDTO {

    private Integer id;
    private LocalDateTime fechaHora;
    private Odontologo odontologo;
    private Paciente paciente;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(LocalDateTime fechaHora) {
        this.fechaHora = fechaHora;
    }

    public Odontologo getOdontologo() {
        return odontologo;
    }

    public void setOdontologo(Odontologo odontologo) {
        this.odontologo = odontologo;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }
}
