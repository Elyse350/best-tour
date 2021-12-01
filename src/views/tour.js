import React from "react";
import HomeLayout from "../components/homeLayout";
import TourCard from "../components/tourcard";
import allToursDate from "../assets/constants/tours.json";


const Toursview = () =>{
    
    
return( 
     <HomeLayout>
        <div className="tours-container">
            {
            allToursDate.map((data)=>(<TourCard tour={data}/>))
            }
        
        </div>
       

    </HomeLayout>
    
    


)


}
export default Toursview;