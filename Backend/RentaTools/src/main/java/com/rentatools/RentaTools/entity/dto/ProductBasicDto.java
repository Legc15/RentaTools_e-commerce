package com.rentatools.RentaTools.entity.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
public class ProductBasicDto {
    private Long id;
    private String name;
    private String shortDescription;
    private String productImage;
}
