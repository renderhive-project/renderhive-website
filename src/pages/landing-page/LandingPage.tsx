import "./landing-page.scss"

// import sections
import HeroSection from "../../components/Sections/HeroSection"
import AboutSection from "../../components/Sections/AboutSection"
import RoadmapSoftwareSection from "../../components/Sections/RoadmapSoftwareSection"

const LandingPage = () => {
  return (
    <main className="flex flex-col w-full items-center">

      <HeroSection/>
      <AboutSection/>

    </main>
  )
}

export default LandingPage