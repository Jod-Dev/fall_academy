import React from "react";

function HeroAbout() {
  return (
    <>
      <div className="iyf-about-top-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="iyf-about-top-title">
                <h2 className="title">Mind Lecture</h2>
                <p>
                  Mind Education covers essential developmental concepts and
                  solutions to the problems of the heart, such as self-control,
                  deep thinking, connection, and exchange through presentations
                  that are designed for all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="iyf-about-page-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="iyf-about-page-content">
                <h3 className="title">
                  Join us in exploring the forefront of mental and emotional
                  well-being.
                </h3>
                <p>
                  At IYF Orlando, we are dedicated to providing you with
                  cutting-edge insights and strategies through our Mind
                  Lectures. Whether you're looking to enhance your personal
                  development or gain new perspectives in professional settings,
                  our lectures offer valuable tools and knowledge. Engage with
                  leading experts and become part of a community committed to
                  mental and emotional growth.
                </p>
                {/* <a href="/lectures">
                  Discover Our Lectures <i className="fal fa-arrow-right"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroAbout;
