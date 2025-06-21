import ImageHero from "@/components/header/ImageHero";
import GetInTouch from "@/components/pages/home/GetInTouch";
import SourcingSection from "@/components/pages/home/SourcingSection";
// import VideoHero from "@/components/header/VideoHero";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* <VideoHero /> */}
      <ImageHero />
      <SourcingSection />
      <GetInTouch />
    </div>
  );
}
