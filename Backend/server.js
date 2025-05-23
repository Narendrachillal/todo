import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "https://todo-jsr6.onrender.com/",  
  credentials: true,
}));
app.use(express.json());

app.use("/api/v1", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
