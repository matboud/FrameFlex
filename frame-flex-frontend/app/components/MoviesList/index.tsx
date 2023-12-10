import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../MovieCard";
import { Container } from "@mui/material";
import { MovieType, selectMovies, useSelector } from "@/lib/redux";

const MoviesList = ({
  title,
  noResult,
}: {
  title: string;
  noResult: string;
}) => {
  const { searchTerm, filteredMovies, movies } = useSelector(selectMovies);

  const renderMovieCards = (movies: MovieType[]) => {
    return movies.map((movie, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
        <MovieCard {...movie} />
      </Grid>
    ));
  };

  return (
    <Container sx={{ marginTop: "40px" }} maxWidth="lg">
      <div className="title">{title} :</div>
      <Grid
        sx={{ marginTop: "20px" }}
        container
        justifyContent="center"
        spacing={2}
      >
        {searchTerm && filteredMovies.length === 0 ? (
          <div className="no-result"> 🥲 {noResult}</div>
        ) : (
          renderMovieCards(filteredMovies.length > 0 ? filteredMovies : movies)
        )}
      </Grid>
    </Container>
  );
};

export default MoviesList;
