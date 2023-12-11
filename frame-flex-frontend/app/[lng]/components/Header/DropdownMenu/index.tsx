"use client";
import React, { memo, useCallback } from "react";
import { Menu, MenuItem } from "@mui/material";
import { DropdownMenuType } from "./types";
import Link from "next/link";

interface DropdownMenuProps {
  items: DropdownMenuType[];
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onItemSelect: (obj: DropdownMenuType) => void;
  language?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = memo(
  ({ items, anchorEl, open, onClose, onItemSelect, language }) => {
    const handleItemClick = useCallback(
      (item: DropdownMenuType) => {
        onItemSelect(item);
        onClose();
      },
      [onItemSelect, onClose]
    );

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
          <MenuItem key={item.value} onClick={() => handleItemClick(item)}>
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    );
  }
);

export default DropdownMenu;
