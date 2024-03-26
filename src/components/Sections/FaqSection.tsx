// components
import { Disclosure } from '@headlessui/react'

// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";

// icons
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'


// define frequently asked questions and corresponding answers
const faqs = [
    {
      question: "Where can I download the app and how can I use the Renderhive for rendering?",
      answer: "This is not possible yet. Renderhive is currently a project under development. Please have a look at our development roadmap above and our Github repository for more information on the current status of the project.",
    },
    {
      question: "Will Renderhive only support Blender?",
      answer: "Yes, this crowdrendering platform will be specifically designed for Blender. Other 3D computer graphics software will not be supported at release time. However, the project is open-source and the underlying principles can be applied to other renderers as well. So, let's see where the future leads us ...",
    },
    {
      question: "Which render engines will be supported?",
      answer: "At the beginning, Renderhive will only support Blender's native render engines EEVEE and Cycles. In the future we will explore the implementation of third-party engines. However, since the engine needs to be present on render nodes as well, the implementation will mainly depend on how many render nodes can support a specific engine.",
    },
    {
      question: "What will the Renderhive software and rendering cost?",
      answer: "All of the software provided by this project is open-source and, thus, free to use. Render prices will not be defined by the project but by each individual node that uses the Renderhive software. That means, that each render node can specifiy the price for which it offers its render power. On the other hand, each client node can define at what maximum price it wants its Blender project to be rendered. A render job will only be executed, if the prices of at least one render node and the client node match. This way, a free market mechanism is created where the render price is continously defined by supply and demand of render power on the network.",
    },
    {
      question: "Are there any other fees charged by the Renderhive project?",
      answer: "The Renderhive project itself does not charge any fees for own profit. However, we have to pass the (small) fees of the specific blockchain and web3 services our project relies on to each Renderhive node. For example, the Hedera services charges network fees to its users. Depending on the specific service functions called, these fees are in the range of a fraction of a cent (e.g., 0.0001 USD for a simple payment transaction) to a few cents (e.g., 0.05 USD for a smart contract call or minting of a NFT). These fees are extremely low and used by Hedera to keep the network safe and to compensate the computers that run the Hedera Hashgraph algorithms for their expenses.",
    },
    {
      question: "So, you really don't make any profit with this project?",
      answer: "Yes, the Renderhive project is not focussed on profit. In order to compensate the operational expenses and to pay for required infrastructure (e.g., this website), the Renderhive project may operate own render nodes in the same way (and with the same rights) as anyone. Furthermore, the project may rely on voluntary donations by users and organizations and may explore Hedera's native, risk-free staking mechanism to generate interest from the user funds which are temporarily escrowed in the smart contracts.",
    },
    {
      question: "What about the copyrights for my art?",
      answer: "This is an important question, if you send your Blender files to any external render services. On Renderhive, your artworks are and remain your intellectual property alone no matter who renders it. The Renderhive project makes use of the immutable blockchain technology to help you protect this intellectual property: Whenever you send a Blender file to the renderhive, a unique fingerprint of this file (i.e., the IPFS content identifier) is stored on the Hedera blockchain. That way, you can always proof that you owned the Blender file and, thus, the art at this specific date and time. This allows you to take action against copyright infringements with an independently verifiable, immutable proof of your copyright ownership if anybody tries to steal your art. Even, if Renderhive would suddenly disappear, the file fingerprint would still remain on the blockchain.",
    },
    {
      question: "How can I support the project?",
      answer: "Glad you ask! Renderhive strives to be an open source community project – like Blender. So, there are multiple options to support it: From simple donations over advertisements to coding. Any help is welcome! Be creative and please don't hesitate to get in contact. If you are a developer, have a look at the Github repository to see which issues need to be solved and feel free to open a new issue to discuss your own ideas.",
    },
]

