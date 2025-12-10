import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getCoinHistory } from "../Api/Coinapi";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { useDrawingArea } from "@mui/x-charts";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type coinHistorypoint = {
  timestamp: number;
  time: string;
  price: number;
};

const Gradient = () => {
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + height + bottom;

  return (
    <defs>
      <linearGradient
        id="myGradient"
        x1="0"
        y1={top}
        x2="0"
        y2={svgHeight - bottom}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#42a5f5" />
        <stop offset="100%" stopColor="#66bb6a" />
      </linearGradient>
    </defs>
  );
};
export default function ChartDetail() {
  const [clicked, setClick] = useState(false);
  const [clickedw, setClickW] = useState(false);
  const [points, setPoints] = useState<coinHistorypoint[]>([]);
  console.log(points);
  const handelClickD = () => {
    setClick(!clicked);
  };
  const handelClicW = () => {
    setClickW(!clickedw);
  };
  useEffect(() => {
    async function load() {
      const data = await getCoinHistory("bitcoin", "day", "usd");
      setPoints(data);
    }
    load();
  }, []);

  const price = points.map((item) => item.price);
  const priceStart = price[0];
  const priceEnd = price[price.length - 1];
  console.log(typeof(priceEnd));

  const change = priceEnd - priceStart;
  const percent = (change / priceStart) * 100;
  const isPositive = percent >= 0;
  const xAxisData = points.map((p) => p.timestamp);
  const min = Math.min(...price);
  const max = Math.max(...price);
  const range = max - min || 1;
  const pad = range * 0.1;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "4px 10px",
              borderRadius: "20px",
              backgroundColor: isPositive
                ? "rgba(0,200,83,0.12)"
                : "rgba(255,23,68,0.12)",
              color: isPositive ? "#00e676" : "#ff1744",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {isPositive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            {percent.toFixed(2)}%
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", gap: 1 }}>
          <Button
            onClick={handelClickD}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: clicked ? "transparent" : "#616161",
              borderRadius: 20,
              color: clicked ? "#64dd17" : "white",
              border: clicked ? "1 solid #64dd17" : "none",
            }}
          >
            D
          </Button>
          <Button
            onClick={handelClicW}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: clickedw ? "transparent" : "#616161",
              borderRadius: 20,
              color: clickedw ? "#64dd17" : "white",
              border: clickedw ? "1 solid c" : "none",
            }}
          >
            W
          </Button>
          <Button
            // onClick={handelClick}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#616161",
              borderRadius: 20,
              color: "white",
            }}
          >
            M
          </Button>
          <Button
            //  onClick={handelClick}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#616161",
              borderRadius: 20,
              color: "white",
            }}
          >
            Y
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: "100%",
          height: "40vh",
        }}
      >
        <Box component="span" sx={{ paddingLeft: 2 }}>
          
          
        </Box>
        <LineChart
          series={[
            {
              data: price,
              area: true,
              showMark: false,
              color: "#64dd17",
            },
          ]}
          xAxis={[
            {
              disableLine: true,
              disableTicks: true,
              scaleType: "time",
              data: xAxisData,
              valueFormatter: (timestamp) => {
                const d = new Date(timestamp);
                return d.getHours().toString().padStart(2, "0");
              },
              tickLabelStyle: {
                fill: "white",
              },
            },
          ]}
          yAxis={[
            {
              min: min - pad,
              max: max + pad,
              disableLine: true,
              disableTicks: true,
              tickLabelStyle: {
                fill: "white",
              },
            },
          ]}
          sx={{
            "& .MuiAreaElement-root": {
              fill: "#76ff03",
              fillOpacity: 0.25,
            },
            "& .MuiLineElement-root": {
              stroke: "#76ff03",
              strokeWidth: 1.5,
            },
          }}
        />
      </Box>
    </Box>
  );
}
