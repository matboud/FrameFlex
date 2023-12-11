import React from "react";
import { IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

interface FilterButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  [key: string]: any;
}

export default React.memo(function FilterButton({
  onClick,
  icon = <FilterAltOutlinedIcon />,
  ...props
}: FilterButtonProps) {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="filter options"
      aria-haspopup="true"
      onClick={onClick}
      color="inherit"
      {...props}
    >
      {icon}
    </IconButton>
  );
});
