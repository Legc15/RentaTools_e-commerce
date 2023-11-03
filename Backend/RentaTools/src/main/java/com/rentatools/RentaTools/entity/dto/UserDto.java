package com.rentatools.RentaTools.entity.dto;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDto {
    @Column(nullable = false)
    private String name;
    private String lastName;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String password;
    private boolean esAdmin = false;
    private boolean esActive = true;

}
