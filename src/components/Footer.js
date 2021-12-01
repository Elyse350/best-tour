import React from "react";
import "./Footer.css";
import {CopyrightOutlined} from '@ant-design/icons';
import { Divider } from "antd";

const Footer = () => {
  return (
    <div className="Footer-wrapper">
      <div style={{ clear: "both" }}></div>
      <div className="footer">
        <div className="waves">
          <div class="waves" id="wave1"></div>
          <div class="waves" id="wave2"></div>
          <div class="waves" id="wave3"></div>
          <div class="waves" id="wave4"></div>
        </div>
        <div className="services">
          <h1>Our servives</h1>
          <p>
            orem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry's standard
            <br /> dummy text ever since the 1500s,
            <br />
            when an unknown printer took a galley of type
            <br /> and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="location">
          <h1>Adress</h1>
          <p>
            {" "}
            location: Kigali-Rwanda
            <br /> email adress: mutonielyse35@gmail.com
          </p>
        </div>
        <div className="join">
          <h1>Visit us</h1>
          <a href="https://www.linkedin.com/in/marie-grace-kagaju-aa327a125/">
            {" "}
            <i class="fab fa-linkedin-in"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          {/* <i class="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp;  */}
          <a href="https://www.instagram.com/grace_kagaju__givia/">
            <i class="fab fa-instagram"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://twitter.com/GraceKagaju">
            {" "}
            <i class="fab fa-twitter"></i>
          </a>
        </div><br/>
        <Divider/>
        <div class="copy">
        <h5>&copy;Elyse250</h5>
      </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};
export default Footer;
