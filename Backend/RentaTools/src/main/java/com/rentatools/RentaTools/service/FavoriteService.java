package com.rentatools.RentaTools.service;
import com.rentatools.RentaTools.entity.Favorite;
import com.rentatools.RentaTools.entity.Product;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.FavoriteDto;
import com.rentatools.RentaTools.exceptions.ResourceNotFoundException;
import com.rentatools.RentaTools.repository.IFavoriteRepository;
import com.rentatools.RentaTools.repository.IProductRepository;
import com.rentatools.RentaTools.repository.IUserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class FavoriteService {
    @Autowired
    private final IFavoriteRepository favoriteRepository;
    @Autowired
    private final IProductRepository productRepository;
    @Autowired
    private final IUserRepository userRepository;

    public List<Favorite> getAllFavorites(){
        return favoriteRepository.findAll();
    }

    public List<Long> getFavoritesByUsersId(Long userId){
        List<Favorite> favorites = favoriteRepository.findByUserId(userId);
        List<Long> productIds = new ArrayList<Long>();
        favorites.stream().filter(favo -> favo.getEnable()).forEach((fav)-> productIds.add(fav.getProduct().getId()));
        return productIds;
    }


    public void saveFavorite(FavoriteDto favoriteDto) throws ResourceNotFoundException {
        Optional<User> user = userRepository.findById(favoriteDto.getUser_id());
        if(user.isEmpty()){
            throw new ResourceNotFoundException("No se encuentra el usuario " + favoriteDto.getUser_id());
        }
        Optional<Product> product = productRepository.findById(favoriteDto.getProduct_id());
        if(product.isEmpty()){
            throw new ResourceNotFoundException("No se encuentra el producto " + favoriteDto.getProduct_id());
        }
        Favorite favorite = favoriteRepository.findOneByUserIdAndProductId(favoriteDto.getUser_id(), favoriteDto.getProduct_id());
        if(favorite != null){
            favorite.setEnable(true);
            favoriteRepository.save(favorite);
        }else{
            Favorite favoriteNew = new Favorite();
            favoriteNew.setUser(user.get());
            favoriteNew.setProduct(product.get());
            favoriteNew.setEnable(true);
            favoriteRepository.save(favoriteNew);
        }
    }

    public void delete(FavoriteDto favoriteDto){
        Favorite favorite = favoriteRepository.findOneByUserIdAndProductId(favoriteDto.getUser_id(), favoriteDto.getProduct_id());
        if(favorite != null){
            favorite.setEnable(false);
            favoriteRepository.save(favorite);
        }else{
            throw new ResourceNotFoundException("No se encuentra favorito para eliminar.");
        }
    }
}
