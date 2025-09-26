import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./lib/mongoose";
import authRoutes from "./routes/auth";
import serviceRoutes from "./routes/services";
import bookingRoutes from "./routes/bookings";
dotenv.config();
const app = express();
app.use(express.json());
connectToDatabase();
app.use("/auth", authRoutes);
app.use("/services", serviceRoutes);
app.use("/bookings", bookingRoutes);
app.get("/", (req, res) => {
  res.send("API is running");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
