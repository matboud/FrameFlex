"use client";
import React, { ReactNode } from "react";
import { StyledAppBar, StyledBox } from "./AppBar.styles";

interface HeaderAppBarProps {
  children: ReactNode;
}

export default function HeaderAppBar({ children }: HeaderAppBarProps) {
  return (
    <StyledBox sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">{children}</StyledAppBar>
    </StyledBox>
  );
}
