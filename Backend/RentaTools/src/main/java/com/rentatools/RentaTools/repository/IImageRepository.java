package com.rentatools.RentaTools.repository;
import com.rentatools.RentaTools.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IImageRepository extends JpaRepository<Image, Long> {

    boolean existsByName(String name);

    @Query(value = "SELECT * FROM product ORDER BY RAND()", nativeQuery = true)
    Page<Product> findAllRandom(PageRequest pageRequest);
}
