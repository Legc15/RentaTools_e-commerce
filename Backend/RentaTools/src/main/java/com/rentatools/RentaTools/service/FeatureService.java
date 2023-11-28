package com.rentatools.RentaTools.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Feature;
import com.rentatools.RentaTools.entity.dto.FeatureDto;
import com.rentatools.RentaTools.repository.IFeatureRepository;
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
    ObjectMapper mapper;

    public List<Feature> getAllFeatures(){
        return iFeatureRepository.findAll();
    }

    public Feature createFeature(FeatureDto featureDto){
        return iFeatureRepository.save(mapper.convertValue(featureDto, Feature.class));
    }
}
