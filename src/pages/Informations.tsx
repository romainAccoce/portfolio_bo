import { useEffect, useState } from "react";
import Slide from "../components/animations/Slide";
import { Typography } from "@mui/material";

function Informations() {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => setCondition(true), 0.3);
  }, []);

  return (
    <Slide condition={condition}>
      <Typography>Informations</Typography>
    </Slide>
  );
}

export default Informations;
