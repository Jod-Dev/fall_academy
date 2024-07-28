import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

function Drawer({ drawer, action, lang }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("home");

  const handler = (e, value) => {
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      setSize(`${43 * getItems}px`);
      setItem(value);
    }
  };

  return (
    <>
      <div
        onClick={(e) => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="canvas_close">
                  <a href="#" onClick={(e) => action(e)}>
                    <i className="fa fa-times"></i>
                  </a>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  <img className="iyf-logo" src={logo} alt="IYF Orlando" />
                </div>
                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={(e) => handler(e, "home")}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "about-us")}
                      id="about-us"
                      className="menu-item-has-children active"
                    >
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "mind-lecture")}
                      id="mind-lecture"
                      className="menu-item-has-children active"
                    >
                      <Link to="/mind-lecture">Mind Lecture</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "academy")}
                      id="academy"
                      className="menu-item-has-children active"
                    >
                      <Link to="/academy">Academy</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "registration")}
                      id="registration"
                      className="menu-item-has-children active"
                    >
                      <Link to="/registration">Registration</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a
                        href="https://www.facebook.com/iyforlando/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/iyf_orlando/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="mailto:orlando@iyfusa.org">
                        <i className="fal fa-envelope"></i> orlando@iyfusa.org
                      </a>
                    </li>
                    <li>
                      <a href="tel:(407) 900 3442">
                        <i className="fal fa-phone"></i> (407) 900 3442
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-map-marker-alt"></i> 320 S Park Ave
                        Sanford, FL 32771
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
