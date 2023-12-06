package com.rentatools.RentaTools.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Image;
import com.rentatools.RentaTools.entity.dto.ImageDto;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.IImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageService {
    @Autowired
    private final IImageRepository iImageRepository;
    @Autowired
    ObjectMapper mapper;
    public List<Image> getAllImages(){
        return iImageRepository.findAll();
    }

    public void createImage(ImageDto imageDto){
        try {
            Image image = mapper.convertValue(imageDto, Image.class);
            iImageRepository.save(image);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado de la imagen.");
        }
    }

    public Image updateImage(Image image){
        Image imageOld = iImageRepository.findById(image.getId()).orElseThrow(()->new ResourceNotFoundException("Imagen no se encuentra."));
        imageOld.setUrl(image.getUrl());
        return iImageRepository.save(imageOld);
    }

    public String deleteImage(Long id){
        if(iImageRepository.existsById(id)) {
            iImageRepository.deleteById(id);
            return "Imagen eliminada correctamente.";
        }else{
            return "Imagen no existe.";
        }
    }
}
