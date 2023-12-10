import { styled, AppBar as MuiAppBar, Box } from "@mui/material";

export const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  background: "rgba(33, 46, 57, 0.5)",
  backdropFilter: "blur(8px)",
  boxShadow: theme.shadows[4],
  border: "1px solid rgba(255, 255, 255, 0.18)",
  // TODO: Fix this
  //   [theme.breakpoints.up('sm')]: {
  //     // Responsive styles if needed
  //   },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: theme.zIndex.appBar,
}));
