package com.rentatools.RentaTools.service;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    public List<User> GetAllUsers(){
        return userRepository.findAll();
    }
}
