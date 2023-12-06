package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.Feature;
import com.rentatools.RentaTools.entity.dto.FeatureDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.service.FeatureService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/create")
    public ResponseEntity<Feature> createFeature(@RequestBody FeatureDto featureDto){
        return ResponseEntity.ok(featureService.createFeature(featureDto));
    }

    @PutMapping("/update")
    public ResponseEntity<Feature> updateFeature(@RequestBody Feature feature)throws ResourceNotFoundException {
        return  ResponseEntity.ok(featureService.updateFeature(feature));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String>  deleteFeature(@PathVariable Long id) throws BadRequestException {
        String response = featureService.deleteFeature(id);
        if(response == "No debe haber productos con esta característica para poder eliminarla."){
            return ResponseEntity.status(406).body(response);
        }else{
            return ResponseEntity.ok(response);
        }
    }


}
