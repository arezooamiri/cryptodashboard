import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { coinList } from "../Api/Coinapi";
import { useEffect, useMemo, useState } from "react";
import { Typography } from "@mui/material";
import { buttonAactive, selectCoin } from "../store";
type Coin = {
  image: string;
  id: string;
  symbol: string;
  current_price: number;
  market_cap_change_percentage_24h: number;
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 30,
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
  color: "#757575",
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

export default function SearchAppBar({
  onSelectId,
}: {
  onSelectId: (id: string) => void;
}) {
  const { data, isLoading, error } = coinList();
  const [query, setQuery] = useState("");
  const [queryActive, setQueryActive] = useState(true);
  const { setIsActive } = buttonAactive();
  const handelSearch = (coin: Coin) => {
    selectCoin.getState().addCoin(coin);
    onSelectId(coin.id);
    setQueryActive(false);
    setIsActive(false);
    setQuery("");
  };
  useEffect(() => {
    if (query.trim()) {
      setQueryActive(true);
    }
  }, [query]);

  const searchCoin = useMemo(() => {
    if (!data || !query.trim()) return [];
    const q = query.trim().toLowerCase();

    return data
      .filter((c) => {
        return (
          c.name?.toLowerCase().includes(q) ||
          c.symbol?.toLowerCase().includes(q)
        );
      })
      .slice(0, 10);
  }, [data, query]);

  return (
    <Box sx={{ position: "relative" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Coins "
          inputProps={{ "aria-label": "search coin" }}
        />
      </Search>
      {isLoading && (
        <Typography sx={{ mt: 1, fontSize: 12, color: "#9e9e9e" }}>
          {" "}
          Loading Coin...
        </Typography>
      )}
      {error && (
        <Typography sx={{ mt: 1, fontSize: 12, color: "#ef4444" }}>
          Failed to load coins
        </Typography>
      )}
      {!isLoading && !error && searchCoin.length > 0 && queryActive && (
        <Box
          sx={{
            backgroundColor: "#212121",
            position: "absolute",
            padding: 2,
            borderRadius: 1,
            zIndex: 1300,
          }}
        >
          {searchCoin.map((coin) => (
            <Box
              key={coin.id}
              onMouseDown={() => handelSearch(coin)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 1.5,
                py: 1,
                borderRadius: 1,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#2e2e2e",
                },
              }}
            >
              <Typography>{coin.symbol.toUpperCase()}</Typography>
              <Typography variant="caption">${coin.current_price}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
