import { Grid } from "@mui/material";

import { useState } from "react";
import Header from "../../shared/Header";

import AssetsList from "./component/AssetsList";
import TotalBalance from "./component/TotalBalance";
import MarketOverview from "../../shared/MarketOverview";
import RecentlyActivity from "./component/RecentlyActivity";

export default function Wallet() {
  const [_, setSelectId] = useState<string>("bitcoin");
  return (
    <Grid container direction="row" spacing={1} sx={{ minHeight: "100vh" }}>
      <Grid size={12}>
        <Header onSelectId={setSelectId} />
      </Grid>

      <Grid size={12} sx={{ paddingBottom: 1, paddingRight: 3 }} container>
        <Grid
          container
          size={8}
          spacing={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TotalBalance />
          <AssetsList />
          <RecentlyActivity />
        </Grid>
        <MarketOverview onSelectId={setSelectId} />
      </Grid>
    </Grid>
  );
}
