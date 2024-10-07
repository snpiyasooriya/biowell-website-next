import Image from "next/image";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import AboutSection from "../components/AboutSection";
import KeyServices from "../components/KeyServices";
import SliderDoctorDetails from "../components/SliderDoctorDetails";
import PharmaSection from "../components/PharmaSection .jsx";
import Product from "../components/Product";
export default function Home() {
  return (
   <div>
    <Hero/>
    <InfoSection/>
    <AboutSection/>
    <KeyServices/>
    <Product/>
    <SliderDoctorDetails/>
    <PharmaSection/>
   </div>
  );
}
