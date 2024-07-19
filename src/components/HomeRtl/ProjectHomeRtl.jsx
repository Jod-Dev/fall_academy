import React from "react";
import projectThumb from "../../assets/images/project-thumb.png";

function ProjectHomeRtl({ className }) {
  return (
    <>
      <section className={`iyf-project-area pb-100 ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="iyf-project-box wow animated slideInUp"
                data-wow-duration="1000ms"
                data-wow-delay="0ms"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="iyf-project-content text-right">
                      <h3 className="title">ابدأ مشروعك مع iyf.</h3>
                      <p>سنرسل لك بريدًا إلكترونيًا حول هذا المنتج فقط.</p>
                      <form action="#">
                        <div className="input-box mt-30">
                          <input type="text" placeholder="Your email" />
                          <button type="button">الإشتراك</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="iyf-project-thumb">
                  <img src={projectThumb} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectHomeRtl;
