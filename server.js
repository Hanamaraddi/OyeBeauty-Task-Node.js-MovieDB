import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import movieRoute from "./routes/movieRoute.js";

dotenv.config();

const app = express();
const port = process.env.port;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO).then(console.log("DB is Connected"));

app.use(cors()); //front end purpose
app.use(express.json()); //for json data

app.use("/api", movieRoute); //from routes

app.listen(port, console.log(`Server is Started in Port ${port}`));
