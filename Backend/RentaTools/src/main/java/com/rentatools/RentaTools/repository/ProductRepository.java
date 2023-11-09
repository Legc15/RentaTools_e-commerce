package com.rentatools.RentaTools.repository;

import com.rentatools.RentaTools.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {
    boolean existsByName(String name);

    @Query(value = "SELECT * FROM product ORDER BY RAND()", nativeQuery = true)
    Page<Product> findAllRandom(PageRequest pageRequest);
}
