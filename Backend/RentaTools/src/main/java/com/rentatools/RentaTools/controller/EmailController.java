package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.dto.EmailDto;
import com.rentatools.RentaTools.service.EmailService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/mail")
@AllArgsConstructor
public class EmailController {

    @Autowired
    private final EmailService emailService;

    @PostMapping("/sendMail")
    public ResponseEntity<String> sendMail(@RequestBody EmailDto emailDto){
        return ResponseEntity.ok(emailService.sendMail(emailDto));
    }


}
