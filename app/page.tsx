import Hero from "./(components)/Hero";
import Navbar from "./(components)/Navbar";
import About from "./(components)/About";
import Footer from "./(components)/Footer";
import Services from "./(components)/Services";
import Why from "./(components)/Why";
import Works from "./(components)/Works";
import Testimonial from "./(components)/Testimonial";
import ContactUs from "./(components)/ContactUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Why />
      <Works />
      <Testimonial />
      <ContactUs />
      <Footer />
      {/* <div className="w-[100%] h-[200px] bg-bggcol-70"></div> */}
    </>
  );
}
