import { SxProps } from "@mui/material/styles";
import { colors } from "../../config/theme";

export const NavStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: colors.dark,
  color: colors.light,
  position: "relative",
  width: "fit-content",
};

export const TopNavContainerStyle: SxProps = {
  position: "absolute",
  top: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};
