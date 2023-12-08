import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";

// export const CustomCard = styled(Button)<ButtonProps>(() => ({
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   border: 0,
//   borderRadius: 3,
//   color: "white",
//   padding: "0 30px",
//   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
// }));

const w = 160;
const h = 230;

export const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: w,
  height: h,
  backgroundColor: "none",
  position: "relative",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    // Adjustments for mobile view go here
  },
}));

export const CustomCardMedia = styled(CardMedia)({
  height: h,
});

export const CustomCardContent = styled(CardContent)({
  // Add styling for the content section
  background: "linear-gradient(0deg, #170005a1 30%, #ff8e5300 90%)",
  position: "absolute",
  bottom: 0,
  color: "white",
});

export const CustomTypography = styled(Typography)(({ theme }) => ({
  color: "white",
}));
