package com.example.TrabajoIntegrador.entity;


import jakarta.persistence.*;


@Entity
@Table(name = "Domicilios")
public class Domicilio {

    private String calle;
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private Integer id;

    private String localidad;


    private String numeroPuerta;

    public Domicilio(String calle, Integer id, String localidad, String numeroPuerta) {
        this.calle = calle;
        this.id = id;
        this.localidad = localidad;
        this.numeroPuerta = numeroPuerta;
    }

    public Domicilio() {
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public String getNumeroPuerta() {
        return numeroPuerta;
    }

    public void setNumeroPuerta(String numeroPuerta) {
        this.numeroPuerta = numeroPuerta;
    }
};



