import "./landing-page.scss"

// import sections
import HeroSection from "./Sections/HeroSection"
import AboutSection from "./Sections/HowItWorksSection"
import RoadmapSoftwareSection from "./Sections/RoadmapSoftwareSection"
import FaqSection from "./Sections/FaqSection"

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