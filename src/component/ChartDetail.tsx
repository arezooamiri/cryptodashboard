import { Box, Button} from "@mui/material";
import { useEffect, useState } from "react";
import { getCoinHistory } from "../Api/Coinapi";

type coinHistorypoint={
  timestamp:number;
  time:string;
  price:number;
}




export default function ChartDetail() {
  const [clicked, setClick] = useState(false);
  const [clickedw,setClickW]=useState(false);
  const [points,setPoints]=useState<coinHistorypoint[]>([]);
  console.log(points);
  const handelClickD=()=>{
        setClick(!clicked)
  }
   const handelClicW=()=>{
        setClickW(!clickedw)
  }
  useEffect(()=>{
    async function load(){
      const data=await getCoinHistory("bitcoin","day","usd");
      setPoints(data);
    }
    load()
  },[])
  return (
    <Box sx={{ display: "flex", gap: "2" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box component="span" sx={{ fontSize: 16, fontWeight: "500" }}>
            {" "}
            Total balance{" "}
          </Box>
          <Box></Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", gap: 1 }}>
          <Button
            onClick={handelClickD}
            variant="contained"
            size="small"
            sx={{ backgroundColor: clicked?"transparent":"#616161",
                 borderRadius: 20,
                 color:clicked?"#64dd17":"white",
                 border:clicked? "1 solid #64dd17":"none"
                 }}
          >
            D
          </Button>
          <Button
            onClick={handelClicW}
            variant="contained"
            size="small"
             sx={{ backgroundColor: clickedw?"transparent":"#616161",
                 borderRadius: 20,
                 color:clickedw?"#64dd17":"white",
                 border:clickedw? "1 solid #64dd17":"none"
                 }}
          >
            W
          </Button>
          <Button
            // onClick={handelClick}
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#616161",
                 borderRadius: 20,
                 color:"white",
         
                 }}
          >
            M
          </Button>
          <Button
            //  onClick={handelClick}
            variant="contained"
            size="small"
            sx={{ backgroundColor:"#616161",
                 borderRadius: 20,
                 color:"white",
                
                 }}
          >
            Y
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
