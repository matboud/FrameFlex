"use client";

import * as React from "react";
import {
  CustomCard,
  CustomCardMedia,
  CustomCardContent,
  CustomTypography,
} from "./styles";
import { MovieType } from "@/lib/redux";

const MovieCard: React.FC<MovieType> = ({ title, genre, year, imageUrl }) => {
  // TODO: remove this comments
  // title,
  // rating,
  // genre,
  // director,
  // year,
  // imageUrl,
  // actors,

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
      </CustomCardContent>
    </CustomCard>
  );
};

export default MovieCard;
