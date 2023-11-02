package com.rentatools.RentaTools.entity.dto;

import com.rentatools.RentaTools.entity.Role;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "UserRoles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles;
    private boolean active;
}
