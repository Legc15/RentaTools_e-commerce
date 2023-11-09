package com.rentatools.RentaTools.entity.dto;
import com.rentatools.RentaTools.entity.Category;
import com.rentatools.RentaTools.entity.Feature;
import com.rentatools.RentaTools.entity.Image;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import java.util.List;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class ProductDto {
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
    private Category category;
    private List<Image> images;
    private List<Feature> feature;
}
