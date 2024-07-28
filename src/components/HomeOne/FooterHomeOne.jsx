import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

function FooterHomeOne({ className }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className={`iyf-footer-area ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget">
                <div className="logo">
                  <a href="#">
                    <img className="iyf-logo" src={logo} alt="IYF Orlando" />
                  </a>
                </div>
                <p>
                  We nurture the leaders of tomorrow through educational,
                  cultural, and volunteer programs
                </p>
                <Link to="/about-us">
                  Read More <i className="fal fa-arrow-right" />
                </Link>

                <div className="social mt-30">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/iyforlando/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/iyf_orlando/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">IYF Orlando</h4>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <a to="/mind-lecture">Mind Lecture</a>
                  </li>
                  <li>
                    <Link to="/academy">Academy</Link>
                  </li>
                  <li>
                    <Link to="/registration">Registration</Link>
                  </li>
                  <li>
                    <Link to="/event">Event</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Support</h4>
                <ul>
                  <li>
                    <Link to="/about-us">Community</Link>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Volunteer</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Get In Touch</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fal fa-envelope" /> orlando@iyfusa.org
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-phone" /> (407) 900 3442
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-map-marker-alt" /> 320 S Park Ave,
                      Sanford, FL, United States, Florida
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                <div className="copyright-text">
                  <p>
                    Copyright © {currentYear} IYF Orlando. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterHomeOne;
