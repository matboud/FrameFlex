import React from "react";
import { IconButton } from "@mui/material";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";

interface LanguageButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  selectedLanguage: string;
}

export default React.memo(function LanguageButton({
  onClick,
  selectedLanguage,
  ...props
}: LanguageButtonProps) {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label={`Select language - currently ${selectedLanguage}`}
      aria-haspopup="true"
      onClick={onClick}
      color="inherit"
      {...props}
    >
      <span style={{ marginLeft: 8, fontSize: "18px" }}>{selectedLanguage}</span>
    </IconButton>
  );
});
