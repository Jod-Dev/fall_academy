import React from "react";
import IconOne from "../../assets/images/icon/exchange.png";
import IconTwo from "../../assets/images/icon/trophy.png";
import IconThree from "../../assets/images/icon/partners.png";
import IconFour from "../../assets/images/icon/4.png";

function AcademiesHomeOne({ className }) {
  return (
    <section
      className={`iyf-academies-area pt-90 pb-100 ${className}`}
      id="academies"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="iyf-section-title text-center">
              <h3 className="iyf-title">
                <br /> About US
              </h3>
              <p>
                Explore the mission, vision, and impact of IYF Orlando as we
                foster growth, community, and cultural exchange through our
                innovative programs and events.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="iyf-single-academies text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <img src={IconOne} alt="" />
                <span>1</span>
              </div>
              <h4 className="iyf-title">Change</h4>
              <p>True change of life that begins from the heart.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="iyf-single-academies text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <img src={IconTwo} alt="" />
                <span>2</span>
              </div>
              <h4 className="iyf-title">Challenge</h4>
              <p>
                A new challenge to overcome one's limitations and experience.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="iyf-single-academies text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <img src={IconThree} alt="" />
                <span>3</span>
              </div>
              <h4 className="iyf-title">Cohesion</h4>
              <p>
                A true cohesive mind that transcends ethnicity and nationality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademiesHomeOne;
