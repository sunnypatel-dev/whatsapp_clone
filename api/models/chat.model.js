import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  transactionType: { type: String },
  messagesType: { type: String },
  content: { type: String },
  timestamp: { type: Date, default: Date.now },
});

const UserChatSchema = new mongoose.Schema(
  {
    email: { type: String }, // sunnypatel.koder@gmail.com
    chats: [
      {
        email: { type: String }, // money
        messages: [MessageSchema],
      },
    ],
  },
  { timestamps: true }
);

const UserChatModel = mongoose.model("UserChat", UserChatSchema);

export default UserChatModel;
