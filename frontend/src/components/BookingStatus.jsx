import { useState } from "react";
import API from "../api/api";

function BookingStatus() {
  const [id, setId] = useState("");
  const [booking, setBooking] = useState(null);

  const fetchBooking = async () => {
    const res = await API.get(`/bookings/${id}`);
    setBooking(res.data);
  };

  const assignProvider = async () => {
    const res = await API.post(`/bookings/${id}/assign`);
    setBooking(res.data);
  };

  const accept = async () => {
    const res = await API.post(`/providers/${id}/accept`);
    setBooking(res.data);
  };

  const reject = async () => {
    await API.post(`/providers/${id}/reject`);
    alert("Rejected");
  };

  return (
    <div className="container">
      <h3>Booking Status</h3>

      <input placeholder="Booking ID"
        onChange={e => setId(e.target.value)} />

      <button onClick={fetchBooking}>Fetch</button>
      <button onClick={assignProvider}>Assign Provider</button>

      {booking && (
        <>
          <p>Status: {booking.status}</p>
          <button onClick={accept}>Accept</button>
          <button onClick={reject}>Reject</button>
        </>
      )}
    </div>
  );
}

export default BookingStatus;
