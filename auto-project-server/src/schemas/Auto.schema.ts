import mongoose from "mongoose";

export const autoSchema = new mongoose.Schema({
  id: { type: String, required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  made: { type: String, required: true }
});