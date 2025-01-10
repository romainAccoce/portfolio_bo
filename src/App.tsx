import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AppStyle, PageContentStyle } from "./App.style";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <Box sx={AppStyle}>
      <Nav />
      <Box sx={PageContentStyle}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
