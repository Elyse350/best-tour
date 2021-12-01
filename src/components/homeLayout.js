import React from "react";
import "./homeLayout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home=({children}) => {
  return (
    <div className="home-container">
  
      <Header/>
      <div style={{ minheight:"80vh"}}>{children}</div>
      <Footer/>
    
      </div>
      
    
  );
};
export default Home;
