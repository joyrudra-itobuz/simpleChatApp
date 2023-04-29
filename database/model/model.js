import mongoose from "mongoose";

const schema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  uniqueId: {
    type: String,
    required: true,
  },
});

export const Message = mongoose.model("Message", schema);
