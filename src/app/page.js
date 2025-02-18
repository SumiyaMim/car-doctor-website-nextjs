import About from "./home/About";
import Banner from "./home/Banner";
import Contact from "./home/Contact";
import Features from "./home/Features";
import Services from "./home/Services";
import Team from "./home/Team";
import Testimonial from "./home/Testimonial";

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
