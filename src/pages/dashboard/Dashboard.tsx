import { Grid } from "@mui/material";

import MainDashboard from "./component/MainDashboard";
import {  useState } from "react";
import Header from "../../shared/Header";

export default function Dashboard() {
  const [selectdId, setSelectId] = useState("bitcoin");



  return (
    <Grid container direction="row" spacing={1}>
      <Grid size={12}>
        <Header onSelectId={setSelectId} />
      </Grid>

      <Grid size={12} sx={{ height: "80vh", paddingRight: 3 }}>
        <MainDashboard selectedId={selectdId} onSelectId={setSelectId} />
      </Grid>
    </Grid>
  );
}
