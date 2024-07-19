import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";
import { load } from "recaptcha-v3";

function RegistrationForms() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "male",
    age: "",
    cellNumber: "",
    email: "",
    confirmEmail: "",
    city: "",
    schoolName: "",
    privacyAccepted: false,
    referralSource: "",
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const cellNumberRef = useRef(null); // Ref for the cellNumber input

  useEffect(() => {
    if (formData.birthday) {
      const birthDate = new Date(formData.birthday);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setFormData((prevData) => ({
        ...prevData,
        age: age.toString(),
      }));
    }
  }, [formData.birthday]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "birthday",
      "cellNumber",
      "email",
      "confirmEmail",
      "city",
      "privacyAccepted",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    });

    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Email addresses do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: "Form Incomplete",
        text: "Please fill in all required fields.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const recaptcha = await load("YOUR_RECAPTCHA_SITE_KEY");
      const token = await recaptcha.execute("submit");

      const docData = { ...formData, recaptchaToken: token };
      await addDoc(collection(db, "registrations"), docData);

      Swal.fire({
        title: "Thank you!",
        text: `Dear ${formData.firstName}, we have received your details and will get in touch with you soon.`,
        icon: "success",
        confirmButtonText: "OK",
      });
      setFormData(initialFormData); // Reset form data
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "There was an error submitting your details. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
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
                    href="https://www.facebook.com/iyf_orlando/"
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
                <h4>Fall Semester Registration</h4>
                <p>
                  Join us for an enriching journey this fall! Discover
                  leadership, culture, and community with IYF Orlando..
                </p>
                <Form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Label for="firstName">First Name</Label>
                      <Input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        invalid={!!errors.firstName}
                      />
                      <FormFeedback>{errors.firstName}</FormFeedback>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Label for="lastName">Last Name</Label>
                      <Input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        invalid={!!errors.lastName}
                      />
                      <FormFeedback>{errors.lastName}</FormFeedback>
                    </FormGroup>
                  </div>
                  <hr />
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Label for="birthday">Birthday</Label>
                      <Input
                        type="date"
                        id="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        invalid={!!errors.birthday}
                      />
                      <FormFeedback>{errors.birthday}</FormFeedback>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Label for="age">Age</Label>
                      <Input
                        type="text"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        disabled
                      />
                    </FormGroup>
                  </div>
                  <hr />
                  <FormGroup>
                    <Label for="cellNumber">Cell Number</Label>
                    <InputMask
                      mask="+1 (999) 999-9999"
                      value={formData.cellNumber}
                      onChange={handleChange}
                      ref={cellNumberRef}
                    >
                      {(inputProps) => (
                        <Input
                          {...inputProps}
                          type="tel"
                          id="cellNumber"
                          invalid={!!errors.cellNumber}
                        />
                      )}
                    </InputMask>
                    <FormFeedback>{errors.cellNumber}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email address</Label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      invalid={!!errors.email}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="confirmEmail">Confirm Email address</Label>
                    <Input
                      type="email"
                      id="confirmEmail"
                      value={formData.confirmEmail}
                      onChange={handleChange}
                      placeholder="Confirm Email address"
                      invalid={!!errors.confirmEmail}
                    />
                    <FormFeedback>{errors.confirmEmail}</FormFeedback>
                  </FormGroup>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Label for="city">City, State</Label>
                      <Input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        invalid={!!errors.city}
                      />
                      <FormFeedback>{errors.city}</FormFeedback>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Label for="schoolName">
                        School Name (If you are a student)
                      </Label>
                      <Input
                        type="text"
                        id="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </div>
                  <FormGroup>
                    <Label for="referralSource">
                      How did you hear about us?
                    </Label>
                    <Input
                      type="select"
                      id="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                    >
                      <option value="">Select One</option>
                      <option value="friend">From a friend</option>
                      <option value="socialMedia">Social media</option>
                      <option value="website">Our website</option>
                      <option value="event">At an event</option>
                      <option value="other">Other</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="comments">Any Comments</Label>
                    <Input
                      type="textarea"
                      id="comments"
                      value={formData.comments}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        id="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        invalid={!!errors.privacyAccepted}
                      />{" "}
                      I have read and accept the{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        privacy policy
                      </a>
                      <FormFeedback>{errors.privacyAccepted}</FormFeedback>
                    </Label>
                  </FormGroup>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegistrationForms;
