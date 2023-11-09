package com.rentatools.RentaTools.controller;

import com.rentatools.RentaTools.entity.dto.LoginDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.service.AuthService;
import com.rentatools.RentaTools.utilities.LoginMessage;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/auth")
@RequiredArgsConstructor
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginMessage> loginMessageResponseEntity(@Valid @RequestBody LoginDto loginDto)throws BadRequestException {
        if (loginDto.getEmail() == null || loginDto.getPassword() == null) throw new BadRequestException("Falta email o password para el login.");
        LoginMessage loginMessage = new LoginMessage("", "");
        return ResponseEntity.ok(authService.login(loginDto));
    }

}
