import { SxProps } from "@mui/material";
import { colors } from "./config/theme";

export const AppStyle: SxProps = {
  width: "100dvw",
  height: "100dvh",
  display: "flex",
  flexDirection: "row",
  backgroundColor: colors.lightGrey,
};

export const PageContentStyle: SxProps = {
  padding: "2rem",
  flex: 1,
};
