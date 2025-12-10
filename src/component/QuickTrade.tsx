import { Box, ButtonBase, Card, Grid } from "@mui/material";


export default function QuickTrade(){
    return(
        <Grid
        size={6}
         sx={{backgroundColor:"#424242",borderRadius:2,boxShadow:"revert",display:"flex",flexDirection:"column",padding:1,gap:1}}
        >
           <Box>Make Quick Trades</Box>
             <Box sx={{display:"flex",width:"100%",fontSize:8}}>
               <ButtonBase sx={{backgroundColor:"#64dd17",color:"black",borderRadius:15,width:"50%",height:20,fontSize:12}}>Buy</ButtonBase>
               <ButtonBase sx={{backgroundColor:"#616161",color:"white",borderRadius:15,width:"50%",height:20,fontSize:12}}>Sell</ButtonBase>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",gap:0.5,padding:1}}>
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