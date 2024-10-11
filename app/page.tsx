// import Image from "next/image";
import Herosec from "./components/Herosec";
import RunFund from "./components/RunFund";
import HowWorks from "./components/HowWork";
import MainCard from "./components/MainCard";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Fundraising from "./components/Fundraising";
import Footer from "./components/Footer";
// import Slider from "./components/Slider";

export default function Home() {
  return (
    <div >
      <Herosec/>
      <RunFund/>
      <HowWorks/>
      <MainCard/>
      <Fundraising/>
      <FAQ/>
      {/* <Slider/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}
