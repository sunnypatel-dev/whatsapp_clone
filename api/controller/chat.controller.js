import UserChatModel from "../models/chat.model.js";
import User from "../models/user.model.js";

export const sendMessages = async (req, res) => {
  try {
    const { senderEmail, receiverEmail, messageType, content } = req.body;

    // Find or create the chat document for the sender
    let senderChat = await UserChatModel.findOne({ email: senderEmail });

    if (!senderChat) {
      // If sender is not found, create a new chat document
      senderChat = new UserChatModel({ email: senderEmail, chats: [] });
    }

    // Find or create the chat document for the receiver
    let receiverChat = await UserChatModel.findOne({ email: receiverEmail });

    if (!receiverChat) {
      // If receiver is not found, create a new chat document
      receiverChat = new UserChatModel({ email: receiverEmail, chats: [] });
    }

    const senderMessage = {
      transactionType: "received",
      messagesType: messageType,
      content,
    };

    const receiverMessage = {
      transactionType: "sent",
      messagesType: messageType,
      content,
    };

    // Update or add the message to the sender's chat
    const senderReceiverChat = senderChat.chats.find(
      (chat) => chat.email === receiverEmail
    );
    if (senderReceiverChat) {
      senderReceiverChat.messages.push(receiverMessage);
    } else {
      senderChat.chats.push({
        email: receiverEmail,
        messages: [receiverMessage],
      });
    }

    await senderChat.save();

    // Update or add the message to the receiver's chat
    const receiverSenderChat = receiverChat.chats.find(
      (chat) => chat.email === senderEmail
    );
    if (receiverSenderChat) {
      receiverSenderChat.messages.push(senderMessage);
    } else {
      receiverChat.chats.push({
        email: senderEmail,
        messages: [senderMessage],
      });
    }

    await receiverChat.save();

    // const messagesWithUsers = await Promise.all(
    //   senderChat.chats.map(async (chat) => {
    //     const { email, messages } = chat;

    //     // Assuming you have a User model for user details
    //     const findUser = await User.findOne({ email });

    //     const { password: hashedPassword, ...user } = findUser._doc;

    //     return {
    //       user,
    //       messages,
    //     };
    //   })
    // );

    // // // Emit a message event to notify clients about the new message
    // req.app.get("io").emit("message", messagesWithUsers);

    res.status(200).json({ message: "Chat saved" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchMessages = async (req, res) => {
  try {
    const userEmail = String(req.body.email);

    // Find the user's chat document
    const userChat = await UserChatModel.findOne({ email: userEmail });

    if (!userChat) {
      // If the chat document doesn't exist, you may want to handle this case
      return res.status(200).json({ message: "dose not exist" });
      // res.status(404).json({ message: "User chat not found" });
    } else {
      // Extract messages from the user's chat
      // const messages = userChat.chats.flatMap((chat) => chat.messages);
      // res.status(200).json({ messages });

      // Extract messages along with user details
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
      res.status(200).json(messagesWithUsers);
    }
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
