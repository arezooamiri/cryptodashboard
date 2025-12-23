import { Box, Card } from "@mui/material";

interface CoinItem{
    id:string,
    image:string,
    symbol:string,
    current_price:number,
    market_cap_change_percentage_24h:number,
}
 type CoinListProps ={
    item:CoinItem;
    onSelectedId :(id:string)=> void
 }


export default function CoinList({item,onSelectedId}:CoinListProps){
      const changeColor = item.market_cap_change_percentage_24h >= 0;
       const price = item.current_price?.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                });
    return(
      
        <Card
                    variant="outlined"
                    key={item.id}
                    sx={{
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                      },
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: "transparent",
                      boxShadow: "revert",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: 1,
                      color: "white",
                    }}
                    onClick={() => onSelectedId(item.id)}
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

    )
}