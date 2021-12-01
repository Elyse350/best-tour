import React from "react";
import HomeLayout from "../components/homeLayout";

const Aboutus = () => {
  return (
    <HomeLayout>
      <div class="section">
        <div class="container">
          <div class="section-content">
            <div class="tittle">
              <h1>About Us</h1>
            </div>
            <div class="content">
              <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
              <p>
                {" "}
                ss Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam voluptates sed illo, inventore quo impedit corrupti
                laudantium voluptate nesciunt dolor architecto asperiores
                blanditiis ab, at nulla odit enim voluptas cumque.
              </p>
              <div class="button">
                <a href="">Read More</a>
              </div>
            </div>
            <div class="social">
              <a href="">
                <i class="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          {/* <div class="img-section">
          {/* <img src="./tour.jpg" alt="" /> */}
          {/* </div>  */}
        </div>
      </div>
      <div className="abtn">
        <div className="abtnus">
          <div className="mission">
            <h2>OUR MISSION</h2>
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
          <div className="value">
            <h2>OUR VALUE</h2>
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
          <div className="objective">
            <h2>OUR OBJECTIVES</h2>
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
          <div style={{ clear: "both" }}>hh</div>
        </div>
      </div>
    </HomeLayout>
  );
};
export default Aboutus;
