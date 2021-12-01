import { Divider } from "antd";
import React from "react";
import Slider from "./slider/slider";

const SingleTour = ({ tour }) => {
  return (
    <div className="SingleTour-container">
      <Slider />
      <h1>{tour.tittle}</h1>
      <p>{tour.description}</p>

      <img src={tour.image[0]} width="90%" />
      <br />
      <p>{tour.description}</p>
      <Divider />
      <p>{tour.tripDescription}</p>
      {/* <label>seats: </label>
      {tour.seats} <br />
      <label>available: </label>
      {tour.available} */}

      <h4 style={{ fontSize: "30px", color: "green", textAlign: "center" }}>
        TOUR INFOURMATION
      </h4>
      <br />
      <h5 style={{ fontSize: "20px", marginLeft: "50px" }}>SEATS</h5>
      <div className="inform">
        <label>Seats Set:</label>
        {tour.seats}
        <br />
        <label>available Now:</label>
        {tour.available}
      </div>
      <br />
      <h5 style={{ fontSize: "20px", marginLeft: "50px" }}>DATES</h5>
      <div className="dates">
        <label>duedate</label>
        {tour.datescheduled}
        <br />
        <label>Return date:</label>
        {tour.duedate}
      </div>
      {/* <h5 style={{fontSize:"20px",marginLeft:"50px"}}>PRICE</h5>
      <div className="price">
      <label>available price:</label>{tour.price}<br/> */}
      {/* <label>single person:</label>{tour.sprice}<br/><br/> */}
      {/* </div> */}
      <h5 style={{ fontSize: "20px", marginLeft: "50px" }}>OFFERS</h5>
      <div className="offers" style={{ marginLeft: "30px" }}>
        <span>
          Transport
          <br />
          Lunch
          <br />
          Dinner
          <br />
          sleeping room
          <br />
          morning breakfast
        </span>
      </div>
    </div>
  );
};
export default SingleTour;
