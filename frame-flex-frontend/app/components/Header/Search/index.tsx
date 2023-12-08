"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled, alpha, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { movieSlice } from "@/lib/redux/slices/movieSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: "auto",
  marginLeft: theme.spacing(3),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function HeaderSearch() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

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
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm.length > 0 && (
        <Button onClick={deleteSearch}>
          <ClearIcon  color="error" />
        </Button>
      )}
    </Search>
  );
}
