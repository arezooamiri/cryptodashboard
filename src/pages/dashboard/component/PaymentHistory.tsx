import { Box, Typography, Chip, Grid } from "@mui/material";

type Payment = {
  name: string;
  change: number;
  price: string;
  status: "Successful" | "Pending" | "Cancel";
  amount: string;
};

const payments: Payment[] = [
  {
    name: "Bitcoin",
    change: 8.45,
    price: "$14,750",
    status: "Successful",
    amount: "21 ACT",
  },
  {
    name: "Cardano",
    change: -36.95,
    price: "$24,000",
    status: "Pending",
    amount: "0.35 CDN",
  },
  {
    name: "Dogecoin",
    change: 16.75,
    price: "$2,000",
    status: "Successful",
    amount: "14 DGB",
  },
  {
    name: "Ethereum",
    change: -34.34,
    price: "$750.75",
    status: "Cancel",
    amount: "0.24 ETH",
  },
];

const statusColor = (status: Payment["status"]) => {
  switch (status) {
    case "Successful":
      return "success";
    case "Pending":
      return "warning";
    case "Cancel":
      return "error";
    default:
      return "default";
  }
};

export default function PaymentHistory() {
  return (
    <Grid size={6}>
      <Box
      sx={{
        backgroundColor: "#1e2b2b",
        borderRadius: 3,
        p:1,
       
      }}
    >
      <Typography sx={{ color: "white", fontSize: 12, mb: 2 }}>
        Payment History
      </Typography>

      {/* Header */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          color: "#9e9e9e",
          fontSize: 12,
          mb: 1,
        }}
      >
        <Box>Name</Box>
        <Box>Price</Box>
        <Box>Status</Box>
        <Box>Amount</Box>
      </Box>

      {/* Rows */}
      {payments.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            alignItems: "center",
            gap:1,
            borderBottom: "1px solid #263333",
          }}
        >
          {/* Name */}
          <Box>
            <Typography sx={{ color: "white", fontSize: 10 }}>
              {item.name}
            </Typography>
            <Typography
              sx={{
                fontSize: 11,
                color: item.change > 0 ? "#64dd17" : "#ef5350",
              }}
            >
              {item.change > 0 ? "+" : ""}
              {item.change}%
            </Typography>
          </Box>

          {/* Price */}
          <Typography sx={{ color: "white", fontSize: 13 }}>
            {item.price}
          </Typography>

          {/* Status */}
          <Chip
            label={item.status}
            size="small"
            color={statusColor(item.status)}
            sx={{ fontSize: 10 }}
          />

          {/* Amount */}
          <Typography sx={{ color: "white", fontSize: 10 }}>
            {item.amount}
          </Typography>
        </Box>
      ))}
    </Box>
    </Grid>
  );
}
