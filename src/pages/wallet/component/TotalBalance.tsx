import { Box, Grid } from "@mui/material";



export default function TotalBalance(){
    
   
    return(
        <Grid size={8} sx={{width:"50%",backgroundColor:"#1e2b2b",borderRadius:1,padding:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
            <Box component="span" sx={{fontWeight:600}}>Total Balance </Box>
             <Box component="span" sx={{color:"#64dd17"}}>$ 7,450.24 </Box>
             <Box  sx={{display:"flex",gap:0.5}}> 
                <Box></Box>
                <Box sx={{color:"#64dd17"}}>+2.4%</Box>
                <Box>Today </Box>
             </Box>
        </Grid>
    )
}