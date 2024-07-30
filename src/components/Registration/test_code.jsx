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
      schedule: "10:00 am to 10:50 am",
      academy: "",
      level: "",
    },
    secondPeriod: {
      schedule: "11:40 am to 12:30 pm",
      academy: "",
      level: "",
    },
    thirdPeriod: {
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
      const period =
        step === 2
          ? "firstPeriod"
          : step === 3
          ? "secondPeriod"
          : "thirdPeriod";
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

      if (formData.email !== formData.confirmEmail) {
        newErrors.confirmEmail = "Email addresses do not match.";
      }

      const zipCodeRegex = /^\d{5}$/;
      if (!zipCodeRegex.test(formData.zipCode)) {
        newErrors.zipCode = "Zip Code must be 5 digits.";
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
                <Form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <>
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
                            <Label for="cellNumber">Cell Number</Label>
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
                              type="number"
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
                      <h3>1st Period</h3>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="academy">Academy</Label>
                            <Input
                              type="select"
                              id="academy"
                              name="firstPeriodAcademy"
                              value={formData.firstPeriod.academy}
                              onChange={handleChange}
                              invalid={!!errors.firstPeriod?.academy}
                              style={inputStyle}
                            >
                              <option value="N/A">N/A</option>
                              <option value="Korean">Korean</option>
                              <option value="English">English</option>
                              <option value="Piano">Piano</option>
                              <option value="Art">Art</option>
                              <option value="Kids">Kids</option>
                              <option value="Pickleball">Pickleball</option>
                              <option value="Basketball">Basketball</option>
                              <option value="Soccer">Soccer</option>
                            </Input>
                            <FormFeedback>
                              {errors.firstPeriod?.academy}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="level">Level</Label>
                            <Input
                              type="select"
                              id="level"
                              name="firstPeriodLevel"
                              value={formData.firstPeriod.level}
                              onChange={handleChange}
                              invalid={!!errors.firstPeriod?.level}
                              style={inputStyle}
                            >
                              <option value="N/A">N/A</option>
                              <option value="Level 2">Level 2</option>
                            </Input>
                            <FormFeedback>
                              {errors.firstPeriod?.level}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="schedule">Schedule</Label>
                            <Input
                              type="text"
                              id="schedule"
                              name="firstPeriodSchedule"
                              value="10:00 am - 10:50 am"
                              disabled
                              style={inputStyle}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <h3>2nd Period</h3>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="academy">Academy</Label>
                            <Input
                              type="select"
                              id="academy"
                              name="secondPeriodAcademy"
                              value={formData.secondPeriod.academy}
                              onChange={handleChange}
                              invalid={!!errors.secondPeriod?.academy}
                              style={inputStyle}
                            >
                              <option value="N/A">N/A</option>
                              <option value="Korean">Korean</option>
                              <option value="English">English</option>
                              <option value="Piano">Piano</option>
                              <option value="Art">Art</option>
                              <option value="Kids">Kids</option>
                              <option value="Yoga">Yoga</option>
                            </Input>
                            <FormFeedback>
                              {errors.secondPeriod?.academy}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="level">Level</Label>
                            <Input
                              type="select"
                              id="level"
                              name="secondPeriodLevel"
                              value={formData.secondPeriod.level}
                              onChange={handleChange}
                              invalid={!!errors.secondPeriod?.level}
                              style={inputStyle}
                            >
                              <option value="N/A">N/A</option>
                              <option value="Level 1">Level 1</option>
                              <option value="Level 3">Level 3</option>
                            </Input>
                            <FormFeedback>
                              {errors.secondPeriod?.level}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="schedule">Schedule</Label>
                            <Input
                              type="text"
                              id="schedule"
                              name="secondPeriodSchedule"
                              value="11:40 am - 12:30 pm"
                              disabled
                              style={inputStyle}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </>
                  )}

                  {step === 4 && (
                    <>
                      <h3>3rd Period</h3>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="academy">Academy</Label>
                            <Input
                              type="select"
                              id="academy"
                              name="thirdPeriodAcademy"
                              value={formData.thirdPeriod.academy}
                              onChange={handleChange}
                              style={inputStyle}
                            >
                              <option value="N/A">N/A</option>
                              <option value="Cooking">Cooking</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="level">Level</Label>
                            <Input
                              type="select"
                              id="level"
                              name="thirdPeriodLevel"
                              value={formData.thirdPeriod.level}
                              onChange={handleChange}
                              style={inputStyle}
                            >
                              <option value="N/A">N/A</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="schedule">Schedule</Label>
                            <Input
                              type="text"
                              id="schedule"
                              name="thirdPeriodSchedule"
                              value="1:30 pm - 2:30 pm"
                              disabled
                              style={inputStyle}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </>
                  )}

                  <Button
                    type="submit"
                    color="primary"
                    disabled={step === 1 && !formData.termsAccepted}
                  >
                    {step === 4 ? "Submit" : "Next"}
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

//Test 2
