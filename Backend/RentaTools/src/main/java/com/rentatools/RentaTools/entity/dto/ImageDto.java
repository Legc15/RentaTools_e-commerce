package com.rentatools.RentaTools.entity.dto;
import com.rentatools.RentaTools.entity.Product;
import jakarta.persistence.Column;
import lombok.*;

@Getter @Setter
@NoArgsConstructor
@Data
@AllArgsConstructor
public class ImageDto {
    private String title;
    @Column (nullable = false)
    private String url;
    private Product product;
    private Integer position;
}
