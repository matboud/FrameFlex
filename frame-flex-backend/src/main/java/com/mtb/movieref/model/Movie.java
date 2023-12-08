package com.mtb.movieref.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;


@Data
@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Integer movieYear;
    private String genre;
    private Double rating;
    private String director;
    @OneToMany(cascade= CascadeType.ALL)
    private List<Actor> actor;

    private String imageUrl;

}