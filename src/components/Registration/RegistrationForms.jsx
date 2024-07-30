import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Row,
  Col,
  Progress,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";
import { load } from "recaptcha-v3";

const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const ACADEMY_LEVELS = {
  "N/A": "N/A",
  Korean: "Alphabet",
  English: "Basic",
  Piano: "P2",
  Art: "N/A",
  "DIY (Do It Yourself)": "N/A",
  Kids: "N/A",
  Pickleball: "N/A",
  Basketball: "N/A",
  Soccer: "N/A",
};

const ACADEMY_NOTES = {
  Korean: "Note: This level is only for beginners.",
  English: "Note: This level is only for beginners.",
  Piano: "Note: This level is only for Intermediate (Not beginner).",
};

const SECOND_PERIOD_LEVELS = {
  "N/A": "N/A",
  Korean: ["Beginner", "Intermediate"],
  English: "Intermediate",
  Piano: "P1",
  Art: "N/A",
  "DIY (Do It Yourself)": "N/A",
  Kids: "N/A",
  "Stretch and Strengthen": "N/A",
};

const SECOND_PERIOD_NOTES = {
  Korean: {
    Beginner: "Note: This level is only for beginners.",
    Intermediate: "Note: This level is only for Intermediate (Not beginner).",
  },
  English: "Note: This level is only for Intermediate (Not beginner).",
  Piano: "Note: This level is only for beginners.",
  "Stretch and Strengthen": "Note: Only for women.",
};

