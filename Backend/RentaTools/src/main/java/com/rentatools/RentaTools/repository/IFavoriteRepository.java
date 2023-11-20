package com.rentatools.RentaTools.repository;
import com.rentatools.RentaTools.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFavoriteRepository extends JpaRepository<Favorite, Long> {

}
