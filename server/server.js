import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

//configure env
dotenv.config();

//db config
connectDB()


const app = express();

app.get("/", (req, res) => {
    res.send({
        message: "Welcome to real Estate App"
    })
})


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});