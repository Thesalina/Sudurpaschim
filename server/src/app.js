import cors from "cors";
import express from "express";
import morgan from "morgan";
import destinationRoutes from "./routes/destinationRoutes.js";
import cultureRoutes from "./routes/cultureRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (_request, response) => {
  response.json({
    success: true,
    message: "Sudurpashchim API is running.",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/destinations", destinationRoutes);
app.use("/api/culture", cultureRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

app.use((request, response) => {
  response.status(404).json({
    success: false,
    message: `Route not found: ${request.originalUrl}`,
  });
});

app.use((error, _request, response, _next) => {
  console.error(error);

  response.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error.",
  });
});

export default app;
