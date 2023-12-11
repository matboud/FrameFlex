package com.mtb.movieref;

import com.mtb.movieref.model.Actor;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class MovieDto {
    private String title;
    private Integer movieYear;
    private List<String> genre;
    private Double rating;
    private String director;
    private List<String> actors;
    private String imageUrl;
}
