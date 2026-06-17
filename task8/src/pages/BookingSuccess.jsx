import { useLocation } from "react-router-dom";

function BookingSuccess() {
  const { state } = useLocation();

  const bookingId =
    "BK" +
    Math.floor(Math.random() * 1000000);

  return (
    <div>
      <h1>Seat Booked Successfully</h1>

      <h3>Booking ID: {bookingId}</h3>

      <p>Name: {state?.name}</p>
      <p>Email: {state?.email}</p>
      <p>Mobile: {state?.mobile}</p>
    </div>
  );
}

export default BookingSuccess;