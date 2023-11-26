package com.rentatools.RentaTools.service;

import com.rentatools.RentaTools.entity.Feature;
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
    private final IFeatureRepository IFeatureRepository;

    public List<Feature> getAllFeatures(){
        return IFeatureRepository.findAll();
    }
}
