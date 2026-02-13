import Hero from "../Sections/home/Hero/Hero";
import WhyChooseRadnav from "../Sections/home/WhyChooseRadnav/WhyChooseRadnav";
import AboutUs from "../Sections/home/AboutUs/AboutUs";
import OurGoal from "../Sections/home/OurGoal/OurGoal";
import WhoWeSupport from "../Sections/home/WhoWeSupport/WhoWeSupport";
import ScheduleCTA from "../Sections/home/ScheduleCTA/ScheduleCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseRadnav />
      <AboutUs />
      <OurGoal />
      <WhoWeSupport />
      <ScheduleCTA />
    </>
  );
}
