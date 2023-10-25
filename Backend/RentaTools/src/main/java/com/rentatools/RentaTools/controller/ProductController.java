package com.rentatools.RentaTools.controller;

import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/all")
    public List<Product> gelAllProduct(){
        return productService.getAllProducts();
    }

}
