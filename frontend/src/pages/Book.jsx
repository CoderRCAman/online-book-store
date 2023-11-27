import { Button, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Categories from "../components/Categories";

export default function Book() {
  return (
    <Container style={{}}>
      <Navbar />
      <SearchBox />
      <Categories />
      <div className="book-info-wrap">
        <img src="https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
        <div className="details">
          <p className="title">This is a book title</p>
          <p className="author">Simsons</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            facilis reiciendis. Aliquam optio consequuntur incidunt reiciendis!
            Ipsa officia dolorem voluptatem repellat perferendis quibusdam
            minima et sequi, esse, adipisci, iusto aliquid?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            facilis reiciendis. Aliquam optio consequuntur incidunt reiciendis!
            Ipsa officia dolorem voluptatem repellat perferendis quibusdam
            minima et sequi, esse, adipisci, iusto aliquid?
          </p>
          <div style={{display:'flex',alignItems:'center',gap:'1em',marginTop:'1em'}}>
            <span className="price">Rs 500</span>
            <Button variant="contained" color="success">Buy Now</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
