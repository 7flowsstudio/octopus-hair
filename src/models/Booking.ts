import { request } from "http";
import mongoose, { Schema, model, models } from "mongoose";
const BookingSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servise",
    required: true,
  },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});
const Booking = mongoose.model("Booking", BookingSchema);
