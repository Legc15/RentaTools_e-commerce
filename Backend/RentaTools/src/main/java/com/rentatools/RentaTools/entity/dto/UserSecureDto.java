package com.rentatools.RentaTools.entity.dto;
import jakarta.persistence.Column;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserSecureDto {
    @Column(nullable = false)
    private String name;
    private String lastName;
    @Column(nullable = false, unique = true)
    private String email;
    private boolean esAdmin;
    private boolean esActive;
}