import React from "react"
import './App.css';
import Home from './component/Home';
import Career from "./component/Career";
import WebPage from "./section/service/webServicePage/WEbPage"
import MobilePage from "./section/service/mobile/WEbPage"
import DigitalMarketing from "./section/service/digital/WEbPage"
import Branding from "./section/service/branding/WEbPage"
import DataAnalytics from "./section/service/data/WEbPage"
import GamePage from "./section/service/game/WEbPage"
import LeadGeneration from "./section/service/lead/WEbPage"
import { useSelector } from 'react-redux';
import {Routes, Route} from "react-router-dom"
import AnimatedCursor from "react-animated-cursor"


function App() {
  const state = useSelector((state) => state);
      const darkCheck = state.dark%2
     
     


  return (
    <div id={darkCheck == 1 && 'app-dark'} className="App">
      <Routes>
        
    
     <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/service/website-design-and-development" element={<WebPage />}/>
      <Route path="/service/mobile-design-and-development" element={<MobilePage />}/>
      <Route path="/service/digital-marketing" element={<DigitalMarketing />}/>
      <Route path="/service/branding-and-identity" element={<Branding />}/>
      <Route path="/service/data-analytics-and-visiualization" element={<DataAnalytics />}/>
      <Route path="/service/game-development" element={<GamePage />}/>
      <Route path="/service/lead-generation" element={<LeadGeneration />}/>
      </Routes>
     
     <AnimatedCursor 
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        border: '3px solid var(--cursor-color)',
      }}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
     />
    </div>
  );
}

export default App;
