// images
import HoneycombPatternLight from "@assets/honeycomb_pattern_light.svg?react";
import AppScreenshot from "@assets/hero_app_screenshot.png";

// icons
// import IconCoin from "@assets/icons/icon-coin.svg?react";
// import IconDecentralized from "@assets/icons/icon-decentralized.svg?react";
// import IconGithub from "@assets/icons/icon-github.svg?react";

const HeroSection = () => {

    return (
        <div id="section-hero" className="relative flex flex-col w-full mb-20 overflow-hidden items-center">

            {/* <!-- Background pattern and glow --> */}
            <HoneycombPatternLight className="absolute -top-[606px] -left-[805px] sm:-top-[500px] sm:-left-[790px] lg:-top-[125px] lg:-left-[558px] w-[1188px] h-[1030px] " aria-hidden="true" />
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

                </div>

            </div>
        </div>
    );
};

export default HeroSection;