const FaqSection = () => {

    return (
        <div className="relative w-screen flex justify-center overflow-hidden pb-96 sm:pb-96">

            <div id="section-faq" className="relative flex flex-col w-full h-full max-w-8xl mx-0 p-6 md:p-8 top-[11rem] sm:top-[11rem] md:top-[11rem] lg:top-[20rem] space-y-24 sm:space-y-36 items-center z-10">

                {/* <!-- Section Header: FAQ --> */}
                <div className="w-[60%] xs:w-[63%] md:w-[65%] lg:w-[58%] xl:w-[62%] z-10 mb-28 mx-0">
                    <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">FAQ</span>
                    </div>
                    <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-4xl lg:leading-12 xl:text-5xl xl:leading-15 text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-md sm:text-base xl:text-lg text-main leading-6 p-0 m-0 md:px-20">
                        Here are the answers to some questions that might come up or have been asked by others. If you don't find your question in the list, feel free to reach out.
                    </p>
                    <p className="p-6">
                        <a href="#footer">
                            <button type="button" className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-light hover:bg-primary-navy px-4 py-3 font-semibold text-xs sm:text-sm text-main hover:text-white focus-visible:primary-navy">
                                Contact us
                            </button>
                        </a>
                    </p>
                </div>

                {/* <!-- Section Content: FAQs --> */}
                <div className="flex w-full p-0 xl:mx-20 flex-none lg:flex justify-between space-y-12 lg:space-y-0 lg:space-x-20 text-left z-10">


                    <dl className="flex flex-col w-full lg:mx-0 xl:mx-20 space-y-6 divide-y divide-primary-light">

                        {faqs.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="pt-6">
                            {({ open }) => (
                            <>
                                <dt>
                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-main">
                                        <span className="text-md sm:text-lg md:text-xl leading-7 text-white">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                        {open ? (
                                            <ChevronUpIcon className="h-5 w-5 text-secondary" aria-hidden="true" />
                                        ) : (
                                            <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                        )}
                                        </span>
                                    </Disclosure.Button>
                                </dt>
                                <Disclosure.Panel as="dd" className="flex mt-6 pr-12 text-left">
                                    <span className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-main">{faq.answer}</span>
                                </Disclosure.Panel>
                            </>
                            )}
                        </Disclosure>
                        ))}
                    </dl>
                    
                </div>

            </div>



            {/* <!-- Section: About--> */}
            <div className="absolute overflow-hidden w-screen z-0">
                
                {/* <!-- Background Gradient 1 --> */}
                {/* <div className=" w-screen h-[500px] top-[0px] bg-gradient-to-t from-primary-mid-dark to-primary-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[580px] top-[500px] bg-primary-mid-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[400px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark" aria-hidden="true"> </div> */}

                {/* <!-- Background Gradient Spacer --> */}
                {/* <div className=" w-screen h-[1400px] sm:h-[1500px] md:h-[1650px] lg:h-[1000px] xl:h-[950px] bg-primary-dark" aria-hidden="true"> </div> */}

                {/* <!-- Background Gradient 2 --> */}
                {/* <div className=" w-screen h-[500px] top-[0px] bg-gradient-to-t from-primary-mid-dark to-primary-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[800px] sm:h-[900px] md:h-[550px] lg:h-[450px] top-[500px] bg-primary-mid-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[400px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark" aria-hidden="true"> </div> */}

                {/* <!-- Background Patterns --> */}
                <div className=" w-screen h-[800px] top-[0px] " aria-hidden="true">
                    <HoneycombPatternSection className="absolute -top-[0px] -left-[400px] sm:-top-[0px] sm:-left-[320px] lg:-top-[0px] lg:-left-[235px] xl:-left-[185px] w-[465px] h-[528px]" aria-hidden="true" />
                    <HoneycombPatternSection className="absolute top-[268px] -right-[400px] sm:top-[268px] sm:-right-[320px] lg:top-[268px] lg:-right-[235px] xl:-right-[185px] w-[465px] h-[528px]" aria-hidden="true" />
                </div>

            </div>

        </div>
    );
};

export default FaqSection;