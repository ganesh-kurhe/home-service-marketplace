import Booking from "../models/Booking.js";

export const overrideStatus = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  booking.status = req.body.status;
  await booking.save();
  res.json(booking);
};
