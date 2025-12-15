import { Box } from "@mui/material";
import DropDown from "./Dropdown";


export default function Profile(){
    return(
        <Box sx ={{display:"flex",justifyContent:"space-between",gap:1}}>
           <Box component="img" src="kazerun-lake.jpg" sx={{width:40,height:40,borderRadius:"50%",border:"1px solid white"}}></Box>
           <Box sx={{display:"flex",flexDirection:"column"}}>
              <Box sx={{fontSize:10}}>Sam Smith</Box>
              <Box sx={{fontSize:8}}>Marketing Administrator</Box>
           </Box>
           <DropDown/>
        </Box>
    )
}