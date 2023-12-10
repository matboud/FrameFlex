import Image from "next/image";
import { styled } from "@mui/material";

export const StyledLogo = styled(Image)(({ theme }) => ({
  width: "34px",
  height: "40px",
  paddingTop: "10px",
}));
