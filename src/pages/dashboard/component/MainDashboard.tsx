import { Grid } from "@mui/material";
import ChartDetail from "./ChartDetail";
import MarketOverview from "../../../shared/MarketOverview";

import PaymentHistory from "./PaymentHistory";
import QuickTrade from "./QuickTrade";

export default function MainDashboard({
  selectedId,
  onSelectId,
}: {
  selectedId: string;
  onSelectId: (id: string) => void;
}) {
  return (
    <Grid container spacing={2}>
      <Grid size={8} container direction="row" spacing={1}>
        <Grid size={12}>
          {" "}
          <ChartDetail id={selectedId} />
        </Grid>
        <Grid size={12} direction="column" container spacing={4}>
          <Grid container spacing={2}>
            <PaymentHistory />
            <QuickTrade />
          </Grid>
        </Grid>
      </Grid>
      <MarketOverview onSelectId={onSelectId} />
    </Grid>
  );
}
