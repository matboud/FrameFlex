package com.mtb.movieref.Repository;

import com.mtb.movieref.model.Actor;
import org.springframework.data.repository.CrudRepository;

public interface ActorRepository extends CrudRepository<Actor, Long> {
}

