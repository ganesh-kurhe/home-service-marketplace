import { useState } from "react";
import API from "../api/api";

function CreateBooking() {
  const [customerName, setCustomerName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");

  const createBooking = async () => {
    const res = await API.post("/bookings", {
      customerName,
      serviceType
    });

    setMessage("Booking created with ID: " + res.data._id);
  };

  return (
    <div className="container">
      <h3>Create Booking</h3>

      <input placeholder="Customer Name"
        onChange={e => setCustomerName(e.target.value)} />

      <input placeholder="Service Type"
        onChange={e => setServiceType(e.target.value)} />

      <button onClick={createBooking}>Create</button>

      <p>{message}</p>
    </div>
  );
}

export default CreateBooking;
