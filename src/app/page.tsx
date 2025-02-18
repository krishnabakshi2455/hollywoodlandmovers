import AboutUs from "@/components/home/about";
import Banner from "@/components/home/banner";
import ContactUs from "@/components/home/contactus";
import Gallery from "@/components/home/gallery";
import Navbar from "@/components/home/navbar";
import Services from "@/components/home/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Services/>
    <Gallery/>
    <AboutUs/>
    <ContactUs/>

    </>
  );
}
