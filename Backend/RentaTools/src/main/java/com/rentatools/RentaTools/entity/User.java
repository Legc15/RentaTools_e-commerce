package com.rentatools.RentaTools.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    @Email(message = "Formato inválido de email.")
    @NotBlank(message = "Debe ingresar el email.")
    @Size(max = 80)
    private String email;
    @NotBlank(message = "Debe ingresar un password.")
    private String password;
    private boolean esAdmin;
    private boolean esActive;
}
