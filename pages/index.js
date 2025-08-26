import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import Achievements from "../components/UI/Achievements";



export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
      
      <Portfolio />
      <Achievements/>
      <Testimonial />
      <Contact />
    </Fragment>
  );
}
