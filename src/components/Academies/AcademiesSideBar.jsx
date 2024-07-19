import React from "react";
import { Link } from "react-router-dom";
import BlogImg1 from "../../assets/images/blog/p1.jpg";
import BlogImg2 from "../../assets/images/blog/p2.jpg";
import BlogImg3 from "../../assets/images/blog/p3.jpg";
import BlogImg4 from "../../assets/images/blog/p4.jpg";
import "./AcademiesSideBar.css"; // Assuming you have a CSS file for custom styles

function AcademiesSideBar() {
  return (
    <div className="blog-sidebar">
      <aside className="widget widget-search mb-4">
        <form className="search-form d-flex" action="/search" method="get">
          <input
            type="search"
            name="query"
            placeholder="Search..."
            className="form-control"
          />
          <button type="submit" className="btn btn-primary ms-2">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </aside>
      <aside className="widget widget-categories mb-4">
        <h3 className="widget-title">Categories</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <Link to="/categories/language">Language Academies</Link>
            <span className="badge bg-primary rounded-pill">24</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <Link to="/categories/sports">Sports Academies</Link>
            <span className="badge bg-primary rounded-pill">15</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <Link to="/categories/music">Music Academies</Link>
            <span className="badge bg-primary rounded-pill">8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <Link to="/categories/art">Art Academies</Link>
            <span className="badge bg-primary rounded-pill">13</span>
          </li>
        </ul>
      </aside>
      <aside className="widget widget-trend-post mb-4">
        <h3 className="widget-title">Popular Posts</h3>
        <div className="popular-post d-flex mb-3">
          <Link to="/posts/1">
            <img src={BlogImg1} alt="" className="img-thumbnail me-3" />
          </Link>
          <div>
            <h5 className="mb-1">
              <Link to="/posts/1">Creative Problem Solving</Link>
            </h5>
            <span className="text-muted">March 10, 2020</span>
          </div>
        </div>
        <div className="popular-post d-flex mb-3">
          <Link to="/posts/2">
            <img src={BlogImg2} alt="" className="img-thumbnail me-3" />
          </Link>
          <div>
            <h5 className="mb-1">
              <Link to="/posts/2">Fundamentals of UI Design</Link>
            </h5>
            <span className="text-muted">Jan 14, 2020</span>
          </div>
        </div>
        <div className="popular-post d-flex mb-3">
          <Link to="/posts/3">
            <img src={BlogImg3} alt="" className="img-thumbnail me-3" />
          </Link>
          <div>
            <h5 className="mb-1">
              <Link to="/posts/3">Making Music with Others</Link>
            </h5>
            <span className="text-muted">April 12, 2020</span>
          </div>
        </div>
        <div className="popular-post d-flex">
          <Link to="/posts/4">
            <img src={BlogImg4} alt="" className="img-thumbnail me-3" />
          </Link>
          <div>
            <h5 className="mb-1">
              <Link to="/posts/4">Brush Strokes Energize Trees</Link>
            </h5>
            <span className="text-muted">July 4, 2020</span>
          </div>
        </div>
      </aside>
      <aside className="widget">
        <h3 className="widget-title">Popular Tags</h3>
        <div className="tags">
          <Link
            to="/tags/language"
            className="btn btn-outline-primary btn-sm me-2 mb-2"
          >
            Language
          </Link>
          <Link
            to="/tags/sports"
            className="btn btn-outline-primary btn-sm me-2 mb-2"
          >
            Sports
          </Link>
          <Link
            to="/tags/music"
            className="btn btn-outline-primary btn-sm me-2 mb-2"
          >
            Music
          </Link>
          <Link
            to="/tags/art"
            className="btn btn-outline-primary btn-sm me-2 mb-2"
          >
            Art
          </Link>
          <Link
            to="/tags/creative"
            className="btn btn-outline-primary btn-sm me-2 mb-2"
          >
            Creative
          </Link>
          <Link
            to="/tags/education"
            className="btn btn-outline-primary btn-sm me-2 mb-2"
          >
            Education
          </Link>
          <Link
            to="/tags/motivation"
            className="btn btn-outline-primary btn-sm me-2 mb-2"
          >
            Motivation
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default AcademiesSideBar;
