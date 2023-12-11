import { styled } from "@mui/material/styles";
import { Card, Box, CardMedia, CardContent, Typography } from "@mui/material";

const h = 350;

export const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  height: h,
  backgroundColor: "none",
  position: "relative",
  marginRight: theme.spacing(2),
}));

export const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  height: h,
  minWidth: "20%",
  cursor: "pointer",
  transition: theme.transitions.create("transform"),
}));

export const CustomCardContent = styled(CardContent)({
  background: "linear-gradient(30deg, #000000bd 30%, #ff611182 90%)",
  position: "absolute",
  bottom: 0,
  color: "white",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const CustomTypography = styled(Typography)(({ marginTop = 0 }) => ({
  color: "white",
  padding: 0,
  margin: 0,
  marginTop: marginTop as number,
}));

export const Tag = styled(Box)<{ backgroundColor?: string; color?: string }>(
  ({ theme, backgroundColor = '#fff4', color = 'white' }) => ({
    border: '1px solid white',
    padding: '3px 8px',
    borderRadius: '20px',
    background: backgroundColor,
    color: color,
    display: 'inline-block',
    fontSize: '12px',
    marginRight: '4px',
    marginTop: '2px',
    textAlign: 'center',
  })
);

export const Rating = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
}));
