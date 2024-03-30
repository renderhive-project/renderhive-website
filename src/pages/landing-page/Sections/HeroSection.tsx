// images
import HoneycombPatternLight from "@assets/honeycomb_pattern_light.svg?react";
import AppScreenshot from "@assets/hero_app_screenshot.png";

// icons
import IconCoin from "@assets/icons/icon-coin.svg?react";
import IconDecentralized from "@assets/icons/icon-decentralized.svg?react";
import IconGithub from "@assets/icons/icon-github.svg?react";

const HeroSection = () => {

    return (
        <div id="section-hero" className="relative flex flex-col w-full mb-20 overflow-hidden items-center">

            {/* <!-- Background pattern and glow --> */}
            <HoneycombPatternLight className="absolute -top-[606px] -left-[805px] sm:-top-[500px] sm:-left-[790px] lg:-top-[125px] lg:-left-[558px] w-[1188px] h-[1030px] text-white text-opacity-5" aria-hidden="true" />
            <div className="absolute rounded-[100%] top-[28rem] sm:top-[32rem] lg:top-[8rem] left-[5%] sm:left-[15%] lg:left-[55%] w-[700px] h-[700px] transform-gpu blur-[150px] bg-blue-glow opacity-20" aria-hidden="true"></div>

            {/* <!-- Hero section --> */}
            <div className="relative flex flex-col max-w-8xl">

                {/* Main */}
                <div className="relative mx-auto flex">
                    <div className="mx-auto max-w-8xl xl:mx-20 px-6 pb-16 sm:pb-20 md:pb-16 lg:flex lg:px-8 pt-32">
                        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
                        <div className="py-4 lg:mt-24 text-left">
                            <div className="inline-flex space-x-2">
                            <span className="flex items-center rounded-full bg-secondary-dark px-4 text-xs sm:text-sm leading-6 text-secondary">Fully Decentralized</span>
                            <span className="flex items-center rounded-full bg-primary-dark border border-primary-navy px-4 py-1 text-xs sm:text-sm leading-6 text-primary-navy">Under Development</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl lg:leading-15 text-white text-left">
                            Crowdrendering
                            for Blender
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-main text-left">Renderhive is going to be the first fully decentralized render farm for Blender built on Web3 technologies. It will rely on the render power of Blender artists and enthusiasts participating in the hive.</p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <button type="button" className="inline-flex items-center justify-center rounded-md py-2.5 px-8 bg-secondary hover:bg-secondary-mid font-semibold text-sm leading-6 text-primary-dark">
                            Get Started
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
                    <div className="lg:border-t border-secondary text-left lg:p-4">
                        <IconDecentralized className="my-6 w-12 h-12 text-secondary" />
                        <h2 className="mt-2 text-xl text-white ">Fully Decentralized</h2>
                        <p className="mt-2 text-md text-main">Renderhive is not a cloud service. It's a crowdservice! The storage capacity and rendering power of the hive is distributed on the computers of all participating users – for a maximum of availability and stability. This is possible due to the underlying blockchain technology of Hedera Hashgraph and IPFS / Filecoin.</p>
                    </div>
                    <div className="lg:border-t border-secondary text-left lg:p-4">
                        <IconCoin className="my-6 w-12 h-12 text-secondary" />
                        <h2 className="mt-2 text-xl text-white text-left">Fair & Transparent Pricing</h2>
                        <p className="mt-2 text-md text-main">Render prices are determined by you and all the other members of the hive in a free market via a bid-ask mechanism. We just pass the small fees of the underlying web3 services and do not charge any fees for our own profit. This ensures that you get a fair price at any time and that your render job is executed at your defined maximum price.</p>
                    </div>
                    <div className="lg:border-t border-secondary text-left lg:p-4">
                        <IconGithub className="my-6 w-12 h-12 text-secondary" />
                        <h2 className="mt-2 text-xl text-white text-left">Open Source</h2>
                        <p className="mt-2 text-md text-main">Renderhive is a transparent, open source project. The software itself will be free and provide a free market for buying and selling render power. This project fully supports Blender's vision that "Everyone should be free to create 3D CG content, with free technical and creative production means and free access to markets."</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;