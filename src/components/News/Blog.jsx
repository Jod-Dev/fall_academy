import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

function Blog({ academy }) {
  const navigate = useNavigate();

  return (
    <div className="single-post-area">
      <div className="post-header">
        <h4 className="article-title">{academy.catchPhrase}</h4>
      </div>
      <div className="post-thumb">
        <img
          src={academy.academyDetailsImg}
          alt={academy.title}
          className="post-image"
        />
      </div>
      <div className="post-content">
        <p>{academy.description}</p>
        <h2>Expectations and Goals</h2>
        <ul>
          <li>{academy.improvement}</li>
          <li>{academy.equipment}</li>
          <li>{academy.schedule}</li>
        </ul>
        <h2>Materials Needed for Class</h2>
        <ul>
          <li>Notebook and pen</li>
          <li>{academy.equipment}</li>
        </ul>
      </div>
      <div className="buttons">
        <button className="btn btn-back" onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className="btn btn-register"
          onClick={() => navigate("/registration")}
        >
          Register
        </button>
      </div>
    </div>
  );
}

Blog.propTypes = {
  academy: PropTypes.object.isRequired,
};

export default Blog;
