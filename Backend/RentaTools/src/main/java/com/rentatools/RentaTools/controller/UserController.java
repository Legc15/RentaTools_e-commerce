package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.entity.dto.UserDto;
import com.rentatools.RentaTools.entity.dto.UserSecureDto;
import com.rentatools.RentaTools.exceptions.ValidationFailedException;
import com.rentatools.RentaTools.service.UserService;
import com.rentatools.RentaTools.utilities.ResponseMessage;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private final UserService userService;

    @GetMapping("/all")
    public List<User> gelAllUsers() {
        return userService.GetAllUsers();
    }

    @PostMapping("/create")
    public ResponseEntity<ResponseMessage> createUser(@Valid @RequestBody UserDto userDto) throws ValidationFailedException {
        userService.createUser(userDto);
        return ResponseEntity.ok(new ResponseMessage(HttpStatus.OK, "Usuario creado correctamente."));
    }

    @
}
