"use client";
import * as React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  CustomCard,
  CustomCardMedia,
  CustomCardContent,
  CustomTypography,
} from "./styles";

// TODO: Add types for movie data inn a general types file
interface MovieTypes {
  title: string;
  year: number;
  genre: string[];
  director: string;
  actors: string[];
  rating: number;
  imageUrl: string;
}

const MovieCard: React.FC<MovieTypes> = ({
  title,
  rating,
  genre,
  director,
  year,
  imageUrl,
  actors
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // {
  //     title: "The Shawshank Redemption",
  //     year: 1994,
  //     genre: ["Crime", "Drama"],
  //     director: "Frank Darabont",
  //     actors: ["Tim Robbins", "Morgan Freeman"],
  //     rating: 9.3,
  //     imageUrl:
  //       "https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_.jpg", // Replace with your image path
  //   },

  return (
    <CustomCard>
      <CustomCardMedia image={imageUrl} title={title} />
      <CustomCardContent>
        <CustomTypography variant="h5" as="h4">
          {title}
        </CustomTypography>
        <CustomTypography variant="body2" color="textSecondary" as="p">
          {`${genre} | ${year}`}
        </CustomTypography>
        {/* Add other card content like rating stars */}
      </CustomCardContent>
      {/* You can also add CardActions here if needed */}
    </CustomCard>
  );
};

export default MovieCard;
