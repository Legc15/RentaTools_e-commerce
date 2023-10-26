package com.rentatools.RentaTools.controller;

import com.rentatools.RentaTools.entity.Category;
import com.rentatools.RentaTools.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategories(){
        List<Category> categories = categoryService.getAllCategory();
        if (categories.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } else{
            return ResponseEntity.ok(categories);
        }
    }

}
