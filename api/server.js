import express from "express";
import http from "http";
import connectToDatabase from "./config/database.js";
import setupSocket from "./utils/socket.js";
import dotenv from "./config/dotenv.js";
import cors from "cors";
import routes from "./routes/index.js";
import logRequest from "./middleware/logRequest.js";

const app = express();
const httpServer = http.createServer(app);

// Enable CORS for all routes
app.use(cors());

// Configure dotenv
dotenv.config();

// Add middleware to parse JSON bodies
app.use(express.json());

// Use the custom logRequest middleware
app.use(logRequest);

// Connect to the database
connectToDatabase();

// Set up Socket.IO
const io = setupSocket(httpServer);
app.set("io", io);

// Use centralized routes
app.use(routes);

// app listening
const PORT = process.env.PORT || 8000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
