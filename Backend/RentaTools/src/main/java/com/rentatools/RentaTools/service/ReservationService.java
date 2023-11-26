package com.rentatools.RentaTools.service;

import com.rentatools.RentaTools.entity.Reservation;
import com.rentatools.RentaTools.repository.IReservationRepository;
import com.rentatools.RentaTools.utilities.ReservationDates;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ReservationService {
    @Autowired
    private final IReservationRepository iReservationRepository;

    public List<Reservation> GetAllReservation(){
        return iReservationRepository.findAll();
    }

    public List<ReservationDates> GetAllReservationByProduct(Long productId){
        List<Reservation> reservation = iReservationRepository.findByProductId(productId);
        List<ReservationDates> reservationDates = new ArrayList<>();
        reservation.forEach(reservation1 -> reservationDates.add(new ReservationDates(reservation1.getReservationFrom(), reservation1.getReservationTo())));
        return reservationDates;
    }

}
