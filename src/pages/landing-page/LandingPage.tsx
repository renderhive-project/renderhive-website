import "./landing-page.scss"

// import sections
import HeroSection from "../../components/Sections/HeroSection"
import AboutSection from "../../components/Sections/HowItWorksSection"
import RoadmapSoftwareSection from "../../components/Sections/RoadmapSoftwareSection"
import FaqSection from "../../components/Sections/FaqSection"

const LandingPage = () => {
  return (
    <main className="flex flex-col w-full items-center">

      <HeroSection/>
      <AboutSection/>
      <RoadmapSoftwareSection/>
      <FaqSection/>

    </main>
  )
}

export default LandingPage