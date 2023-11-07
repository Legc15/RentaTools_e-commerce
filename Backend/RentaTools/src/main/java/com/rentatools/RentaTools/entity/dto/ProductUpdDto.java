package com.rentatools.RentaTools.entity.dto;
import com.rentatools.RentaTools.entity.Category;
import com.rentatools.RentaTools.entity.Image;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;
import java.util.List;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class ProductUpdDto {
    @Column(name = "name", nullable = false)
    @NotBlank(message = "Falta el nombre del producto.")
    @UniqueElements(message = "El nombre debe ser único.")
    private String name;
    @Column(nullable = false, unique = true)
    @NotBlank(message = "Falta el código del producto.")
    @UniqueElements(message = "El código debe ser único.")
    private String productCode;
    private String shortDescription;
    private String description;
    private Double pricePerDay;
    private Double pricePerHour;
    private String productImage;
    private Category category;
}
