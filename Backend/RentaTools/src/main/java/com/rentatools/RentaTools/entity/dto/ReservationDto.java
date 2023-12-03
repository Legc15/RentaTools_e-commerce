package com.rentatools.RentaTools.entity.dto;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
@Data
@AllArgsConstructor
public class ReservationDto {
    @Temporal(TemporalType.DATE)
    @NotNull(message = "Debe especificar una fecha de inicio de reserva.")
    private LocalDate ReservationFrom;
    @Temporal(TemporalType.TIME)
    private LocalTime ReservationFromTime;
    @Temporal(TemporalType.DATE)
    @NotNull(message = "Debe especificar una fecha de finalización de reserva.")
    private LocalDate ReservationTo;
    @NotNull(message = "Id de producto es necesario.")
    private Long productId;
    @NotNull(message = "Id de usuario es necesario.")
    private Long userId;

}
