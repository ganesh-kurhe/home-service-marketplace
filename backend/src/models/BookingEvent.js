import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  bookingId: mongoose.Schema.Types.ObjectId,
  oldStatus: String,
  newStatus: String,
  actionBy: String
}, { timestamps: true });

export default mongoose.model("BookingEvent", eventSchema);
