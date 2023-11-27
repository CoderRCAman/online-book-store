import React from "react";
import { OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBox() {
  return (
    <div className="inputWrap">
      <SearchIcon />
      <input
        style={{
          outline: "none",
          border: 0,
          width: "100%",
        }} 
        placeholder="Search for books.."
      />
    </div>
  );
}
