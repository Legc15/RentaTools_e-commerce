package com.rentatools.RentaTools.service;

import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.repository.CategoryRepository;
import com.rentatools.RentaTools.repository.ImageRepository;
import com.rentatools.RentaTools.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ImageRepository imageRepository;

    public List<Product> getAllProducts(){ return productRepository.findAll();}

}
