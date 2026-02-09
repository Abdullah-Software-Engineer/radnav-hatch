import AboutHero from "../../Sections/about/AboutHero/AboutHero";
import HowWeDeliver from "../../Sections/about/HowWeDeliver/HowWeDeliver";
import MissionVision from "../../Sections/about/MissionVision/MissionVision";
import WhatWeDo from "../../Sections/about/WhatWeDo/WhatWeDo";
import OriginStory from "../../Sections/about/OriginStory/OriginStory";
import WhoWeSupport from "@/Sections/home/WhoWeSupport/WhoWeSupport";
import ScheduleCTA from "@/Sections/home/ScheduleCTA/ScheduleCTA";

export const metadata = {
  title: "About Us | Radnav Solutions",
  description:
    "Building stronger radiology teams through trusted staffing solutions. Learn about Radnav Solutions and our healthcare staffing expertise.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MissionVision />
      <WhatWeDo />
      <HowWeDeliver />
      <OriginStory />
      <WhoWeSupport />
      <ScheduleCTA />
    </main>
  );
}
