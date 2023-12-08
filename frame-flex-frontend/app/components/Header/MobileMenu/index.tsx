"use client";
import React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  mobileMoreAnchorEl: HTMLElement | null;
  handleMenuClose: () => void;
  handleFilterMenuOpen: () => void;
  handleLangMenuOpen: () => void;
  selected?: string | React.ReactNode;
}

export default function MobileMenu({
  isMobileMenuOpen,
  mobileMoreAnchorEl,
  handleMenuClose,
  handleFilterMenuOpen,
  handleLangMenuOpen,
  selected,
}: MobileMenuProps) {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="mobile-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleFilterMenuOpen}>
        <IconButton color="inherit">
          <FilterAltOutlinedIcon />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleLangMenuOpen}>
        <IconButton color="inherit">
          <GTranslateOutlinedIcon />
        </IconButton>
        <p>{selected}</p>
      </MenuItem>
    </Menu>
  );
}
