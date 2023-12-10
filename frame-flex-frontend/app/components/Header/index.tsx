"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Container, Box, Toolbar, Typography } from "@mui/material";
import Search from "./Search";
import AppBar from "./AppBar";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import FilterButton from "./FilterButton";
import LanguageButton from "./LanguageButton";
import { selectMovies, useSelector, useDispatch } from "@/lib/redux";
import { movieSlice, getUniqueGenres } from "@/lib/redux/slices/movieSlice";
import i18n from "i18next";
import {
  useLanguageItems,
  useFlagByLanguageCode,
} from "@/lib/hooks/useLanguage";

type DropDownType = {
  label: string;
  value: string;
};

interface MenuAnchorsState {
  lang: HTMLElement | null;
  filter: HTMLElement | null;
  mobileMore: HTMLElement | null;
}

export default function PrimarySearchAppBar({ t }: { t: any }) {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const languageItems = useLanguageItems();

  const currentLanguageCode = i18n.language;
  const getFlagByLanguageCode = useFlagByLanguageCode(
    currentLanguageCode,
    languageItems
  );
  const uniqueGenres = useMemo(
    () => getUniqueGenres(movies.movies),
    [movies.movies]
  );

  const [menuAnchors, setMenuAnchors] = useState<MenuAnchorsState>({
    lang: null,
    filter: null,
    mobileMore: null,
  });
  const [selectedLanguage, setSelectedLanguage] = useState(
    getFlagByLanguageCode
  );

  const handleMenuOpen = useCallback(
    (menuType: keyof MenuAnchorsState, anchor: HTMLElement) => {
      setMenuAnchors((prevAnchors) => ({ ...prevAnchors, [menuType]: anchor }));
    },
    []
  );

  const handleMenuClose = useCallback(() => {
    setMenuAnchors({ lang: null, filter: null, mobileMore: null });
  }, []);

  const handleLanguageSelect = useCallback(
    (language: DropDownType) => {
      i18n.changeLanguage(language.value);
      setSelectedLanguage(language.label);
      handleMenuClose();
    },
    [handleMenuClose]
  );

  const handleSelectedGenre = useCallback(
    (filter: DropDownType) => {
      dispatch(movieSlice.actions.filterByGenre(filter.value));
    },
    [dispatch]
  );

  return (
    <AppBar>
      <Container disableGutters maxWidth="lg">
        <Toolbar>
          <Typography noWrap component="div">
            <Logo />
          </Typography>
          <Search title={t("search")} />
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
