import React from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import BlogHomeOne from "./BlogHomeOne.jsx";
import FaqHomeOne from "./FaqHomeOne.jsx";
import FooterHomeOne from "./FooterHomeOne.jsx";
import HeroHomeOne from "./HeroHomeOne.jsx";
import HomeOneHeader from "./HomeOneHeader.jsx";
import ProjectHomeOne from "./ProjectHomeOne.jsx";
import AcademiesHomeOne from "./academiesHomeOne.jsx";
import TestimonialHomeOne from "./TestimonialHomeOne.jsx";
import ShowCaseHomeThree from "../HomeThree/ShowCaseHomeThree.jsx";
import BlogHomeThree from "../HomeThree/BlogHomeThree.jsx";
import FeaturesHomeTwo from "../HomeTwo/FeaturesHomeTwo.jsx";

function HomeOne() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader action={drawerAction.toggle} />
      <HeroHomeOne />
      <AcademiesHomeOne />
      <FeaturesHomeTwo />
      <ShowCaseHomeThree />
      <TestimonialHomeOne />
      <BlogHomeThree />
      <FaqHomeOne />
      <ProjectHomeOne />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default HomeOne;
