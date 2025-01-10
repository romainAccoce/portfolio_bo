import { Avatar, Box, Typography } from "@mui/material";
import { UserContainer } from "./user.style";
import Slide from "../animations/Slide";

interface Props {
  expanded: boolean;
}

function User({ expanded }: Props) {
  return (
    <Box sx={UserContainer}>
      <Avatar>G</Avatar>
      <Slide condition={expanded}>
        <Typography>{expanded ? "Guest" : ""}</Typography>
      </Slide>
    </Box>
  );
}

export default User;
