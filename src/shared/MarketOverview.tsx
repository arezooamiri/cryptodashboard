import { Box, Grid, Skeleton, Typography } from "@mui/material";
import UseCoins from "../Api/Coinapi";
import { buttonAactive, selectCoin } from "../store";
import SegmentedButtons from "./segmentButton";
import CoinList from "./CoinList";

type MarketOverviewProps = {
  onSelectId: (id: string) => void;
};

export default function MarketOverview({ onSelectId }: MarketOverviewProps) {
  const { data, isLoading, error } = UseCoins();
  const { isActive } = buttonAactive();
  const selectCoins = selectCoin((state) => state.selectCoins);

 

  if (error) {
    return <Typography>Error loading</Typography>;
  }

  return (
    <Grid
      size={4}
      sx={{
        backgroundColor: "#1e2b2b",
        borderRadius: 2,
        boxShadow: "revert",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflowY: "auto",
      }}
    >
      <Box component="span" sx={{ fontSize: 12, fontWeight: 500 }}>
        Market Overview
      </Box>
      <SegmentedButtons />

      {isLoading ? (
        <Skeleton variant="rounded" width="100%" height="100%" />
      ) : (
        <Box>
          {isActive ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {data?.map((item) => {
              return (
                  <CoinList item={item} onSelectedId={onSelectId}/>)
              })}
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
             
              {selectCoins?.map((item) => {
               return (
                  <CoinList item={item} onSelectedId={onSelectId} />
                );
              })}
            </Box>
          )}
        </Box>
      )}
    </Grid>
  );
}
