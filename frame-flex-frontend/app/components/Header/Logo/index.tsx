"usse client";
import React from "react";
import Image from "next/image";
import { styled } from "@mui/material";

const StyledLogo = styled(Image)(({ theme }) => ({
  width: "34px",
  height: "40px",
  paddingTop: "10px",
}));

export default function HeaderLogo() {
  return (
    <StyledLogo
      src="/FF-no-background.png"
      width="40"
      height="36"
      alt="FrameFlex logo"
      className="logo"
    />
  );
}
