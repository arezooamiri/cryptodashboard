import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { buttonAactive } from "../store";

function SegmentedButtons() {
  const [alignment, setAlignment] = useState<"left" | "right">("left");
  const {  setIsActive } = buttonAactive();
  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: "left" | "right" | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setIsActive(newAlignment === "left");
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{ borderRadius: 15, overflow: "hidden", border: "none" }}
    >
      <ToggleButton
        onClick={() => setIsActive(true)}
        value="left"
        aria-label="left aligned"
        sx={{
          backgroundColor: "#64dd17",
          "&.Mui-selected": {
            backgroundColor: "#64dd17",
            color: "black",
        
          
          },
          color: "white",
          width: "50%",
          height: 20,
          fontSize: 12,
        }}
      >
        Popular
      </ToggleButton>
      <ToggleButton
        onClick={() => setIsActive(false)}
        value="right"
        aria-label="right aligned"
        sx={{
          backgroundColor: "#616161",
          "&.Mui-selected": {
          
            color: "black",
          },
          color: alignment === "right" ? "black" : "white",
          borderRadius: 15,
          width: "50%",
          height: 20,
          fontSize: 12,
        }}
      >
        New List
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default SegmentedButtons;
