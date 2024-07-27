import React from "react";
import PropTypes from "prop-types";
import "./AcademiesCards.css"; // Ensure you have a CSS file for custom styles

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
                  <a
                    href={`/academies/${academy.id}`}
                    className="text-decoration-none"
                  >
                    {academy.title}
                  </a>
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
                {/* <div className="info-item">
                  <i className="fal fa-calendar-day"></i>
                  <span className="info-text"> {academy.schedule}</span>
                </div> */}
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
