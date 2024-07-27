import React, { useState } from "react";
import signupThumb from "../../assets/images/signup-thumb.png";

function SponserHomeEight({ className }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Here you would typically make an API call to handle the subscription
      setMessage("Subscription successful! Thank you for subscribing.");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className={`iyf-signup-area ${className || ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="iyf-signup-box">
              <span>Want to stay informed about our upcoming events?</span>
              <h3 className="title">Subscribe Now</h3>
              <form onSubmit={handleSubmit}>
                <div
                  className="input-box mt-30"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button type="submit" style={{ flexShrink: 0 }}>
                    Subscribe
                  </button>
                </div>
              </form>
              {message && <p>{message}</p>}
              <div className="thumb">
                <img src={signupThumb} alt="Signup illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponserHomeEight;
