import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { coinList } from "../Api/Coinapi";
import { useMemo, useState } from "react";
import { Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius:30,
  border: "1px solid #424242",
  backgroundColor: "transparent",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color:"#757575"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
       
      "&:focus": {
        width: "32ch",
      },
    },
  },
}));

export default function SearchAppBar({onSelectId}:{
  onSelectId:(id:string)=>void;
}) {
  const {data,isLoading,error}=coinList()
  const [query,setQuery]=useState('');
   
  const searchCoin=useMemo(()=>{
    if(!data ||!query.trim()) return[];
    const q=query.trim().toLowerCase();

    return(data ).filter((c)=>{
      return(
        c.name?.toLowerCase().includes(q)||c.symbol?.toLowerCase().includes(q)
      );
    }).slice(0,10);

   },[data,query])
      
  
  return (
    <Box >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="Search Coins "
          inputProps={{ "aria-label": "search coin" }}
        />
      </Search>
      {isLoading &&(
        <Typography sx={{ mt: 1, fontSize: 12, color: "#9e9e9e" }}> Loading Coin...</Typography>
      )}
      {error &&(
         <Typography sx={{ mt: 1, fontSize: 12, color: "#ef4444" }}>
          Failed to load coins
        </Typography>
      )}
      {!isLoading && !error && searchCoin.length>0 &&(
        <Box>{searchCoin.map((coin)=>(
             
          <Box onClick={()=>onSelectId(coin.id)}>{coin.symbol} {coin.current_price}</Box>

            
        ))}</Box>
      )}

    </Box>
  );
}
