package com.rentatools.RentaTools.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Table(name = "CATEGORY")
@Data
@AllArgsConstructor @NoArgsConstructor
public class Category {
    @Id
    @SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "category_sequence")
    private Long id;
    @Column(nullable = false, unique = true)
    private String name;
    private String description;
    private String image;
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List<Product> product;
    private Boolean deleted;
}
