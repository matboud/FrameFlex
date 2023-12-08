"use client";

import React, { useState } from "react";
import { Container, Box, Toolbar, Typography } from "@mui/material";
import Search from "./Search";
import AppBar from "./AppBar";
import Logo from "./Logo";
import DropdownMenu, { DropdownMenuItem } from "./DropdownMenu";
import FilterButton from "./FilterButton";
import LanguageButton from "./LanguageButton";
import { Movie, selectMovies, useSelector, useDispatch } from "@/lib/redux";
import { movieSlice, getUniqueGenres } from "@/lib/redux/slices/movieSlice";

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  const [menuAnchors, setMenuAnchors] = useState({
    lang: null,
    filter: null,
    mobileMore: null,
  });

  const uniqueGenres = getUniqueGenres(movies.movies);

  const [selectedLanguage, setSelectedLanguage] = useState("🇺🇸");

  const handleMenuOpen = (menuType: string, anchor: HTMLElement | null) => {
    setMenuAnchors({ ...menuAnchors, [menuType]: anchor });
  };

  const handleMenuClose = () => {
    setMenuAnchors({ lang: null, filter: null, mobileMore: null });
  };

  const handleLanguageSelect = (value: string) => {
    setSelectedLanguage(value);
    handleMenuClose();
  };

  const handleFilterMenuOpen = () => {
    handleMenuOpen("filter", menuAnchors.mobileMore);
  };

  const handleLangMenuOpen = () => {
    handleMenuOpen("lang", menuAnchors.mobileMore);
  };

  const handleSelectedGenre = (genre: string) => {
    dispatch(movieSlice.actions.filterByGenre(genre));
  };

  const languageItems: DropdownMenuItem[] = [
    { label: "🇺🇸", value: "🇺🇸" },
    { label: "🇪🇸", value: "🇪🇸" },
    { label: "🇫🇷", value: "🇫🇷" },
  ];

  return (
    <AppBar>
      <Container disableGutters maxWidth="lg">
        <Toolbar>
          <Typography noWrap component="div">
            <Logo />
          </Typography>
          <Search />
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <FilterButton
              onClick={(event) => handleMenuOpen("filter", event.currentTarget)}
            />
            <LanguageButton
              onClick={(event) => handleMenuOpen("lang", event.currentTarget)}
              selectedLanguage={selectedLanguage}
            />
          </Box>
        </Toolbar>
      </Container>

      <DropdownMenu
        items={languageItems}
        anchorEl={menuAnchors.lang}
        open={Boolean(menuAnchors.lang)}
        onClose={handleMenuClose}
        onItemSelect={handleLanguageSelect}
      />
      <DropdownMenu
        items={uniqueGenres}
        anchorEl={menuAnchors.filter}
        open={Boolean(menuAnchors.filter)}
        onClose={handleMenuClose}
        onItemSelect={(value) => handleSelectedGenre(value)}
      />
    </AppBar>
  );
}
