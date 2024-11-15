import { useEffect, useState } from "react";
import Slide from "../components/animations/Slide";
import { Typography } from "@mui/material";

function Users() {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => setCondition(true), 0.3);
  }, []);

  return (
    <Slide condition={condition}>
      <Typography>Users</Typography>
    </Slide>
  );
}

export default Users;
