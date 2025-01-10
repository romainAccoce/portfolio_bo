import { SxProps } from "@mui/material";
import { colors } from "../../config/theme";

export const ListItemStyle: SxProps = {
  backgroundColor: colors.white,
  height: "5rem",
  borderRadius: "10px",
  width: "100%",
  borderLeft: `10px solid ${colors.highlightBlue}`,
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",
};
