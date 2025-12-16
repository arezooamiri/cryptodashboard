import { Box, Button, ButtonBase, Card, Grid, Typography } from "@mui/material";
import UseCoins from "../Api/Coinapi";

type MarketOverviewProps = {
  onSelectId: (id: string) => void;
};

export default function MarketOverview({ onSelectId }: MarketOverviewProps) {
  const { data, isLoading, error } = UseCoins();

  if (isLoading) return <Typography>data is loading </Typography>;

  if (error) {
    return <Typography>Error loading</Typography>;
  }

  return (
    <Grid
      size={4}
      sx={{
        backgroundColor: "#424242",
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
      <Box sx={{ display: "flex", width: "100%", fontSize: 8 }}>
        <ButtonBase
          sx={{
            backgroundColor: "#64dd17",
            color: "black",
            borderRadius: 15,
            width: "50%",
            height: 20,
            fontSize: 12,
          }}
        >
          Popular
        </ButtonBase>
        <ButtonBase
          sx={{
            backgroundColor: "#616161",
            color: "white",
            borderRadius: 15,
            width: "50%",
            height: 20,
            fontSize: 12,
          }}
        >
          New Listing
        </ButtonBase>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        {data?.map((item) => {
          const change = item.market_cap_change_percentage_24h ?? 0;
          const changeColor = change >= 0;
          const price = item.current_price?.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          });
          return (
            <Card
              variant="outlined"
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "transparent",
                boxShadow: "revert",
                fontSize: 12,
                fontWeight: 700,
                padding: 1,
                color: "white",
              }}
              onClick={() => onSelectId(item.id)}
            >
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Box
                  component="img"
                  src={item.image}
                  sx={{ width: 20, height: 20 }}
                ></Box>
                <Box component="span">{item.symbol.toUpperCase()} </Box>
              </Box>
              <Box component="span">{price}</Box>
              <Box sx={{ color: changeColor ? "#22C55E" : "#EF4444" }}>
                {item.market_cap_change_percentage_24h}
              </Box>
            </Card>
          );
        })}
      </Box>
    </Grid>
  );
}
