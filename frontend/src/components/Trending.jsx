import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

export default function Trending() {
  return (
    <div className="trending-wrap">
      <h4>Trending books 🔥</h4>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="book-wrap">
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
              id: 123,
            }}
          />

          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life a ver long title still not long",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
          <BookCard
            book={{
              cover:
                "https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
              title: "Life comes from life",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque, sunt quod alias, nemo sapiente illum debitis suscipit quia natus voluptas adipisci? Delectus deleniti, qui nulla reprehenderit consectetur animi quisquam?",
              price: 350,
            }}
          />
        </div>
      </div>
    </div>
  );
}
