"use client";
import React from "react";
import { Menu, MenuItem } from "@mui/material";

export interface DropdownMenuItem {
  label: string;
  value: string;
  icon?: JSX.Element;
}

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onItemSelect: (value: string) => void;
}

export default function DropdownMenu({ items, anchorEl, open, onClose, onItemSelect }: DropdownMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={onClose}
    >
      {items.map((item) => (
        <MenuItem
          key={item.value}
          onClick={() => {
            onItemSelect(item.value);
            onClose();
          }}
        >
          {item.icon}
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
}
