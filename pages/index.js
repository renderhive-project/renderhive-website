import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Benefits from "../components/benefits";
import Principals from "../components/principals";
import Timeline from "../components/timeline";
import Faq from "../components/faq";
import Footer from "../components/footer";

import { principalOne, principalTwo, principalThree, timeline} from "../components/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Renderhive - Crowdrendering platform for Blender built on the Blockchain</title>
        <meta
          name="description"
          content="Renderhive is the first crowdrendering platform for Blender built on blockchain technologies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Benefits />

      <SectionTitle
        pretitle="about renderhive"
        title="A Hive!? So, where's the honey?">
        The renderhive works in a similar way like a honey bee hive – hence the name. But instead of collecting pollen to produce honey, our hive inhabitants render the pixels of Blender artworks.
      </SectionTitle>
      <Principals imgPos="left" data={principalOne} />
      <Principals imgPos="right" data={principalTwo} />
      <Principals imgPos="left" data={principalThree} />

      <SectionTitle
        pretitle="Project Roadmap"
        title="This Hive is Under Construction">
        The Renderhive project is new and currently under development. The following timeline gives a brief summary of our roadmap. You can follow all developments in detail on the project's Github repositories.
        <a
          href="https://github.com/renderhive-io/"
          target="_blank"
          rel="noopener"
          className="group flex justify-center py-4 items-center mx-auto space-x-2 text-gray-500 dark:text-gray-400">
          <svg
            role="img"
            width="24"
            height="24"
            className="w-5 h-5 group-hover:text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span className="group-hover:text-yellow-400"> Github repository</span>
        </a>
      </SectionTitle>
      <Timeline data={timeline}/>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Here are the answers to some questions that might come up. If you don't find your question, feel free to write an email.
        <span className="flex py-2"></span>
        <a
          href="mailto:contact@renderhive.io"
          rel="noopener"
          className="justify-center px-4 py-2 width-50 text-lg font-medium text-center text-black bg-yellow-400 hover:bg-yellow-500 rounded-md ">
          Contact
        </a>
      </SectionTitle>

      <Faq />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
}
