// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";
import HoneycombBlockchain from "@assets/web3_services_honeycomb_blockchain.svg?react";
import ComponentsScreenshot from "@assets/hero_app_screenshot.png";
import ComponentsSmartContract from "@assets/web3_smart_contract.svg?react";

// icons
import IconRenderNodes from "@assets/icons/icon-bee.svg?react";
import IconClientNodes from "@assets/icons/icon-honeycombs.svg?react";
import IconHedera from "@assets/icons/icon-hedera.svg?react";
import IconIPFS from "@assets/icons/icon-ipfs.svg?react";
import IconFilecoin from "@assets/icons/icon-filecoin.svg?react";

const AboutSection = () => {

    return (
        <div id="section-about" className="relative w-screen flex justify-center overflow-hidden pb-96 sm:pb-96">

            <div className="relative flex flex-col max-w-8xl mx-0 p-6 md:p-8 top-[11rem] sm:top-[11rem] md:top-[11rem] lg:top-[20rem] space-y-24 sm:space-y-36 items-center">

                {/* <!-- Section Header: How It Works --> */}
                <div className="w-[60%] sm:w-[63%] md:w-[65%] lg:w-[44%] xl:w-[43%] z-10 mb-28">
                    <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">How It Works</span>
                    </div>
                    <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                        A Hive!? So, Where's the Honey?
                    </h1>
                    <p className="text-md sm:text-base text-main leading-6">
                        The renderhive works in a similar way like a honey bee hive – hence the name. But instead of collecting pollen to produce honey, our hive inhabitants render the pixels of Blender artworks.
                    </p>
                </div>

                {/* <!-- Section Content: Node Types --> */}
                <div className="p-0 xl:mx-20 flex-none lg:flex justify-between space-y-12 lg:space-y-0 lg:space-x-20 text-left z-10">

                    <div className="space-y-6 lg:w-1/2">
                        <h1 className="text-xl leading-10 md:text-2xl lg:text-3xl md:leading-12 xl:leading-10 text-white">
                            The renderhive consists of two different node types
                        </h1>
                        <p className="text-sm sm:text-base leading-6 text-main">
                            ... that fulfill different tasks in the Renderhive network. Each user can transition between the roles at any time and no node is more important or has more rights than the other. All nodes are treated equally and according to the same rules.
                        </p>
                    </div>
                    <div className="space-y-12 lg:w-1/2">
                        <div >
                            <IconRenderNodes className="w-12 h-12 text-secondary"/>
                            <h2 className="text-lg leading-12 md:text-xl md:leading-12 lg:leading-12 xl:leading-10 text-white">
                                Render Nodes
                            </h2>
                            <p className="text-sm sm:text-base leading-6 text-main">
                                They are the workers in our hive. They do the render work. Render nodes are Blender users who offer their computer's render power for a self-chosen price to the client nodes. Whenever the node is online, it takes part in the render job distribution and renders frames or parts of a frame.
                            </p>
                        </div>

                        <div>
                            <IconClientNodes className="w-12 h-12 text-secondary"/>
                            <h2 className="text-lg leading-12 md:text-xl md:leading-12 lg:leading-12 xl:leading-10 text-white">
                                Client Nodes
                            </h2>
                            <p className="text-sm sm:text-base leading-6 text-main ">
                                They are the creatives in our hive. They provide the Blender files and artworks to be rendered. Client nodes submit render jobs to the renderhive and request rendering for a given price. As soon as enough render nodes with matching price offers are available, the render job will be processed and the client node pays for the final result.
                            </p>
                        </div>
                    </div>
                    
                </div>

                {/* <!-- Section Content: Built on Web3 Technologies --> */}
                <div className="relative flex flex-col">

                    {/* <!-- Web3 Services --> */}
                    <div className="space-y-12 z-10">
                        {/* General */} 
                        <div className="relative md:h-[440px] lg:h-[600px] flex flex-col rounded-xl bg-primary-mid-dark border border-primary-navy xl:mx-20 p-8 space-y-6 text-left overflow-hidden">
                            <h1 className="text-2xl leading-10 md:text-4xl md:leading-12 xl:leading-10 text-white">
                                Built on Web3 Technologies
                            </h1>
                            <p className="text-sm sm:text-base leading-6 text-main md:mr-32 lg:mr-56 xl:pr-78">
                            While honey bees communicate via pheromones and waggle dances, the nodes in our renderhive rely on distributed ledger technologies – also known as blockchains. They make sure that all the nodes in the hive have a common understanding of who renders what part of a specific frame and at which price. The project relies on the following technologies and web3 services.
                            </p>

                            <HoneycombBlockchain className='absolute hidden md:block md:-bottom-[15rem] lg:left-[12rem] lg:-bottom-[3rem] lg:left-[12rem]'/>
                        </div>

                        {/* Individual Web3 Services */}
                        <div className="lg:mx-0 xl:mx-20 flex-none lg:flex justify-between lg:space-x-10 space-y-10 lg:space-y-0">
                            <a href="https://www.hedera.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark hover:border-primary-navy rounded-xl text-left bg-primary-dark hover:bg-primary-mid-dark">
                                <IconHedera className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Hedera Hashgraph</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                    Hedera's distributed ledger technology offers an enterprise-grade, carbon-negative technology stack and is built with a sustainable long-term vision. It offers low, predictable network fees and its unique consensus mechanism ensures a fair, verifiable ordering of our render jobs and a secure payment system. It's native cryptocurrency, hbar (ħ), is used as the currency in our hive to buy and sell render power.
                                </p>
                                <p className="text-sm sm:text-base text-white hover:text-secondary-mid">
                                    <span className="py-2 border-b border-secondary">
                                        Learn More <span aria-hidden="true">→</span>
                                    </span>
                                </p>
                            </a>

                            <a href="https://www.ipfs.io/" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark hover:border-primary-navy rounded-xl text-left bg-primary-dark hover:bg-primary-mid-dark">
                                <IconIPFS className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Interplanatary File System (IPFS)</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                The InterPlanetary File System is a distributed data storage and transfer protocol. Its unique content-addressing approach locates files not by their storage location, but by their content. This makes sure that files are accessible by all nodes and guarentees that all nodes get the exact same file. In connection with Hedera Hashgraph, it also provides copyright proofs for all Blender files submitted to our renderhive.
                                </p>
                                <p className="text-sm sm:text-base text-white hover:text-secondary-mid">
                                    <span className="py-2 border-b border-secondary">
                                        Learn More <span aria-hidden="true">→</span>
                                    </span>
                                </p>
                            </a>

                            <a href="https://www.filecoin.io/" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark hover:border-primary-navy rounded-xl text-left bg-primary-dark hover:bg-primary-mid-dark">
                                <IconFilecoin className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Filecoin</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                Filecoin is a blockchain that is build on top of the IPFS. It adds an incentive system to IPFS, which enables a verifiable and redundant long-term storage of files by paying nodes for storing the data. Basically, we utilize it as the 'honeycombs' in our hive, where important data is stored until it's needed by the nodes.
                                </p>
                                <p className="text-sm sm:text-base text-white hover:text-secondary-mid">
                                    <span className="py-2 border-b border-secondary">
                                        Learn More <span aria-hidden="true">→</span>
                                    </span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Section Subheader: A Hive Without Queen --> */}
                <div className="w-[80%] sm:w-[80%] md:w-[65%] lg:w-[44%] xl:w-[43%] z-10 mb-28">
                    <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">Decentralization</span>
                    </div>
                    <h1 className="text-lg leading-10 sm:leading-12 sm:text-2xl md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                    A Hive Without Queen
                    </h1>
                    <p className="text-md sm:text-base text-main leading-6">
                    Unlike conventional render farms, the renderhive is not coordinated by a central authority or middle-man that mediates between the render and client nodes with centralized servers. It is a peer-to-peer network that is managed by rules written into the code of the decentralized Renderhive Service App and the project's smart contracts.
                    </p>
                </div>


                {/* <!-- Section Content: Software Components --> */}
                <div className="flex flex-col z-10">

                    {/* Individual Web3 Services */}
                    <div className="lg:mx-0 xl:mx-20 flex-none lg:flex justify-between lg:space-x-10 space-y-10 lg:space-y-0">

                        <div className="flex flex-col justify-between h-[525px] sm:h-[550px] md:h-[500px] lg:h-[625px] lg:w-1/2 p-0 rounded-xl text-left border border-primary-mid-dark bg-primary-dark">
                            <div className="p-8 pb-2 space-y-4 lg:space-y-4">
                                <h2 className="text-lg text-white ">Renderhive Service App</h2>
                                <p className="text-sm sm:text-base text-main">
                                    The Renderhive Service App is the software that is running on the computer of each render node and client node. It manages the local functions of the node and provides a local web front-end that each user can access from their web browser. It is open source so everyone can check that it is safe and has no backdoors.
                                </p>
                            </div>
                            <div className="relative w-full h-full overflow-hidden">
                                <img src={ComponentsScreenshot} className="absolute object-cover object-left top-[10%] left-[25%]"/>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between h-[650px] sm:h-[550px] md:h-[500px] lg:h-[625px] lg:w-1/2 p-0 rounded-xl text-left border border-primary-mid-dark bg-primary-dark">

                            <div className="relative w-full h-full overflow-hidden">
                                <ComponentsSmartContract className="absolute object-cover -top-[0px] right-[25%] sm:right-[75px] "/>
                            </div>
                            <div className="p-8 pt-2 space-y-4 lg:space-y-4">
                                <h2 className="text-lg text-white ">Smart Contracts</h2>
                                <p className="text-sm sm:text-base text-main">
                                Smart contracts are one of the most exciting pieces of web3 technologies. They are small, immutable computer programs that run on a blockchain. These contracts execute automatically if certain verifiable conditions are met. For example, the renderhive's smart contract manages the payment flows between the render nodes and client nodes. Client nodes transfer money to the smart contract when they submit a job. The smart contract only pays the render nodes if they deliver the render results. Since noone except you – not even the developers – have access to the funds on the smart contract, the money is safe by design.
                                </p>
                            </div>
                        </div>

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
                <div className=" w-screen h-[400px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark" aria-hidden="true"> </div>

                {/* <!-- Background Patterns --> */}
                <HoneycombPatternSection className="absolute -top-[0px] -left-[400px] sm:-top-[0px] sm:-left-[320px] lg:-top-[0px] lg:-left-[235px] xl:-left-[185px] 2xl:left-[0px] w-[465px] h-[528px]" aria-hidden="true" />
                <HoneycombPatternSection className="absolute top-[268px] -right-[400px] sm:top-[268px] sm:-right-[320px] lg:top-[268px] lg:-right-[235px] xl:-right-[185px] 2xl:right-[0px] w-[465px] h-[528px]" aria-hidden="true" />

            </div>

        </div>
    );
};

export default AboutSection;