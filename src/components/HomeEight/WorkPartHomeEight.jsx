import React from "react";

// import workThumb from "../../assets/images/how-it-work-thumb.png";
import workThumb from "../../assets/images/about-thumb-5.png";

function WorkPartHomeEight() {
  return (
    <>
      <div className="iyf-how-it-work-area pt-10 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="how-it-work-thumb text-center">
                <img src={workThumb} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iyf-how-it-work-content">
                <h2 className="title">Our Activities</h2>
                <p>
                  Discover a world of exciting events and enriching experiences
                  designed to inspire and engage.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>1</span>
                      <h5 className="title">
                        IYF Academy &
                        <br />
                        Mind Lecture
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>2</span>
                      <h5 className="title">
                        Taste of <br />
                        Korea
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>3</span>
                      <h5 className="title">
                        Trip to <br />
                        Korea
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>4</span>
                      <h5 className="title">
                        Cooking <br />
                        Class
                      </h5>
                    </div>
                  </div>
                  {/* <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>4</span>
                      <h5 className="title">
                        Monthly & <br />
                        weekly reports
                      </h5>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkPartHomeEight;
