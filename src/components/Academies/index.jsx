import React from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import AcademiesCards from "./AcademiesCards.jsx";
import AcademiesSideBar from "./AcademiesSideBar.jsx";
// import HeaderNews from "./HeaderNews.jsx";
import HeaderAcademies from "./HeaderAcademies.jsx";
import HeroAcademies from "./HeroAcademies.jsx";

function Academies() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderAcademies action={drawerAction.toggle} />
      <HeroAcademies
        title="Academies"
        breadcrumb={[
          { link: "/", title: "home" },
          { link: "/academies", title: "Academies" },
        ]}
      />
      <section className="blogpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <AcademiesCards />
            </div>
            <div className="col-lg-4 col-md-5">
              <AcademiesSideBar />
            </div>
          </div>
        </div>
      </section>
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Academies;
