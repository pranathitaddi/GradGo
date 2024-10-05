import Hero from "./(components)/Hero";
import Navbar from "./(components)/Navbar";
import About from "./(components)/About";
import Footer from "./(components)/Footer";
import Services from "./(components)/Services";
import Why from "./(components)/Why";
import Works from "./(components)/Works";

export default function Home() {
  return (
    <div className="w-[100vw]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Why />
      <Works />
      <Footer />
    </div>
  );
}
