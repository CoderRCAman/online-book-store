import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Categories from "../components/Categories";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <Container style={{}}>
      <Navbar />
      <SearchBox />
      <Categories /> 
      <Trending />
    </Container>
  );
}
