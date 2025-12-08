import { Box, Grid } from "@mui/material";
import DasboardSvg from "../icon/Dasboard";
import WalletSvg from "../icon/Wallet";
import IncomeSvg from "../icon/Income";
import MessageSvg from "../icon/Message";
import SettingSvg from "../icon/Setting";
import LogoutSvg from "../icon/Logout";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const sideBarElement = [
    { name: "Dashboard", svg: <DasboardSvg />, path: "/" },
    { name: "Wallet", svg: <WalletSvg />, path: "/wallet" },
    { name: "Income", svg: <IncomeSvg />, path: "/income" },
    { name: "Message", svg: <MessageSvg />, path: "/message" },
    { name: "Setting", svg: <SettingSvg />, path: "/setting" },
  ];
  return (
    <Grid
      size={2}
      container
      direction="column"
      justifyContent="space-between"
      sx={{ padding: 2, color: "#bdbdbd" }}
    >
      <Grid
        container
        direction="column"
        rowSpacing={4}
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          component="img"
          src="cryptologo.jpg"
          sx={{
            width: 60,
            height: 50,
            borderRadius: 2,
            alignSelf: "center",
          }}
        ></Box>
        {sideBarElement.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Box
              key={index}
              component={RouterLink}
              to={item.path}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
                textDecoration: "none",
                color: isActive ? "white" : "#bdbdbd",
                "&:hover": { color: "white" },
              }}
            >
              <Box
                sx={{
                  color: isActive ? "white" : "#bdbdbd",
                  "&:hover": { color: "white" },
                }}
              >
                {" "}
                {item.svg}
              </Box>

              <Box component="span">{item.name}</Box>
            </Box>
          );
        })}
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
