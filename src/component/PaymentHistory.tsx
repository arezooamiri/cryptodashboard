import { Box, Card, Grid } from "@mui/material";

export default function PaymentHistory() {
  return (
    <Grid size={6}>
      <Card
        sx={{
          backgroundColor: "#424242",
          borderRadius: 2,
          boxShadow: "revert",
          height: "30vh",
          padding:2,
          display:"flex",
          flexDirection:"column",
          gap:1,
          color:"white"
        }}
        //   component
      >
       <Box>Payment history</Box> 
       <Box sx={{display:"flex",justifyContent:"space-between",fontSize:12,color:"white"}}>
           <Box>Name</Box>
           <Box>Price</Box>
           <Box>Status</Box>
           <Box>Amount</Box>
       </Box>
      </Card>
    </Grid>
  );
}
