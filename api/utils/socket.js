// utils/socket.js
import { Server } from "socket.io";

export default function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173", // Replace with your client's origin
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });

    // Add other socket event handlers as needed
    // socket.on('message', (data) => {
    //   console.log('Received message from the client:', data);
    //   io.emit('message', data);
    // });
  });

  return io;
}
