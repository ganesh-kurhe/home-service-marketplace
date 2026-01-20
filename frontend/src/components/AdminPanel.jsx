import { useState } from "react";
import API from "../api/api";

function AdminPanel() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");

  const overrideStatus = async () => {
    await API.patch(`/admin/${id}/override`, { status });
    alert("Status updated");
  };

  return (
    <div className="container">
      <h3>Admin Panel</h3>

      <input placeholder="Booking ID"
        onChange={e => setId(e.target.value)} />

      <select onChange={e => setStatus(e.target.value)}>
        <option value="">Select status</option>
        <option value="pending">pending</option>
        <option value="assigned">assigned</option>
        <option value="in-progress">in-progress</option>
        <option value="completed">completed</option>
        <option value="cancelled">cancelled</option>
      </select>

      <button onClick={overrideStatus}>Override</button>
    </div>
  );
}

export default AdminPanel;
