package com.rentatools.RentaTools.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Feature;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.Reservation;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.ReservationDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.IProductRepository;
import com.rentatools.RentaTools.repository.IReservationRepository;
import com.rentatools.RentaTools.repository.IUserRepository;
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

    @Autowired
    private final IProductRepository iProductRepository;

    @Autowired
    private final IUserRepository iUserRepository;

    @Autowired
    private final EmailService emailService;

    @Autowired
    private final ObjectMapper mapper;

    public List<Reservation> GetAllReservation(){
        return iReservationRepository.findAll();
    }

    public List<ReservationDates> GetAllReservationByProduct(Long productId){
        List<Reservation> reservation = iReservationRepository.findByProductId(productId);
        List<ReservationDates> reservationDates = new ArrayList<>();
        reservation.forEach(reservation1 -> reservationDates.add(new ReservationDates(reservation1.getReservationFrom(), reservation1.getReservationTo())));
        return reservationDates;
    }

    public List<Reservation> GetAllReservationByUser(Long userId){
        List<Reservation> reservation = iReservationRepository.findByUserId(userId);
        return reservation;
    }

    public String createReservation(ReservationDto reservationDto){
        if(reservationDto.getProductId() == null || reservationDto.getUserId() == null) throw new BadRequestException("Falta id de producto o id de usuario.");
        Product product = iProductRepository.findById(reservationDto.getProductId()).orElseThrow(()-> new ResourceNotFoundException("El producto no existe."));
        User user = iUserRepository.findById(reservationDto.getUserId()).orElseThrow(()-> new ResourceNotFoundException("No existe el usuario."));
        Reservation reservation = new Reservation();
        reservation.setProduct(product);
        reservation.setUser(user);
        reservation.setReservationFrom(reservationDto.getReservationFrom());
        reservation.setReservationTo(reservationDto.getReservationTo());
        reservation.setReservationFromTime(reservationDto.getReservationFromTime());
        iReservationRepository.save(reservation);
        emailService.sendEmailReservation(reservation);
        return "Reserva creada correctamente.";
    }

}
