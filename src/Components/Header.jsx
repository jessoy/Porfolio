import React from "react";
import "./projects.scss";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h1>Hello, I'm Jessie</h1>
      <h3>A junior full-Stack Developer based in London, contact me below:</h3>
      <div className="icons">
        <a
          href="https://github.com/jessoy"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jessica-clements-5b474259/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn />
        </a>

        {/* <a>CV</a> */}
      </div>
    </div>
  );
};

export default Header;
