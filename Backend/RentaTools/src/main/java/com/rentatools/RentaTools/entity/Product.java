package com.rentatools.RentaTools.entity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import java.util.HashSet;
import org.hibernate.validator.constraints.UniqueElements;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@Getter @Setter
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@RequiredArgsConstructor
public class Product {
    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "product_sequence")
    @EqualsAndHashCode.Include
    private Long id;

    @Column(name = "name", nullable = false)
    @NotBlank(message = "Falta el nombre del producto.")
    private String name;
    @Column(nullable = false, unique = true)
    @NotBlank(message = "Falta el código del producto.")
    private String productCode;
    private String shortDescription;
    private String description;
    private Double pricePerDay;
    private Double pricePerHour;
    private String productImage;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    @OrderBy("id ASC")
    @JsonManagedReference
    private List<Image> images;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "product_feature", joinColumns = @JoinColumn(name = "product_id"), inverseJoinColumns = @JoinColumn(name = "feature_id"))
    private Set<Feature> features = new HashSet<>();
}
