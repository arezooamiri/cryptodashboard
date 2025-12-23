import { Box, Grid } from "@mui/material";
import { transaction } from "../../../data/transactions";


export default function RecentlyActivity() {
  return (
    <Grid
      size={8}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        backgroundColor: "#1e2b2b",
        width: "100%",
        padding: 1,
        borderRadius: 0.5,
      }}
    >
      <Box> Recently Activity :</Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {transaction.map((item, index) => {
          const day = new Date(item.timestamp);
          const formattedDate = day.toLocaleString("en-US", {
            year: "numeric",
            month: "short", // Jan, Feb, ...
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 1,
                border: 1,
                borderColor: " #212121",
                borderRadius: 0.5,
                fontSize: 12,
              }}
            >
              <Box>{item.type}</Box>
              <Box sx={{color:"orange"}}>{formattedDate}</Box>
              <Box>{item.status}</Box>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}
