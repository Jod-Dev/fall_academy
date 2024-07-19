import React from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import SignupHomeEight from "../HomeEight/SignupHomeEight.jsx";
import TestimonialHomeEight from "../HomeEight/TestimonialHomeEight.jsx";
import WorkPartHomeEight from "../HomeEight/WorkPartHomeEight.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import FunFactHomeThree from "../HomeThree/FunFactHomeThree.jsx";
import AcademiesHomeThree from "../HomeThree/AcademiesHomeThree.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import HeaderNews from "../News/HeaderNews.jsx";
import HeroNews from "../News/HeroNews.jsx";

function AboutUsTwo() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      {" "}
      <Drawer drawer={drawer} action={drawerAction.toggle} />{" "}
      <HeaderNews action={drawerAction.toggle} />{" "}
      <HeroNews
        title="About Us"
        breadcrumb={[
          {
            link: "/",
            title: "Home",
          },

          {
            link: "/about-us",
            title: "about us",
          },
        ]}
      />{" "}
      <AcademiesHomeThree
        style={{
          paddingTop: "90px",
        }}
      />{" "}
      <FunFactHomeThree /> <WorkPartHomeEight className="pt-100" />{" "}
      <TestimonialHomeEight /> <SignupHomeEight />{" "}
      <FooterHomeOne className="iyf-footer-about-area" /> <BackToTop />{" "}
    </>
  );
}

export default AboutUsTwo;
