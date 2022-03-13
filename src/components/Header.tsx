import React from 'react';
import CoverImage from '../images/background-image.jpg';
import ProfileImage from '../images/profile-image.jpg';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import '../styles/Header.css';

export const Header: React.VFC = () => {
  return (
    <header
      className="main-cover"
      style={{ backgroundImage: `url(${CoverImage})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div
              className="profile-thumb"
              style={{ backgroundImage: `url(${ProfileImage})` }}
            ></div>
            <h1 className="title-text">Ryoma Arisawa</h1>
            <h3 className="title-text">Web Engineer</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com/kusakab62617478">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/RyomaArisawa">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
