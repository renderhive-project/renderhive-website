// components
import { StatsGrid, StatsRow, StatsCard } from "../../../components/StatsGrid/StatsGrid";

// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";
import HoneycombBlockchain from "@assets/web3_services_honeycomb_blockchain.svg?react";
import BackgroundBeeTechnologies from "@assets/bg_bee_technologies_about.svg?react";
import ServiceAppRenderRequests from "@assets/service_app_render_requests.png";
import ComponentsSmartContract from "@assets/web3_smart_contract.svg?react";
import NodeTypesImage from "@assets/node_types_user_sidebars.png";
import NodeTypesImageMobile from "@assets/node_types_user_sidebars_mobile.png";

// icons
import IconRenderNodes from "@assets/icons/icon-bee.svg?react";
import IconClientNodes from "@assets/icons/icon-honeycombs.svg?react";
import IconHedera from "@assets/icons/icon-hedera.svg?react";
import IconIPFS from "@assets/icons/icon-ipfs.svg?react";
import IconFilecoin from "@assets/icons/icon-filecoin.svg?react";

const AboutSection = () => {
    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    return (
        <div className="relative w-screen flex justify-center overflow-hidden pt-24 lg:pt-0 pb-64 lg:pb-96">

            <div id="section-technologies" className="relative flex flex-col w-full h-full max-w-8xl mx-0 p-6 md:p-8 top-[11rem] sm:top-[11rem] md:top-[11rem] lg:top-[20rem] space-y-24 sm:space-y-36 items-center z-10">

                {/* <!-- Section Header: Technologies --> */}
                <div className="w-[60%] sm:w-[63%] md:w-[65%] lg:w-[58%] xl:w-[62%] z-10 mb-28">
                    <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">Technologies</span>
                    </div>
                    <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-4xl lg:leading-12 xl:text-5xl xl:leading-15 text-white">
                        A Hive!? So, Where's the Honey?
                    </h1>
                    <p className="text-md sm:text-base xl:text-lg text-main leading-6 p-0 m-0 md:px-12">
                        The renderhive is somewhat comparable to a honey bee hive – hence the name. But instead of collecting pollen to produce honey, our hive inhabitants compute the pixels of your Blender projects.
                    </p>
                        
                </div>

                {/* <!-- Section Content: Node Types --> */}
                <div className="p-0 xl:mx-20 flex-none lg:flex justify-between space-y-12 lg:space-y-0 lg:space-x-20 text-left z-10">

                    <div className="flex flex-col space-y-6 lg:w-1/2">
                        <h1 className="text-xl leading-10 md:text-2xl lg:text-3xl md:leading-12 xl:leading-10 text-white">
                            The renderhive consists of two different node types ...
                        </h1>
                        <p className="text-sm sm:text-base leading-6 text-main">
                            ... which fulfill different tasks in the Renderhive network. A node is a computer on the network, which is privately controlled by a user. Each node can transition between the two roles at any time and no node is more important or has more rights than the other. All nodes are treated equally and according to the rules written transparently into our open-source software.
                        </p>

                        <div className="relative flex-grow fade-out-bottom min-h-[425px] lg:min-h-[275px] max-h-[550px] overflow-hidden">
                            <img src={NodeTypesImage} className="hidden sm:block absolute w-full object-top object-cover" />
                            <img src={NodeTypesImageMobile} className="sm:hidden absolute w-full object-top object-cover" />
                        </div>
                    </div>
                    <div className="space-y-12 lg:w-1/2">
                        <div >
                            <IconRenderNodes className="w-12 h-12 text-secondary"/>
                            <h2 className="text-lg leading-12 md:text-xl md:leading-12 lg:leading-12 xl:leading-10 text-white">
                                Render Nodes
                            </h2>
                            <p className="text-sm sm:text-base leading-6 text-main">
                            Render nodes are like the bees of our hive. They gather the Blender files, perform the rendering work, and produce the final pixels for your Blender projects, much like bees collect pollen and create honey. Render nodes are Blender users and Blender enthusiasts offering their computer's render power for a self-chosen minimum price. Whenever the node is online, it takes part in the render job distribution and rendering processes.
                            </p>
                        </div>

                        <div>
                            <IconClientNodes className="w-12 h-12 text-secondary"/>
                            <h2 className="text-lg leading-12 md:text-xl md:leading-12 lg:leading-12 xl:leading-10 text-white">
                                Client Nodes
                            </h2>
                            <p className="text-sm sm:text-base leading-6 text-main ">
                                Client nodes are similar to what flowers are for a honey bee hive. They provide the Blender files for the render nodes to compute images, similar to how flowers provide pollen for bees to produce honey. Client nodes submit render jobs to the renderhive and request rendering for a given maximum price. As soon as enough render nodes with matching price offers are available, the render job will be processed and the client node pays for the final result.
                            </p>
                        </div>
                    </div>
                    
                </div>

                {/* <!-- Section Content: Built on Web3 Technologies --> */}
                <div className="relative flex flex-col">

                    {/* <!-- Web3 Services --> */}
                    <div className="space-y-12 z-10">
                        {/* General */} 
                        <div className="relative md:h-[540px] lg:h-[600px] flex flex-col rounded-xl bg-primary-mid-dark border border-primary-navy xl:mx-20 p-8 space-y-6 text-left overflow-hidden">
                            <h1 className="text-2xl leading-10 md:text-4xl md:leading-12 xl:leading-10 text-white">
                                Built on Web3 Technologies
                            </h1>
                            <p className="text-sm sm:text-base leading-6 text-main md:mr-0 lg:mr-32">
                                While honey bees communicate via pheromones and waggle dances, the nodes in our renderhive rely on distributed ledger technologies which are more broadly known as blockchains. These technologies make sure that all the nodes in the hive have a common understanding of who renders what part of a specific Blender project, at which price, and in which specific order. That happens without a central farm operator overlooking or controlling these processes. With that, Renderhive is going to be part of the upcoming Web 3.0, the next evolution of the internet, which is all about decentralization, distributed ledger technologies, and true digital ownership. Below you can learn more about the web3 technologies and services our network is built on.
                            </p>

                            <HoneycombBlockchain className='absolute hidden md:block md:-bottom-[14rem] lg:left-[12rem] lg:-bottom-[7rem] lg:left-[12rem]'/>
                        </div>

                        {/* Individual Web3 Services */}
                        <div className="lg:mx-0 xl:mx-20 flex-none lg:flex justify-between lg:space-x-10 space-y-10 lg:space-y-0">
                            <a href="https://www.hedera.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark hover:border-primary-navy rounded-xl text-left bg-primary-dark hover:bg-primary-mid-dark">
                                <IconHedera className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Hedera™ Hashgraph</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                    Hedera™ Hashgraph's distributed ledger technology offers an enterprise-grade, carbon-negative technology stack and is built with a sustainable long-term vision. It offers low, predictable network fees and its unique consensus mechanism ensures a fair, verifiable ordering of our render jobs and a secure payment system. It's native cryptocurrency, hbar (ℏ), is used as the currency in our hive to buy and sell render power.
                                </p>
                                <p className="text-sm sm:text-base text-white group-hover:text-secondary-mid">
                                    <span className="py-2 border-b border-secondary">
                                        Learn More <span aria-hidden="true">→</span>
                                    </span>
                                </p>
                            </a>

                            <a href="https://www.ipfs.io/" target="_blank" rel="noopener noreferrer" className="group flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark hover:border-primary-navy rounded-xl text-left bg-primary-dark hover:bg-primary-mid-dark">
                                <IconIPFS className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Interplanetary File System (IPFS)</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                The InterPlanetary File System is a distributed data storage and transfer protocol. Its unique content-addressing approach locates files not by their storage location, but by their content. This makes sure that files are accessible by all nodes and guarentees that all nodes get the exact same file. In connection with Hedera™ Hashgraph, it also provides copyright proofs for all Blender files submitted to our renderhive.
                                </p>
                                <p className="text-sm sm:text-base text-white group-hover:text-secondary-mid">
                                    <span className="py-2 border-b border-secondary">
                                        Learn More <span aria-hidden="true">→</span>
                                    </span>
                                </p>
                            </a>

                            <a href="https://www.filecoin.io/" target="_blank" rel="noopener noreferrer" className="group flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark hover:border-primary-navy rounded-xl text-left bg-primary-dark hover:bg-primary-mid-dark">
                                <IconFilecoin className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Filecoin</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                Filecoin is a blockchain that is build on top of the IPFS. It adds an incentive system to IPFS, which enables a verifiable and redundant long-term storage of files by paying nodes for storing the data. Basically, we utilize it as the 'honeycombs' in our hive, where important data is stored until it's needed by the nodes.
                                </p>
                                <p className="text-sm sm:text-base text-white group-hover:text-secondary-mid">
                                    <span className="py-2 border-b border-secondary">
                                        Learn More <span aria-hidden="true">→</span>
                                    </span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>



                {/* <!-- Section Subheader: A Hive Without Queen --> */}
                <div className="w-[85%] sm:w-[80%] md:w-[65%] lg:w-[44%] xl:w-[43%] z-10 mb-28">
                    {/* <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">Decentralization</span>
                    </div> */}
                    <h1 className="text-lg leading-10 sm:leading-12 sm:text-2xl md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                    A Hive Without Queen
                    </h1>
                    <p className="text-md sm:text-base text-main leading-6">
                    Unlike conventional render farms, the renderhive is not coordinated by a central farm operator that hosts render servers and determines when and in which order jobs are computed. Renderhive is a peer-to-peer network that is managed fully decentralized, based on the rules written into the code of our Renderhive Service App and smart contracts.
                    </p>
                </div>



                {/* <!-- Section Content: Software Components --> */}
                <div className="flex flex-col z-10">

                    {/* Individual Web3 Services */}
                    <div className="lg:mx-0 xl:mx-20 flex-none lg:flex justify-between lg:space-x-10 space-y-10 lg:space-y-0">

                        <div className="flex flex-col justify-between h-[525px] sm:h-[550px] md:h-[500px] lg:h-[625px] lg:w-1/2 p-0 rounded-xl text-left border border-primary-mid-dark bg-primary-dark overflow-hidden">
                            <div className="p-8 pb-2 space-y-4 lg:space-y-4">
                                <h2 className="text-lg text-white ">Renderhive Service App</h2>
                                <p className="text-sm sm:text-base text-main">
                                    The Renderhive Service App is the software that is running on the computer of each network node. It manages the local functions of the node and provides a local web front-end that the node owner can safely access from their web browser. As an open source software, it ensures transparency and allows the community to use, to modify, and to contribute to its development.
                                </p>
                            </div>
                            <div className="relative w-full h-full">
                                <img src={ServiceAppRenderRequests} className="absolute object-cover object-left top-[10%] left-[25%]"/>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between h-[650px] sm:h-[550px] md:h-[500px] lg:h-[625px] lg:w-1/2 p-0 rounded-xl text-left border border-primary-mid-dark bg-primary-dark">

                            <div className="relative w-full h-full overflow-hidden">
                                <ComponentsSmartContract className="absolute object-cover -top-[0px] right-[3rem] sm:right-[3rem]"/>
                            </div>
                            <div className="p-8 pt-2 space-y-4 lg:space-y-4">
                                <h2 className="text-lg text-white ">Smart Contracts</h2>
                                <p className="text-sm sm:text-base text-main">
                                Smart contracts are one of the most exciting pieces of web3 technologies. They are small, immutable computer programs that can run on a blockchain. These contracts execute automatically if pre-defined, verifiable conditions are met. For example, the renderhive smart contract manages the payment flows between the render nodes and client nodes. Client nodes transfer money to the smart contract when they submit a job. The smart contract only pays the render nodes if they deliver the render results. Since noone except you – not even the developers of the contract – have access to the funds on the smart contract, the money is safe by design.
                                </p>
                            </div>
                        </div>

                    </div>
                
                </div>



                {/* <!-- Section Subheader: Network Statistics --> */}
                <div className="relative w-[85%] sm:w-[85%] md:w-[65%] lg:w-[44%] xl:w-[43%] z-10 mb-28">
                    <div className="p-4">
                         <span className="rounded-full bg-primary-dark border border-primary-navy px-4 py-2 text-xs sm:text-sm text-primary-navy">Coming Soon</span>
                    </div>
                    <h1 className="text-lg leading-10 sm:leading-12 sm:text-2xl md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                    Network Statistics
                    </h1>
                    <p className="text-md sm:text-base text-main leading-6">
                    The following statistics show some of the important metrics of the Renderhive network with explanations and random example numbers. As soon as the network goes live, this section will display verifiable on-chain data of the network in real-time. 
                    </p>
                </div>

                {/* <!-- Section Content: Network Statistics --> */}
                <div className="relative w-full z-10">
                    <div className="lg:mx-0 xl:mx-20 flex-none justify-between lg:space-x-10 space-y-10 lg:space-y-0">

                        <StatsGrid>
                            <StatsRow classNames="grid-cols-2 lg:grid-cols-6">
                            <StatsCard title="Current Hive Cycle" value={getRandomInt(1, 999999)} className="col-span-2" tooltip="The render hive distributes render jobs in rounds – these rounds are called hive cycles. Each hive cycle lasts 5 min." />
                                <StatsCard title="Render Nodes" value={getRandomInt(3, 5000)} className="col-span-1" tooltip="Number of render nodes that offered their render power in this hive cycle or are currently busy rendering."/>
                                <StatsCard title="Render Jobs" value={getRandomInt(1, 500)} className="col-span-1" tooltip="The number of render jobs, which are currently rendered or waiting to be rendered."/>
                                <StatsCard title="Remaining Frames" value={getRandomInt(1, 100000)} className="col-span-2" tooltip="The number of frames in all currently active render jobs that still need to be rendered."/>
                            </StatsRow>
                            <StatsRow classNames="grid-cols-2 lg:grid-cols-7">
                            <StatsCard title="Total Render Power" value={getRandomInt(10000, 10000000)} className="col-span-2" unit="BBP" tooltip="The cumulative Blender benchmark points (BBP) of all currently active render nodes in the hive." />
                                <StatsCard title="Total Earnings" value={getRandomInt(1000000, 10000000)} unit="USD" className="col-span-2 lg:col-span-3" tooltip="The total earnings of all render nodes since the hive went online (in United States Dollar)."/>
                                <StatsCard title="Total Frames" value={getRandomInt(100000, 100000000)} className="col-span-2 lg:col-span-2" tooltip="The total number of frames ever rendered on the Renderhive network."/>
                            </StatsRow>
                        </StatsGrid>

                    </div>

                </div>
            </div>



            {/* <!-- Section: About--> */}
            <div className="absolute overflow-hidden w-screen z-0">
                
                {/* <!-- Background Gradient 1 --> */}
                <div className=" w-screen h-[500px] top-[0px] bg-gradient-to-t from-primary-mid-dark to-primary-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[580px] top-[500px] bg-primary-mid-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[400px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark" aria-hidden="true"> </div>

                {/* <!-- Background Gradient Spacer --> */}
                <div className=" w-screen h-[1400px] sm:h-[1500px] md:h-[1650px] lg:h-[1000px] xl:h-[950px] bg-primary-dark" aria-hidden="true"> </div>

                {/* <!-- Background Gradient 2 --> */}
                <div className=" w-screen h-[500px] top-[0px] bg-gradient-to-t from-primary-mid-dark to-primary-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[800px] sm:h-[900px] md:h-[550px] lg:h-[450px] top-[500px] bg-primary-mid-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[1200px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark" aria-hidden="true"> </div>

                {/* <!-- Background Patterns --> */}
                <HoneycombPatternSection className="absolute -top-[0px] -left-[400px] sm:-top-[0px] sm:-left-[320px] lg:-top-[0px] lg:-left-[235px] xl:-left-[185px] w-[465px] h-[528px] text-secondary" aria-hidden="true" />
                <HoneycombPatternSection className="absolute top-[268px] -right-[400px] sm:top-[268px] sm:-right-[320px] lg:top-[268px] lg:-right-[235px] xl:-right-[185px] w-[465px] h-[528px] text-secondary" aria-hidden="true" />

            </div>

            {/* <!-- Bees --> */}
            <BackgroundBeeTechnologies className='absolute top-[0rem] right-[1.5rem] sm:right-[1.5rem] md:right-[3rem] lg:right-[10rem] text-main opacity-50'/>
            {/* <BackgroundBeeNoQueen className='absolute hidden lg:block lg:top-[172rem] lg:left-[2rem] text-main opacity-50'/> */}
            {/* <BackgroundBeeNoQueen className='absolute hidden md:block top-[235rem] right-[3rem] text-main opacity-50 scale-x-[-1] rotate-[20deg]'/> */}

        </div>
    );
};

export default AboutSection;