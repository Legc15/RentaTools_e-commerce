package com.rentatools.RentaTools.service;

import com.rentatools.RentaTools.entity.Reservation;
import com.rentatools.RentaTools.repository.IReservationRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ReservationService {
    @Autowired
    private final IReservationRepository IReservationRepository;

    public List<Reservation> GetAllReservation(){
        return IReservationRepository.findAll();
    }

}
