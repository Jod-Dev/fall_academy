import React, { useState } from "react";
import { Link } from "react-router-dom";

function FaqHomeOne({ className }) {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };
  return (
    <>
      <section className={`iyf-faq-area pb-95 ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="iyf-section-title text-center">
                <h3 className="iyf-title">Frequently Asked Questions</h3>
                <p>
                  Have questions about IYF Orlando, Mind Lecture, or IYF Orlando
                  Academy? Find your answers here.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp animated fadeIn faq-accrodion wow"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div
                    onClick={() => openQuestion(1)}
                    className={`accrodion ${showQues === 1 ? "active" : ""}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What is IYF Orlando?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display: showQues === 1 ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>
                            IYF Orlando is a non-profit organization dedicated
                            to fostering leadership and personal growth among
                            youth through various programs, workshops, and
                            community activities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(2)}
                    className={`accrodion ${showQues === 2 ? "active" : ""}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What is a Mind Lecture?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display: showQues === 2 ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>
                            A Mind Lecture is a unique program designed by IYF
                            that focuses on mental and emotional health. It
                            provides practical tools and insights to help
                            individuals manage stress, develop a positive
                            mindset, and achieve personal growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp animated fadeIn faq-accrodion wow"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div
                    onClick={() => openQuestion(3)}
                    className={`accrodion ${showQues === 3 ? "active" : ""}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What is the IYF Orlando Academy?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display: showQues === 3 ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>
                            The IYF Orlando Academy is an intensive training
                            program that equips young people with the skills,
                            knowledge, and mindset needed to become effective
                            leaders in their communities. The academy includes
                            workshops, mentoring, and practical experiences.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(4)}
                    className={`accrodion ${showQues === 4 ? "active" : ""}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>How can I participate in IYF Orlando programs?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display: showQues === 4 ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>
                            You can participate in IYF Orlando programs by
                            visiting our website and registering for the
                            programs that interest you. We offer a variety of
                            events and activities throughout the year, including
                            the IYF Orlando Academy and Mind Lectures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="faq-text text-center pt-40">
                <p>
                  Can't find an answer? <Link to="/contact">Email us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqHomeOne;
