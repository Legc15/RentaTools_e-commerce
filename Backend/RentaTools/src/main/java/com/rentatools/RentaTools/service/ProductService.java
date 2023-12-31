package com.rentatools.RentaTools.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Feature;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.dto.ProductBasicDto;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.IFeatureRepository;
import com.rentatools.RentaTools.repository.IImageRepository;
import com.rentatools.RentaTools.repository.IProductRepository;
import com.rentatools.RentaTools.utilities.PaginateMessage;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {
    @Autowired
    private final IProductRepository iProductRepository;
    @Autowired
    private final IFeatureRepository iFeatureRepository;
    @Autowired
    private final IImageRepository iImageRepository;
    @Autowired
    ObjectMapper mapper;

    public List<Product> getAllProducts(){
        return iProductRepository.findAll();
    }

    public Product getProductById(Long Id){
        return iProductRepository.findById(Id).orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado."));
    }

    public Boolean getNameExist(String nameToSearch){
        return iProductRepository.existsByName(nameToSearch);
    }

    public PaginateMessage<Product> getProductByPage(Integer page, Integer productsByPage, boolean isRandom, Long category){
        Page<Product> productsByPages;
        if(!isRandom){
            productsByPages = iProductRepository.findAll(PageRequest.of(page - 1, productsByPage));
        }else {
            productsByPages = iProductRepository.findAllRandom(PageRequest.of(page - 1, productsByPage));
        }
        PaginateMessage<Product> paginatedProductsResponse = new PaginateMessage<>();
        paginatedProductsResponse.setCurrentPage(page);
        paginatedProductsResponse.setProductsByPage(productsByPage);
        paginatedProductsResponse.setTotalProducts(productsByPages.getTotalElements());
        paginatedProductsResponse.setTotalPages(productsByPages.getTotalPages());
        paginatedProductsResponse.setData(productsByPages.getContent());
        return paginatedProductsResponse;
    }

    public List<ProductBasicDto> getBarProductsByDate(String productSearch, String startingDate, String endingDate){
        List<Product> listProduct = iProductRepository.findSuggestions(productSearch);
        List<ProductBasicDto> basicProduct = new ArrayList<>();
        listProduct.forEach(product -> basicProduct.add(mapper.convertValue(product, ProductBasicDto.class)));
        return basicProduct;
    }

    public List<String> getSuggestion(String barString){
        List<Product> suggestionList = iProductRepository.findSuggestions(barString);
        List<String> suggestionString = new ArrayList<>();
        suggestionList.forEach(product -> suggestionString.add(product.getName()));
        return suggestionString;
    }

    public String addFeatureToProduct(Long productId, Long featureId){
        Product product = iProductRepository.findById(productId).orElseThrow(()-> new ResourceNotFoundException("El producto no existe."));
        Feature feature = iFeatureRepository.findById(featureId).orElseThrow(()-> new ResourceNotFoundException("No existe la característica."));
        product.getFeatures().add(feature);
        feature.getProducts().add(product);
        try {
            iProductRepository.save(product);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado de la característica en el producto.");
        }
        return "Característica guardada correctamente en el producto.";
    }

    public void createProduct(ProductDto productDto){
        try {
            Product product = mapper.convertValue(productDto, Product.class);
            iProductRepository.save(product);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado del nuevo producto.");
        }
    }

    public Product updateProduct(Long id, ProductDto productDto) throws ResourceNotFoundException, BadRequestException {
        if (id == null) throw new BadRequestException("Se necesita un id de producto.");
        Product productOld = iProductRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto con ID: " + id + " no encontrado."));
            productOld.setName(productDto.getName());
            productOld.setProductCode(productDto.getProductCode());
            productOld.setDescription(productDto.getDescription());
            productOld.setShortDescription(productDto.getShortDescription());
            productOld.setProductImage(productDto.getProductImage());
            productOld.setPricePerDay(productDto.getPricePerDay());
            productOld.setPricePerHour(productDto.getPricePerHour());
            productOld.setCategory(productDto.getCategory());
            return iProductRepository.save(productOld);

    }

    public void deleteProduct(Long id){
        Optional<Product> optionalProduct = iProductRepository.findById(id);
        if (optionalProduct.isPresent()){
            iProductRepository.deleteById(id);}
        else throw new ResourceNotFoundException("Producto con ID: " + id + " no encontrado.");
    }

}
