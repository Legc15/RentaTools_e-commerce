package com.rentatools.RentaTools.entity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "features")
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "features_sequence")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "icon", nullable = false)
    private String icon;

    @ManyToMany(mappedBy = "features")
    @JsonBackReference
    private Set<Product> products = new HashSet<>();
}