package com.rentatools.RentaTools.repository;
import com.rentatools.RentaTools.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IFavoriteRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUserId(Long UserId);

    void deleteByUserIdAndProductId(Long userId, Long productId);

    Favorite findOneByUserIdAndProductId(Long userId, Long productId);

    boolean existsByUserIdAndProductId(Long userId, Long productId);
}
