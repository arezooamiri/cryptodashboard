import { Grid } from "@mui/material";
import Header from "../component/Header";
import MainDashboard from "../component/MainDashboard";

export default function Dashboard() {
  return (
    <Grid container direction="row" spacing={1} >
      <Grid size={12}>
        <Header />
      </Grid>

      <Grid size={12}>
        <MainDashboard />
      </Grid>
    </Grid>
  );
}
