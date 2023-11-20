package com.rentatools.RentaTools.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.ICategoryRepository;
import com.rentatools.RentaTools.repository.IImageRepository;
import com.rentatools.RentaTools.repository.IProductRepository;
import com.rentatools.RentaTools.utilities.PaginateMessage;
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
    private final IProductRepository IProductRepository;
    @Autowired
    private final ICategoryRepository ICategoryRepository;
    @Autowired
    private final IImageRepository IImageRepository;
    @Autowired
    ObjectMapper mapper;

    public List<Product> getAllProducts(){
        return IProductRepository.findAll();
    }

    public Product getProductById(Long Id){
        return IProductRepository.findById(Id).orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado."));
    }

    public Boolean getNameExist(String nameToSearch){
        return IProductRepository.existsByName(nameToSearch);
    }

    public PaginateMessage<Product> getProductByPage(Integer page, Integer productsByPage, boolean isRandom){
        Page<Product> productsByPages;
        if(!isRandom){
            productsByPages = IProductRepository.findAll(PageRequest.of(page - 1, productsByPage));
        }else {
            productsByPages = IProductRepository.findAllRandom(PageRequest.of(page - 1, productsByPage));
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
            IProductRepository.save(product);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado del nuevo producto.");
        }
    }

    public Product updateProduct(Long id, ProductDto productDto) throws ResourceNotFoundException, BadRequestException {
        if (id == null) throw new BadRequestException("Se necesita un id de producto.");
        Product productOld = IProductRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto con ID: " + id + " no encontrado."));
            productOld.setName(productDto.getName());
            productOld.setProductCode(productDto.getProductCode());
            productOld.setDescription(productDto.getDescription());
            productOld.setShortDescription(productDto.getShortDescription());
            productOld.setProductImage(productDto.getProductImage());
            productOld.setPricePerDay(productDto.getPricePerDay());
            productOld.setPricePerHour(productDto.getPricePerHour());
            productOld.setCategory(productDto.getCategory());
            return IProductRepository.save(productOld);
    }

    public void deleteProduct(Long id){
        Optional<Product> optionalProduct = IProductRepository.findById(id);
        if (optionalProduct.isPresent()){
            IProductRepository.deleteById(id);}
        else throw new ResourceNotFoundException("Producto con ID: " + id + " no encontrado.");
    }

}
