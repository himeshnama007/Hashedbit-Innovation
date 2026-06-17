import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/success", {
      state: form
    });
  };

  return (
    <div>
      <h1>Booking Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;