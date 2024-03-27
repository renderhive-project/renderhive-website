import { Link } from 'react-router-dom';

// images
// import FilecoinFoundationLogo from "@assets/logo_filecoin_foundation.svg?react";

// icons
import IconX from "@assets/icons/icon-x.svg?react";
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import IconGithub from "@assets/icons/icon-github.svg?react";

// images
import RenderhiveLogo from "@assets/logo.svg?react";

const Footer = () => {

    return (
        <div id="footer" className="relative flex justify-center z-10">

            <div className="relative flex flex-col w-full max-w-8xl mx-6 items-center z-10 mt-36 ">

                {/* <!-- Supporters – Filecoin Foundation --> */}
                {/* <div className="mx-6 items-center z-10">
                    <div className="flex flex-row items-center p-12 space-x-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">
                            Supported By
                        </span>
                        <a href="https://fil.org">
                            <FilecoinFoundationLogo className="h-12 w-36 text-white hover:text-secondary-mid"/>
                        </a>
                    </div>
                </div> */}

                {/* <!-- Footer Content --> */}
                <div className="flex flex-col md:flex-row w-full xl:w-[85%] border-b border-b-primary-light py-10 mx-0 xl:mx-20 z-10 space-y-12 md:space-y-0">
                        
                    <div className=" flex w-full flex-col space-y-4 items-center justify-center">

                        <Link to="" className="group flex items-center" >
                            <RenderhiveLogo className="w-auto text-main group-hover:text-secondary"/>
                            <span className="text-lg ml-4 leading-6 text-main font-logo tracking-widest group-hover:text-secondary">renderhive</span>
                        </Link>
                        <span className="text-xs md:text-sm text-main">
                            – Supported by a <a href="https://fil.org/grants/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">Filecoin Foundation Grant</a> –
                        </span>

                    </div>
                        
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-12 lg:gap-x-8 gap-y-8 w-full xl:w-[85%] border-b border-b-primary-light py-10 mx-0 xl:mx-20 z-10">

                    <div className="flex flex-col space-y-4 sm:items-start sm:justify-start text-sm">

                        <div className="text-white font-bold">
                            Overview
                        </div>
                        <div className="flex flex-col sm:items-start sm:justify-start text-main ">
                            <Link to="/#section-how-it-works" className="hover:text-secondary">
                                How it Works
                            </Link>
                            <Link to="/#section-roadmap" className="hover:text-secondary">
                                Roadmap
                            </Link>
                            <Link to="/#section-features" className="hover:text-secondary">
                                Features
                            </Link>
                            <Link to="/#section-pricing" className="hover:text-secondary">
                                Pricing
                            </Link>
                            <Link to="/#section-faq" className="hover:text-secondary">
                                FAQ
                            </Link>
                        </div>

                    </div>
                    <div className="flex flex-col space-y-4 sm:items-start sm:justify-start text-sm">

                        <div className="text-white font-bold">
                            Software
                        </div>
                        <div className="flex flex-col sm:items-start sm:justify-start text-main ">
                            <a href="https://github.com/renderhive-project/renderhive-service-app/releases" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                                Download
                            </a>
                            <a href="https://github.com/renderhive-project/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                                Source Code
                            </a>
                            <Link to="" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                                Requirements
                            </Link>
                            <Link to="" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                                Changelog
                            </Link>
                        </div>

                    </div>
                    <div className="flex flex-col space-y-4 sm:items-start sm:justify-start text-sm">

                        <div className="text-white font-bold">
                            About
                        </div>
                        <div className="flex flex-col sm:items-start sm:justify-start text-main ">
                            <Link to="about/impressum" className="hover:text-secondary">
                                Legal Notice
                            </Link>
                            <Link to="about/privacy" className="hover:text-secondary">
                                Privacy Policy
                            </Link>
                            <Link to="about/license" className="hover:text-secondary">
                                License
                            </Link>
                        </div>

                    </div>
                    <div className="flex flex-col space-y-4 sm:items-start sm:justify-start text-sm">

                        <div className="text-white font-bold">
                            External Services
                        </div>
                        <div className="flex flex-col sm:items-start sm:justify-start text-main ">
                            <a href="https://filecoin.io/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                                Filecoin
                            </a>
                            <a href="https://www.ipfs.io/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                                IPFS
                            </a>
                            <a href="https://www.hedera.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                                Hedera Hashgraph
                            </a>
                        </div>

                    </div>
                </div>

                <div className="flex flex-row w-full xl:w-[85%] py-10 mx-0 xl:mx-20 z-10">
                        
                    <p className="flex flex-grow text-xs text-main text-left">
                        Copyright © 2024 Christian Stolze. <br/>
                        All trademarks and company names are the property of their respective owners.<br/>
                    </p>
                    <div className="flex flex-row pl-4 space-x-4 items-center justify-end ">
                        <a href="" target="_blank" rel="noopener noreferrer" className="w-8 h-8 text-main hover:text-secondary">
                            <EnvelopeIcon />
                        </a>
                        <a href="https://twitter.com/renderhive" target="_blank" rel="noopener noreferrer" className="w-6 h-6 text-main hover:text-secondary">
                            <IconX />
                        </a>
                        <a href="https://github.com/renderhive-project/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 text-main hover:text-secondary">
                            <IconGithub />
                        </a>
                    </div>

                </div>
                        

            </div>


            {/* <!-- Background --> */}
            <div className="absolute w-screen z-0 overflow-hidden">
                
                {/* <!-- Background Gradient --> */}
                <div className="w-screen h-[250px] bg-gradient-to-t from-primary-mid-dark from-[50%] to-primary-dark to-[90%]" aria-hidden="true"> </div>
                <div className="w-screen h-[790px] sm:h-[500px] md:h-[380px] bg-primary-mid-dark" aria-hidden="true"> </div>

            </div>

        </div>
    );
};

export default Footer;