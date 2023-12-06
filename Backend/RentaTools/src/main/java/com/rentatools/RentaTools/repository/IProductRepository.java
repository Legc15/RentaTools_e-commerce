package com.rentatools.RentaTools.repository;
import com.rentatools.RentaTools.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    boolean existsByName(String name);

    @Query(value = "SELECT * FROM product ORDER BY RAND()", nativeQuery = true)
    Page<Product> findAllRandom(PageRequest pageRequest);

    //List<Product> findByNameContainingIgnoreCase(String query);

    @Query(value= "SELECT * FROM product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :suggestion, '%')) LIMIT 10", nativeQuery = true)
    List<Product> findSuggestions(String suggestion);

    //@Query(value= "SELECT * FROM product WHERE id NOT IN (SELECT p.id FROM product p LEFT JOIN reservation r ON r.product_id = p.id " +
      //      "WHERE (r.reservation_from BETWEEN :startDate AND :endDate OR r.reservation_to BETWEEN :startDate AND :endDate) " +
        //    "OR (:startDate BETWEEN r.reservation_from AND r.reservation_to OR :endDate BETWEEN r.reservation_from AND r.reservation_to) " +
          //  "GROUP BY product.id)", nativeQuery=true)
    //List<Product> findSuggestionsByDate(String search, String startDate, String endDate);

    List<Product> findByCategoryId(Long categoryId);

    List<Product> findByFeaturesId(Long featureId);
}
