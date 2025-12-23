import { Box,  Card, Grid } from "@mui/material";
import TradeButtons from "../../../shared/TradeButton";



export default function QuickTrade(){
    return(
        <Grid
        size={6}
         sx={{backgroundColor:"#1e2b2b",borderRadius:2,boxShadow:"revert",display:"flex",flexDirection:"column",padding:1,gap:1}}
        >
           <Box>Make Quick Trades</Box>
             <TradeButtons/>
            <Box sx={{display:"flex",flexDirection:"column",gap:1,padding:2}}>
               <Card sx={{backgroundColor:"#212121",width:"100%",padding:0.5}}>
                   <Box sx={{fontSize:12}}>
                      <Box component="span" sx={{color:"white"}}>Spend</Box>
                      <Box sx={{color:"#616161"}}>16,500</Box>
                   </Box>
               </Card>
               <Card sx={{backgroundColor:"#212121",width:"100%",padding:0.5}}>
                <Box sx={{fontSize:12}}>
                      <Box component="span" sx={{color:"white"}}>Receive</Box>
                      <Box sx={{color:"#616161"}}>0</Box>
                   </Box>
               </Card>
            </Box>
         </Grid>
    )
}