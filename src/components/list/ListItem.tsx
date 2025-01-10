import { Box } from "@mui/material";
import { ReactNode } from "react";
import { ListItemStyle } from "./ListItem.style";

interface Props {
  content: ReactNode[];
}

function ListItem({ content }: Props) {
  return (
    <Box sx={ListItemStyle}>
      <Box>{content}</Box>
    </Box>
  );
}

export default ListItem;
