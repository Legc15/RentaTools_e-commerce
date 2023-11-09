package com.rentatools.RentaTools.entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Table(name = "feature")
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "icon", nullable = false)
    private String icon;
    @ManyToMany(cascade = {CascadeType.ALL}, mappedBy = "feature")
    private List<Product> product = new ArrayList<>();
}
