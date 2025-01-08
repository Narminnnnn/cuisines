import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <aside>
      <header>
        <div className="containHeader">
          <div className="logoHaeder">
            <img
              src="https://preview.colorlib.com/theme/cuisines/images/logo.svg"
              alt=""
            />
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <a href=""> <span className="line">About us </span></a>
                </li>
                <li>
                  <a href="">Our Menu</a>
                </li>
                <li>
                  <a href="">Spesial Offers</a>
                </li>
                <li>
                  <a href="">Galerry</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="contactHrader">
            <span className="book">Book A Table</span>
            <h3> +91-8010200777</h3>
            <p className="monday">Mon - Sun, 8:00AM - 11:00PM</p>
          </div>
        </div>
      </header>
    </aside>
  );
};

export default Header;
