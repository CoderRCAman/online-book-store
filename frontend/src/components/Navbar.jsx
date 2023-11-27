import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
        padding:'10px 0',
      }}
    >
      <Box>
        <Link style={{ textDecoration: "none" }} to="/">
          <Typography fontWeight={"800"} fontSize={19} color={"#22c55e"}>
            Book Store
          </Typography>
        </Link>
      </Box>
      <Box
        style={{
          display: "flex",
          gap: 7,
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/login">
          <Button variant="outlined" color="success">
            Login
          </Button>
        </Link> 
        <Link style={{ textDecoration: "none" }} to="/register">
        <Button variant="outlined" color="primary">
          Signup
        </Button>
        </Link>
      </Box>
    </div>
  );
}
