package com.example.TrabajoIntegrador.controller;

import com.example.TrabajoIntegrador.dto.OdontologoDTO;
import com.example.TrabajoIntegrador.dto.PacienteDTO;
import com.example.TrabajoIntegrador.dto.TurnoDTO;
import com.example.TrabajoIntegrador.entity.Odontologo;
import com.example.TrabajoIntegrador.entity.Paciente;
import com.example.TrabajoIntegrador.service.OdontologoService;
import com.example.TrabajoIntegrador.service.PacienteService;
import com.example.TrabajoIntegrador.service.TurnoService;
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
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc

class TurnoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Paciente paciente;

    @Autowired
    private TurnoDTO turnoDTO;

    @Autowired
    private Odontologo odontologo;

    @Autowired
    private OdontologoService odontologoService;

    @Autowired
    private TurnoService turnoService;

    @BeforeEach
    void setup(){
        paciente= new Paciente();
        paciente.setNombre("pepe");
        paciente.setApellido("perez");
        paciente.setDNI("12345678");
        paciente.setFechaAlta(LocalDate.of(2021,06,01));

        odontologo = new Odontologo();
        odontologo.setNombre("Juan");
        odontologo.setApellido("Garcia");
        odontologo.setNumeroMatricula(1234);

        turnoDTO = new TurnoDTO();
        turnoDTO.setFechaHora(LocalDateTime.of(2021,06,01,10,00));
        turnoDTO.setOdontologo(odontologo);
        turnoDTO.setPaciente(paciente);
    }

    @Test
    void testCrearTurno() throws Exception {

            MvcResult mvcResult =
                    this.mockMvc.perform(MockMvcRequestBuilders.post("/turnos")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{\n" +
                                    "    \"fechaHora\": \"2021-06-01T10:00:00\",\n" +
                                    "    \"odontologo\": {\n" +
                                    "        \"id\": 1\n" +
                                    "    },\n" +
                                    "    \"paciente\": {\n" +
                                    "        \"id\": 1\n" +
                                    "    }\n" +
                                    "}"))
                            .andDo(print()).andExpect(status().isOk())
                            .andExpect(MockMvcResultMatchers.jsonPath("$.fechaHora").value("2021-06-01T10:00:00"))
                            .andReturn();

            Assertions.assertEquals(MediaType.APPLICATION_JSON_VALUE, mvcResult.getResponse().getContentType());

    }

    @Test
    void testearListarTurnos() throws Exception {

        MvcResult mvcResult =
                this.mockMvc.perform(MockMvcRequestBuilders.get("/turnos/lista"))
                        .andDo(print()).andExpect(status().isOk())
                        .andExpect(MockMvcResultMatchers.jsonPath("$.id").value("1"))
                        .andExpect(MockMvcResultMatchers.jsonPath("$.fechaHora").value("2021-06-01T10:00:00"))
                        .andReturn();

        Assertions.assertEquals(MediaType.APPLICATION_JSON_VALUE, mvcResult.getResponse().getContentType());

    }


}


