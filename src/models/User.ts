import { request } from "http";
import mongoose, { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  consentGiven: { type: Boolean, required: true },
  consentPolicyVersion: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);
