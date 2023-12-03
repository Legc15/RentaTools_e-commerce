package com.rentatools.RentaTools.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Category;
import com.rentatools.RentaTools.entity.Feature;
import com.rentatools.RentaTools.entity.dto.FeatureDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.IFeatureRepository;
import com.rentatools.RentaTools.repository.IProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class FeatureService {
    @Autowired
    private final IFeatureRepository iFeatureRepository;

    @Autowired
    private final IProductRepository iProductRepository;

    @Autowired
    ObjectMapper mapper;

    public List<Feature> getAllFeatures(){
        return iFeatureRepository.findAll();
    }

    public Feature createFeature(FeatureDto featureDto){
        return iFeatureRepository.save(mapper.convertValue(featureDto, Feature.class));
    }

    public Feature updateFeature(Feature feature) {
        if (feature.getId() == null)
            throw new ResourceNotFoundException("Falta el id de la característica.");
        if (iFeatureRepository.findById(feature.getId()).isEmpty())
            throw new ResourceNotFoundException("No se encuentra el id de la característica.");
        try {
            return iFeatureRepository.save(feature);
        } catch (Exception ex) {
            throw new RuntimeException("Error al actualizar la categoría.");
        }
    }

    public String deleteFeature(Long id) throws BadRequestException{
        if (id == null) throw new BadRequestException("Se necesita un id de Característica.");
        Feature feature = iFeatureRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No se encontró la característica con el id: " + id));
        if(iProductRepository.findByFeaturesId(id).isEmpty()){
            iFeatureRepository.delete(feature);
            return "Característica eliminada de la Base de datos.";
        }else throw new RuntimeException("No debe haber productos con esta característica para poder eliminarla.");
    }
}
