package com.rentatools.RentaTools.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "reservation_sequence")
    private Long id;

    @Temporal(TemporalType.DATE)
    @NotNull(message = "Debe especificar una fecha de inicio de reserva.")
    @Column(nullable = false)
    private Date ReservationFrom;

    @Temporal(TemporalType.TIME)
    private Date ReservationFromTime;

    @Temporal(TemporalType.DATE)
    @NotNull(message = "Debe especificar una fecha de finalización de reserva.")
    @Column(nullable = false)
    private Date ReservationTo;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    @JsonIgnore
    private Date createdAt;

    @UpdateTimestamp
    @JsonIgnore
    private Date updatedAt;
}
