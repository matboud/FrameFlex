import { styled } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const w = 160;
const h = 230;

export const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: w,
  height: h,
  backgroundColor: "none",
  position: "relative",
  marginRight: theme.spacing(2),
  "&:hover": {
    //TODO: handdle this
    // transform: "scale(1.1)",
    // transition: theme.transitions.create("transform"),
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
