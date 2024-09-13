import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import './styles/home.css'
export default function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Footer></Footer>
    </div>
  );
}
