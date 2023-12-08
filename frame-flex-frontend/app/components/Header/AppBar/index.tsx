"use client";
import React, { ReactNode } from "react";
import { styled, AppBar as MuiAppBar, Box } from "@mui/material";

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  background: "rgba(33, 46, 57, 0.5)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 4px 12px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: 100,
}));

interface HeaderAppBarProps {
  children: ReactNode;
}

export default function HeaderAppBar({ children }: HeaderAppBarProps) {
  return (
    <StyledBox sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        {children}
      </StyledAppBar>
    </StyledBox>
  );
}
