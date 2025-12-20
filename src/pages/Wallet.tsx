import {  Grid } from "@mui/material";
import Header from "../component/Header";
import TotalBalance from "../component/TotalBalance";
import RecentlyActivity from "../component/RecentlyActivity";
import AssetsList from "../component/AssetsList";
import MarketOverview from "../component/MarketOverview";
import { useState } from "react";

export default function Wallet() {
  const [_, setSelectId] = useState<string>("bitcoin");
  return (
    <Grid container direction="row" spacing={1}  sx={{ minHeight: "100vh" }}>
      <Grid size={12}>
        <Header onSelectId={setSelectId} />
      </Grid>

      <Grid size={12} sx={{ paddingBottom:1, paddingRight: 3 }} container >
        <Grid container size={8}  spacing={1} sx={{display:"flex",justifyContent:"center"}} >
          <TotalBalance />
          <AssetsList />
          <RecentlyActivity />
        </Grid>
        <MarketOverview onSelectId={setSelectId} />
      </Grid>
    </Grid>
  );
}
