import React from "react";
import "./index.css";

export default function App() {
  return (
    <div class="form-container">
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
        />
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}