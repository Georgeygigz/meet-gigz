import React, { Component } from "react";
import "./Profile.css";
import prof from "../../assets/prof.jpg";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Example from "../Tabs/index";

export class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="prof-pic">
          <img src={prof} alt="Smiley face" className="prof-pic-" />
          <p className="prof-name">George Githinji Mutti</p>
        </div>

        <div className="intro">
          <p className="enthusiast">
            TECH ENTHUSIAST / PROFICIENT IN WEB DEVELOPMENT AND DATA ANALYSIS
          </p>
          <p className="passion">
            Meet Georgey Gigz, Software developer at Andela, most passionate
            about technology. Inspired by solving real life problem using tech
            solution.
          </p>
        </div>
        <div className="skills">
          <p className="gigz-skills">Skills</p>
          <div className="python">
            <p>Python</p>
            <div id="progressbar">
              <div></div>
            </div>
          </div>

          <div className="python">
            <p>Python</p>
            <div id="progressbar">
              <div></div>
            </div>
          </div>
          <div className="python">
            <p>Python</p>
            <div id="progressbar">
              <div></div>
            </div>
          </div>
          <div className="python">
            <p>Python</p>
            <div id="progressbar">
              <div></div>
            </div>
          </div>
          <div className="python">
            <p>Python</p>
            <div id="progressbar">
              <div></div>
            </div>
          </div>
          {/* <p className="python">python</p> */}
        </div>

        <div className="social-icons">
          <div className="github">
            <a href="https://github.com/Georgeygigz">
              {" "}
              <FaGithub size={25} />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/george-mutti-b5a86bba/">
              <FaLinkedinIn size={25} />
            </a>
          </div>
          <div className="email">
            <a href="mailto: georgeymutti@gmail.com">
              <AiOutlineMail size={25} />
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/georgeymutti">
              {" "}
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
