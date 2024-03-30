import { useEffect } from 'react';

// import sections
import ContentSection from "./sections/ContentSection"

const AboutPage = () => {

  // make sure to scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col w-full items-center">

      <ContentSection />

    </main>
  )
}

export default AboutPage;