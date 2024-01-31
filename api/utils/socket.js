import { Server } from "socket.io";
import User from "../models/user.model.js";
import UserChatModel from "../models/chat.model.js";

export default function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected");

    //FETCHING MESSAGE AND SENDING IT BACK TO THE CLIENT ON EVENT
    socket.on("fetchMessages", async (senderEmail) => {
      console.log(senderEmail);
      const userEmail = senderEmail;

      // Find the user's chat document
      const userChat = await UserChatModel.findOne({ email: userEmail });

      if (!userChat) {
        console.log(userEmail);
        // If the chat document doesn't exist, you may want to handle this case
        io.emit("UserDetail", { message: "userChatnotfound" });
        // res.status(404).json({ message: "User chat not found" });
      } else {
        const messagesWithUsers = await Promise.all(
          userChat.chats.map(async (chat) => {
            const { email, messages } = chat;

            // Assuming you have a User model for user details
            const findUser = await User.findOne({ email });

            const { password: hashedPassword, ...user } = findUser._doc;

            return {
              user,
              messages,
            };
          })
        );

        io.emit("UserDetail", messagesWithUsers);
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return io;
}
