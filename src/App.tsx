import "./App.css";
import { Grid } from "@mui/material";
import Sidebar from "./component/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Income from "./pages/Income";
import Message from "./pages/Message";
import Setting from "./pages/Setting";

function App() {
  return (
    <Grid
      container
      spacing={1}
      sx={{ backgroundColor: "#212121", minHeight: "100vh", minWidth: "100vw" }}
    >
      <Sidebar />
      <Grid size={10}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/income" element={<Income />} />
          <Route path="/message" element={<Message />} />
          <Route path="/setting " element={<Setting />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
