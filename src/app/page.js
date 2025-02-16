import About from "./components/home/About";
import Banner from "./components/home/Banner";
import Contact from "./components/home/Contact";
import Features from "./components/home/Features";
import Services from "./components/home/Services";
import Team from "./components/home/Team";
import Testimonial from "./components/home/Testimonial";

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
      <Banner/>
      <About/>
      <Services/>
      <Contact/>
      <Team/>
      <Features/>
      <Testimonial/>
    </div>
  );
}
