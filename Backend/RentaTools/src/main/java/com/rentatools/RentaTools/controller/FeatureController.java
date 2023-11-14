package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.Feature;
import com.rentatools.RentaTools.service.FeatureService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/api/feature")
public class FeatureController {
    @Autowired
    private final FeatureService featureService;

    @GetMapping("/all")
    public List<Feature> GetAllFeatures(){
        return featureService.getAllFeatures();
    }


}
