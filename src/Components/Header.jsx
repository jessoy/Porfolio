import React from "react";
import "./projects.scss";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h1>
        Hello, I'm Jessie
        {/* <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span> */}
      </h1>
      <h3>I am a Full-Stack Developer living in London, contact me below:</h3>
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
      <h2>See my latest projects below:</h2>

      {/* <h1></h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
    </div>
  );
};

export default Header;
