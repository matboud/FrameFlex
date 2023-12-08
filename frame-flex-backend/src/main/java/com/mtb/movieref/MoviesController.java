package com.mtb.movieref;

import com.mtb.movieref.Repository.MovieRepository;
import com.mtb.movieref.model.Actor;
import com.mtb.movieref.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class MoviesController {
    @Autowired
    MovieRepository movieRepository;

    @GetMapping("/populate-data")
    private String populateData() {
        Movie inception = createInceptionMovie();
        inception.setActor(List.of(createLeonardoDiCaprio(), createJosephGordonLevitt(), createEllenPage()));
        movieRepository.save(inception);
        return "ok";
    }

    @GetMapping("/movies")
    private List<MovieDto> getData() {

        List<Movie> all = (List<Movie>) movieRepository.findAll();
        return all.stream().map(elt -> MovieDto.builder()
                .movieYear(elt.getMovieYear())
                .actors(elt.getActor().stream().map(Actor::getActorName).collect(Collectors.toList()))
                .genre(Arrays.stream(elt.getGenre().split(",")).toList())
                .director(elt.getDirector())
                .rating(elt.getRating())
                .imageUrl(elt.getImageUrl())
                .imageUrl(elt.getImageUrl())
                .title(elt.getTitle())
                .build()
        ).collect(Collectors.toList());
    }

    private static Movie createInceptionMovie() {
        Movie inception = new Movie();
        inception.setTitle("Inception");
        inception.setMovieYear(2010);
        inception.setGenre("Action, Adventure, Sci-Fi");
        inception.setDirector("Christopher Nolan");
        inception.setRating(8.8);
        inception.setImageUrl("https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg");
        return inception;
    }

    private static Actor createLeonardoDiCaprio() {
        Actor leo = new Actor();
        leo.setActorName("Leonardo DiCaprio");
        return leo;
    }

    private static Actor createJosephGordonLevitt() {
        Actor joseph = new Actor();
        joseph.setActorName("Joseph Gordon-Levitt");
        return joseph;
    }

    private static Actor createEllenPage() {
        Actor ellen = new Actor();
        ellen.setActorName("Ellen Page");
        return ellen;
    }

}
