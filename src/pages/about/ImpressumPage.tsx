import { useEffect } from 'react';

// import sections
// import HeroSection from "../landing-page/Sections/HeroSection"

// import AboutSection from "../landing-page/Sections/HowItWorksSection";

const ImpressumPage = () => {
  
  // make sure to scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col w-full items-center">

      {/* <HeroSection/>
      <AboutSection/>
      <RoadmapSoftwareSection/>
      <FaqSection/> */}

    </main>
  )
}

export default ImpressumPage;