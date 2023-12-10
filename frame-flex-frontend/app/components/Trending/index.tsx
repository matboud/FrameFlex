"use client";

import * as React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard";
import { movies } from "@/lib/redux/slices/movieSlice/mockedData";
import { Trending } from "./Trending.styles";

const responsive = {
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
};

export default function ColumnsGrid({ title }: { title: string }) {
  return (
    <Trending maxWidth="lg">
      <div style={{ color: "white", fontSize: 25, paddingBottom: 30 }}>
        {title} :
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        draggable
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        shouldResetAutoplay
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
