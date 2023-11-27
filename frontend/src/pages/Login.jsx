import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // You can perform authentication here
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }} 
        maxWidth='xs'
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            mt: 1,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
        <Stack marginTop={5} direction={"row"} alignItems={'center'} gap={2}>
          <Typography>Don't have an account?</Typography>
          <Link to={"/register"}>
            <Button variant="contained">
              <Typography>Register</Typography>
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
