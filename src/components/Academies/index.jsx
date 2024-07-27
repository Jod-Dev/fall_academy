import React, { useState, useEffect } from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import AcademiesCards from "./AcademiesCards.jsx";
import AcademiesSideBar from "./AcademiesSideBar.jsx";
import HeaderAcademies from "./HeaderAcademies.jsx";
import HeroAcademies from "./HeroAcademies.jsx";
import { fetchAcademies } from "./api"; // Importa la función para obtener los datos de academias

function Academies() {
  const [drawer, drawerAction] = useToggle(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [academies, setAcademies] = useState([]);
  const [categoriesCount, setCategoriesCount] = useState({
    total: 0,
    language: 0,
    sports: 0,
    music: 0,
    art: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAcademies();
        setAcademies(data);
        calculateCategoriesCount(data);
      } catch (error) {
        // console.error("Error fetching academies:", error);
      }
    };

    fetchData();
  }, []);

  const calculateCategoriesCount = (data) => {
    const total = data.length;
    const language = data.filter(
      (academy) => academy.tag === "Language"
    ).length;
    const sports = data.filter((academy) => academy.tag === "Sports").length;
    const music = data.filter((academy) => academy.tag === "Music").length;
    const art = data.filter((academy) => academy.tag === "Art").length;

    setCategoriesCount({ total, language, sports, music, art });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const filteredAcademies = academies.filter((academy) => {
    const matchesCategory = category === "" || academy.tag === category;
    const matchesSearch = academy.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderAcademies action={drawerAction.toggle} />
      <HeroAcademies
        title="Academy"
        breadcrumb={[
          { link: "/", title: "home" },
          { link: "/academies", title: "academy" },
        ]}
      />
      <section className="blogpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <AcademiesCards academies={filteredAcademies} />
            </div>
            <div className="col-lg-4 col-md-5">
              <AcademiesSideBar
                onSearch={handleSearch}
                onFilter={handleFilter}
                categoriesCount={categoriesCount}
              />
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
