const express=require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


const movieRoute=require("./routes/movies");
const serieRoute=require("./routes/series");

dotenv.config();

const app=express();

mongoose
  .connect(process.env.MONGOURL,{useNewUrlParser:true})
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(cors());
  app.use("/rest_api",movieRoute);
  app.use("/rest_api",serieRoute);




  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });
