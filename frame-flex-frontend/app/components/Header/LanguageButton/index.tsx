import React from "react";
import { IconButton } from "@mui/material";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";

interface LanguageButtonProps {
  onClick: (event: any) => void;
  selectedLanguage: string;
}

export default function LanguageButton({
  onClick,
  selectedLanguage,
}: LanguageButtonProps) {
  const renderLanguageButton = () => {
    return selectedLanguage;
  };

  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="language options"
      aria-haspopup="true"
      onClick={onClick}
      color="inherit"
    >
      <span style={{ fontSize: "18px" }}>{renderLanguageButton()}</span>
    </IconButton>
  );
}
