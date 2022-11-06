import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes =>
import AuthRoutes from "./routes/auth";

// Initialize Express
const app: Express = express();

// Middlewares
dotenv.config();
app.use(cors());
app.use(express.json());

// PORT
const PORT = process.env.PORT || 8080;

// Server Routes
app.use("/api/v1/auth", AuthRoutes);

// Listen to server
app.listen(PORT, () => {
  console.log(`[server] -- starting on PORT ${PORT}`);
});
