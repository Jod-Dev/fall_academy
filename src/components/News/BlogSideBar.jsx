import React from "react";
import BlogImg1 from "../../assets/images/blog/p1.jpg";
import BlogImg2 from "../../assets/images/blog/p2.jpg";
import BlogImg3 from "../../assets/images/blog/p3.jpg";
import BlogImg4 from "../../assets/images/blog/p4.jpg";

function BlogSideBar() {
  return (
    <div className="blog-sidebar">
      {/* <aside className="widget widget-search">
        <form className="search-form" action="#" method="post">
          <input type="search" name="s" placeholder="Search..." />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </aside>
      <aside className="widget widget-categories">
        <h3 className="widget-title">Categories</h3>
        <ul>
          <li>
            <a href="#">Web Design</a>
            <span>(24)</span>
          </li>
          <li>
            <a href="#">Marketing</a>
            <span>(15)</span>
          </li>
          <li>
            <a href="#">Frontend</a>
            <span>(8)</span>
          </li>
          <li>
            <a href="#">IT & Software</a>
            <span>(13)</span>
          </li>
          <li>
            <a href="#">Photography</a>
            <span>(4)</span>
          </li>
          <li>
            <a href="#">Technology</a>
            <span>(16)</span>
          </li>
          <li>
            <a href="#">General</a>
            <span>(12)</span>
          </li>
        </ul>
      </aside> */}
      <aside className="widget widget-trend-post">
        <h3 className="widget-title">More Academy</h3>
        <div className="popular-post">
          <a href="single-post.html">
            <img src={BlogImg1} alt="" />
          </a>
          <h5>
            <a href="single-post.html">Art</a>
          </h5>
          {/* <span>March 10, 2020</span> */}
        </div>
        <div className="popular-post">
          <a href="single-post.html">
            <img src={BlogImg2} alt="" />
          </a>
          <h5>
            <a href="single-post.html">Kids</a>
          </h5>
          {/* <span>Jan 14, 2020</span> */}
        </div>
        <div className="popular-post">
          <a href="single-post.html">
            <img src={BlogImg3} alt="" />
          </a>
          <h5>
            <a href="single-post.html">Cooking</a>
          </h5>
          {/* <span>April 12, 2020</span> */}
        </div>
        <div className="popular-post">
          <a href="single-post.html">
            <img src={BlogImg4} alt="" />
          </a>
          <h5>
            <a href="single-post.html">Piano</a>
          </h5>
          {/* <span>July 4, 2020</span> */}
        </div>
      </aside>
      <aside className="widget">
        <h3 className="widget-title">Tags</h3>
        <div className="tags">
          <a href="#">English</a>
          <a href="#">Art</a>
          <a href="#">Piano</a>
          <a href="#">DIY</a>
          <a href="#">Pickleball</a>
          <a href="#">Kids</a>
          <a href="#">Basketball</a>
          <a href="#">Soccer</a>
          <a href="#">Stretch and Strengthen</a>
          <a href="#">Cooking</a>
        </div>
      </aside>
    </div>
  );
}

export default BlogSideBar;
