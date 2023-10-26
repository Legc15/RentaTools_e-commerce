package com.rentatools.RentaTools.entity.dto;

import com.rentatools.RentaTools.entity.Category;
import jakarta.persistence.Column;
import lombok.*;

import java.util.Locale;

@Getter @Setter
@NoArgsConstructor
@Data
@AllArgsConstructor
public class ProductDto {
    @Column(name = "name", nullable = false)
    private String name;
    @Column(nullable = false, unique = true)
    private String productCode;
    private String shortDescription;
    private String description;
    private Double pricePerDay;
    private Double pricePerHour;
    private String productImage;
    private Category category;
}
