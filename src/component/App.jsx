import React from "react";

import { allSocialJson } from "../data/social";

import Navbar from "./Navbar";
import Hero from "./Hero";
import HeroText from "./HeroText";
import Social from "./Social";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero>
        <HeroText />
        <Social edges={allSocialJson} />
      </Hero>
    </div>
  );
}

export default App;
