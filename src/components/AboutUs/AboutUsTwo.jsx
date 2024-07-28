import React from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import SignupHomeEight from "../HomeEight/SignupHomeEight.jsx";
import WorkPartHomeEight from "../HomeEight/WorkPartHomeEight.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";

import AcademiesHomeThree from "../HomeThree/AcademiesHomeThree.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import HeaderNews from "../News/HeaderNews.jsx";
import HeroNews from "../News/HeroNews.jsx";
import VideoPlayerHomeTwo from "../HomeTwo/VideoPlayerHomeTwo.jsx";

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
            title: "home",
          },

          {
            link: "/about-us",
            title: "about us",
          },
        ]}
      />{" "}
      <academiesHomeThree
        style={{
          paddingTop: "90px",
        }}
      />{" "}
      <AcademiesHomeThree />
      <VideoPlayerHomeTwo />
      <WorkPartHomeEight className="pt-100" /> <SignupHomeEight />{" "}
      <FooterHomeOne className="iyf-footer-about-area" /> <BackToTop />{" "}
    </>
  );
}

export default AboutUsTwo;
