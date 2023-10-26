package com.rentatools.RentaTools.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter @Setter
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "Product")
public class Product {

    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long id;
    @Column(name = "name" , nullable = false)
    private String name;
    @Column(nullable = false, unique = true)
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
    @JsonManagedReference
    private List<Image> images;


}
