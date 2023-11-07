package com.rentatools.RentaTools.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.entity.dto.UserDto;
import com.rentatools.RentaTools.entity.dto.UserSecureDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class UserService {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    ObjectMapper mapper;

    public List<User> GetAllUsers() {
        return userRepository.findAll();
    }

    public void createUser(UserDto userDto){
        try {
            User user = mapper.convertValue(userDto, User.class);
            userRepository.save(user);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado del nuevo usuario.");
        }
    }

    public void changeRoleService(Long id, boolean esAdmin){
        if (id == null) throw new BadRequestException("Se necesita un id de producto.");
        User userOld = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto con ID: " + id + " no encontrado."));
        userOld.setEsAdmin(esAdmin);
        userRepository.save(userOld);
    }

}