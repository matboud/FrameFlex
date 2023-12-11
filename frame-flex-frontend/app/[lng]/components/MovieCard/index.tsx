import React from "react";
import {
  CustomCard,
  CustomCardMedia,
  CustomCardContent,
  CustomTypography,
  Tag,
  Rating,
} from "./styles";
import { MovieType } from "@/lib/redux";

interface TagsProps {
  items: string[];
  backgroundColor?: string;
  color?: string;
}

const MovieCard: React.FC<MovieType> = React.memo(
  ({ title, rating, genre, year, imageUrl, director, actors }) => {
    return (
      <CustomCard>
        <CustomCardMedia image={imageUrl} title={title} />
        <CustomCardContent>
          <div>
            <RatingAndDirector rating={rating} director={director} />
            <CustomTypography variant="h5" as="h3">
              {title}
            </CustomTypography>
            <CustomTypography as="h5">
              {year}
            </CustomTypography>
          </div>
          <div>
            <Tags items={genre} backgroundColor="#fff4" />
            <Tags items={actors} backgroundColor="#f1c40f4a" color="#f1c40f" />
          </div>
        </CustomCardContent>
      </CustomCard>
    );
  }
);

const RatingAndDirector: React.FC<Pick<MovieType, 'rating' | 'director'>> = React.memo(
  ({ rating, director }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Rating>⭐️ {rating}</Rating>
      <Tag>{director}</Tag>
    </div>
  )
);

const Tags: React.FC<TagsProps> = React.memo(({ items, backgroundColor, color }) => (
  <div style={{ display: "flex-column", flexWrap: "wrap", marginTop: "10px" }}>
    {items.map((item) => (
      <Tag key={item} style={{ backgroundColor, color }}>
        {item}
      </Tag>
    ))}
  </div>
));

export default MovieCard;
