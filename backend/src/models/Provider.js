import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
  name: String,
  isAvailable: { type: Boolean, default: true }
});

export default mongoose.model("Provider", providerSchema);
