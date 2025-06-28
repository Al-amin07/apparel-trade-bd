import ImageHero from "@/components/header/ImageHero";
// import AboutUs from "@/components/pages/home/AboutUs";
import CertificationSection from "@/components/pages/home/CertificateSection";
import GetInTouch from "@/components/pages/home/GetInTouch";
import OurCustomer from "@/components/pages/home/OurCustomer";

import SourcingSection from "@/components/pages/home/SourcingSection";
import Sourcing from "@/components/Sourcing";
// import VideoHero from "@/components/header/VideoHero";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* <VideoHero /> */}
      <ImageHero />
      <SourcingSection />
      {/* <AboutUs /> */}
      <Sourcing />

      <OurCustomer />
      <CertificationSection />
      <GetInTouch />
    </div>
  );
}
