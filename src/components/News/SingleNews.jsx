import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import Blog from "./Blog.jsx";
import BlogSideBar from "./BlogSideBar.jsx";
import HeaderNews from "./HeaderNews.jsx";
import HeroNews from "./HeroNews.jsx";
import { fetchAcademies } from "../Academies/api.jsx";

// Function to convert academy titles from URL-friendly format
const fromUrlFriendly = (title) => {
  return title.replace(/\|/g, " ").replace(/[^a-zA-Z0-9\s]/g, "");
};

// Function to convert academy titles to URL-friendly format
const toUrlFriendly = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "|")
    .replace(/[^a-z0-9|]/g, "");
};

function SingleNews() {
  const { title } = useParams();
  const [academy, setAcademy] = useState(null);
  const [drawer, drawerAction] = useToggle(false);

  useEffect(() => {
    const getAcademy = async () => {
      const academies = await fetchAcademies();
      const academyTitle = fromUrlFriendly(title);
      const foundAcademy = academies.find(
        (academy) => academy.title.toLowerCase() === academyTitle.toLowerCase()
      );
      setAcademy(foundAcademy);
    };

    getAcademy();
  }, [title]);

  if (!academy) {
    return <div>Loading...</div>;
  }

  const academyUrlTitle = toUrlFriendly(academy.title);

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderNews action={drawerAction.toggle} />
      <HeroNews
        title={academy.title}
        breadcrumb={[
          { link: "/", title: "home" },
          { link: "/academy", title: "academy" },
          { link: `/academy/${academyUrlTitle}`, title: academyUrlTitle },
        ]}
      />
      <section className="blogpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <Blog academy={academy} />
            </div>
            <div className="col-lg-4 col-md-5">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </section>
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default SingleNews;
