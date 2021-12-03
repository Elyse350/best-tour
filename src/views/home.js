import React from "react";
import "./home.css";
import HomeLayout from "../components/homeLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <HomeLayout>
      <div className="home-container">
        <div className="home">
        <h1>RWANDA BOOKING TOUR</h1>
        <div className="title">
          <h2> VISIT RWANDA</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="overlay"></div>
        <div class="text"></div>
        </div>
      </div>
      <div className="home-bg">
        <div className="new">
        <div class="read">
          <h3>Rwanda is a country of a thousand hills</h3>
          <p>
            Green, clean, safe, lively and friendly, <br />
            I was recently privileged enough to be
            <br /> invited on a trip-of-a-lifetime
            <br /> to wonderful Rwanda.
          </p><br/>
          <br/>
          <h3>Rwanda is a country of a thousand hills</h3>
          <p>
            Green, clean, safe, lively and friendly, <br />
            I was recently privileged enough to be
            <br /> invited on a trip-of-a-lifetime
            <br /> to wonderful Rwanda.
          </p>
        </div>

        <div className="form2"></div>
        </div>
        </div>
        <div style={{ clear: "both" }}></div>
        <div class="sub-container">
        <div class="tour-container">
          <h1>Book Your Tour Now</h1>
          <label for="tour">Tour categories:</label>
          <br />

          <select id="tour">
            <option value="Park">Park</option>
            <option value="Lakes">Lakes</option>
            <option value="Forest">Forest</option>
            <option value="Mountain">Mountain</option>
          </select>
          <br />
          <br />
          <br />
          <label for="tour">Tour locations:</label>
          <br />

          <select id="tour">
            <option value="Musanze">Musanze</option>
            <option value="Karongi">Karongi</option>
            <option value="Nyanza">Forest</option>
            <option value="Mountain">Mountain</option>
          </select>
        </div>
        <div class="form-1">
        <p class="par">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
          Maiores eligendi mollitia soluta nam adipisci laudantium vitae nihil
          <br />
          magni illo ipsa amet minima rerum ex ad, cum ut magnam delectus. Modi.<br/>Labore do esse velit ullamco ea.Cillum<br/>
           pariatur exercitation deserunt sunt id mollit nisi sunt.
        </p>
        <button class="button"><a href="./tour">BOOK NOW!</a></button>
        </div>
       
        </div>
      
      
    </HomeLayout>
  );
};
export default Home;
