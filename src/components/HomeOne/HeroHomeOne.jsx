import React from "react";
import heroThumbOne from "../../assets/images/hero-thumb-1.png";
import heroThumbTwo from "../../assets/images/hero-thumb-2.png";
import shapeTwo from "../../assets/images/shape/shape-2.png";
import shapeThree from "../../assets/images/shape/shape-3.png";
import shapeFour from "../../assets/images/shape/shape-4.png";

function HeroHomeOne({ className }) {
  return (
    <>
      <section className={`iyf-hero-area ${className || ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="iyf-hero-content">
                <h1 className="iyf_orlando_academy_title">
                  IYF Academy & Mind Lecture
                </h1>
                {/* <h3 className="iyf-title"> */}
                <h2 className="">Welcome to our 2024 Fall Semester.</h2>
                <p>
                  Join us for an exciting and enriching Fall Academy at IYF
                  Orlando! Our program is designed to inspire, educate, and
                  engage participants of all ages, from kids, as well as youth
                  and adults. With a diverse range of activities, workshops, and
                  events, our academy aims to foster personal growth, academic
                  excellence, and community involvement.
                </p>
                <ul>
                  <li>
                    <a href="/registration">
                      <i className="fa fa-pencil-alt" /> Register now
                    </a>
                  </li>

                  <li>
                    <a className="item-2" href="/about-us">
                      <i className="fa fa-info-circle" /> Learn More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iyf-hero-thumb">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={heroThumbOne} alt="" />
                </div>
                <div
                  className="thumb-2 wow animated fadeInRight"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <img src={heroThumbTwo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1">
          <img src={shapeTwo} alt="" />
        </div>
        <div className="hero-shape-2">
          <img src={shapeThree} alt="" />
        </div>
        <div className="hero-shape-3">
          <img src={shapeFour} alt="" />
        </div>
      </section>
    </>
  );
}

export default HeroHomeOne;
