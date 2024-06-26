// components
import { Timeline, Milestone } from "../../../components/Timeline/Timeline";
import { RenderPrices } from "../../../components/RenderPrices/RenderPrices";
import { Tabs, TabItem } from "../../../components/Tabs/Tabs";

// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";
import BackgroundBeeRoadmap from "@assets/bg_bee_roadmap.svg?react";
import ServiceAppDashboard from "@assets/service_app_dashboard.png";
import ImageRenderOffers from "@assets/pricing_mechanism_render_offers.png";
import ImageRenderOffersMobile from "@assets/pricing_mechanism_render_offers_mobile.png";
import ImageRenderRequests from "@assets/pricing_mechanism_render_requests.png";
import ImageRenderRequestsMobile from "@assets/pricing_mechanism_render_requests_mobile.png";
import ImageNetworkFees from "@assets/pricing_mechanism_network_fees.png";
import ImageNetworkFeesMobile from "@assets/pricing_mechanism_network_fees_mobile.png";
import ImageOptionalFees from "@assets/pricing_mechanism_optional_fees.png";
import ImageOptionalFeesMobile from "@assets/pricing_mechanism_optional_fees_mobile.png";
import ImageOrderBook from "@assets/pricing_mechanism_order_book.png";

// icons
import IconFeaturesRewards from "@assets/icons/icon-rewards.svg?react";
import IconFeaturesHoney from "@assets/icons/icon-honey.svg?react";
import IconFeaturesRendering from "@assets/icons/icon-renderprojects.svg?react";
import IconFeaturesOnchain from "@assets/icons/icon-onchain.svg?react";
// import IconFeaturesOpensource from "@assets/icons/icon-opensource.svg?react";


