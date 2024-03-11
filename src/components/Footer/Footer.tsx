// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";
import FilecoinFoundationLogo from "@assets/logo_filecoin_foundation.svg?react";

// icons

const Footer = () => {

    return (
        <div id="footer" className="relative flex justify-center">

            <div className="relative flex flex-col max-w-8xl mx-6 items-center mt-36">

                {/* <!-- Supporters – Filecoin Foundation --> */}
                <div className="mx-6 items-center z-10">
                    <div className="flex flex-col items-center p-12 space-y-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">
                            Supported By
                        </span>
                        <a href="https://fil.org">
                            <FilecoinFoundationLogo className="h-12 w-36 text-white hover:text-secondary-mid"/>
                        </a>
                    </div>
                </div>

                {/* <!-- Footer Content --> */}
                <div className="w-full border-t border-secondary z-10">
                    <h2 className="mt-10 text-xl text-white "></h2>
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