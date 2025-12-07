import { Box, Grid, Link } from "@mui/material";
import DasboardSvg from "../icon/Dasboard";
import WalletSvg from "../icon/Wallet";
import IncomeSvg from "../icon/Income";
import MessageSvg from "../icon/Message";
import SettingSvg from "../icon/Setting";
import LogoutSvg from "../icon/Logout";

export default function Sidebar() {
  const sideBarElement = [
    { name: "Dashboard", svg: <DasboardSvg /> },
    { name: "Wallet", svg: <WalletSvg /> },
    { name: "Income", svg: <IncomeSvg /> },
    { name: "Message", svg: <MessageSvg /> },
    { name: "Setting", svg: <SettingSvg /> },
  ];
  return (
    <Grid
      size={2}
      container
      direction="column"
      justifyContent="space-between"
      sx={{ padding: 2, color: "#bdbdbd" }}
    >
      <Grid container direction="column" rowSpacing={4} sx={{ padding: 2 }}>
        {sideBarElement.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            {item.svg}
            <Box component="span">{item.name}</Box>
          </Box>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 1,
        }}
      >
        <LogoutSvg />
        <Box component="span"> Logout</Box>
      </Box>
    </Grid>
  );
}
