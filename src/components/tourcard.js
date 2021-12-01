import React,{ useState } from "react";
import picture from "../assets/image/pic.jpg";
import SingleTour from "./SingleTour";
import {Drawer} from "antd";
import "antd/dist/antd.css";
const TourCard = ({tour}) => {
  const[drawervisible,setDrawervisible] =useState(false);
  const handleclickDrawerVisible = ()=>{
    setDrawervisible(true);
  }
  const closeDrawerVisible =() =>{
    setDrawervisible(false);
  }
  return (
    
    <>
    <Drawer title="Basic Drawer" placement="left" visible={drawervisible} width={720} onClose={()=>closeDrawerVisible()}>
    <SingleTour tour={tour}/>
</Drawer>
    <div className="tourcard-container">
      <div class="tour1">
        <img src={tour.image[0]} />
        <p>
          <span >{tour.tittle}</span>
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit<br/>. Quibusdam at
          hic, quis eos vero aliquid, maxime obcaecati perferendis,<br/> assumenda
          soluta voluptas ea quia minima suscipit debitis possimus. Maxime,
          voluptas atque. <br />
          <span>
            seats:{tour.seats} <br />
             available:{tour.available}<br/>
            datescheduled:{tour.datescheduled}<br/>
            duedate:{tour.duedate}<br/>
            phone:{tour.phone}<br/>
            <span  style={{ float:"right" ,color:"blue"}} onClick={()=> handleclickDrawerVisible()}>
            
            Readmore.....
            </span>
            
            
          </span>
        </p>
      </div>
    </div>
    </>
  );
};
export default TourCard;
