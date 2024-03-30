import "./landing-page.scss"

// import sections
import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/HowItWorksSection"
import RoadmapSoftwareSection from "./sections/RoadmapSoftwareSection"
import FaqSection from "./sections/FaqSection"

const LandingPage = () => {

  return (
    <>

      {/* Page Content */}
      <main className="flex flex-col w-full items-center">

        <HeroSection/>
        <AboutSection/>
        <RoadmapSoftwareSection/>
        <FaqSection/>

      </main>

    </>
  )
}

export default LandingPage