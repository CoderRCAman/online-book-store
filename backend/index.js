const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("📔 Database Connected!"))
  .catch((err) => console.log(err));
app.use(express.static("uploads"));
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api/", userRoutes, albumRoutes);

app.listen(PORT, () => console.log("🔥 Server started at PORT", PORT));
