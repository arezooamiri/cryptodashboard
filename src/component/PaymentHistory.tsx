import { Box, Card, Grid } from "@mui/material";

export default function PaymentHistory() {
  return (
    <Grid size={4}>
      <Card
        sx={{
          backgroundColor: "#424242",
          borderRadius: 2,
          boxShadow: "revert",
          height: "82vh",
        }}
        //   component
      >
        <Box>payment history </Box>
      </Card>
    </Grid>
  );
}
