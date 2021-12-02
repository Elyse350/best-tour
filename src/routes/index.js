import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import Aboutus from "../views/about us";
import Contactus from "../views/contact us";
import Toursview from "../views/tour";
import Newtourview from "../views/dashbord/NewTour";
import DashLayout from "../components/dashboardlayout";
import AllTours from "../views/dashbord/allTours";

const isUSerLogedin = localStorage.getItem("userlLogedIn");
const currentUrl = useLocation().pathname;
const Index = () => {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/tour" element={<Toursview />} />
      </Routes>
      {isUSerLogedin && currentUrl.includes("/dash") ? (
        <DashLayout>
          <Routes>
            <Route exact path="/dash/newtour" element={<Newtourview />} />
            <Route exact path="/dash/alltours" element={<AllTours />} />
          </Routes>
        </DashLayout>
      ) : (
        <></>
      )}
    </>
  );
};
export default Index;
