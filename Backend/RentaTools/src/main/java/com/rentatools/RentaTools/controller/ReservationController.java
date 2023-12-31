package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.Reservation;
import com.rentatools.RentaTools.entity.dto.ReservationDto;
import com.rentatools.RentaTools.service.ReservationService;
import com.rentatools.RentaTools.utilities.ReservationDates;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/product/{id}")
    public  ResponseEntity<List<ReservationDates>> getAllReservationByProduct(@PathVariable Long id){
        return ResponseEntity.ok(reservationService.GetAllReservationByProduct(id));
    }

    @GetMapping("/user/{id}")
    public  ResponseEntity<List<Reservation>> getAllReservationByUser(@PathVariable Long id){
        return ResponseEntity.ok(reservationService.GetAllReservationByUser(id));
    }

    @PostMapping("/create")
    public ResponseEntity<String> createReservation(@RequestBody ReservationDto reservationDto){
        return ResponseEntity.ok(reservationService.createReservation(reservationDto));
    }

}
