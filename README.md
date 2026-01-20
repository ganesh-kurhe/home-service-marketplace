# Clean Fanatics – Booking Lifecycle System (MERN Stack)

This project is a small working slice of an on-demand home services marketplace system.  
It demonstrates how booking lifecycle management, provider workflows, failure handling, admin overrides, and observability can be designed and implemented in a real-world backend-driven application.

The focus is on **correct state handling and system behavior**, not UI polish.

---

## 🚀 Tech Stack

- Backend: Node.js, Express.js, MongoDB, Mongoose (ES Modules)
- Frontend: React (Vite)
- API Style: REST
- Database: MongoDB

---

## 🧩 Core Features Implemented

- Create a booking (customer)
- Automatic provider assignment
- Provider workflow (accept / reject)
- Booking lifecycle management:
  - pending → assigned → in-progress → completed
- Failure handling:
  - Customer cancellation
  - Provider rejection
- Admin manual override of booking status
- Booking event history (observability)
- Simple UI with 3 screens:
  - Create booking
  - Booking status / provider actions
  - Admin panel

---


### Main Entities

- Booking
- Provider
- BookingEvent (for audit trail)

---

## 🧠 Design Decisions

### 1. Explicit State Machine for Bookings
Booking states are controlled using a fixed enum:


This prevents invalid transitions and makes system behavior predictable.

---

### 2. Separate Event Log Collection (Observability)

Every status change is stored in `BookingEvent`:

- oldStatus
- newStatus
- timestamp
- actionBy (system / provider / admin / customer)

This enables:
- Debugging
- Audit trails
- Future analytics

---

### 3. Automatic Provider Assignment

The system assigns the first available provider from the database.  
This keeps the logic simple while demonstrating real-world matching flow.

---

### 5. Minimal Frontend UI

UI is intentionally basic to focus on:

- Backend correctness
- Lifecycle management
- Edge cases
- API behavior

---

## ⚖️ Trade-offs

| Decision | Trade-off |
|---------|------------|
| No authentication | Faster development but no role security |
| Simple provider matching | Not optimized for scale |
| No background jobs | Retry logic is manual |
| Single MongoDB instance | No sharding/replication |
| Basic UI | Not production ready visually |

These choices were made to meet the time constraint while focusing on correctness and system design.

---

## 📝 Assumptions

- Only one provider is assigned per booking
- Providers are pre-created in the database
- No authentication is required
- Only one admin role exists
- One booking = one service
- Time scheduling is out of scope
- Payment flow is out of scope

---

## ▶️ How to Run the Project

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Git

---

## 🔧 Backend Setup

```bash
cd clean-fanatics-backend
npm install


