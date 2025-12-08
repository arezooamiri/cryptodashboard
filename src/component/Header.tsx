import { Box, Button } from "@mui/material";
import SearchBar from "./Search";
import Profile from "./Profile";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        justifyContent:"space-between",
        gap: 1,
      }}
    >
      <Box
        sx={{ width:"80%", display: "flex", justifyContent: "space-between",gap:4 }}
      >
        <SearchBar />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#64dd17",
            color: "black",
            fontSize:"10px",
            borderRadius:15,
            width:"80",
            "&:hover": {
              backgroundColor: "#0d8f0d", // سبز تیره‌تر
            },
          }}
        >
          {" "}
          + add new coin
        </Button>
      </Box>
      <Profile />
    </Box>
  );
}
