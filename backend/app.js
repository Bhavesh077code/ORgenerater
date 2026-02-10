
import express from "express";
import "dotenv/config"
import cors from "cors";
import qrRoutes from "./routes/qrRoutes.js"

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: "http://localhost:5174", // ✅ React frontend port
    credentials: true
  }
));

const PORT = process.env.PORT || 3000

app.use("/qr", qrRoutes);

app.listen(PORT , () => {
    console.log(`server is running ${PORT}`)
})
