import {  Grid } from "@mui/material";
import ChartDetail from "./ChartDetail";
import MarketOverview from "./MarketOverview";
import QuickTrade from "./QuickTrade";
import PaymentHistory from "./PaymentHistory";

export default function MainDashboard() {
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
          <ChartDetail />
        </Grid>
        <Grid size={12} direction="column" container spacing={4}>
          <Grid container spacing={2} sx={{ height: "30vh" }}>
            <MarketOverview />
            <QuickTrade />
          </Grid>
        </Grid>
      </Grid>
      <PaymentHistory />
    </Grid>
  );
}
