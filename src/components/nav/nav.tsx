import { Box, IconButton, Tab, Tabs } from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { ExpandButtonStyle, NavStyle } from "./nav.style";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

function Nav() {
  const [value, setValue] = useState<string>("projects");
  const [expanded, setExpanded] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`)
  };

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  return (
    <Box sx={NavStyle}>
      <IconButton
        sx={ExpandButtonStyle}
        color="inherit"
        disableRipple
        onClick={() => setExpanded(!expanded)}
      >
        <ChevronLeftRoundedIcon fontSize="large"/>
      </IconButton>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Navigation menu"
        textColor="inherit"
      >
        {
          routes.map((route, i )=> <Tab key={`${value}_${i}`} iconPosition="start" icon={route.icon} label={expanded ? route.path : " "} value={route.path} {...a11yProps(i)} />)
        }
      </Tabs>
    </Box>
  );
}

export default Nav;
