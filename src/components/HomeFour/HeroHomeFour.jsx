import React, { useState } from "react";
import heroThumb from "../../assets/images/hero-thumb-6.png";
import PopupVideo from "../PopupVideo.jsx";

function HeroHomeFour() {
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
      <section className="iyf-hero-area iyf-hero-5-area iyf-hero-3-area">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-lg-10">
              <div className="iyf-hero-content text-center">
                <h1 className="iyf-title">
                  Mobile Interaction Designs of January 2022{" "}
                </h1>
                <p>
                  Jolly good excuse my french boot super my good sir cup of{" "}
                  <br />
                  char richard about chinwag.
                </p>
                <div className="hero-btns">
                  <a className="main-btn" href="#">
                    Get a Quote
                  </a>
                  <a
                    onClick={(e) => handleShowVideo(e)}
                    className="iyf-video-popup"
                    href="https://www.youtube.com/watch?v=kqIugMCop4k"
                  >
                    <i className="fas fa-play"></i> Watch the trailer
                  </a>
                </div>
                <div
                  className="thumb mt-80 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="400ms"
                >
                  <img src={heroThumb} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHomeFour;
