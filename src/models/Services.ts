import { request } from "http";
import mongoose, { Schema, model, models } from "mongoose";
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Service = mongoose.model("Service", serviceSchema);
