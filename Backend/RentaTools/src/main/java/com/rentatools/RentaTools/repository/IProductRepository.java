package com.rentatools.RentaTools.repository;
import com.rentatools.RentaTools.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    boolean existsByName(String name);

    @Query(value = "SELECT * FROM product ORDER BY RAND()", nativeQuery = true)
    Page<Product> findAllRandom(PageRequest pageRequest);

    //List<Product> findByNameContainingIgnoreCase(String query);

    @Query(value= "SELECT * FROM product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :suggestion, '%')) LIMIT 10", nativeQuery = true)
    List<Product> findSuggestions(String suggestion);
}
