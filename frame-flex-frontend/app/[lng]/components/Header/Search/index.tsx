"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { movieSlice } from "@/lib/redux/slices/movieSlice";
import { Search, SearchIconWrapper, StyledInputBase } from "./search.styles";

export default function HeaderSearch({ title }: { title: string }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * @description
   *
   * ==============================================================================
   * Note: A debouncer could be implemented to limit API calls on every keystroke.
   * However, in this small-scale app, where search functionality does not interact
   * with an API, the addition of a debouncer is unnecessary.
   * ==============================================================================
   */

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    dispatch(movieSlice.actions.search(newValue));
  };

  const deleteSearch = () => {
    setSearchTerm("");
    dispatch(movieSlice.actions.search(""));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={title}
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm.length > 0 && (
        <Button onClick={deleteSearch}>
          <ClearIcon color="error" />
        </Button>
      )}
    </Search>
  );
}
