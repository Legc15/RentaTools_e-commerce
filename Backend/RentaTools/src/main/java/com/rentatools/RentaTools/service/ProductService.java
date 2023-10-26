package com.rentatools.RentaTools.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.repository.CategoryRepository;
import com.rentatools.RentaTools.repository.ImageRepository;
import com.rentatools.RentaTools.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {
    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final CategoryRepository categoryRepository;
    @Autowired
    private final ImageRepository imageRepository;
    @Autowired
    ObjectMapper mapper;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public void createProduct(ProductDto productDto){
        try {
            Product product = mapper.convertValue(productDto, Product.class);
            productRepository.save(product);
        }catch (Exception ex){
            System.out.println(ex);
        }
    }

}
