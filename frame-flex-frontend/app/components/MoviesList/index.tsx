"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../MovieCard"; // Adjust the import path as necessary
import { Button, Container } from "@mui/material";
import { selectMovies, useSelector } from "@/lib/redux";

const MoviesList = () => {
  const movies = useSelector(selectMovies);
  return (
    <Container maxWidth="lg">
      <div
        style={{
          color: "white",
          fontSize: 25,
          paddingBottom: 30,
          paddingTop: 50,
        }}
      >
        All Movies :
      </div>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ flexWrap: "wrap" }}
      >
        {movies.searchTerm && movies.filteredMovies.length === 0 ? (
          <div style={{ color: "white" }}>No results found</div>
        ) : (
          (movies.filteredMovies && movies.filteredMovies.length > 0
            ? movies.filteredMovies
            : movies.movies
          ).map((movie, index) => (
            <Grid item key={index} xs={4} sm={3.4} md={3} lg={2.4}>
              <MovieCard
                key={index}
                title={movie.title}
                rating={movie.rating}
                genre={movie.genre}
                year={movie.year}
                imageUrl={movie.imageUrl}
                director={movie.director}
                actors={movie.actors}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default MoviesList;
