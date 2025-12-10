import {  Grid } from "@mui/material";
import ChartDetail from "./ChartDetail";
import MarketOverview from "./MarketOverview";
import QuickTrade from "./QuickTrade";
import PaymentHistory from "./PaymentHistory";
import { useState } from "react";


export default function MainDashboard() {
   const [selectid,setSelectId]=useState<string>("bitcoin")
  return (
    <Grid container spacing={2} sx={{ height: "80vh" }}>
      <Grid size={8} container direction="row" spacing={1}>
        <Grid
          size={12}
          sx={{
            backgroundColor: "#424242",
            borderRadius: 2,
            boxShadow: "revert",
            height: "50vh",
          }}
        >
          {" "}
          <ChartDetail id={selectid}/>
        </Grid>
        <Grid size={12} direction="column" container spacing={4}>
          <Grid container spacing={2} sx={{ height: "30vh" }}>
            <PaymentHistory />
            <QuickTrade />
          </Grid>
        </Grid>
      </Grid>
      <MarketOverview  onSelectId={setSelectId}/>
      
    </Grid>
  );
}
