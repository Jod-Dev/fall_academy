import React from "react";
import IconOne from "../../assets/images/icon/1.png";
import IconTwo from "../../assets/images/icon/2.png";
import IconThree from "../../assets/images/icon/3.png";
import IconFour from "../../assets/images/icon/4.png";

function academiesHomeRtl({ className }) {
  return (
    <section
      className={`iyf-academies-area pt-90 pb-100 ${className}`}
      id="academies"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="iyf-section-title text-center">
              <h3 className="iyf-title">
                مصممة مع <br /> مقدم الطلب في الاعتبار.
              </h3>
              <p>مونتي الكامل spiffing الوقت المناسب لا نكش بيجي نكش رائع. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="iyf-single-academies text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <img src={IconOne} alt="" />
                <span>1</span>
              </div>
              <h4 className="iyf-title">يبحث</h4>
              <p>Mucker الجص التافه كل ماتي موريش.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="iyf-single-academies text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <img src={IconTwo} alt="" />
                <span>2</span>
              </div>
              <h4 className="iyf-title">تصميم</h4>
              <p>Mucker الجص التافه كل ماتي موريش.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="iyf-single-academies text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <img src={IconThree} alt="" />
                <span>3</span>
              </div>
              <h4 className="iyf-title">بناء</h4>
              <p>Mucker الجص التافه كل ماتي موريش.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="iyf-single-academies text-center mt-30 item-4 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="800ms"
            >
              <div className="icon">
                <img src={IconFour} alt="" />
                <span>4</span>
              </div>
              <h4 className="iyf-title">دعم</h4>
              <p>Mucker الجص التافه كل ماتي موريش.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default academiesHomeRtl;
