package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.Reservation;
import com.rentatools.RentaTools.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reservation")
public class ReservationController {

    @Autowired
    private final ReservationService reservationService;

    @GetMapping("/all")
    public ResponseEntity<List<Reservation>> getAllReservation(){
        return ResponseEntity.ok(reservationService.GetAllReservation());
    }
}
