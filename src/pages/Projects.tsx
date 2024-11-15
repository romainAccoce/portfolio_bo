import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slide from "../components/animations/Slide";

function Projects() {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => setCondition(true), 0.3);
  }, []);

  return (
    <Slide condition={condition}>
      <Typography>Projects</Typography>
    </Slide>
  );
}

export default Projects;
