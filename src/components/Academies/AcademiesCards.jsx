import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./AcademiesCards.css";

// Function to convert academy titles to URL-friendly format
const toUrlFriendly = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "|")
    .replace(/[^a-z0-9|]/g, "");
};

function AcademiesCards({ academies }) {
  return (
    <div className="card-container">
      {academies.length > 0 ? (
        academies.map((academy) => (
          <div className="card" key={academy.id}>
            <img src={academy.image} alt={academy.title} className="card-img" />
            <div className="card-body">
              <div className="card-meta">
                <h5 className="card-title">
                  <Link
                    to={`/academy/${toUrlFriendly(academy.title)}`}
                    className="text-decoration-none"
                  >
                    {academy.title}
                  </Link>
                </h5>
                <p className="card-text">{academy.catchPhrase}</p>
              </div>
              <div className="course-info">
                <span className="meta-item">
                  <i className="fal fa-tag"></i> {academy.tag}
                </span>
                <span className="meta-item">
                  <i className="fas fa-layer-group"></i> {academy.level}
                </span>
                <span className="meta-item">
                  <i className="fal fa-user"></i> {academy.age}
                </span>
                <div className="info-item">
                  <i className="fal fa-dollar-sign"></i>
                  <span className="info-text"> {academy.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No academies found</p>
      )}
    </div>
  );
}

AcademiesCards.propTypes = {
  academies: PropTypes.array.isRequired,
};

export default AcademiesCards;
