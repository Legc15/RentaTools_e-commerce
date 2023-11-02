package com.rentatools.RentaTools.controller;

import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.service.ProductService;
import com.rentatools.RentaTools.utilities.ResponseMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/all")
    public List<Product> gelAllProduct() {
        return productService.getAllProducts();
    }

    @GetMapping("/existname")
    public Boolean getExistName(@RequestParam String name){
        System.out.println(name);
        return productService.getNameExist(name);
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<ResponseMessage> createProduct(@RequestBody ProductDto productDto){
        productService.createProduct(productDto);
        return ResponseEntity.ok(new ResponseMessage(HttpStatus.OK, "Producto creado correctamente."));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseMessage> deleteProduct(@PathVariable Long id){
        if (id == null || id <= 0){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(HttpStatus.BAD_REQUEST, "Falta ID de producto a eliminar o es incorrecto."));
        }
        productService.deleteProduct(id);
        return ResponseEntity.ok(new ResponseMessage(HttpStatus.OK, "Producto borrado correctamente."));
    }

}
