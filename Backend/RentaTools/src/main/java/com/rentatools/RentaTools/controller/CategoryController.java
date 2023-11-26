package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.Category;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/category")
@RequiredArgsConstructor
public class CategoryController {
    @Autowired
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

    @PostMapping("/create")
    public ResponseEntity<Category> saveCategory(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }

    @PutMapping("/update")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.updateCategory(category));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.deleteById(id));
    }


}
