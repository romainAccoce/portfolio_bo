import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ContentStyle, ListStyle } from "./List.style";

interface Props {
  title: string;
  items: ReactNode[];
}

function List({ title, items }: Props) {
  return (
    <Box sx={ListStyle}>
      <Box sx={ListStyle}>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
      </Box>
      <Box sx={ContentStyle}>{items}</Box>
    </Box>
  );
}

export default List;
