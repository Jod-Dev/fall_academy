import React, { useState } from "react";
import FunFactThumb from "../../assets/images/fun-fact-thumb.png";
import CounterUpCom from "../../lib/CounterUpCom.jsx";
import PopupVideo from "../PopupVideo.jsx";

function FunFactHomeThree() {
  const [showVideo, setVideoValue] = useState(false);
  const handleShowVideo = (e) => {
    e.preventDefault();
    setVideoValue(!showVideo);
  };
  return (
    <>
      {showVideo && (
        <PopupVideo
          videoSrc="https://www.youtube.com/watch?v=kqIugMCop4k"
          handler={(e) => handleShowVideo(e)}
        />
      )}
      <section className="iyf-fun-fact-area" id="fun-fact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="iyf-fun-fact-box wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="iyf-fun-fact-content">
                      <h3 className="title">IYF around the world</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="iyf-fun-fact-item">
                            <h4 className="title">
                              <CounterUpCom
                                endValue="700"
                                sectionSelect="fun-fact-area"
                              />
                              {/* k */}
                            </h4>
                            <span>Volunteers</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iyf-fun-fact-item">
                            <h4 className="title">
                              <CounterUpCom
                                endValue="476"
                                sectionSelect="fun-fact-area"
                              />
                              {/* + */}
                            </h4>
                            <span>Members</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iyf-fun-fact-item">
                            <h4 className="title">
                              <CounterUpCom
                                endValue="3"
                                sectionSelect="fun-fact-area"
                              />
                              {/* M */}
                            </h4>
                            <span>Sedes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="iyf-fun-fact-play">
                      <a
                        onClick={(e) => handleShowVideo(e)}
                        className="iyf-video-popup"
                        href="https://www.youtube.com/watch?v=kqIugMCop4k"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <img src={FunFactThumb} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FunFactHomeThree;
