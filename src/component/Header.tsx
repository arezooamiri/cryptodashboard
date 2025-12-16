import { Box, Button, Modal, Typography } from "@mui/material";
import SearchBar from "./Search";
import Profile from "./Profile";
import { useState } from "react";
import SearchAppBar from "./Search";

export default function Header({ onSelectId }: { onSelectId: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const handelopen = () => setOpen(true);
  const handelclose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        justifyContent: "space-between",
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <SearchBar  onSelectId={onSelectId}/>
        <Box sx={{position:"relative"}}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#64dd17",
              color: "black",
              fontSize: 10,
              borderRadius: 15,
              width: 140,
              height: 40,
              "&:hover": {
                backgroundColor: "#0d8f0d", // سبز تیره‌تر
              },
            }}
            onClick={handelopen}
          >
            {" "}
            + add new coin
          </Button>
          <Modal
            open={open}
            onClose={handelclose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "50%", 
                backgroundColor:"#212121",
                transform: 'translate(-50%, -50%)',
                border: "2px solid #000",
                borderRadius:2,
                boxShadow: 24,
                p: 4,
                display:"flex",
                gap:1,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add your coin
              </Typography>
              <SearchAppBar onSelectId={onSelectId}/>
            </Box>
          </Modal>
        </Box>
      </Box>
      <Profile />
    </Box>
  );
}
