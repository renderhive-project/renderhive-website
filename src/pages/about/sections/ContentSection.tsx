// components
import { Tabs, TabItem } from "../../../components/Tabs/Tabs";

// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";

// icons
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/solid'

const TermsOfServiceSection = () => {

    return (
        <div className="relative w-screen flex justify-center overflow-hidden pb-96 sm:pb-96">

            <div className="relative flex flex-col w-full h-full max-w-8xl mx-0 p-6 md:p-8 top-[11rem] sm:top-[11rem] md:top-[11rem] lg:top-[10rem] space-y-24 sm:space-y-36 items-center z-10">

                {/* <!-- Section Header: About --> */}
                <div className="w-[60%] sm:w-[63%] md:w-[65%] lg:w-[58%] xl:w-[62%] z-10 mt-36 mb-40">
                    <div className="p-4">
                        <span className="rounded-full bg-secondary-dark px-4 py-2 text-xs sm:text-sm text-secondary">About</span>
                    </div>
                    <h1 className="text-lg leading-10 sm:text-2xl sm:leading-12 md:text-3xl md:leading-12 lg:text-4xl lg:leading-12 xl:text-5xl xl:leading-15 text-white">
                        Renderhive is a Community Project
                    </h1>
                    <p className="text-md sm:text-base xl:text-lg text-main leading-6 p-0 m-0 md:px-12">
                        This project is dedicated to establish a decentralized crowdrendering network of Blender artists and enthusiasts. Anyone is free to participate in the network as well as to use, to share, and to modify its open source software.
                    </p>
                </div>

                {/* <!-- Section Content: About --> */}
                <div className="relative flex flex-col">
                    <div className="space-y-12 z-10">
                        
                        <div className="lg:mx-0 xl:mx-20 flex-none lg:flex justify-between lg:space-x-10 space-y-10 lg:space-y-0">

                            <div className="flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark rounded-xl text-left bg-primary-dark">
                                <GlobeAltIcon className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Website</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                    This website is currently operated by me, Christian Stolze, the founder of the Renderhive Project. Its purpose is to inform you about the project, to simplify your access to the Renderhive software, and to facilitate the project's development. No services related to the Renderhive Project are offered from this website and the project itself is officially maintained via the project's <a href="https://github.com/renderhive-project/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">GitHub organization</a>. The only way to participate in the Renderhive network is through the <a href="https://github.com/renderhive-project/renderhive-service-app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">Renderhive software</a> under the terms and conditions defined in the software licenses.
                                </p>
                            </div>

                            <div className="flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark rounded-xl text-left bg-primary-dark">
                                <CodeBracketIcon className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Software</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                    The Renderhive software consists of multiple components including the Renderhive Service App and the Renderhive Smart Contract. Unless stated explicitely otherwise, all software components are dual-licensed and distributed under the <a href="https://github.com/renderhive-project/renderhive-service-app/blob/main/LICENSE-MIT" className="text-white hover:text-secondary">MIT License</a> and the <a href="https://github.com/renderhive-project/renderhive-service-app/blob/main/LICENSE-APACHE" className="text-white hover:text-secondary">Apache 2.0 license</a>. The software is open source and free to use, to change, and to distribute it under the terms of either of these licenses. 
                                </p>
                            </div>

                            <div className="flex flex-col lg:w-1/3 p-8 space-y-4 border border-primary-mid-dark rounded-xl text-left bg-primary-dark">
                                <EyeSlashIcon className="w-12 h-12 text-secondary" />
                                <h2 className="text-lg text-white ">Privacy</h2>
                                <p className="flex-grow text-sm sm:text-base text-main">
                                    The Renderhive Project is commited to protect your privacy on this website. We do not collect any personal data from you unless you provide it to us voluntarily (e.g., via the contact form). We may track some anonymized data about your visit to this website for statistical purposes and to improve the website's performance as well as its user experience. For more information, please read our Privacy Policy below.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Section Content: Terms of Service – Website --> */}
                        <div className="relative rounded-xl bg-primary-mid-dark xl:mx-20 p-8 text-left overflow-hidden text-main">
                            
                            {/* <!-- Sub-Section Header --> */}
                            <Tabs>
                                <TabItem id="section-legal-notice" name="Legal Notice">
                                    <div className="flex flex-col space-y-4 py-8">
                                        <h1>Legal Notice (Impressum)</h1>
                                        <p className="text-xl text-main"> Last Updated: March 28, 2024</p>
                                    </div>
                                    
                                    <div className="flex flex-col space-y-4">
                                        <p>
                                            Renderhive Project <br/>
                                            [Address] <br/>
                                            [Phone Number] <br/>
                                            contact@renderhive.io<br/>
                                        </p>
                                    
                                        <p>
                                            Represented by: Christian Stolze<br/>
                                            Responsible for Content: Christian Stolze<br/>
                                        </p>
                                        
                                        <p className="py-4">This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV.</p>

                                        <h4>Liability for Content</h4>
                                        <p>The contents of our website have been created with the greatest possible care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to Section 7, paragraph 1 of the TMG (Telemediengesetz - German Telemedia Act), we as service providers are liable for our content on these pages by general laws. However, according to Sections 8 to 10 of the TMG, we service providers are not obliged to monitor external information transmitted or stored or investigate circumstances pointing to illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, a liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.</p>
                                        
                                        <h4>Liability for Links</h4>
                                        <p>Our website contains links to external websites, over whose contents we have no control. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the websites is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identified at the time of linking. However, permanent monitoring of the contents of the linked pages is not reasonable without specific indications of a violation. Upon notification of violations, we will remove such links immediately.</p>

                                        <h4>Copyright</h4>
                                        <p>The contents and works on these pages created by the site operator are subject to German copyright law. The duplication, processing, distribution, and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. In so far as the contents on this site were not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such contents immediately.</p>
                                    </div>
                                </TabItem>

                                <TabItem id="section-terms-of-service" name="Terms of Service">
                                    <div className="flex flex-col space-y-4 py-8">
                                        <h1>Terms of Service – Website</h1>
                                        <p className="text-xl text-main"> Last Updated: March 28, 2024</p>
                                    </div>
                                    
                                    <div className="flex flex-col space-y-4">
                                        <p className="pb-8">
                                            It is Your responsibility to read these terms and conditions carefully before using this website. 
                                        </p>
                                        
                                        <h2>Interpretation and Definitions</h2>
                                        <h3>Interpretation</h3>
                                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                                        <h3>Definitions</h3>
                                        <p>For the purposes of these Terms and Conditions:</p>
                                        <ul className="list-disc pl-5">
                                            <li>
                                            <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                                            </li>
                                            <li>
                                            <p><strong>Country</strong> refers to: Germany</p>
                                            </li>
                                            <li>
                                            <p><strong>Service Provider</strong> (referred to as either &quot;the Service Provider&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to the Renderhive Project currently represented by Christian Stolze.</p>
                                            </li>
                                            <li>
                                            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                                            </li>
                                            <li>
                                            <p><strong>Service</strong> refers to the Website.</p>
                                            </li>
                                            <li>
                                            <p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Service Provider regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">Terms and Conditions Generator</a>.</p>
                                            </li>
                                            <li>
                                            <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                                            </li>
                                            <li>
                                            <p><strong>Website</strong> refers to Renderhive, accessible from <a href="https://www.renderhive.io/" rel="external nofollow noopener" target="_blank">https://www.renderhive.io/</a></p>
                                            </li>
                                            <li>
                                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                                            </li>
                                        </ul>
                                        <h2>Acknowledgment</h2>
                                        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Service Provider. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                                        <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                                        <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                                        <p>You represent that you are over the age of 18. The Service Provider does not permit those under 18 to use the Service.</p>
                                        <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Service Provider. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
                                        <h2>Links to Other Websites</h2>
                                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Service Provider.</p>
                                        <p>The Service Provider has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Service Provider shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                                        <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
                                        <h2>Termination</h2>
                                        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                                        <p>Upon termination, Your right to use the Service will cease immediately.</p>
                                        <h2>Limitation of Liability</h2>
                                        <p>Notwithstanding any damages that You might incur, the entire liability of the Service Provider and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                                        <p>To the maximum extent permitted by applicable law, in no event shall the Service Provider or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Service Provider or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                                        <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
                                        <h2>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
                                        <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Service Provider, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Service Provider provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
                                        <p>Without limiting the foregoing, neither the Service Provider nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Service Provider are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                                        <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
                                        <h2>Governing Law</h2>
                                        <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                                        <h2>Disputes Resolution</h2>
                                        <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Service Provider.</p>
                                        <h2>For European Union (EU) Users</h2>
                                        <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
                                        <h2>United States Legal Compliance</h2>
                                        <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                                        <h2>Severability and Waiver</h2>
                                        <h3>Severability</h3>
                                        <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                                        <h3>Waiver</h3>
                                        <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
                                        <h2>Translation Interpretation</h2>
                                        <p>These Terms and Conditions may have been translated if We have made them available to You on our Service.
                                        You agree that the original English text shall prevail in the case of a dispute.</p>
                                        <h2>Changes to These Terms and Conditions</h2>
                                        <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                                        <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
                                        <h2>Contact Us</h2>
                                        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                                        <ul>
                                        
                                        {/* TODO: Add link to contact form */}
                                        <li>By email: contact@renderhive.io</li>
                                        </ul>
                                    </div>

                                </TabItem>


                                <TabItem id="section-privacy-policy" name="Privacy Policy">
                                    <div className="flex flex-col space-y-4 py-8">
                                        <h1>Privacy Policy – Website</h1>
                                        <p className="text-xl text-main"> Last Updated: March 28, 2024</p>
                                    </div>
                                    
                                </TabItem>
                            </Tabs>
                                
                        </div>

                    </div>
                </div>


            </div>



            {/* <!-- Section: About--> */}
            <div className="absolute overflow-hidden w-screen z-0 mt-24">
                
                {/* <!-- Background Gradient 1 --> */}
                <div className=" w-screen h-[500px] top-[0px] bg-gradient-to-t from-primary-mid-dark to-primary-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[580px] top-[500px] bg-primary-mid-dark" aria-hidden="true"> </div>
                <div className=" w-screen h-[400px] top-[1080px] bg-gradient-to-t from-primary-dark to-primary-mid-dark" aria-hidden="true"> </div>

                {/* <!-- Background Gradient Spacer --> */}
                <div className=" w-screen h-[1400px] sm:h-[1500px] md:h-[1650px] lg:h-[1000px] xl:h-[950px] bg-primary-dark" aria-hidden="true"> </div>

                {/* <!-- Background Patterns --> */}
                <HoneycombPatternSection className="absolute top-[268px] -left-[400px] sm:top-[268px] sm:-left-[320px] lg:top-[268px] lg:-left-[235px] xl:-left-[185px] w-[465px] h-[528px] text-secondary" aria-hidden="true" />
                <HoneycombPatternSection className="absolute top-[0px] -right-[400px] sm:top-[0px] sm:-right-[320px] lg:top-[0px] lg:-right-[235px] xl:-right-[185px] w-[465px] h-[528px] text-secondary" aria-hidden="true" />

            </div>

        </div>
    );
};

export default TermsOfServiceSection;