import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerName: String,
  serviceType: String,
  status: {
    type: String,
    enum: ["pending", "assigned", "in-progress", "completed", "cancelled"],
    default: "pending"
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    default: null
  }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
