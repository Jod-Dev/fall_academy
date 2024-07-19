import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import InputMask from "react-input-mask";

const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY"; // Replace with your actual site key

function Forms() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const phoneRef = useRef(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleTermsChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isTermsAccepted) {
      Swal.fire({
        icon: "error",
        title: "Terms & Conditions",
        text: "You must accept the Terms & Conditions to send the message.",
      });
      return;
    }

    if (!validateEmail(formValues.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (!executeRecaptcha) {
      Swal.fire({
        icon: "error",
        title: "Captcha not loaded",
        text: "Please try again later.",
      });
      return;
    }

    try {
      const captchaToken = await executeRecaptcha("contact_form");

      await axios.post("https://your-backend-endpoint.com/send-message", {
        ...formValues,
        captchaToken,
      });

      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "Your message has been sent successfully.",
      });

      // Clear form fields after successful submission
      setFormValues({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsTermsAccepted(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Message Failed",
        text: "There was an error sending your message. Please try again.",
      });
    }
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Get in touch</h3>
                <p>
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <div className="single-info">
                  <h5>Address</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    320 S Park Ave Sanford,
                    <br /> FL 32771
                  </p>
                </div>
                <div className="single-info">
                  <h5>Phone</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    (407) 900 3442
                  </p>
                </div>
                <div className="single-info">
                  <h5>Email</h5>
                  <p>
                    <i className="fal fa-envelope"></i>
                    orlando@iyfusa.org
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <a
                    className="fac"
                    href="https://www.facebook.com/iyforlando/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="insta"
                    href="https://www.instagram.com/iyforlando/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Let’s Connect</h4>
                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                <form onSubmit={handleSubmit} className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="fName"
                      placeholder="First Name"
                      value={formValues.fName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lName"
                      placeholder="Last Name"
                      value={formValues.lName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formValues.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <InputMask
                      mask="(999) 999-9999"
                      value={formValues.phone}
                      onChange={handleFormChange}
                    >
                      {(inputProps) => (
                        <input
                          {...inputProps}
                          ref={phoneRef}
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          required
                        />
                      )}
                    </InputMask>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formValues.subject}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      value={formValues.message}
                      onChange={handleFormChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <div className="condition-check">
                      <input
                        id="terms-conditions"
                        type="checkbox"
                        checked={isTermsAccepted}
                        onChange={handleTermsChange}
                      />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 text-right">
                    <input
                      type="submit"
                      name="submit"
                      value="Send Message"
                      disabled={!isTermsAccepted}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bisylms-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.98558963461!2d-81.26831080000001!3d28.809503300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7139df8cec197%3A0x57ee46cba1a0d2b1!2sInternational%20Youth%20Fellowship%20Orlando%20Center!5e0!3m2!1sen!2sus!4v1721222195612!5m2!1sen!2sus"
        ></iframe>
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default Forms;
