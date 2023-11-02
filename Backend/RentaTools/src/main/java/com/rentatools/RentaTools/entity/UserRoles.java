package com.rentatools.RentaTools.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "UserRoles")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class UserRoles {
    @Id
    @SequenceGenerator(name = "userroles_sequence", sequenceName = "userroles_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userroles_sequence")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private  User user;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
}
