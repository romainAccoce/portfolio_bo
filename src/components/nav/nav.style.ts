import { SxProps } from "@mui/material/styles";
import { colors } from "../../config/theme";

export const NavStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.dark,
    color: colors.light,
    position: "relative",
};

export const ExpandButtonStyle: SxProps = {
    position: "absolute",
    top: "1rem",
    right: ".5rem",
}