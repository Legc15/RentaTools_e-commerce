package com.rentatools.RentaTools.utilities;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaginateMessage <T>{
    private Integer currentPage;
    private Integer productsByPage;
    private Long totalProducts;
    private Integer totalPages;
    private List<T> data;
}
