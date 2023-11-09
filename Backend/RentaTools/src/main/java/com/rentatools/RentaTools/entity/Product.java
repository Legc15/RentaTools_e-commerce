package com.rentatools.RentaTools.entity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import java.util.ArrayList;
import org.hibernate.validator.constraints.UniqueElements;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "product")
public class Product {
    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "product_sequence")
    private Long id;
    @Column(name = "name", nullable = false)
    @NotBlank(message = "Falta el nombre del producto.")
    private String name;
    @Column(nullable = false, unique = true)
    @NotBlank(message = "Falta el código del producto.")
    private String productCode;
    private String shortDescription;
    private String description;
    private Double pricePerDay;
    private Double pricePerHour;
    private String productImage;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    @OrderBy("id ASC")
    @JsonManagedReference
    private List<Image> images;
    @ManyToMany(targetEntity = Feature.class, cascade = CascadeType.ALL)
    @JoinTable(name = "product_feature", joinColumns = {@JoinColumn(name = "product_id")}, inverseJoinColumns = {@JoinColumn(name = "feature_id")})
    private List<Feature> feature = new ArrayList<>();
}
