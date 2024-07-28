import React from "react";
import { Link } from "react-router-dom";
import BlogFour from "../../assets/images/blog-4.jpg";
import BlogFive from "../../assets/images/blog-5.jpg";
import BlogSix from "../../assets/images/blog-6.jpg";
import BlogSeven from "../../assets/images/blog-7.jpg";

function BlogHomeThree() {
  return (
    <>
      <section className="iyf-blog-3-area pt-90 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="iyf-section-title text-center">
                <h3 className="iyf-title">Upcoming events</h3>
                <p>
                  Don’t miss out! Check out our schedule of upcoming events that
                  are set to inspire and engage the IYF Orlando community.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="iyf-blog-item-3 mt-30">
                <div className="thumb">
                  <img src={BlogFour} alt="Youth Empowerment Workshop" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="/academy">IYF Orlando - 2024 Fall Academy</a>
                  </h5>
                  <div className="meta-item">
                    <ul>
                      <li>
                        <i className="fal fa-clock" /> August 17, 2024
                      </li>
                      <li>
                        <Link to="/events">
                          <i className="fal fa-calendar-alt" /> Register Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iyf-blog-item-3 mt-30">
                <div className="thumb">
                  <img
                    src={BlogFive}
                    alt="Leadership and Team Building Conference"
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="/events/event-2">Taste of Korea Event</a>
                  </h5>
                  <div className="meta-item">
                    <ul>
                      <li>
                        <i className="fal fa-clock" /> September 14, 2024
                      </li>
                      <li>
                        <Link to="/events">
                          <i className="fal fa-calendar-alt" /> Register Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iyf-blog-item-3 mt-30">
                <div className="thumb">
                  <img src={BlogSix} alt="Community Service Initiative" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="/events/event-3">
                      2024 Fall Academy - Presentation
                    </a>
                  </h5>
                  <div className="meta-item">
                    <ul>
                      <li>
                        <i className="fal fa-clock" /> November 23, 2024
                      </li>
                      <li>
                        <Link to="/events">
                          <i className="fal fa-calendar-alt" /> Register Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iyf-blog-item-3 mt-30">
                <div className="thumb">
                  <img src={BlogSeven} alt="Mental Health Awareness Seminar" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="/events/event-4">Dallas Korean Camp</a>
                  </h5>
                  <div className="meta-item">
                    <ul>
                      <li>
                        <i className="fal fa-clock" /> December 20, 2024
                      </li>
                      <li>
                        <Link to="/events">
                          <i className="fal fa-calendar-alt" /> Register Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="blog-btn text-center mt-60">
                <Link className="main-btn" to="/events">
                  View All Events <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogHomeThree;
