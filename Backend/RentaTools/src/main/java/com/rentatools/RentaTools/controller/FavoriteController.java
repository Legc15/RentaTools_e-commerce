package com.rentatools.RentaTools.controller;
import com.rentatools.RentaTools.entity.Favorite;
import com.rentatools.RentaTools.entity.dto.FavoriteDto;
import com.rentatools.RentaTools.exceptions.BadRequestException;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.service.FavoriteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/api/favorite")
public class FavoriteController {
    @Autowired
    private final FavoriteService favoriteService;

    @GetMapping("/all")
    public ResponseEntity<List<Favorite>> getAllFavorites(){
        return ResponseEntity.ok(favoriteService.getAllFavorites());
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Long>> getFavoritesByUser(@PathVariable Long id){
        return ResponseEntity.ok(favoriteService.getFavoritesByUsersId(id));
    }

    @PostMapping()
    public ResponseEntity<String> saveFavorite(@Valid @RequestBody FavoriteDto favoriteDto) throws BadRequestException, ResourceNotFoundException {
        favoriteService.saveFavorite(favoriteDto);
        return ResponseEntity.ok("Producto agregado a favoritos correctamente.");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteFavorite(@Valid @RequestBody FavoriteDto favoriteDto) throws BadRequestException, ResourceNotFoundException{
        favoriteService.delete(favoriteDto);
        return ResponseEntity.ok("Favorito eliminado correctamente.");
    }
}
