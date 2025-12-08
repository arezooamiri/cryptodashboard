import { Box, Card, Grid } from "@mui/material";
import ChartDetail from "./ChartDetail";
import MarketOverview from "./MarketOverview";
import QuickTrade from "./QuickTrade";

export default function MainDashboard() {
  return (
    <Grid container spacing={2} sx={{ height: "80vh" }}>
      <Grid size={8} container direction="row" spacing={1} >
        <Grid
          size={12}
          sx={{
            backgroundColor: "#424242",
            borderRadius: 2,
            boxShadow: "revert",
            height:"40vh"
          }}
        >
          {" "}
          <ChartDetail />
        </Grid>
        <Grid
          size={12}
          direction="column"
          container
          spacing={4}
         
          
        >
          <Grid container spacing={2}  sx={{height:"40vh"}}>
            <MarketOverview />
            <QuickTrade />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={4}>
        <Card
          sx={{
            backgroundColor: "#424242",
            borderRadius: 2,
            boxShadow: "revert",
            height:"82vh",
          }}
        //   component 
        >
          <Box>payment history </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
