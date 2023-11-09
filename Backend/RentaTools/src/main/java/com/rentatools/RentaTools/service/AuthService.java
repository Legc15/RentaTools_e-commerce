package com.rentatools.RentaTools.service;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.LoginDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.UserRepository;
import com.rentatools.RentaTools.utilities.LoginMessage;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthService {
    @Autowired
    UserRepository userRepository;

    public LoginMessage login(LoginDto loginDto){
        LoginMessage loginMessage = new LoginMessage("","");
        User userLogin = userRepository.findByEmail(loginDto.getEmail());
        if(userLogin != null) {
            String userJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBhYmxvIEtvbmlnIiwiaWF0IjoxNTE2MjM5MDIyfQ.PBsXzeqBhyzxcI_ijEc7U-bIH0SUvWHzhBXnhPj2LF8";
            if (userLogin.getPassword().equals(loginDto.getPassword())) {
                String userRole = (userLogin.isEsAdmin()) ? "ADMIN" : "USER";
                loginMessage.setRole(userRole);
                loginMessage.setJWT(userJWT);
            }
        }
        return loginMessage;
    }

}
