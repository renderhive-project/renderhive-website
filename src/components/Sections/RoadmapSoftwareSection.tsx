// components
import { Timeline, Milestone } from "../Timeline/Timeline";

// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";
// import HoneycombBlockchain from "@assets/web3_services_honeycomb_blockchain.svg?react";
// import ComponentsScreenshot from "@assets/hero_app_screenshot.png";
// import ComponentsSmartContract from "@assets/web3_smart_contract.svg?react";

// // icons
// import IconRenderNodes from "@assets/icons/icon-bee.svg?react";
// import IconClientNodes from "@assets/icons/icon-honeycombs.svg?react";
// import IconHedera from "@assets/icons/icon-hedera.svg?react";
// import IconIPFS from "@assets/icons/icon-ipfs.svg?react";
// import IconFilecoin from "@assets/icons/icon-filecoin.svg?react";

const RoadmapSoftwareSection = () => {

    return (
        <div id="section-roadmap" className="relative flex justify-center ">

            <div className="relative flex flex-col max-w-8xl mx-0 p-8 top-[11rem] sm:top-[11rem] md:top-[11rem] lg:top-[20rem] space-y-24 sm:space-y-36 items-center pb-[1800px]">

                {/* <!-- Section Header: Project Roadmap --> */}
                <div className="w-[60%] sm:w-[63%] md:w-[65%] lg:w-[50%] xl:w-[45%] z-10 mb-28">
                    <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">Project Roadmap</span>
                    </div>
                    <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                        This Hive Is Under Construction
                    </h1>
                    <p className="text-md sm:text-base text-main leading-6">
                    The Renderhive project is new and currently under development. The following timeline gives a brief summary of our roadmap. You can follow all developments in detail on the project's Github repositories.
                    </p>
                    <p className="p-6">
                        <a href="https://github.com/renderhive-project/" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-light hover:bg-primary-navy px-4 py-3 font-semibold text-xs sm:text-sm text-main hover:text-white focus-visible:primary-navy">
                                <svg role="img" width="24" height="23" className="mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                GitHub Repositories
                            </button>
                        </a>
                    </p>
                </div>
    
                {/* <!-- Section Content: Timeline --> */}
                <div className="relative flex flex-col  w-full">

                    <div className="space-y-12 z-10 ">
                        
                        <div className="relative flex flex-col xl:mx-20 p-0 space-y-6">
                            <Timeline>
                                <Milestone name='Preparation' date='March 2023' description={
                                    <>
                                        <b>Project Preparation</b>
                                        <ul className="list-disc list-outside pl-4 space-y-2">
                                            <li>Create project work plan / roadmap</li>
                                            <li>Create basic code structure & repositories</li>
                                            <li>Create a first project landing page</li>
                                            <li>Basic implementation of Hedera Consensus Service calls</li>
                                            <li>Basic implementation of Hedera Smart Contract Service calls</li>
                                            <li>Publish draft of project whitepaper</li>
                                        </ul>
                                    </>
                                } 
                                done />
                                <Milestone name='Milestone 1' date='October 2023' description={
                                    <>
                                        <b>Milestone 1</b>
                                        <ul className="list-disc list-outside pl-4 space-y-2">
                                            <li>Implementation of the node configurations</li>
                                            <li>Implementation of a local IPFS node</li>
                                            <li>Implementation of a Filecoin service</li>
                                            <li>Implementation of an internal render job management</li>
                                            <li>Implementation of basic rendering procedures</li>
                                        </ul>
                                    </>
                                } 
                                done />
                                <Milestone name='Milestone 2' date='February 2024' description={
                                    <>
                                        <b>Milestone 2</b>
                                        <ul className="list-disc list-outside pl-4 space-y-2">
                                            <li>Smart contract development</li>
                                            <li>Implementation of the smart contract calls</li>
                                            <li> Re-design of the logo & landing page</li>
                                        </ul>
                                    </>
                                } 
                                active />
                                <Milestone name='Milestone 3' date='May 2024' description={
                                    <>
                                        <b>Milestone 3</b>
                                        <ul className="list-disc list-outside pl-4 space-y-2">
                                            <li>Implementation of the render job distribution algorithm</li>
                                            <li>Implementation of the render result verification mechanism</li>
                                            <li>Create basic, local web front end</li>
                                            <li>Create the full project website</li>
                                        </ul>
                                    </>
                                }
                                />
                                <Milestone name='Milestone 4' date='August 2024' description={
                                    <>
                                        <b>Milestone 4</b>
                                        <ul className="list-disc list-outside pl-4 space-y-2">
                                            <li>Optimization of the render job distribution algorithm</li>
                                            <li>Optimization of the rendering process</li>
                                            <li>Extend the front end with required forms and status pages</li>
                                        </ul>
                                    </>
                                } 
                                />
                                <Milestone name='Alpha Phase' date='November 2024' description={
                                    <>
                                        <b>Alpha Phase</b>
                                        <ul className="list-disc list-outside pl-4 space-y-2">
                                            <li>Onboarding of the first 25 external render nodes</li>
                                            <li>Onboarding of the first 50 to 100 client nodes</li>
                                            <li>Start of the closed beta phase</li>
                                        </ul>
                                    </>
                                } 
                                />
                            </Timeline>
                        </div>

                    </div>
                </div>
            </div>


            {/* <!-- Background --> */}
            <div className="absolute overflow-hidden w-screen z-0">
                
                {/* <!-- Background Gradient 1 --> */}
                <div className="w-screen h-[500px] top-[0px] bg-gradient-to-t from-primary-mid-dark to-primary-dark"aria-hidden="true"> </div>
                <div className="w-screen h-[580px] top-[500px] bg-primary-mid-dark"aria-hidden="true"> </div>
                <div className="w-screen h-[400px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark"aria-hidden="true"> </div>

                {/* <!-- Background Gradient Spacer --> */}
                <div className="w-screen h-[1500px] md:h-[1750px] lg:h-[1100px] top-[1480] bg-primary-dark"aria-hidden="true"> </div>

                {/* <!-- Background Gradient 2 --> */}
                {/* <div className="w-screen h-[500px] top-[0px] bg-red bg-gradient-to-t from-primary-mid-dark to-primary-dark"aria-hidden="true"> </div>
                <div className="w-screen h-[580px] top-[500px] bg-primary-mid-dark"aria-hidden="true"> </div>
                <div className="w-screen h-[400px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark"aria-hidden="true"> </div> */}

                {/* <!-- Background Patterns --> */}
                <HoneycombPatternSection className="absolute top-[268px] -left-[400px] sm:top-[268px] sm:-left-[320px] lg:top-[268px] lg:-left-[235px] xl:-left-[185px] 2xl:left-[0px] w-[465px] h-[528px]"aria-hidden="true"/>
                <HoneycombPatternSection className="absolute -top-[0px] -right-[400px] sm:-top-[0px] sm:-right-[320px] lg:-top-[0px] lg:-right-[235px] xl:-right-[185px] 2xl:right-[0px] w-[465px] h-[528px]"aria-hidden="true"/>

            </div>

        </div>
    );
};

export default RoadmapSoftwareSection;