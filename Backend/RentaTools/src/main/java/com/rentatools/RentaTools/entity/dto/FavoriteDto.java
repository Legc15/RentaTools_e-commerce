package com.rentatools.RentaTools.entity.dto;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FavoriteDto {
    @NotNull(message = "Es necesario el id de producto.")
    private Long product_id;
    @NotNull(message = "Es necesario el id de usurio.")
    private Long user_id;
}
