import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurClient from "./components/OurClient";
import Product from "./components/Product";
import Business from "./components/Business";
import { ClientSay } from "./components/ClientSay";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container" style={{ margin: "0 auto", width: "1300px" }}>
        <Navbar />
        <Hero />
        <OurClient />
        <Product />
        <Business />
        <ClientSay />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
