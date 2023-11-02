package com.example.TrabajoIntegrador.controller;

import com.example.TrabajoIntegrador.dto.PacienteDTO;
import com.example.TrabajoIntegrador.entity.Paciente;
import com.example.TrabajoIntegrador.service.PacienteService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc


class PacienteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PacienteDTO pacienteDTO;
    @Autowired
    private PacienteService pacienteService;

    @BeforeEach
    void setup(){
        pacienteDTO= new PacienteDTO();
        pacienteDTO.setNombre("pepe");
        pacienteDTO.setApellido("perez");
        pacienteDTO.setDNI("12345678");
        pacienteDTO.setFechaAlta(LocalDate.of(2021,06,01));

        pacienteService.crearPaciente(pacienteDTO);
    }

    @Test
    void testGetPacientePorId() throws Exception {

        MvcResult mvcResult =
                this.mockMvc.perform(MockMvcRequestBuilders.get("/pacientes/1"))
                        .andDo(print()).andExpect(status().isOk())
                        .andExpect(MockMvcResultMatchers.jsonPath("$.nombre").value("pepe"))
                        .andReturn();

        Assertions.assertEquals(MediaType.APPLICATION_JSON_VALUE, mvcResult.getResponse().getContentType());

    }
}