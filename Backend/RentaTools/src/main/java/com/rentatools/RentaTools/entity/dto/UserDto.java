package com.rentatools.RentaTools.entity.dto;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    @Column(nullable = false)
    private String name;
    private String lastName;
    @Column(nullable = false, unique = true)
    @Email
    @NotBlank
    @Size(max = 80)
    private String email;
    @Column(nullable = false)
    @NotBlank
    private String password;

    private boolean esAdmin = false;
    private boolean esActive = true;

}
