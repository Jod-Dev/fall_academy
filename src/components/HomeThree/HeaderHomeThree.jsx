import React, { useEffect } from "react";
import logo from "../../assets/images/logo-3.png";
import StickyMenu from "../../lib/StickyMenu.js";
import Navigation from "../Navigation.jsx";

function HeaderHomeThree({ action }) {
  useEffect(() => {
    StickyMenu();
  });
  return (
    <>
      <header className="iyf-header-area iyf-header-3-area iyf-sticky">
        <div className="container">
          <div className="header-nav-box header-nav-box-3">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                <div className="iyf-logo-box">
                  <a href="/">
                    <img className="iyf-logo" src={logo} alt="IYF Orlando" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                <div className="iyf-header-main-menu">
                  <Navigation />
                </div>
              </div>
              <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                <div className="iyf-btn-box text-right">
                  {/* <a className="login-btn" href="#">
                    <i className="fal fa-user" /> Login
                  </a>
                  <a className="main-btn ml-30" href="#">
                    Get Started
                  </a> */}
                  <div
                    onClick={(e) => action(e)}
                    className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  >
                    <i className="fa fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderHomeThree;
