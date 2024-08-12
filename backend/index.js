import express from "express";
import multer from "multer";

import msgRoutes from "./routes/msg.js";

const app = express();
app.use(express.json());

app.use("/api/msg",msgRoutes);

app.listen(8801,()=>{
    console.log("Running on http://localhost:8801");
})