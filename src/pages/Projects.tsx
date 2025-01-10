import { useEffect, useState } from "react";
import Slide from "../components/animations/Slide";
import { getProjects } from "../api/api";
import { ProjectType } from "../types/projects";
import List from "../components/list/List";
import { Typography } from "@mui/material";
import ListItem from "../components/list/ListItem";

function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProjects();
      if (response && response.data) {
        setProjects(response.data);
      }
    };
    getData().catch(console.error);
  }, []);

  const items = projects.map((project) => (
    <ListItem
      key={`project-${project.id}`}
      content={[
        <Typography key={`project-${project.id}-${project.attributes.name}`}>
          {project.attributes.name}
        </Typography>,
      ]}
    />
  ));

  return (
    <Slide condition={projects.length > 0}>
      <List title="Projects" items={items} />
    </Slide>
  );
}

export default Projects;
