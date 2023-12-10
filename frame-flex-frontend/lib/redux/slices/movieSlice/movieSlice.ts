/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { movies } from "@/lib/redux/slices/movieSlice/mockedData";

/* Types */
export interface MovieType {
  title: string;
  year: number;
  genre: string[];
  director: string;
  actors: string[];
  rating: number;
  imageUrl: string;
}

export interface MovieSliceState {
  movies: MovieType[];
  searchTerm: string;
  filteredMovies: MovieType[];
}

const initialState: MovieSliceState = {
  movies,
  searchTerm: "",
  filteredMovies: movies,
};

export const getUniqueGenres = (movies: MovieType[]) => {
  const allGenres = movies.flatMap((movie) => movie.genre);
  const uniqueGenres = Array.from(new Set(allGenres));

  const genreOptions = uniqueGenres.map((genre) => ({
    label: genre,
    value: genre,
  }));

  genreOptions.unshift({ label: "All Genres", value: "All" });

  return genreOptions;
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovies: (state) => {
      // TODO: implement data fetching
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredMovies = state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      console.log("state.filteredMovies", state.filteredMovies);
    },
    filterByGenre: (state, action: PayloadAction<string>) => {
      if (action.payload === "All") {
        // Reset to all movies when 'All Genres' is selected
        state.filteredMovies = state.movies;
      } else {
        state.filteredMovies = state.movies.filter((movie) =>
          movie.genre.includes(action.payload)
        );
      }
    },
  },
});
