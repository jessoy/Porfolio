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
        Hi, I'm Jessie{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>
      <h3>I am a Full-Stack Developer living in London</h3>
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
      <a
        href="https://www.instagram.com/jessoy/"
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
      >
        <AiFillInstagram />
      </a>
      <p>CV</p>
      <p>Have a look at my latest projects below:</p>

      {/* <h1></h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
    </div>
  );
};

export default Header;
