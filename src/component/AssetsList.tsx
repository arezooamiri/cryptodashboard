import { Box, Grid } from "@mui/material";

import { balances } from "../data/balance";
import getPriceSymbol from "../helper/helperFunction";

export default function AssetsList() {
  const balance = balances[0];

  return (
    <Grid
      size={8}
      sx={{
        backgroundColor: "#424242",
        width: "100%",
        padding: 2,
        borderRadius: 1,
      }}
    >
      <Box sx={{ fontWeight: 600 }}>Asset List </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {Object.entries(balance).map(([symbol, amount]) => {
            const price=getPriceSymbol(symbol) ??0;
            const totalPrice=(price*amount).toFixed(2)
             return(
          <Box
           
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 1,
              border:1,
              borderColor:" #212121",
              borderRadius:0.5,
            }}
          >
            <Box sx={{display:"flex",gap:1,alignItems:'center'}}>
                <Box sx={{width:15,height:15,borderRadius:"50%",backgroundColor:"#ff9800"}}/>
                <Box>{symbol}</Box>
                </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",gap:1}}> 
                <Box sx={{color:"#64dd17"}}>{amount}</Box>
                <Box>{symbol}</Box>
                 </Box>
            <Box sx={{color:"#64dd17"}}>$ {totalPrice}</Box>
          </Box>)
})}
      </Box>
    </Grid>
  );
}
