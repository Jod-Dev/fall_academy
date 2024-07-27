import React from "react";
import featureThumb from "../../assets/images/features-thumb-2.png";
import shape13 from "../../assets/images/shape/shape-13.png";
import shape14 from "../../assets/images/shape/shape-14.png";
import shape15 from "../../assets/images/shape/shape-15.png";

function FeaturesHomeTwo() {
  return (
    <>
      <section className="iyf-features-area-2 pt-90 pb-100" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="iyf-section-title iyf-section-title-2 text-center">
                <h3 className="iyf-title">Mind Lecture</h3>
                <p>
                  Join us in exploring the forefront of mental and emotional
                  well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-6">
              <div className="iyf-features-boxes">
                <div className="iyf-features-box-item">
                  <a href="/mind-lecture">
                    <h4 className="title">Insightful Sessions</h4>
                  </a>
                  <p>
                    Our Mind Lectures offer profound insights into mental
                    health, emotional intelligence, and personal development.
                  </p>
                </div>
                <div className="iyf-features-box-item item-2">
                  <a href="/mind-lecture">
                    <h4 className="title">Innovative Techniques</h4>
                  </a>
                  <p>
                    Learn about the latest techniques and strategies in mental
                    well-being and personal growth.
                  </p>
                </div>
                <div className="iyf-features-box-item item-3">
                  <a href="/mind-lecture">
                    <h4 className="title">Interactive Discussions</h4>
                  </a>
                  <p>
                    Engage in dynamic discussions and workshops designed to
                    foster a deeper understanding of mental health and personal
                    growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="iyf-features-thumb wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <img src={featureThumb} alt="Mind Lecture Features" />
              </div>
            </div>
          </div>
        </div>
        <div className="features-shape-1">
          <img src={shape15} alt="Shape 15" />
        </div>
        <div className="features-shape-2">
          <img src={shape14} alt="Shape 14" />
        </div>
        <div className="features-shape-3">
          <img src={shape13} alt="Shape 13" />
        </div>
      </section>
    </>
  );
}

export default FeaturesHomeTwo;
