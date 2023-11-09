package com.rentatools.RentaTools.controller;

import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.dto.ProductDto;
import com.rentatools.RentaTools.entity.dto.ProductUpdDto;
import com.rentatools.RentaTools.exceptions.ValidationFailedException;
import com.rentatools.RentaTools.service.ProductService;
import com.rentatools.RentaTools.utilities.PaginateMessage;
import com.rentatools.RentaTools.utilities.ResponseMessage;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
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

    @GetMapping("/paginated")
    public ResponseEntity<PaginateMessage<Product>> getPruductsPaginated(
            @RequestParam(defaultValue = "1", required = false) Integer page,
            @RequestParam(defaultValue = "10", required = false) Integer productsByPage,
            @RequestParam(defaultValue = "false", required = false) boolean isRandom) {
            //@RequestParam(defaultValue = "0", required = false) Long category) {
        PaginateMessage<Product> response = productService.getProductByPage(page, productsByPage, isRandom);
        return ResponseEntity.ok(response);
    }


    @PostMapping("/create")
    public ResponseEntity<ResponseMessage> createProduct(@Valid @RequestBody ProductDto productDto){
        productService.createProduct(productDto);
        return ResponseEntity.ok(new ResponseMessage(HttpStatus.OK, "Producto creado correctamente."));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseMessage> updateProduct(@Valid @PathVariable Long id, @RequestBody ProductDto productDto){
        Product productUpd = productService.updateProduct(id, productDto);
        return ResponseEntity.ok(new ResponseMessage(HttpStatus.OK, "Producto actualizado correctamente.", productUpd));
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
