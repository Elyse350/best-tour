
import './App.css';
import Home from"./views/home";
import {BrowserRouter as Router} from "react-router-dom"
import Routes from "./routes"
import TourCard from './components/tourcard';
import Slider from './components/slider/slider';


function App() {
  return (
  
    <Router><Routes/></Router>
    
  );
}

export default App;
