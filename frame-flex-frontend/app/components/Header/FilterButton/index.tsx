// FilterButton/index.tsx
import React from 'react';
import { IconButton } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

interface FilterButtonProps {
  onClick: (event: any) => void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="filter options"
      aria-haspopup="true"
      onClick={onClick}
      color="inherit"
    >
      <FilterAltOutlinedIcon />
    </IconButton>
  );
}
