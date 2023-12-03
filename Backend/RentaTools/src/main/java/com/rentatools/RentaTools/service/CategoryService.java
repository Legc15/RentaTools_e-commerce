package com.rentatools.RentaTools.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Category;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.ICategoryRepository;
import com.rentatools.RentaTools.repository.IProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryService {
    @Autowired
    private final ICategoryRepository iCategoryRepository;

    @Autowired
    private final IProductRepository iProductRepository;

    @Autowired
    ObjectMapper mapper;

    public List<Category> getAllCategory(){
        List<Category> categories = iCategoryRepository.findAll();
        return categories;
    }

    public Category saveCategory(Category category){
        try{
            return iCategoryRepository.save(category);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado de la nueva categoría.");
        }
    }

    public Category updateCategory(Category category){
        if(category.getId() == null)
            throw new ResourceNotFoundException("Falta el id de la categoría.");
        if(iCategoryRepository.findById(category.getId()).isEmpty())
            throw new ResourceNotFoundException("No se encuentra el id de la categoría.");
        try{
            return iCategoryRepository.save(category);
        }catch (Exception ex){
            throw new RuntimeException("Error al actualizar la categoría.");
        }
    }

    public String deleteById(Long id){
        if (id == null) throw new BadRequestException("Se necesita un id de categoría.");
        Category category = iCategoryRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No se encontró la categoría con el id: " + id));
        if(iProductRepository.findByCategoryId(id).isEmpty()){
            iCategoryRepository.delete(category);
            return "Categoría eliminada de la Base de datos.";
        }else throw new RuntimeException("No debe haber productos con esta categoría para poder eliminarla.");
    }
}