const RoadmapSoftwareSection = () => {

    return (
        <div className="relative w-screen flex justify-center overflow-hidden pt-32 lg:pt-0">

            <div className="relative flex flex-col max-w-8xl top-[11rem] sm:top-[11rem] md:top-[11rem] lg:top-[20rem] space-y-0 items-center pb-[300px] md:pb-[350px] lg:pb-[500px]">

                {/* <!-- Section Header: Project Roadmap --> */}
                <div id="section-roadmap" className="flex flex-col w-full h-full items-center z-10">
                
                    <div className="w-[60%] xs:w-[63%] md:w-[65%] lg:w-[58%] xl:w-[62%] z-10 mb-40 mx-0">
                        <div className="p-4">
                            <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">Project Roadmap</span>
                        </div>
                        <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-4xl lg:leading-12 xl:text-5xl xl:leading-15 text-white">
                            This Hive Is Under Construction
                        </h1>
                        <p className="text-md sm:text-base xl:text-lg text-main leading-6 p-0 m-0 md:px-12">
                        The Renderhive project is new and currently under development. The following timeline gives a brief summary of our roadmap. You can follow all developments in detail in the project's Github organization.
                        </p>
                        <p className="p-6">
                            <a href="https://github.com/renderhive-project/" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-light hover:bg-primary-navy px-4 py-3 font-semibold text-xs sm:text-sm text-main hover:text-white focus-visible:primary-navy">
                                    <svg role="img" width="24" height="23" className="mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                    GitHub
                                </button>
                            </a>
                        </p>
                    </div>
        


                    {/* <!-- Section Content: Timeline --> */}
                    <div className="relative flex flex-col w-full px-0 px-4 lg:px-8 z-10">

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
                                                <li>Basic implementation of Hedera™ Consensus Service calls</li>
                                                <li>Basic implementation of Hedera™ Smart Contract Service calls</li>
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
                                    done />
                                    <Milestone name='Milestone 3' date='June 2024' description={
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
                                    active/>
                                    <Milestone name='Milestone 4' date='September 2024' description={
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

                    {/* <!-- Spacer --> */}
                    <div className="pt-48 lg:pt-72"/>

                </div>

                {/* <!-- Section: Features --> */}
                <div id="section-features" className="relative flex flex-col w-screen mx-0 p-0 rounded-xl bg-primary-mid-dark items-center z-10">
                    <div className="flex flex-col max-w-8xl space-y-12 items-center py-12 w-full">

                        {/* <!-- Section Header --> */}
                        <div className="w-[85%] sm:w-[80%] md:w-[65%] lg:w-[50%] xl:w-[45%]">
                            <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                                What Makes Renderhive Different?
                            </h1>
                            <p className="text-md sm:text-base text-main leading-6">
                            Renderhive can do what any render farm can do – and more. The utilization of blockchain technologies and a decentralized rendering network comes with unique features that you will not find on conventional, centralized render farms.
                            </p>
                        </div>

                        {/* <!-- Section Content --> */}
                        <div className="flex flex-col lg:flex-row w-full p-0 m-0">
                            <div className="relative lg:fade-out-left flex flex-grow w-full lg:w-1/2 overflow-hidden lg:overflow-visible justify-center items-center">
                                <img src={ServiceAppDashboard} alt="App screenshot" className=" p-8 lg:p-0 lg:py-8 lg:object-cover lg:object-right lg:right-[2rem] h-full"/>
                            </div>
                            
                            {/* Features List */}
                            <div className="flex flex-col w-full lg:w-1/2 space-y-2 p-8 text-left">
                                
                                {/* Feature: Render Projects */}
                                <div className="flex flex-col sm:flex-row bg-primary-dark rounded-xl space-y-2 sm:space-y-0 sm:space-x-6 p-6 items-center sm:items-start">
                                    <div className="flex flex-col ">
                                        <IconFeaturesRendering className="text-secondary" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-md text-white text-center sm:text-left">Collaborative Rendering</h3>
                                        <p className="text-sm text-main text-center sm:text-left">Use the network's render power for faster rendering, just like on conventional render farms. But on Renderhive your computer can join the rendering of your own project to lower your render costs.</p>
                                    </div>
                                </div>
                                
                                {/* Feature: Earn Rewards */}
                                <div className="flex flex-col sm:flex-row bg-primary-dark rounded-xl space-y-2 sm:space-y-0 sm:space-x-6 p-6 items-center sm:items-start">
                                    <div className="flex flex-col ">
                                        <IconFeaturesRewards className="text-secondary" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-md text-white text-center sm:text-left">Earn Rewards</h3>
                                        <p className="text-sm text-main text-center sm:text-left">By offering the render power of your own computer to others on Renderhive, you can earn rewards for each Blender project your node helps to render – at a price that you choose.</p>
                                    </div>
                                </div>
                                
                                {/* Feature: Store Render Power */}
                                <div className="flex flex-col sm:flex-row bg-primary-dark rounded-xl space-y-2 sm:space-y-0 sm:space-x-6 p-6 items-center sm:items-start">
                                    <div className="flex flex-col ">
                                        <IconFeaturesHoney className="text-secondary" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-md text-white text-center sm:text-left">Render Honey</h3>
                                        <p className="text-sm text-main text-center sm:text-left">You can also offer your render power for free to the network when you don't need it and then reclaim it later. It's like storing your resources in the renderhive for tough times, just like bees store their honey. Make render honey!</p>
                                    </div>
                                </div>
                                
                                {/* Feature: On-chain */}
                                <div className="flex flex-col sm:flex-row bg-primary-dark rounded-xl space-y-2 sm:space-y-0 sm:space-x-6 p-6 items-center sm:items-start">
                                    <div className="flex flex-col ">
                                        <IconFeaturesOnchain className="text-secondary" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-md text-white text-center sm:text-left">On-chain & Trustless</h3>
                                        <p className="text-sm text-main text-center sm:text-left">Renderhive operates on blockchains which provide a fair, transparent render job distribution and a permissionless, fast payment system. All without the need to trust central farm operators or payment providers.</p>
                                    </div>
                                </div>
                                
                                {/* Feature: Open Source */}
                                {/* <div className="flex flex-col sm:flex-row bg-primary-dark rounded-xl space-y-2 sm:space-y-0 sm:space-x-6 p-6 items-center sm:items-start">
                                    <div className="flex flex-col ">
                                        <IconFeaturesOpensource className="text-secondary" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-md text-white text-center sm:text-left">Open Source</h3>
                                        <p className="text-sm text-main text-center sm:text-left">Like Blender, the Renderhive software is free and open source. This enables anyone use, to share, to verify, and to modify it's code base for their own needs.</p>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- Section: Pricing --> */}
                <div id="section-pricing" className="relative flex flex-col m-0 pt-36 px-6 md:px-8 z-10">
                    <div className="flex flex-col lg:mx-0 xl:mx-20 space-y-36 sm:space-y-60 items-center ">

                        {/* <!-- Sub-Section: Price Chart --> */}
                        <div className="relative flex flex-col items-center space-y-12">
                            {/* <!-- Sub-Section Header --> */}
                            <div className="w-[85%] sm:w-[80%] md:w-[65%] lg:w-[50%] xl:w-[45%]">
                                <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                                    Render Prices
                                </h1>
                                <p className="text-md sm:text-base text-main leading-6">
                                Conventional render farms usually offer fixed price tiers defined by the central farm operator. On Renderhive, there is neither a central farm operator nor discrete price tiers. Render prices are determined by you and all the other hive members based on the supply and the demand of render power on the network.
                                </p>
                            </div>

                            {/* <!-- Sub-Section Content --> */}
                            <div className="flex w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                                <RenderPrices accumlationStep={0.000005}/>
                            </div>
                        </div>


                        {/* <!-- Sub-Section: Pricing Explainer --> */}
                        <div className="flex flex-col rounded-xl border border-primary-mid-dark bg-primary-dark items-center">

                            {/* <!-- Sub-Section Header --> */}
                            <div className="w-[85%] sm:w-[80%] md:w-[65%] lg:w-[50%] xl:w-[45%] p-8">
                                <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                                    Pricing Mechanisms
                                </h1>
                                <p className="text-md sm:text-base text-main leading-6">
                                    Select a topic below to learn more about the pricing mechanisms on the Renderhive network.
                                </p>
                            </div>

                            <Tabs>
                                <TabItem name="Render Offers">
                                    <div className="flex flex-col lg:flex-row w-full h-full space-y-8 lg:space-y-0 lg:space-x-8 p-8">
                                        <div className="relative flex fade-out-top-bottom h-full min-h-[350px] lg:min-h-full max-h-[200px] lg:w-1/2 space-y-4 lg:space-y-4 text-left">
                                                <img src={ImageRenderOffers} alt="Render Offers" className="hidden sm:block absolute w-full h-full object-center object-cover"/>
                                                <img src={ImageRenderOffersMobile} alt="Render Offers" className="sm:hidden absolute w-full h-full object-bottom object-cover"/>
                                        </div>

                                        <div className="flex flex-col w-full lg:w-1/2 space-y-4 lg:space-y-4 text-left ">
                                            <h2 className="text-lg text-white ">Render Offers</h2>
                                            <p className="text-sm sm:text-base text-main">
                                                Render offers are created by the render nodes and contain their render power in Blender Bench Points (BBP) – a benchmark score obtained by the official <a href="https://opendata.blender.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">Blender Benchmark Tool</a> that makes the render performance of different machines comparable. Each node operator can independently set the minimum price (in USD per BBP) for which they are willing to render a job and can activate, update, and deactivate their offers at any time. Once activated, a render offer is added to the order book waiting for suitable, incoming render requests. By tuning their minimum price, node operators can influence their profit made by rendering projects and their node's work load.
                                            </p>
                                        </div>
                                    </div>
                                </TabItem>

                                <TabItem name="Render Requests">
                                    <div className="flex flex-col lg:flex-row w-full h-full space-y-8 lg:space-y-0 lg:space-x-8 p-8">
                                        <div className="relative flex fade-out-left-bottom sm:fade-out-bottom h-full min-h-[350px] lg:min-h-full max-h-[200px] lg:w-1/2 space-y-4 lg:space-y-4 text-left">
                                            <img src={ImageRenderRequests} alt="Render Requests" className="hidden sm:block absolute w-full h-full object-top object-cover"/>
                                            <img src={ImageRenderRequestsMobile} alt="Render Requests" className="sm:hidden absolute w-full h-full object-top object-cover"/>
                                       
                                        </div>

                                        <div className="flex flex-col w-full lg:w-1/2 space-y-4 lg:space-y-4 text-left ">
                                            <h2 className="text-lg text-white ">Render Requests</h2>
                                            <p className="text-sm sm:text-base text-main">
                                            Render requests are created by client nodes (Blender users) who want their projects to be rendered on Renderhive. They contain the project files, the render settings, the estimated render work in Blender Bench Hours (BBh), and the maximum price (in HBAR per BBh) the user is willing to pay for the render job. Once a render request is created, it is added to the order book and distributed by Renderhive's distribution algorithm as soon as enough matching render offers are found. That way, render jobs are either executed at the user's defined maximum price or lower. If no matching render offers are found, the render request remains in the order book until it expires. By adjusting their maximum price, users can influence their render costs and the priority of their render job in the network's job queue.
                                            </p>
                                        </div>
                                    </div>
                                </TabItem>

                                <TabItem name="Network Fees">
                                    <div className="flex flex-col lg:flex-row w-full h-full space-y-8 lg:space-y-0 lg:space-x-8 p-8">
                                        <div className="relative flex fade-out-top-left-bottom lg:fade-out-left-bottom h-full min-h-[350px] lg:min-h-full max-h-[200px] lg:w-1/2 space-y-4 lg:space-y-4 text-left">
                                            <img src={ImageNetworkFees} alt="Network Fees" className="hidden sm:block absolute w-full h-full object-top lg:object-right-top object-cover"/>
                                            <img src={ImageNetworkFeesMobile} alt="Network Fees" className="sm:hidden absolute w-full h-full object-center object-cover"/>
                                        </div>

                                        <div className="flex flex-col w-full lg:w-1/2 space-y-4 lg:space-y-4 text-left ">
                                            <h2 className="text-lg text-white ">Network Fees</h2>
                                            <p className="text-sm sm:text-base text-main">
                                                The Renderhive software is open-source and free to use for everyone. The Renderhive network itself does not charge any mandatory fees to make profit. However, since the network is built on public blockchains and third-party Web3 services, you will pay usage-based network fees to pay your share of this infrastructure costs. These fees are either directly paid per transaction (e.g., Hedera™ transaction fees) or collected on a central, public Renderhive account and passed to the underlying services (e.g. Filecoin storage services). The third-party costs and corresponding fees are not under the control of the Renderhive project and may change over time. All fees will always be transparently displayed to any user of the Renderhive software prior to rendering.
                                            </p>
                                        </div>
                                    </div>
                                </TabItem>

                                <TabItem name="Optional Fees">
                                    <div className="flex flex-col lg:flex-row w-full h-full space-y-8 lg:space-y-0 lg:space-x-8 p-8">
                                        <div className="relative flex fade-out-top-left-bottom lg:fade-out-left-bottom h-full min-h-[350px] lg:min-h-full max-h-[200px] lg:w-1/2 space-y-4 lg:space-y-4 text-left">
                                            <img src={ImageOptionalFees} alt="Optional Fees" className="hidden sm:block absolute w-full h-full object-top lg:object-right-top object-cover"/>
                                            <img src={ImageOptionalFeesMobile} alt="Optional Fees" className="sm:hidden absolute w-full h-full object-top object-cover"/>
                                        </div>

                                        <div className="flex flex-col w-full lg:w-1/2 space-y-4 lg:space-y-4 text-left ">
                                            <h2 className="text-lg text-white ">Optional Fees</h2>
                                            <p className="text-sm sm:text-base text-main">
                                                There will be a set of independent, optional fees that each render node may choose to activate as part of their render costs. Optional fees will be calculated as a self-chosen percentage of the node's render offer price and will be automatically transferred to separate accounts during payment processing. The first optional fee to be implemented will be a <i>Blender Fee</i>. Although Renderhive is not associated with the Blender project other than using the Blender software, our network would not exist without Blender and endeavors to support it. This optional fee will be completely and transparently donated to the <a href="https://fund.blender.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">Blender Development Fund</a>. Other optional fees like, e.g., a <i>Renderhive Fee</i> to support the development of the Renderhive network may be added in the future once a decentralized governance model was established. 
                                            </p>
                                        </div>
                                    </div>
                                </TabItem>

                                <TabItem name="Order Book">
                                    <div className="flex flex-col lg:flex-row w-full h-full space-y-8 lg:space-y-0 lg:space-x-8 p-8">
                                        <div className="lg:relative flex w-full lg:w-1/2 space-y-4 lg:space-y-4 justify-center h-[45%] lg:h-full">
                                            <img src={ImageOrderBook} alt="Order Book" className="lg:absolute top-0 lg:h-full object-contain w-auto mx-auto"/>
                                        </div>

                                        <div className="flex flex-col w-full lg:w-1/2 space-y-4 lg:space-y-4 text-left ">
                                            <h2 className="text-lg text-white ">Order Book</h2>
                                            <p className="text-sm sm:text-base text-main">
                                                The order book is a public list of all active render offers and render requests on the Renderhive network. The hive's decentralized render job distribution algorithm uses the order book to find suitable matches between render offers and requests. It is managed on a public blockchain (Hedera™ Hashgraph) and all entries are fairly ordered by Hedera™ Hashgraph's unqiue consensus algorithm based on the time they were created. Since the order book lives on a public blockchain, it is independent of Renderhive, tamper-proof, and can be viewed by anyone – ensuring transparancy and trust. While conventional render farms usually have a few fixed price tiers, the order book can be understood as a theoretically infinite number of price tiers which are continously changing depending on the network's usage. This guarentees fair render prices, which are based on supply and demand in a free market for render power.
                                            </p>
                                        </div>
                                    </div>
                                </TabItem>
                            </Tabs>

                            {/* <div className="relative w-full h-full overflow-hidden">
                                <img src={ComponentsScreenshot} className="absolute object-cover object-left top-[10%] left-[25%]"/>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>


            {/* <!-- Background --> */}
            <div className="absolute overflow-hidden w-screen z-0">
                
                {/* <!-- Background Gradient 1 --> */}
                <div className="w-screen h-[500px] top-[0px] bg-gradient-to-t from-primary-mid-dark to-primary-dark"aria-hidden="true"> </div>
                <div className="w-screen h-[580px] lg:h-[400px] top-[500px] bg-primary-mid-dark"aria-hidden="true"> </div>
                <div className="w-screen h-[400px] top-[1000px] lg:top-[980px] bg-gradient-to-t from-primary-dark to-primary-mid-dark"aria-hidden="true"> </div>

                {/* <!-- Background Gradient Spacer --> */}
                <div className="w-screen h-[2250px] sm:h-[2450px] md:h-[2550px] lg:h-[1600px] xl:h-[1650px] top-[1480] bg-primary-dark"aria-hidden="true"> </div>

                {/* <!-- Background Gradient 2 --> */}
                <div className="w-screen h-[250px] top-[0px] bg-red bg-gradient-to-t from-primary-mid-dark to-primary-dark"aria-hidden="true"> </div>
                <div className="w-screen h-[850px] lg:h-[450px] top-[250px] bg-primary-mid-dark"aria-hidden="true"> </div>
                <div className="w-screen h-[200px] sm:h-[300px] top-[900px] lg:top-[700px] bg-gradient-to-t from-primary-dark to-primary-mid-dark"aria-hidden="true"> </div>

                {/* <!-- Background Patterns --> */}
                <HoneycombPatternSection className="absolute top-[268px] -left-[400px] sm:top-[268px] sm:-left-[320px] lg:top-[268px] lg:-left-[235px] xl:-left-[185px] w-[465px] h-[528px] text-secondary" aria-hidden="true"/>
                <HoneycombPatternSection className="absolute -top-[0px] -right-[400px] sm:-top-[0px] sm:-right-[320px] lg:-top-[0px] lg:-right-[235px] xl:-right-[185px] w-[465px] h-[528px] text-secondary" aria-hidden="true"/>

            </div>

            {/* <!-- Bees --> */}
            <BackgroundBeeRoadmap className='absolute scale-x-[-1] -rotate-[25deg] sm:scale-x-[1] sm:rotate-[0deg] top-[4rem] lg:top-[0rem] -left-[4rem] sm:left-[3rem] md:left-[6rem] lg:left-[8rem] xl:left-[15rem] text-main opacity-50 z-100'/>

        </div>
    );
};

export default RoadmapSoftwareSection;