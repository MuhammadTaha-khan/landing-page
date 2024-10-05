// import Image from "next/image";
import Herosec from "./components/Herosec";
import RunFund from "./components/RunFund";
import HowWorks from "./components/HowWork";
import MainCard from "./components/MainCard";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Fundraising from "./components/Fundraising";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <Herosec/>
      <RunFund/>
      <HowWorks/>
      <MainCard/>
      <Fundraising/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}
