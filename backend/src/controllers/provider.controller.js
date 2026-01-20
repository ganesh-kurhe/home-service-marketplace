import Booking from "../models/Booking.js";
import Provider from "../models/Provider.js";

export const acceptBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  booking.status = "in-progress";
  await booking.save();
  res.json(booking);
};

export const rejectBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  booking.status = "pending";
  booking.providerId = null;
  await booking.save();
  res.json({ message: "Booking rejected" });
};
