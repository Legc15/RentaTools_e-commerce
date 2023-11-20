package com.rentatools.RentaTools.service;

import com.rentatools.RentaTools.entity.Category;
import com.rentatools.RentaTools.repository.ICategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final ICategoryRepository ICategoryRepository;

    public List<Category> getAllCategory(){
        List<Category> categories = ICategoryRepository.findAll();
        return categories;
    }
}
