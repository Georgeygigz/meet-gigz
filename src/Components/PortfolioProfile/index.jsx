import React, { Component } from "react";
import "./Profile.css";
import prof from "../../assets/prof.jpg";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Tabs from "../Tabs/index"


export class PortfolioProfile extends Component {
  render() {
    return (
      <div className="profile-left-container">
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

          {/* <p className="python">python</p> */}
        </div>
        <div className="skills-tab">
          <Tabs
            activeTab={{
              id: "tab1"
            }}
          >
            <Tabs.Tab id="tab1" title="Languages">
              <div style={{ padding: 10 }}>
                <div className="python">
                  <p>Python</p>
                  <div id="progressbar">
                    <div></div>
                  </div>
                </div>

                <div className="python">
                  <p>JavaScript</p>
                  <div id="progressbar">
                    <div></div>
                  </div>
                </div>

                <div className="python">
                  <p>Java</p>
                  <div id="progressbar">
                    <div></div>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Frameworks">
              <div style={{ padding: 10 }}>
                <div style={{ padding: 10 }}>
                  <div className="python">
                    <p>Django</p>
                    <div id="progressbar">
                      <div></div>
                    </div>
                  </div>

                  <div className="python">
                    <p>FLask</p>
                    <div id="progressbar">
                      <div></div>
                    </div>
                  </div>

                  <div className="python">
                    <p>React</p>
                    <div id="progressbar">
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="Databases">
              <div style={{ padding: 10 }}>
                <div style={{ padding: 10 }}>
                  <div className="python">
                    <p>Mongo</p>
                    <div id="progressbar">
                      <div></div>
                    </div>
                  </div>

                  <div className="python">
                    <p>Postgresql</p>
                    <div id="progressbar">
                      <div></div>
                    </div>
                  </div>

                  <div className="python">
                    <p>Docker</p>
                    <div id="progressbar">
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
          </Tabs>
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
