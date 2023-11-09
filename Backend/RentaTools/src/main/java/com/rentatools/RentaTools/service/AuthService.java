package com.rentatools.RentaTools.service;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.LoginDto;
import com.rentatools.RentaTools.repository.IUserRepository;
import com.rentatools.RentaTools.utilities.LoginMessage;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {
    @Autowired
    IUserRepository iUserRepository;

    public LoginMessage login(LoginDto loginDto){
        LoginMessage loginMessage = new LoginMessage(null,"","");
        User userLogin = iUserRepository.findByEmail(loginDto.getEmail());
        if(userLogin != null) {
            String userJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBhYmxvIEtvbmlnIiwiaWF0IjoxNTE2MjM5MDIyfQ.PBsXzeqBhyzxcI_ijEc7U-bIH0SUvWHzhBXnhPj2LF8";
            if (userLogin.getPassword().equals(loginDto.getPassword())) {
                String userRole = (userLogin.isEsAdmin()) ? "ADMIN" : "USER";
                loginMessage.setUserId(userLogin.getId());
                loginMessage.setRole(userRole);
                loginMessage.setJWT(userJWT);
            }
        }
        return loginMessage;
    }

}
