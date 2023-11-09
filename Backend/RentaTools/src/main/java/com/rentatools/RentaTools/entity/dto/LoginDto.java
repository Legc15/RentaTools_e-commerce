package com.rentatools.RentaTools.entity.dto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {
    @Email
    @NotBlank
    @Size(max = 80)
    private String email;
    @NotBlank
    private String password;
}
