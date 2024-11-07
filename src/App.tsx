import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AppStyle } from "./App.style";
import Nav from "./components/nav/nav";

function App() {
  return (
    <Box sx={AppStyle}>
      <Nav />
      <Box sx={{ padding: "2rem" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
