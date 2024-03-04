import "./landing-page.scss"

// import sections
import HeroSection from "../../components/Sections/HeroSection"
import AboutSection from "../../components/Sections/AboutSection"

const LandingPage = () => {
  return (
    <main className="flex flex-col items-center">

      {/* Landing page hero section */}
      <HeroSection/>

      {/* Landing page about section */}
      <AboutSection/>

    </main>
  )
}

export default LandingPage