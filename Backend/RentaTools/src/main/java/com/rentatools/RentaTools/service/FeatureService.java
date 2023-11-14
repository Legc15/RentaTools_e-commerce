package com.rentatools.RentaTools.service;

import com.rentatools.RentaTools.entity.Feature;
import com.rentatools.RentaTools.repository.FeatureRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class FeatureService {
    private final FeatureRepository featureRepository;

    public List<Feature> getAllFeatures(){
        return featureRepository.findAll();
    }
}