function RegistrationForms() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    birthday: "",
    age: "",
    gender: "",
    cellNumber: "",
    email: "",
    confirmEmail: "",
    city: "",
    state: "",
    zipCode: "",
    address: "",
    termsAccepted: false,
    firstPeriod: {
      academy: "",
      level: "",
    },
    secondPeriod: {
      academy: "",
      level: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const cellNumberRef = useRef(null);

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
    const { id, value, type, checked, name } = e.target;
    if (step === 1 || name === "termsAccepted") {
      setFormData((prevData) => ({
        ...prevData,
        [id]: type === "checkbox" ? checked : value,
      }));
      if (errors[id]) {
        setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
      }
    } else {
      const period = step === 2 ? "firstPeriod" : "secondPeriod";
      setFormData((prevData) => ({
        ...prevData,
        [period]: {
          ...prevData[period],
          [id]: value,
        },
      }));
      if (errors[period]?.[id]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [period]: { ...prevErrors[period], [id]: "" },
        }));
      }
    }
  };

  const handleAcademyChange = (e) => {
    const { value } = e.target;
    const period = step === 2 ? "firstPeriod" : "secondPeriod";
    const levels =
      period === "firstPeriod" ? ACADEMY_LEVELS : SECOND_PERIOD_LEVELS;
    const notes =
      period === "firstPeriod" ? ACADEMY_NOTES : SECOND_PERIOD_NOTES;

    setFormData((prevData) => ({
      ...prevData,
      [period]: {
        ...prevData[period],
        academy: value,
        level: Array.isArray(levels[value]) ? levels[value][0] : levels[value],
      },
    }));

    if (Array.isArray(levels[value])) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [period]: {
          ...prevErrors[period],
          level: "",
        },
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (step === 1) {
      const requiredFields = [
        "firstName",
        "lastName",
        "birthday",
        "gender",
        "cellNumber",
        "email",
        "confirmEmail",
        "city",
        "state",
        "zipCode",
        "address",
        "termsAccepted",
      ];

      requiredFields.forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = "This field is required.";
        }
      });

      // Birthday validation
      const birthDate = new Date(formData.birthday);
      const today = new Date();
      if (birthDate > today) {
        newErrors.birthday = "Birthday cannot be a future date.";
      } else if (isNaN(birthDate.getTime())) {
        newErrors.birthday = "Invalid birthday.";
      }

      // Phone number validation
      const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
      if (!phoneRegex.test(formData.cellNumber)) {
        newErrors.cellNumber =
          "Phone number must be in the format (999) 999-9999.";
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format.";
      } else {
        const emailDomain = formData.email.split("@")[1];
        if (!emailDomain.includes(".")) {
          newErrors.email = "Invalid email domain.";
        }
      }

      if (formData.email !== formData.confirmEmail) {
        newErrors.confirmEmail = "Email addresses do not match.";
      }

      // Zip code validation
      const zipCodeRegex = /^\d{5}$/;
      if (!zipCodeRegex.test(formData.zipCode)) {
        newErrors.zipCode = "Zip code must be 5 digits.";
      }

      // State validation
      if (!formData.state) {
        newErrors.state = "State is required.";
      }
    } else if (step === 2 || step === 3) {
      const period = step === 2 ? "firstPeriod" : "secondPeriod";
      const otherPeriod = step === 2 ? "secondPeriod" : "firstPeriod";

      if (!formData[period].academy && !formData[otherPeriod].academy) {
        newErrors[period] = {
          academy:
            "You must select an academy in either the first or second period.",
        };
      }

      if (formData[period].academy) {
        ["academy", "level"].forEach((field) => {
          if (!formData[period][field]) {
            newErrors[period] = {
              ...(newErrors[period] || {}),
              [field]: "This field is required.",
            };
          }
        });
      }
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

    if (step < 4) {
      setStep(step + 1);
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
      setFormData(initialFormData);
      setStep(1);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "There was an error submitting your details. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const preventCopyPaste = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Action not allowed",
      text: "Copy-pasting is disabled for this field.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  };

  const inputStyle = {
    width: "100%",
    maxWidth: "400px",
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
                    href="https://www.facebook.com/iyforlando/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="insta"
                    href="https://www.instagram.com/iyf_orlando/"
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
                <Progress value={(step / 4) * 100} className="mb-4" />
                <Form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <>
                      <h3>Step 1: Personal Information</h3>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                              type="text"
                              id="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              invalid={!!errors.firstName}
                              placeholder="First Name"
                              style={inputStyle}
                            />
                            <FormFeedback>{errors.firstName}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                              type="text"
                              id="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              invalid={!!errors.lastName}
                              placeholder="Last Name"
                              style={inputStyle}
                            />
                            <FormFeedback>{errors.lastName}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="birthday">Birthday</Label>
                            <Input
                              type="date"
                              id="birthday"
                              value={formData.birthday}
                              onChange={handleChange}
                              invalid={!!errors.birthday}
                              style={inputStyle}
                            />
                            <FormFeedback>{errors.birthday}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="age">Age</Label>
                            <Input
                              type="text"
                              id="age"
                              value={formData.age}
                              readOnly
                              placeholder="Age"
                              style={inputStyle}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="gender">Gender</Label>
                            <Input
                              type="select"
                              id="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              invalid={!!errors.gender}
                              style={inputStyle}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </Input>
                            <FormFeedback>{errors.gender}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="cellNumber">Phone Number</Label>
                            <Input
                              type="text"
                              id="cellNumber"
                              value={formData.cellNumber}
                              onChange={handleChange}
                              invalid={!!errors.cellNumber}
                              ref={cellNumberRef}
                              tag={InputMask}
                              mask="(999) 999-9999"
                              placeholder="(999) 999-9999"
                              style={inputStyle}
                            />
                            <FormFeedback>{errors.cellNumber}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                              type="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              invalid={!!errors.email}
                              onCopy={preventCopyPaste}
                              onPaste={preventCopyPaste}
                              placeholder="Email"
                              style={inputStyle}
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="confirmEmail">Confirm Email</Label>
                            <Input
                              type="email"
                              id="confirmEmail"
                              value={formData.confirmEmail}
                              onChange={handleChange}
                              invalid={!!errors.confirmEmail}
                              onCopy={preventCopyPaste}
                              onPaste={preventCopyPaste}
                              placeholder="Confirm Email"
                              style={inputStyle}
                            />
                            <FormFeedback>{errors.confirmEmail}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="address">Address</Label>
                        <Input
                          type="text"
                          id="address"
                          value={formData.address}
                          onChange={handleChange}
                          invalid={!!errors.address}
                          placeholder="Address"
                          style={inputStyle}
                        />
                        <FormFeedback>{errors.address}</FormFeedback>
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="city">City</Label>
                            <Input
                              type="text"
                              id="city"
                              value={formData.city}
                              onChange={handleChange}
                              invalid={!!errors.city}
                              placeholder="City"
                              style={inputStyle}
                            />
                            <FormFeedback>{errors.city}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="state">State</Label>
                            <Input
                              type="select"
                              id="state"
                              value={formData.state}
                              onChange={handleChange}
                              invalid={!!errors.state}
                              style={inputStyle}
                            >
                              <option value="">Select State</option>
                              {STATES.map((state, index) => (
                                <option key={index} value={state}>
                                  {state}
                                </option>
                              ))}
                            </Input>
                            <FormFeedback>{errors.state}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="zipCode">Zip Code</Label>
                            <Input
                              type="text"
                              id="zipCode"
                              value={formData.zipCode}
                              onChange={handleChange}
                              invalid={!!errors.zipCode}
                              maxLength={5}
                              placeholder="Zip Code"
                              style={inputStyle}
                            />
                            <FormFeedback>{errors.zipCode}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            id="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                          />
                          I have read and agree to the{" "}
                          <a href="/terms-and-conditions" target="_blank">
                            Terms and Conditions
                          </a>
                        </Label>
                        {errors.termsAccepted && (
                          <FormFeedback>{errors.termsAccepted}</FormFeedback>
                        )}
                      </FormGroup>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <h3>Step 2: First Period (10:00 am - 11:30 am)</h3>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="academy">Academy</Label>
                            <div>
                              {[
                                "N/A",
                                "Korean",
                                "English",
                                "Piano",
                                "Art",
                                "DIY (Do It Yourself)",
                                "Kids",
                                "Pickleball",
                                "Basketball",
                                "Soccer",
                              ].map((option) => (
                                <FormGroup check key={option}>
                                  <Label check>
                                    <Input
                                      type="radio"
                                      name="firstPeriodAcademy"
                                      id="academy"
                                      value={option}
                                      checked={
                                        formData.firstPeriod.academy === option
                                      }
                                      onChange={handleAcademyChange}
                                      invalid={!!errors.firstPeriod?.academy}
                                    />
                                    {option}
                                  </Label>
                                </FormGroup>
                              ))}
                            </div>
                            <FormFeedback>
                              {errors.firstPeriod?.academy}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="level">Level</Label>
                            <Input
                              type="text"
                              id="level"
                              value={formData.firstPeriod.level}
                              readOnly
                              placeholder="Level"
                              style={inputStyle}
                            />
                            <FormFeedback>
                              {errors.firstPeriod?.level}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      {ACADEMY_NOTES[formData.firstPeriod.academy] && (
                        <p>{ACADEMY_NOTES[formData.firstPeriod.academy]}</p>
                      )}
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <h3>Step 3: Second Period (11:00 am - 12:30 pm)</h3>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="academy">Academy</Label>
                            <div>
                              {[
                                "N/A",
                                "Korean",
                                "English",
                                "Piano",
                                "Art",
                                "DIY (Do It Yourself)",
                                "Kids",
                                "Stretch and Strengthen",
                              ].map((option) => (
                                <FormGroup check key={option}>
                                  <Label check>
                                    <Input
                                      type="radio"
                                      name="secondPeriodAcademy"
                                      id="academy"
                                      value={option}
                                      checked={
                                        formData.secondPeriod.academy === option
                                      }
                                      onChange={handleAcademyChange}
                                      invalid={!!errors.secondPeriod?.academy}
                                    />
                                    {option}
                                  </Label>
                                </FormGroup>
                              ))}
                            </div>
                            <FormFeedback>
                              {errors.secondPeriod?.academy}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="level">Level</Label>
                            {Array.isArray(
                              SECOND_PERIOD_LEVELS[
                                formData.secondPeriod.academy
                              ]
                            ) ? (
                              <div>
                                {SECOND_PERIOD_LEVELS[
                                  formData.secondPeriod.academy
                                ].map((level) => (
                                  <FormGroup check key={level}>
                                    <Label check>
                                      <Input
                                        type="radio"
                                        name="secondPeriodLevel"
                                        id="level"
                                        value={level}
                                        checked={
                                          formData.secondPeriod.level === level
                                        }
                                        onChange={handleChange}
                                        invalid={!!errors.secondPeriod?.level}
                                      />
                                      {level}
                                    </Label>
                                  </FormGroup>
                                ))}
                              </div>
                            ) : (
                              <Input
                                type="text"
                                id="level"
                                value={formData.secondPeriod.level}
                                readOnly
                                placeholder="Level"
                                style={inputStyle}
                              />
                            )}
                            <FormFeedback>
                              {errors.secondPeriod?.level}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      {SECOND_PERIOD_NOTES[formData.secondPeriod.academy] && (
                        <p
                          style={{
                            color:
                              formData.secondPeriod.academy ===
                              "Stretch and Strengthen"
                                ? "red"
                                : "black",
                          }}
                        >
                          {typeof SECOND_PERIOD_NOTES[
                            formData.secondPeriod.academy
                          ] === "string"
                            ? SECOND_PERIOD_NOTES[formData.secondPeriod.academy]
                            : SECOND_PERIOD_NOTES[
                                formData.secondPeriod.academy
                              ][formData.secondPeriod.level]}
                        </p>
                      )}
                    </>
                  )}

                  {step === 4 && (
                    <>
                      <h3>Step 4: Review and Confirm</h3>
                      <Row>
                        <Col md={12}>
                          <h5>Personal Information</h5>
                          <p>
                            <strong>First Name:</strong> {formData.firstName}
                          </p>
                          <p>
                            <strong>Last Name:</strong> {formData.lastName}
                          </p>
                          <p>
                            <strong>Birthday:</strong> {formData.birthday}
                          </p>
                          <p>
                            <strong>Age:</strong> {formData.age}
                          </p>
                          <p>
                            <strong>Gender:</strong> {formData.gender}
                          </p>
                          <p>
                            <strong>Phone Number:</strong> {formData.cellNumber}
                          </p>
                          <p>
                            <strong>Email:</strong> {formData.email}
                          </p>
                          <p>
                            <strong>Address:</strong> {formData.address}
                          </p>
                          <p>
                            <strong>City:</strong> {formData.city}
                          </p>
                          <p>
                            <strong>State:</strong> {formData.state}
                          </p>
                          <p>
                            <strong>Zip Code:</strong> {formData.zipCode}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <h5>First Period (10:00 am - 11:30 am)</h5>
                          <p>
                            <strong>Academy:</strong>{" "}
                            {formData.firstPeriod.academy}
                          </p>
                          <p>
                            <strong>Level:</strong> {formData.firstPeriod.level}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <h5>Second Period (11:00 am - 12:30 pm)</h5>
                          <p>
                            <strong>Academy:</strong>{" "}
                            {formData.secondPeriod.academy}
                          </p>
                          <p>
                            <strong>Level:</strong>{" "}
                            {formData.secondPeriod.level}
                          </p>
                        </Col>
                      </Row>
                    </>
                  )}

                  <div className="d-flex justify-content-between">
                    {step > 1 && (
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => setStep(step - 1)}
                      >
                        Previous
                      </Button>
                    )}
                    <Button
                      type="submit"
                      color="primary"
                      disabled={step === 1 && !formData.termsAccepted}
                    >
                      {step === 4 ? "Submit" : "Next"}
                    </Button>
                  </div>
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
