import { Box, Button, ButtonBase, Card, Grid, Typography } from "@mui/material";
import UseCoins from "../Api/Coinapi";



export default function MarketOverview(){
    const {data,isLoading,error}=UseCoins()
     
    if (isLoading)
        return(
            <Typography>data is loading </Typography>
        )
    
    if (error){
       return(
         <Typography>Error loading</Typography>
       )
    }

    return(
        <Grid size={4}  sx={{backgroundColor:"#424242",borderRadius:2,boxShadow:"revert",padding:2 ,display:"flex",flexDirection:"column",gap:1,overflowY:"auto"}}>
            <Box component="span" sx={{fontSize:12,fontWeight:500}}>Market Overview</Box>
            <Box sx={{display:"flex",width:"100%",fontSize:8}}>
               <ButtonBase sx={{backgroundColor:"#64dd17",color:"black",borderRadius:15,width:"50%",height:20,fontSize:12}}>Popular</ButtonBase>
               <ButtonBase sx={{backgroundColor:"#616161",color:"white",borderRadius:15,width:"50%",height:20,fontSize:12}}>New Listing</ButtonBase>
            </Box>
            <Box sx={{display:'flex',flexDirection:"column",gap:0.5}}>
               {data?.map((item,index)=>(
                 <Card variant="outlined" key={index} sx={{display:"flex", justifyContent:"space-between",backgroundColor:"transparent",boxShadow:"revert",fontSize:12,fontWeight:700,padding:1,color:"white"}}>
                    <Box sx={{display:"flex",gap:0.5}}>
                        <Box component="img" src={item.image} sx={{width:20,height:20}}></Box>
                        <Box component="span">{item.symbol.toUpperCase()} </Box>
                    </Box>
                    <Box component="span">{item.current_price}</Box>
                    <Box sx={{color:"orange"}}>{item.market_cap_change_percentage_24h}</Box>
                </Card>
               ))}
            </Box>
        </Grid>
    )
}