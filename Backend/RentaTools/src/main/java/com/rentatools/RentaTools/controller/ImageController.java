package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.Image;
import com.rentatools.RentaTools.entity.dto.ImageDto;
import com.rentatools.RentaTools.service.ImageService;
import com.rentatools.RentaTools.utilities.ResponseMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/images")
@RequiredArgsConstructor
public class ImageController {

    @Autowired
    private final ImageService imageService;

    @GetMapping("/all")
    public List<Image> getAllImages(){
        return imageService.getAllImages();
    }

    @PutMapping("/update")
    public ResponseEntity<Image> updateImage(@RequestBody Image image){
        return ResponseEntity.ok(imageService.updateImage(image));
    }
    @PostMapping("/create")
    public ResponseEntity<ResponseMessage> CreateImage(@RequestBody ImageDto imageDto){
        imageService.createImage(imageDto);
        return ResponseEntity.ok(new ResponseMessage(HttpStatus.OK, "Imagen creada correctamente."));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Long id){
        if(id == null) return ResponseEntity.status(400).body("Falta id de imagen.");
        String response = imageService.deleteImage(id);
        if(response == "Imagen no existe."){
            return ResponseEntity.status(404).body(response);
        }
        return ResponseEntity.ok(response);
    }

}
