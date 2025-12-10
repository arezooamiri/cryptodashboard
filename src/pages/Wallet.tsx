import { Box, Grid } from "@mui/material";
import Header from "../component/Header";

export default function Wallet() {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid size={12}>
        <Header />
      </Grid>

      <Grid size={12} sx={{ height: "80vh", paddingRight: 3 }}>
       
      </Grid>
    </Grid>
  );
}
