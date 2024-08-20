import express from "express";
import multer from "multer";
import cors from "cors";  // Import CORS
import msgRoutes from "./routes/msg.js";

const app = express();
app.use(express.json());
app.use(cors()); // Use CORS middleware



const storage =  multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, '../comp-app/src/upload')
        // ../client/public/upload
    },
    filename : function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({storage});

app.post('/api/upload',upload.single('file'),function(req,res){
  
    const file = req.file;
    res.status(200).json(file.filename);


})

app.use("/api/msg",msgRoutes);

app.listen(8801,()=>{
    console.log("Running on http://localhost:8801");
})