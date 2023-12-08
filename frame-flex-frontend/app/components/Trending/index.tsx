"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard";

const Trending = styled(Container)(({ theme }) => ({
  //   background: "rgba(33, 46, 57)",
}));

export default function ColumnsGrid() {
  const movies = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman"],
      rating: 9.3,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg", // Replace with your image path
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman"],
      rating: 9.3,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg", // Replace with your image path
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman"],
      rating: 9.3,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg", // Replace with your image path
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman"],
      rating: 9.3,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg", // Replace with your image path
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman"],
      rating: 9.3,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg", // Replace with your image path
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman"],
      rating: 9.3,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg", // Replace with your image path
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman"],
      rating: 9.3,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg", // Replace with your image path
    },
  ];

  return (
    <Trending maxWidth="lg">
      <div style={{ color: "white", fontSize: 25, paddingBottom: 30 }}>
        Trending :
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
            partialVisibilityGutter: 90,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 320,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          extraSmall: {
            breakpoint: {
              max: 319,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 130,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {movies.map((movie, index) => (
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
        ))}
      </Carousel>
    </Trending>
  );
}
