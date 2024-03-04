// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";

// icons
import IconRenderNodes from "@assets/icons/icon-bee.svg?react";
import IconClientNodes from "@assets/icons/icon-honeycombs.svg?react";

const Footer = () => {

    return (
        <div id="footer" className="relative flex justify-center">

            <div className="relative bg-red flex flex-col max-w-8xl mx-0 p-8 items-center mt-36 ">

                {/* <!-- Section Header --> */}
                <div className="w-[80%] sm:w-[63%] md:w-[65%] lg:w-[44%] xl:w-[43%] z-10 mb-28">
                    <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-sm text-secondary">Supported By</span>
                    </div>
                </div>

                {/* <!-- Footer Content --> */}
                <div className="w-screen z-10 border-t border-secondary ">
                    <h2 className="mt-10 text-xl text-white ">Footer</h2>
                    {/* <p className="mt-2 text-md text-main">Renderhive is not a cloud service. It's a crowdservice! The storage capacity and rendering power of the hive is distributed on the computers of all participating Blender users – for a maximum of availability. This is possible by the underlying blockchain technology of Hedera Hashgraph and IPFS / Filecoin.</p> */}
                </div>

            </div>


            {/* <!-- Background --> */}
            <div className="absolute w-screen z-0 overflow-hidden">
                
                {/* <!-- Background Gradient --> */}
                <div className="w-screen h-[800px] bg-gradient-to-t from-primary-mid-dark from-[50%] to-primary-dark to-[90%]" aria-hidden="true"> </div>

                {/* <!-- Background Patterns --> */}
                <HoneycombPatternSection className="absolute -bottom-[300px] -left-[300px] sm:-left-[320px] lg:-left-[235px] xl:left-[0px] 2xl:left-[100px] w-[465px] h-[528px]" aria-hidden="true" />

            </div>

        </div>
    );
};

export default Footer;