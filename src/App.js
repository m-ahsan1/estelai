import HeroSection from "./components/Hero";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import ServiceSection from "./components/Services";
import About1 from "./components/About1";
import ContactForm from "./components/ContactUs";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<HeroSection />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/services" element={<ServiceSection />} />
    //       <Route path="/contact" element={<ContactForm />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>

    <div className="App bg-[#0a110b]">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <About1 />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
