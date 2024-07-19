import React, { useEffect } from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import BlogHomeOne from "../HomeOne/BlogHomeOne.jsx";
import FaqHomeOne from "../HomeOne/FaqHomeOne.jsx";
import FeaturesHomeOne from "../HomeOne/FeaturesHomeOne.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import HeroHomeOne from "../HomeOne/HeroHomeOne.jsx";
import HomeOneHeader from "../HomeOne/HomeOneHeader.jsx";
import PricingHomeOne from "../HomeOne/PricingHomeOne.jsx";
import ProjectHomeOne from "../HomeOne/ProjectHomeOne.jsx";
import AcademiesHomeOne from "../HomeOne/AcademiesHomeOne.jsx";
import TeamHomeOne from "../HomeOne/TeamHomeOne.jsx";
import TestimonialHomeOne from "../HomeOne/TestimonialHomeOne.jsx";
import TrafficHomeOne from "../HomeOne/TrafficHomeOne.jsx";
import Drawer from "../Mobile/Drawer.jsx";

function HomeDark() {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);

  useEffect(() => {
    document.body.classList.add("iyf-init");
    if (darkMode) {
      document.body.classList.add("iyf-dark");
    } else {
      document.body.classList.remove("iyf-dark");
    }
    return () => {
      document.body.classList.remove("iyf-dark");
    };
  });

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader
        className={darkMode ? "iyf-header-area-dark" : ""}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      <HeroHomeOne className={darkMode ? "iyf-hero-area-dark" : ""} />
      <AcademiesHomeOne className={darkMode ? "iyf-academies-area-dark" : ""} />
      <FeaturesHomeOne className={darkMode ? "iyf-features-area-dark" : ""} />
      <TrafficHomeOne className={darkMode ? "iyf-traffic-area-dark" : ""} />
      <TestimonialHomeOne />
      <TeamHomeOne className={darkMode ? "iyf-team-area-dark" : ""} />
      <PricingHomeOne className={darkMode ? "iyf-pricing-area-dark" : ""} />
      <FaqHomeOne className={darkMode ? "iyf-faq-area-dark" : ""} />
      <BlogHomeOne className={darkMode ? "iyf-blog-area-dark" : ""} />
      <ProjectHomeOne />
      <FooterHomeOne className={darkMode ? "iyf-footer-area-dark" : ""} />
      <BackToTop />
    </>
  );
}

export default HomeDark;
