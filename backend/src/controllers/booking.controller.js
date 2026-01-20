import Booking from "../models/Booking.js";
import Provider from "../models/Provider.js";
import BookingEvent from "../models/BookingEvent.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
};

export const assignProvider = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  const provider = await Provider.findOne({ isAvailable: true });

  if (!provider) return res.status(400).json({ message: "No provider available" });

  booking.providerId = provider._id;
  booking.status = "assigned";
  provider.isAvailable = false;

  await booking.save();
  await provider.save();

  await BookingEvent.create({
    bookingId: booking._id,
    oldStatus: "pending",
    newStatus: "assigned",
    actionBy: "system"
  });

  res.json(booking);
};

export const updateStatus = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  const oldStatus = booking.status;

  booking.status = req.body.status;
  await booking.save();

  await BookingEvent.create({
    bookingId: booking._id,
    oldStatus,
    newStatus: booking.status,
    actionBy: "provider"
  });

  res.json(booking);
};

export const cancelBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  const oldStatus = booking.status;

  booking.status = "cancelled";
  await booking.save();

  await BookingEvent.create({
    bookingId: booking._id,
    oldStatus,
    newStatus: "cancelled",
    actionBy: "customer"
  });

  res.json(booking);
};

export const getHistory = async (req, res) => {
  const events = await BookingEvent.find({ bookingId: req.params.id });
  res.json(events);
};

export const getBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  res.json(booking);
};

