import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import user from "../../assets/images/testimonial-user-1.png";

function TestimonialHomeEight() {
  const articleCarosel = useRef();
  const peopleCarosel = useRef();
  const sliderNext = () => {
    articleCarosel.current.slickNext();
    peopleCarosel.current.slickNext();
  };
  const sliderPrev = () => {
    articleCarosel.current.slickPrev();
    peopleCarosel.current.slickPrev();
  };
  const settingsForArticle = {
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsForPeople = {
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="iyf-testimonial-about-area pb-45">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="iyf-section-title text-center">
                <h3 className="iyf-title">
                  What the world leaders say about us
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="testimonial-about-slider-active"
                style={{ position: "relative" }}
              >
                <span
                  onClick={sliderPrev}
                  className="prev slick-arrow"
                  style={{ display: "block" }}
                >
                  <i className="fal fa-arrow-left"></i>
                </span>
                <Slider {...settingsForArticle} ref={articleCarosel}>
                  <div className="testimonial-parent-item">
                    <div className="testimonial-box">
                      <div className="icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="ratings-icon">
                        <ul>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p>
                        I am certain that the IYF has continuously carried out
                        exchange programs with youths overseas, introduced the
                        organization's vision even more broadly, and shared
                        IYF's values. I believe such works have become a
                        valuable lifetime lesson to the IYF students.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-parent-item">
                    <div className="testimonial-box">
                      <div className="icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="ratings-icon">
                        <ul>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Twit some dodgy chav he legged it crikey blatant
                        starkers pukka show off show off pick your nose and blow
                        off morish bum bag boot quaint, Oxford off his nut I
                        bugger up the kyver brilliant bits and bobs haggle
                        buggered.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-parent-item">
                    <div className="testimonial-box">
                      <div className="icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="ratings-icon">
                        <ul>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Twit some dodgy chav he legged it crikey blatant
                        starkers pukka show off show off pick your nose and blow
                        off morish bum bag boot quaint, Oxford off his nut I
                        bugger up the kyver brilliant bits and bobs haggle
                        buggered.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-parent-item">
                    <div className="testimonial-box">
                      <div className="icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="ratings-icon">
                        <ul>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Twit some dodgy chav he legged it crikey blatant
                        starkers pukka show off show off pick your nose and blow
                        off morish bum bag boot quaint, Oxford off his nut I
                        bugger up the kyver brilliant bits and bobs haggle
                        buggered.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-parent-item">
                    <div className="testimonial-box">
                      <div className="icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="ratings-icon">
                        <ul>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Twit some dodgy chav he legged it crikey blatant
                        starkers pukka show off show off pick your nose and blow
                        off morish bum bag boot quaint, Oxford off his nut I
                        bugger up the kyver brilliant bits and bobs haggle
                        buggered.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-parent-item">
                    <div className="testimonial-box">
                      <div className="icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="ratings-icon">
                        <ul>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Twit some dodgy chav he legged it crikey blatant
                        starkers pukka show off show off pick your nose and blow
                        off morish bum bag boot quaint, Oxford off his nut I
                        bugger up the kyver brilliant bits and bobs haggle
                        buggered.
                      </p>
                    </div>
                  </div>
                </Slider>
                <span
                  onClick={sliderNext}
                  className="next slick-arrow"
                  style={{ display: "block" }}
                >
                  <i className="fal fa-arrow-right"></i>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="testimonial-box-about-slider-small-active">
                <Slider {...settingsForPeople} ref={peopleCarosel}>
                  <div className="item">
                    <div className="thumb">
                      <img src={user} alt="" />
                    </div>
                    <div className="content text-center">
                      <h5 className="title">Mahali Phamotse</h5>
                      <span>Minister of Education of Lesotho</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src={user} alt="" />
                    </div>
                    <div className="content text-center">
                      <h5 className="title">Bodrum Salvador</h5>
                      <span>Product Designer</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src={user} alt="" />
                    </div>
                    <div className="content text-center">
                      <h5 className="title">Bodrum Salvador</h5>
                      <span>Product Designer</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src={user} alt="" />
                    </div>
                    <div className="content text-center">
                      <h5 className="title">Bodrum Salvador</h5>
                      <span>Product Designer</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src={user} alt="" />
                    </div>
                    <div className="content text-center">
                      <h5 className="title">Bodrum Salvador</h5>
                      <span>Product Designer</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src={user} alt="" />
                    </div>
                    <div className="content text-center">
                      <h5 className="title">Bodrum Salvador</h5>
                      <span>Product Designer</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialHomeEight;
