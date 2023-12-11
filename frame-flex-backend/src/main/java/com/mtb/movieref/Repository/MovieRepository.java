package com.mtb.movieref.Repository;

import com.mtb.movieref.model.Movie;
import org.springframework.data.repository.CrudRepository;


public interface MovieRepository extends CrudRepository<Movie, Long> {
}

