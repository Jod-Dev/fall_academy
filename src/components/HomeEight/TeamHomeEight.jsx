import React from "react";
import teamOne from "../../assets/images/team-1.jpg";
import teamTwo from "../../assets/images/team-2.jpg";
import teamThree from "../../assets/images/team-3.jpg";
import teamFour from "../../assets/images/team-4.jpg";

function TeamHomeEight() {
  return (
    <>
      <section
        className="
        iyf-team-area iyf-team-about-area iyf-team-8-area
        pt-90
        pb-90
      "
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="iyf-section-title text-center">
                <h3 className="iyf-title">Meet our Team Members</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="
                iyf-team-item iyf-team-item-about iyf-team-item-8
                mt-30
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="thumb">
                  <img src={teamOne} alt="" />
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-left">
                  <h5 className="title">Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="
                iyf-team-item iyf-team-item-about iyf-team-item-8
                mt-30
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="thumb">
                  <img src={teamTwo} alt="" />
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-left">
                  <h5 className="title">Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="
                iyf-team-item iyf-team-item-about iyf-team-item-8
                mt-30
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="thumb">
                  <img src={teamThree} alt="" />
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-left">
                  <h5 className="title">Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="
                iyf-team-item iyf-team-item-about iyf-team-item-8
                mt-30
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="800ms"
              >
                <div className="thumb">
                  <img src={teamFour} alt="" />
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-left">
                  <h5 className="title">Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="team-btn text-center mt-50">
                <a className="main-btn" href="#">
                  View all Members <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamHomeEight;
