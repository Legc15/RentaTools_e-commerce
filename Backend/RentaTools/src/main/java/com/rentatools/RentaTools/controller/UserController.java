package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.entity.dto.UserDto;
import com.rentatools.RentaTools.entity.dto.UserSecureDto;
import com.rentatools.RentaTools.exceptions.AttributeException;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
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
    public ResponseEntity<ResponseMessage> createUser(@Valid @RequestBody UserDto userDto) throws ValidationFailedException, BadRequestException {
        userService.createUser(userDto);
        return ResponseEntity.ok(new ResponseMessage(HttpStatus.OK, "Usuario creado correctamente."));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException{
        return ResponseEntity.ok(userService.GetUserById(id));
    }

    @PatchMapping("/role/update/{id}")
    public  ResponseEntity<ResponseMessage> changeRole(@PathVariable Long id, @Valid @RequestBody boolean isAdmin) throws BadRequestException, ResourceNotFoundException {
        userService.changeRoleService(id, isAdmin);
        String admin = (isAdmin)?"Administrador":"Usuario";
        return ResponseEntity.ok(new ResponseMessage("El ID: " + id + " fue definido como " + admin));
    }

}
