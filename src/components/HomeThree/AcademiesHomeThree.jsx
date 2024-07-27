import React from "react";
import iconOne from "../../assets/images/icon/exchange.png";
import iconTwo from "../../assets/images/icon/trophy.png";
import iconThree from "../../assets/images/icon/partners.png";
import iconFour from "../../assets/images/icon/4.png";

function academiesHomeThree() {
  return (
    <>
      <section
        className="iyf-academies-area iyf-academies-3-area pt-195 pb-100"
        id="academies"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="iyf-section-title text-center">
                <h3 className="iyf-title">What is IYF?</h3>
                <p>
                  IYF was established as a worldwide youth organization and
                  international NGO based on Christian mindset in 2001, to raise
                  leaders with a global insight through youth education,
                  activities, and provide realistic solutions to problems in the
                  global village.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="
                iyf-single-academies iyf-single-academies-3
                text-center
                mt-30
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <img src={iconOne} alt="" />
                </div>
                <h4 className="iyf-title">Change</h4>
                <p>True change of life that begins from the heart.</p>
                {/* <a href="#">
                  Read More <i className="fal fa-arrow-right" />
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="
                iyf-single-academies iyf-single-academies-3
                text-center
                mt-30
                item-2
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="icon">
                  <img src={iconTwo} alt="" />
                </div>
                <h4 className="iyf-title">Challenge</h4>
                <p>
                  A new challenge to overcome one's limitations and experience
                  endless possibilities IF International Youth Fellowship.
                </p>
                {/* <a href="#">
                  Read More <i className="fal fa-arrow-right" />
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="
                iyf-single-academies iyf-single-academies-3
                text-center
                mt-30
                item-3
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="icon">
                  <img src={iconThree} alt="" />
                </div>
                <h4 className="iyf-title">Cohesion </h4>
                <p>
                  A true cohesive mind that transcends ethnicity, nationality,
                  language and religion.
                </p>
                {/* <a href="#">
                  Read More <i className="fal fa-arrow-right" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default academiesHomeThree;
