import Image from "next/image";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import AboutSection from "../components/AboutSection";
import KeyServices from "../components/KeyServices";
import SliderDoctorDetails from "../components/SliderDoctorDetails";
import PharmaSection from "../components/PharmaSection .jsx";
export default function Home() {
  return (
   <div>
    <Hero/>
    <InfoSection/>
    <AboutSection/>
    <KeyServices/>
    <SliderDoctorDetails/>
    <PharmaSection/>
   </div>
  );
}

// tets