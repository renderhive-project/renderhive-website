import React, { useRef, useEffect, useState } from 'react';

// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";

// icons
import IconRenderNodes from "@assets/icons/icon-bee.svg?react";
import IconClientNodes from "@assets/icons/icon-honeycombs.svg?react";

const AboutSection = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [fillerHeight, setFillerHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.getBoundingClientRect().height;
            const viewportHeight = window.innerHeight;
            const fillerHeight = Math.max(0, contentHeight - viewportHeight);
            setFillerHeight(`${fillerHeight}px`);
            // alert(fillerHeight + " " + contentHeight + " " + viewportHeight);
        }
    }, []);

    return (
        <div id="section-about" className="relative flex justify-center">

            <div ref={contentRef} className="relative flex flex-col max-w-8xl mx-0 p-8 top-[11rem] sm:top-[11rem] md:top-[11rem] lg:top-[20rem] space-y-24 sm:space-y-36 items-center">

                {/* <!-- Section Header --> */}
                <div className="w-[80%] sm:w-[63%] md:w-[65%] lg:w-[44%] xl:w-[43%] z-10 mb-28">
                    <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-sm text-secondary">About Renderhive</span>
                    </div>
                    <h1 className="text-2xl leading-12 md:text-3xl md:leading-12 lg:text-3xl lg:leading-12 xl:text-4xl xl:leading-15 text-white">
                        A Hive!? So, Where's the Honey?
                    </h1>
                    <p className="text-base sm:text-base text-main leading-6">
                        The renderhive works in a similar way like a honey bee hive – hence the name. But instead of collecting pollen to produce honey, our hive inhabitants render the pixels of Blender artworks.
                    </p>
                </div>

                {/* <!-- Section Content: Node Types --> */}
                <div className="p-0 mx-6 xl:mx-20 flex-none lg:flex justify-between space-y-12 lg:space-y-0 lg:space-x-20 text-left z-10">

                    <div className="space-y-6 lg:w-1/2">
                        <h1 className="text-xl leading-10 md:text-2xl lg:text-3xl md:leading-12 xl:leading-10 text-white">
                            The renderhive consists of two different node types
                        </h1>
                        <p className="text-sm leading-6 text-main">
                            ... that fulfill different tasks in the Renderhive network. Each user can transition between the roles at any time and no node is more important or has more rights than the other. All nodes are treated equally and according to the same rules.
                        </p>
                    </div>
                    <div className="space-y-12 lg:w-1/2">
                        <div >
                            <IconRenderNodes className="w-12 h-12 text-secondary"/>
                            <h2 className="text-lg leading-12 md:text-xl md:leading-12 lg:leading-12 xl:leading-10 text-white">
                                Render Nodes
                            </h2>
                            <p className="text-sm leading-6 text-main">
                                They are the workers in our hive. They do the render work. Render nodes are Blender users who offer their computer's render power for a self-chosen price to the client nodes. Whenever the node is online, it takes part in the render job distribution and renders frames or parts of a frame.
                            </p>
                        </div>

                        <div>
                            <IconClientNodes className="w-12 h-12 text-secondary"/>
                            <h2 className="text-lg leading-12 md:text-xl md:leading-12 lg:leading-12 xl:leading-10 text-white">
                                Client Nodes
                            </h2>
                            <p className="text-sm leading-6 text-main ">
                                They are the creatives in our hive. They provide the Blender files and artworks to be rendered. Client nodes submit render jobs to the renderhive and request rendering for a given price. As soon as enough render nodes with matching price offers are available, the render job will be processed and the client node pays for the final result.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- Section Content: Built on Web3 --> */}
                <div className="mx-6 xl:mx-20 flex flex-col justify-between space-y-12 lg:space-y-0 lg:space-x-20 text-left z-10">

                    <div className="bg-primary-mid-dark rounded-xl space-y-6 p-12">
                        <h1 className="text-2xl leading-10 md:text-4xl md:leading-12 xl:leading-10 text-white">
                            Built on Web3 Technologies
                        </h1>
                        <p className="text-sm leading-6 text-main md:mr-24 lg:mr-56 xl:mr-96">
                        While honey bees communicate via pheromones and waggle dances, the nodes in our renderhive rely on distributed ledger technologies – also known as blockchains. They make sure that all the nodes in the hive have a common understanding of who renders what part of a specific frame and at which price. The project relies on the following technologies and web3 services.
                        </p>
                    </div>

                </div>

                
                {/* <!-- Screen Filler --> */}
                <div style={{ height: fillerHeight }} className="w-screen bg-primary-dark" aria-hidden="true"> </div>
            </div>


            {/* <!-- Background --> */}
            <div className="absolute w-screen z-0 overflow-hidden">
                
                {/* <!-- Background Gradient --> */}
                <div className=" w-screen h-[500px] top-[0px] bg-gradient-to-t from-primary-mid-dark to-primary-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[580px] top-[500px] bg-primary-mid-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[400px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark" aria-hidden="true"> </div>
                {/* <div className=" w-screen h-[690px] top-[1480px] bg-primary-dark" aria-hidden="true"> </div> */}

                {/* <!-- Background Patterns --> */}
                <HoneycombPatternSection className="absolute -top-[0px] -left-[400px] sm:-top-[0px] sm:-left-[320px] lg:-top-[0px] lg:-left-[235px] xl:-left-[185px] 2xl:left-[0px] w-[465px] h-[528px]" aria-hidden="true" />
                <HoneycombPatternSection className="absolute top-[268px] -right-[400px] sm:top-[268px] sm:-right-[320px] lg:top-[268px] lg:-right-[235px] xl:-right-[185px] 2xl:right-[0px] w-[465px] h-[528px]" aria-hidden="true" />

            </div>

        </div>
    );
};

export default AboutSection;