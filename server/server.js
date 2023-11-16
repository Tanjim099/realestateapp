import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";

//configure env
dotenv.config();

//db config
connectDB()



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/api/v1/user", userRoutes)

app.get("/", (req, res) => {
    res.send({
        message: "Welcome to real Estate App"
    })
})


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});