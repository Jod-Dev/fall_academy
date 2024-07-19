import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchAcademies } from "./api"; // Adjust path as needed
import "./AcademiesCards.css"; // Ensure you have a CSS file for custom styles

function AcademiesCards() {
  const [academies, setAcademies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAcademies();
        setAcademies(data);
      } catch (error) {
        console.error("Error fetching academies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {academies.map((academy) => (
        <div className="card" key={academy.id}>
          <img src={academy.image} alt={academy.title} className="card-img" />
          <div className="card-body">
            <div className="card-meta">
              <h5 className="card-title">
                <a
                  href={`/academies/${academy.id}`}
                  className="text-decoration-none"
                >
                  {academy.title}
                </a>
              </h5>
              <p className="card-text">{academy.description}</p>
            </div>
            <div className="course-info">
              <span className="meta-item">
                <i className="fal fa-tag"></i> {academy.level}
              </span>
              <span className="meta-item">
                <i className="fal fa-user"></i> {academy.age}
              </span>
              <div className="info-item">
                <i className="fal fa-calendar-day"></i>
                <span className="info-text"> {academy.schedule}</span>
              </div>
              <div className="info-item">
                <i className="fal fa-dollar-sign"></i>
                <span className="info-text"> {academy.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

AcademiesCards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  level: PropTypes.string,
  age: PropTypes.string,
  schedule: PropTypes.string,
};

export default AcademiesCards;
