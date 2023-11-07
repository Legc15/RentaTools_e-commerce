package com.rentatools.RentaTools.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.UserDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.IUserRepository;
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
    private final IUserRepository iUserRepository;

    @Autowired
    ObjectMapper mapper;

    public List<User> GetAllUsers() {
        return iUserRepository.findAll();
    }

    public User GetUserById(Long id) throws BadRequestException, ResourceNotFoundException{
        if(id == null) throw new BadRequestException("Se necesita un id de usuario.");
        User GetUser = iUserRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Usuario con ID: " + id + " no encontrado."));
        return GetUser;
    }

    public void createUser(UserDto userDto){
        try {
            User user = mapper.convertValue(userDto, User.class);
            iUserRepository.save(user);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado del nuevo usuario.");
        }
    }

    public void changeRoleService(Long id, boolean esAdmin) throws BadRequestException, ResourceNotFoundException{
        if (id == null) throw new BadRequestException("Se necesita un id de usuario.");
        User userOld = iUserRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID: " + id + " no encontrado."));
        userOld.setEsAdmin(esAdmin);
        iUserRepository.save(userOld);
    }
}