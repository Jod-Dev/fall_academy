import React from "react";
import workThumb from "../../assets/images/how-it-work-thumb.png";

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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>1</span>
                      <h5 className="title">
                        Global
                        <br />
                        Education
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>2</span>
                      <h5 className="title">
                        Cultural <br />
                        Exchange
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>3</span>
                      <h5 className="title">
                        International <br />
                        Exchange
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="how-it-work-box">
                      <span>4</span>
                      <h5 className="title">
                        Social <br />
                        Volunteer{" "}
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
