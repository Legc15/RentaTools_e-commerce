package com.rentatools.RentaTools.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.entity.dto.ProductUpdDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.exceptions.ValidationFailedException;
import com.rentatools.RentaTools.repository.CategoryRepository;
import com.rentatools.RentaTools.repository.ImageRepository;
import com.rentatools.RentaTools.repository.ProductRepository;
import com.rentatools.RentaTools.utilities.PaginateMessage;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
//@Transactional
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

    public PaginateMessage<Product> getProductByPage(Integer page, Integer productsByPage, boolean isRandom){
        Page<Product> productsByPages;
        if(!isRandom){
            productsByPages = productRepository.findAll(PageRequest.of(page - 1, productsByPage));
        }else {
            productsByPages = productRepository.findAllRandom(PageRequest.of(page - 1, productsByPage));
        }
        PaginateMessage<Product> paginatedProductsResponse = new PaginateMessage<>();
        paginatedProductsResponse.setCurrentPage(page);
        paginatedProductsResponse.setProductsByPage(productsByPage);
        paginatedProductsResponse.setTotalProducts(productsByPages.getTotalElements());
        paginatedProductsResponse.setTotalPages(productsByPages.getTotalPages());
        paginatedProductsResponse.setData(productsByPages.getContent());
        return paginatedProductsResponse;
    }

    public void createProduct(ProductDto productDto){
        try {
            Product product = mapper.convertValue(productDto, Product.class);
            productRepository.save(product);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado del nuevo producto.");
        }
    }

    public Product updateProduct(Long id, ProductDto productDto) throws ResourceNotFoundException, BadRequestException {
        if (id == null) throw new BadRequestException("Se necesita un id de producto.");
        Product productOld = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto con ID: " + id + " no encontrado."));
            productOld.setName(productDto.getName());
            productOld.setProductCode(productDto.getProductCode());
            productOld.setDescription(productDto.getDescription());
            productOld.setShortDescription(productDto.getShortDescription());
            productOld.setProductImage(productDto.getProductImage());
            productOld.setPricePerDay(productDto.getPricePerDay());
            productOld.setPricePerHour(productDto.getPricePerHour());
            productOld.setCategory(productDto.getCategory());
            return productRepository.save(productOld);
    }

    public void deleteProduct(Long id){
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()){productRepository.deleteById(id);}
        else throw new ResourceNotFoundException("Producto con ID: " + id + " no encontrado.");
    }

}
