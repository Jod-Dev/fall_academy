import React from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import HeaderNews from "../News/HeaderNews.jsx";
import HeroNews from "../News/HeroNews.jsx";
import Forms from "./RegistrationForms.jsx";

function Registration() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderNews drawer={drawer} action={drawerAction.toggle} />
      <HeroNews
        title="Registration"
        breadcrumb={[
          { link: "/", title: "home" },
          { link: "/registration", title: "registration" },
        ]}
      />
      <Forms />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Registration;
