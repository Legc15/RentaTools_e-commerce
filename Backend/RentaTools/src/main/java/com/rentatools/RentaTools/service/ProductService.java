package com.rentatools.RentaTools.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.CategoryRepository;
import com.rentatools.RentaTools.repository.ImageRepository;
import com.rentatools.RentaTools.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Product getProductById(Long Id){
        return productRepository.findById(Id).orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado."));
    }

    public Boolean getNameExist(String nameToSearch){
        return productRepository.existsByName(nameToSearch);
    }
    public void createProduct(ProductDto productDto){
        try {
            Product product = mapper.convertValue(productDto, Product.class);
            productRepository.save(product);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado del nuevo producto.");
        }
    }

    public void deleteProduct(Long id){
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()){productRepository.deleteById(id);}
        else throw new ResourceNotFoundException("Producto con ID: " + id + " no encontrado.");
    }

}
