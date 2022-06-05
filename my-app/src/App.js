import React from "react"
import NavBar from "./Template/NavBar/NavBar.js";
import TopBar from "./Template/TopBar/TopBar.js"
import Ticker from "./Template/Ticker/Ticker.js";
import HeroOne from "./Template/HeroOne/HeroOne.js";
import HeroTwo from "./Template/HeroTwo/HeroTwo.js";
import HeroThree from "./Template/HeroThree/HeroThree.js";
import HeroFour from "./Template/HeroFour/HeroFour.js";
import Footer from "./Template/Footer/Footer.js";

// import { useDispatch, useSelector } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  // const cash = useSelector(state => state.cash);
  // console.log(cash)

  return ( <div className="wrapper">
    <TopBar></TopBar>
    <NavBar></NavBar>
    <Ticker></Ticker>
    {/* пропс сокращение от англ. «properties» — свойства  */}
    <HeroOne title="Гитара лучший друг" author="Друг" date="11.05.2022"></HeroOne> 
    <HeroTwo></HeroTwo>
    <HeroThree></HeroThree>
    <HeroFour></HeroFour>
    <Footer></Footer>
  </div>)
}

export default App;
