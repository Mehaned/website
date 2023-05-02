import { BrowserRouter } from "react-router-dom";

import { About, Contact, Stories, /* Experience */ /* Feedbacks */ Hero, Navbar, Tech, /* Works, */ StarsCanvas } from "./components";
import {story} from "../src/work/index.js";
import {heroapi} from '../src/constants/index.js'
import SocialLink from "./utils/SocialLink";
const App = ()=> {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Stories story={story} />
        <div className='relative z-0'>
          <Contact heroapi={heroapi}/>
          <StarsCanvas />
        </div>
        <SocialLink />
      </div>
    </BrowserRouter>
  )
}

export default App
