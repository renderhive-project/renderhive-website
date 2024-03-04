// images
import HoneycombPatternLight from "@assets/honeycomb_pattern_light.svg?react";
import AppScreenshot from "@assets/hero_app_screenshot.png";

// icons
import IconCoin from "@assets/icons/icon-coin.svg?react";
import IconDecentralized from "@assets/icons/icon-decentralized.svg?react";
import IconGithub from "@assets/icons/icon-github.svg?react";

const HeroSection = () => {

    return (
        <div className="relative max-w-8xl mb-20">

            {/* <!-- Background patterns and glow --> */}
            <div className="absolute rounded-[100%] top-[25rem] sm:top-[36rem] lg:top-[6rem] left-[5%] sm:left-[15%] lg:left-[55%] w-[700px] h-[700px] transform-gpu blur-[150px] bg-blue-glow opacity-20" aria-hidden="true"></div>
            <HoneycombPatternLight className="absolute -top-[606px] -left-[805px]  sm:-top-[500px] sm:-left-[790px] lg:-top-[125px] lg:-left-[558px] w-[1188px] h-[1030px] " aria-hidden="true" />

            {/* <!-- Hero section --> */}
            <div className="relative overflow-hidden mx-auto flex">

                {/* Main */}
                <div className="mx-auto xl:mx-20 max-w-8xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-20">
                    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className="py-4 sm:mt-32 lg:mt-16 text-left">
                        <div className="inline-flex space-x-2">
                        <span className="rounded-full bg-secondary-dark px-4 py-1 text-sm leading-6 text-secondary">Fully Decentralized</span>
                        <span className="rounded-full bg-primary-dark border border-primary-navy px-4 py-1 text-sm leading-6 text-primary-navy">Under Development</span>
                        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                        </span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl lg:leading-15 text-white text-left">
                        Crowdrendering
                        for Blender
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-main text-left">Renderhive is going to be the first fully decentralized render farm for Blender built on Web3 technologies. It will rely on the render power of Blender artists participating in the hive.</p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <button type="button" className="inline-flex items-center justify-center rounded-md py-2.5 px-8 bg-secondary hover:bg-secondary-mid font-semibold text-sm leading-6 text-primary-dark">
                        Sign In
                        </button>
                        <a href="https://renderhive-project.gitbook.io/renderhive-whitepaper/" className="text-sm font-semibold leading-6 text-white">Whitepaper (draft) <span aria-hidden="true">→</span></a>
                    </div>
                    </div>
                    <div className="flex sm:mt-24 lg:ml-28 lg:mr-0 mt-12 sm:mt-10 lg:mt-6 lg:max-w-none lg:flex-none xl:-mr-[24rem]">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <img src={AppScreenshot} alt="App screenshot" className="h-[610px]"/>
                    </div>
                    </div>
                </div>

            </div>


            {/* Important Features */}
            <div className="mx-8 sm:mx-8 md:mx-8 lg:mx-0 xl:mx-20 flex-none lg:flex lg:p-8 justify-between lg:space-x-10 space-y-10 lg:space-y-0">
                <div className="border-t border-secondary text-left p-4">
                    <IconDecentralized className="my-6 w-12 h-12 text-secondary" />
                    <h2 className="mt-2 text-xl text-white ">Fully Decentralized</h2>
                    <p className="mt-2 text-md text-main">Renderhive is not a cloud service. It's a crowdservice! The storage capacity and rendering power of the hive is distributed on the computers of all participating Blender users – for a maximum of availability. This is possible by the underlying blockchain technology of Hedera Hashgraph and IPFS / Filecoin.</p>
                </div>
                <div className="border-t border-secondary text-left p-4">
                    <IconCoin className="my-6 w-12 h-12 text-secondary" />
                    <h2 className="mt-2 text-xl text-white text-left">Fair & Transparent Pricing</h2>
                    <p className="mt-2 text-md text-main">Render prices are determined by you and all the other members of the hive. We just pass the small fees of the underlying blockchain services and do not charge any fees for our own profit. This ensures that you get a fair price at any time and that your render job is executed only under your terms.</p>
                </div>
                <div className="border-t border-secondary text-left p-4">
                    <IconGithub className="my-6 w-12 h-12 text-secondary" />
                    <h2 className="mt-2 text-xl text-white text-left">Open Source</h2>
                    <p className="mt-2 text-md text-main">Renderhive is a transparent, open source project. The software itself will be free and provide a free market for buying and selling render power. This project fully supports Blender's vision that "Everyone should be free to create 3D CG content, with free technical and creative production means and free access to markets.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;