import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"

import Footer from "./components/footer/footer"
import Expertise from "./components/expertise/Expertise"
import About from "./components/about/About"



function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About/>
      <Expertise />
      <Footer/>
    
    </div>
  );
}

export default App;
