import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Expansion from "../animations/Expansion";
import useMeasure from "react-use-measure";
import Slide from "../animations/Slide";
import User from "../user/User";
import { NavStyle, TopNavContainerStyle } from "./Nav.style";
import Rotation from "../animations/Rotation";

function Nav() {
  const [value, setValue] = useState<string>("projects");
  const [expanded, setExpanded] = useState<boolean>(false);
  const navigate = useNavigate();
  const [ref, { width }] = useMeasure();

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={NavStyle}>
      <Expansion width={width}>
        <Box sx={TopNavContainerStyle}>
          <User expanded={expanded} />
          <IconButton
            color="inherit"
            disableRipple
            onClick={() => setExpanded(!expanded)}
          >
            <Rotation condition={expanded}>
              <ChevronRightRoundedIcon fontSize="large" />
            </Rotation>
          </IconButton>
        </Box>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Navigation menu"
          textColor="inherit"
          ref={ref}
        >
          {routes.map((route, i) => (
            <Tab
              key={`${value}_${i}`}
              iconPosition="start"
              icon={route.icon}
              label={
                <Slide condition={expanded}>
                  <Typography>{expanded ? route.path : ""}</Typography>
                </Slide>
              }
              value={route.path}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </Expansion>
    </Box>
  );
}

export default Nav;
