// contexts
import { useContactForm } from '../../../contexts/ContactFormContext/ContactFormContext';

// components
import { Tabs, TabItem } from "../../../components/Tabs/Tabs";

// images
import HoneycombPatternSection from "@assets/honeycomb_pattern_sections.svg?react";
import BackgroundBeeAbout from "@assets/bg_bee_technologies_about.svg?react";

// icons
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/solid'

const TermsOfServiceSection = () => {
    const { setShowContactForm } = useContactForm();
    
    return (
        <div className="relative w-screen flex justify-center overflow-hidden pt-32 pb-96 sm:pb-96">

            <div className="relative flex flex-col w-full h-full max-w-8xl mx-0 p-6 md:p-8 top-[11rem] sm:top-[11rem] md:top-[11rem] lg:top-[10rem] space-y-24 sm:space-y-36 items-center z-10">
   
                {/* <!-- Section Header: About --> */}
                <div className="w-[60%] sm:w-[63%] md:w-[65%] lg:w-[58%] xl:w-[62%] z-10 mt-20 md:mt-36 mb-20 md:mb-40">
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
                                    This website is currently operated by Christian Stolze – the founder of the Renderhive Project. Its purpose is to inform you about the project, to simplify your access to the Renderhive software, and to facilitate the project's development. No services related to the Renderhive Project are offered from this website and the project itself is officially maintained via the project's <a href="https://github.com/renderhive-project/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">GitHub organization</a>. The only way to participate in the Renderhive network is through the <a href="https://github.com/renderhive-project/renderhive-service-app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">Renderhive software</a> under the terms and conditions defined in the software licenses.
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

                        {/* <!-- Sub-Section Tabs: Legal texts --> */}
                        <div className="relative rounded-xl bg-primary-mid-dark xl:mx-20 text-left overflow-hidden text-main py-8">
                            
                            <Tabs>
                                {/* <!-- Sub-Section Content: Legal Notice / Impressum --> */}
                                <TabItem id="section-legal-notice" name="Legal Notice">
                                    <div className="flex flex-col space-y-4 p-8">
                                        <h1>Legal Notice – Website</h1>
                                        <p className="text-xl text-main"> Last Updated: May 22, 2024</p>
                                    </div>
                                    
                                    <div className="flex flex-col space-y-4 p-8">
                                        <h2>Provider</h2>
                                        <p>
                                            IT Services Christian Stolze<br/>
                                            c/o Basislager Coworking<br/>
                                            Peterssteinweg 14<br/>
                                            04107 Leipzig <br/>
                                            Germany <br/>
                                        </p>
                                        <p>
                                            Represented by: Christian Stolze
                                        </p>

                                        <h2>Contact Us</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Email: contact@renderhive.io</li>
                                            <li><a className="text-white hover:text-secondary hover:cursor-pointer" onClick={() => setShowContactForm(true)}>Contact form</a></li>
                                        </ul>
                                        
                                        <h2>Disclaimer</h2>
                                        <p>We are responsible for the content of our Internet pages according to the provisions of general law, in particular according to Section 7 (1) of the German Telemedia Act. All contents are created with due care and to the best of our knowledge. Insofar as we refer to the Internet pages of third parties by means of hyperlinks on our Internet pages, we cannot assume any guarantee for the continuous topicality, correctness and completeness of the linked contents, as these contents are outside our area of responsibility and we have no influence on the future design. If, in your opinion, any content violates applicable law or is inappropriate, please let us know.</p>
                                        <p>The legal information on this page as well as all questions and disputes in connection with the design of this website are subject to the laws of the Federal Republic of Germany.</p>

                                        <h3>Data protection notice</h3>
                                        <p>You can find our Privacy Policy at: <a className="text-white hover:text-secondary hover:cursor-pointer" href="https://renderhive.io/about#section-privacy-policy">https://renderhive.io/about#section-privacy-policy</a></p>

                                        <h2>Copyright</h2>
                                        <p>The contents and works on these pages created by the site operator are subject to German copyright law. The duplication, processing, distribution, and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. In so far as the contents on this site were not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such contents immediately.</p>

                                        <h2>Social media profiles</h2>
                                        <p>This legal notice also applies to the following social media profiles:</p>
                                        <p>X (formerly Twitter): https://twitter.com/renderhive</p>

                                        <p className="pt-4 text-sm text-primary-mid-grey">
                                            <span className="pr-1">Created with the kind support of</span>
                                            <a className="hover:text-secondary hover:cursor-pointer" href="https://www.dieter-datenschutz.de/">
                                                <span>Dieter does data protection</span>
                                            </a>
                                        </p>
                                    </div>
                                </TabItem>

                                {/* <!-- Sub-Section Content: Terms of Service – Website --> */}
                                <TabItem id="section-terms-of-service" name="Terms of Service">
                                    <div className="flex flex-col space-y-4 p-8">
                                        <h1>Terms of Service – Website</h1>
                                        <p className="text-xl text-main"> Last Updated: May 22, 2024</p>
                                    </div>
                                    
                                    <div className="flex flex-col space-y-4 p-8">
                                        <p className="pb-8">
                                            It is Your responsibility to read these Terms and Conditions carefully before using this Website.
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
                                            <p><strong>Service Provider</strong> (referred to as either &quot;the Service Provider&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to the website operator IT Services Christian Stolze represented by Christian Stolze.</p>
                                            </li>
                                            <li>
                                            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                                            </li>
                                            <li>
                                            <p><strong>Service</strong> refers to this Website.</p>
                                            </li>
                                            <li>
                                            <p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Service Provider regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">Terms and Conditions Generator</a>.</p>
                                            </li>
                                            <li>
                                            <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                                            </li>
                                            <li>
                                            <p><strong>Website</strong> refers to the Renderhive website, accessible from <a href="https://www.renderhive.io/" rel="external nofollow noopener" target="_blank">https://www.renderhive.io/</a></p>
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
                                        <p>By using this Website, You acknowledge that You have understood that this website is a private website operated by the founder of the Renderhive project. The website is intended to inform You about the project and to simplify Your access to the Renderhive open-source software. The Website does not offer any services related to the Renderhive project and the project itself is officially maintained via the project's GitHub organization. The only way to participate in the Renderhive network is through the Renderhive software under the terms and conditions defined in the respective software licenses.</p>
                                        
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
                                        <p>If you have any questions about these Terms and Conditions, You can contact us via:</p>
                                        
                                        <ul className="list-disc pl-5">
                                            <li>Email: contact@renderhive.io</li>
                                            <li><a className="text-white hover:text-secondary hover:cursor-pointer" onClick={() => setShowContactForm(true)}>Contact form</a></li>
                                        </ul>
                                    </div>

                                </TabItem>

                                {/* <!-- Sub-Section Content: Privacy Policy – Website --> */}
                                <TabItem id="section-privacy-policy" name="Privacy Policy">
                                    <div className="flex flex-col space-y-4 p-8">
                                        <h1>Privacy Policy – Website</h1>
                                        <p className="text-xl text-main"> Last Updated: May 22, 2024</p>
                                    </div>
                                
                                    <div className="flex flex-col space-y-4 p-8">
                                        <h2>
                                            <span className="pr-1">1.</span>
                                            <span>Introduction</span>
                                        </h2>
                                        <p>This website is operated by:  IT Services Christian Stolze.</p>
                                        <p>It is very important to us to handle the data of our website visitors with confidence and to protect them in the best possible way. For this reason, we make every effort to comply with the requirements of the GDPR.</p>
                                        <p>In the following, we explain how we process your data on our website. To do this, we use the clearest and most transparent language possible so that you really understand what happens with your data.</p>
                                        <h2>
                                            <span className="pr-1">2.</span>
                                            <span>General information</span>
                                        </h2>
                                        <h3>
                                            <span className="pr-1">2.1</span>
                                            <span>Processing of personal data and other terms</span>
                                        </h3>
                                        <p>Data protection applies to the processing of personal data. Personal means all data with which you can be personally identified. This is, for example, the IP address of the device (PC, laptop, smartphone, etc.) in front of which you are currently sitting. Such data is processed when 'something happens to it'. Here, for example, the IP is transmitted from the browser to our provider and stored there automatically. This is then a processing (according to Art. 4 No. 2 GDPR) of personal data (according to Art. 4 No. 1 GDPR).</p>
                                        <p>These and other legal definitions can be found in Art. 4 GDPR.</p>
                                        <h3>
                                            <span className="pr-1">2.2</span>
                                            <span>Applicable regulations/laws - GDPR, BDSG and TTDSG</span>
                                        </h3>
                                        <p>The scope of data protection is regulated by laws. In this case, these are the GDPR (General Data Protection Regulation) as a European regulation and the BDSG (Federal Data Protection Act) as a national law.</p>
                                        <p>In addition, the TTDSG supplements the provisions from the GDPR as far as the use of cookies is concerned.</p>
                                        <h3>
                                            <span className="pr-1">2.3</span>
                                            <span>The person in charge</span>
                                        </h3>
                                        <p>The person responsible for data processing on this website is the controller within the meaning of the GDPR. This is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data.</p>
                                        <p>You can reach the person in charge at:</p>
                                        <p>
                                            <span className="multiline">
                                                IT Services Christian Stolze<br/>
                                                c/o Basislager Coworking<br/>
                                                Peterssteinweg 14<br/>
                                                04107 Leipzig <br/>
                                                Germany <br/>
                                            </span>
                                        </p>
                                        <p>contact@renderhive.io</p>
                                        <h3>
                                            <span className="pr-1">2.4</span>
                                            <span>This is how data is basically processed on this website</span>
                                        </h3>
                                        <p>As we have already established, there are data (e.g. IP address) that are collected automatically. This data is mainly required for the technical provision of the homepage. Insofar as we use personal data or collect other data, we will inform you of this or ask for your consent.</p>
                                        <p>Other personal data you share with us knowingly.</p>
                                        <p>Detailed information on this can be found below.</p>
                                        <h3>
                                            <span className="pr-1">2.5</span>
                                            <span>Your</span>
                                            <span> Right</span>
                                        </h3>
                                        <p>The GDPR provides you with comprehensive rights. These are, for example, the free information about the origin, recipient and purpose of your stored personal data. In addition, you can request the correction, blocking or deletion of this data or complain to the competent data protection supervisory authority. You can revoke any consent you have given at any time.</p>
                                        <p>You can find out in detail what these rights are and how to exercise them in the last section of this Privacy Policy.</p>
                                        <h3>
                                            <span className="pr-1">2.6</span>
                                            <span>Data protection - Our view</span>
                                        </h3>
                                        <p>Data protection is more than just a chore for us! Personal data is of great value and careful handling of this data should be a matter of course in our digitalized world. In addition, you as a website visitor should be able to decide for yourself what "happens" to your data, when and by whom. We therefore undertake to comply with all legal provisions, collect only the data that is necessary for us and, of course, treat it confidentially.</p>
                                        <h3>
                                            <span className="pr-1">2.7</span>
                                            <span>Disclosure and deletion</span>
                                        </h3>
                                        <p>The transfer and deletion of data are also important and sensitive topics. Therefore, we would like to briefly inform you in advance about our general approach to this.</p>
                                        <p>A transfer of data only takes place on the basis of a legal basis and only if this is unavoidable. This may be the case in particular if it is a so-called Data Processor and a Data Processing Agreement has been concluded in accordance with Art. 28 GDPR.</p>
                                        <p>We delete your data when the purpose and the legal basis for processing cease to apply and the deletion does not conflict with any other legal obligations. A 'good' overview of this is also provided by Art. 17 GDPR.</p>
                                        <p>For all further information, please refer to this Privacy Policy and contact the responsible person if you have any specific questions.</p>
                                        <h3>
                                            <span className="pr-1">2.8</span>
                                            <span>Hosting</span>
                                        </h3>
                                        <p>This website is hosted externally. The personal data collected on this website is stored on the hoster's servers. This includes the automatically collected and stored log files (see below for more details), as well as all other data provided by the website visitors.</p>
                                        <p>External hosting is used for the purpose of secure, fast and reliable provision of our website and in this context serves the fulfillment of contracts with our potential and existing customers.</p>
                                        <p>The legal basis for the processing is Art. 6 (1) lit. a, b and f GDPR, as well as Section 25 (1) TTDSG, insofar as consent includes the storage of cookies or access to information in the terminal device of the website visitor or user as defined by the TTDSG.</p>
                                        <p>Our hoster only processes data that is necessary for the fulfillment of its service obligation and acts as our Data Processor, which means that it is subject to our instructions. We have concluded a corresponding Data Processing Agreement with our hoster.</p>
                                        <p>We use the following hoster:</p>
                                        <p>IONOS</p>
                                        <p>IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany.</p>
                                        <p>
                                            <a href="mailto:info@ionos.de">
                                                <span>info@ionos.de</span>
                                            </a>
                                        </p>
                                        <p>
                                            <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/">
                                                <span>https://www.ionos.de/terms-gtc/datenschutzerklaerung/</span>
                                            </a>
                                            <span>.</span>
                                        </p>
                                        <h3>
                                            <span className="pr-1">2.9</span>
                                            <span>Legal basis</span>
                                        </h3>
                                        <p>The processing of personal data always requires a legal basis. The GDPR provides for the following possibilities in Art. 6 (1) Sentence 1:</p>
                                        <p>
                                            <span className="pr-1">a)</span>
                                            <span>The data subject has given his/her consent to the processing of personal data concerning him/her for one or more specific purposes;</span>
                                        </p>
                                        <p>
                                            <span className="pr-1">b)</span>
                                            <span>the processing is necessary for the performance of a contract to which the data subject is party or for the implementation of pre-contractual measures taken at the data subject's request;</span>
                                        </p>
                                        <p>
                                            <span className="pr-1">c)</span>
                                            <span>processing is necessary for compliance with a legal obligation to which</span>
                                            <span>the person in charge</span>
                                            <span>subject to;</span>
                                        </p>
                                        <p>
                                            <span className="pr-1">d)</span>
                                            <span>the processing is necessary in order to protect the vital interests of the data subject or another natural person;</span>
                                        </p>
                                        <p>
                                            <span className="pr-1">e)</span>
                                            <span>processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in</span>
                                            <span>the person in charge</span>
                                            <span> was transferred;</span>
                                        </p>
                                        <p>
                                            <span className="pr-1">f)</span>
                                            <span>processing is necessary for the purposes of safeguarding the legitimate interests of</span>
                                            <span>of the responsible person(s)</span>
                                            <span> or</span>
                                            <span>of a/an third party</span>
                                            <span> necessary, unless the interests or fundamental rights and freedoms of the data subject which require the protection of personal data override this, in particular where the data subject is a child.</span>
                                        </p>
                                        <p>In the following sections, we will provide you with the specific legal basis for the respective processing.</p>
                                        <h2>
                                            <span className="pr-1">3.</span>
                                            <span>What happens on our website</span>
                                        </h2>
                                        <p>By visiting our website, we process personal data from you.</p>
                                        <p>To protect this data as best as possible against unauthorized access by third parties, we use SSL or TLS encryption. You can recognize this encrypted connection by the fact that a https:// or a lock symbol is displayed in the address bar of your browser.</p>
                                        <p>In the following, you will learn what data is collected when you visit our website, for what purpose this is done and on what legal basis.</p>
                                        <h3>
                                            <span className="pr-1">3.1</span>
                                            <span>Data collection when calling up the website</span>
                                        </h3>
                                        <p>By calling up the website, information is automatically stored in so-called server log files. This is the following information:</p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>Browser type and version</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>Operating system used</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>Referrer URL</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>Host name of the accessing computer</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>Time of the server request</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>IP address</span>
                                        </p>
                                        <p>This data is temporarily required in order to be able to display our website to you permanently and without problems. In particular, this data thus serves the following purposes:</p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>System security of the website</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>System stability of the website</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>Website troubleshooting</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>Connecting to the website</span>
                                        </p>
                                        <p className="BulletList1">
                                            <span className="pr-1">-</span>
                                            <span>Website presentation</span>
                                        </p>
                                        <p>The data processing is carried out in accordance with Art. 6 para. 1 lit. f GDPR and is based on our legitimate interest in the processing of this data, in particular the interest in the functionality of the website as well as its security.</p>
                                        <p>If possible, this data is stored pseudonymously and deleted after the respective purpose has been achieved.</p>
                                        <p>Insofar as the server log files allow the identification of the person concerned, the data is stored for a maximum period of 14 days. An exception exists if a security-relevant event occurs. In this case, the server log files are stored until the elimination and final clarification of the security-relevant event.</p>
                                        <p>For the rest, a consolidation with other data does not take place.</p>
                                        <h3>
                                            <span className="pr-1">3.2</span>
                                            <span>Cookies</span>
                                        </h3>
                                        <h4>
                                            <span className="pr-1">3.2.1</span>
                                            <span>General</span>
                                        </h4>
                                        <p>This website uses so-called cookies. This is a data record, information that is stored in the browser of your terminal device and is related to our website.</p>
                                        <p>By setting cookies, the navigation of the website in particular can be made easier for the visitor.</p>
                                        <h4>
                                            <span className="pr-1">3.2.2</span>
                                            <span>Reject cookies</span>
                                        </h4>
                                        <p>The setting of cookies can be prevented by adjusting the settings of your browser.</p>
                                        <p>Here you can find the corresponding links to frequently used browsers:</p>
                                        <p>
                                            <span>Mozilla Firefox:</span>
                                            <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?redirectslug=Cookies+l%C3%B6schen&amp;redirectlocale=de">
                                                <span>https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?redirectslug=Cookies+l%C3%B6schen&amp;redirectlocale=en</span>
                                            </a>
                                        </p>
                                        <p>
                                            <span>Google Chrome:</span>
                                            <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=de">
                                                <span>https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=de</span>
                                            </a>
                                        </p>
                                        <p>
                                            <span>Microsoft Edge:</span>
                                            <a href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                                                <span>https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d</span>
                                            </a>
                                        </p>
                                        <p>
                                            <span>Safari:</span>
                                            <a href="https://support.apple.com/de-de/guide/mdm/mdmf7d5714d4/web">
                                                <span>https://support.apple.com/de-de/guide/mdm/mdmf7d5714d4/web</span>
                                            </a>
                                            <span> and</span>
                                            <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac">
                                                <span>https://support.apple.com/de-de/guide/safari/sfri11471/mac</span>
                                            </a>
                                            <span>

                                            As far as</span>
                                            <span>You</span>
                                            <span> another browser</span>
                                            <span>use</span>
                                            <span>it is recommended to use the name</span>
                                            <span>Your</span>
                                            <span> browser and 'delete and manage cookies' in a search engine and follow the official link to</span>
                                            <span>yours</span>
                                            <span> browser to follow.</span>
                                        </p>
                                        <p>
                                            <span>Alternative</span>
                                            <span>you can use your</span>
                                            <span> Cookie settings also under</span>
                                            <a href="http://www.aboutads.info/choices/">
                                                <span>www.aboutads.info/choices/</span>
                                            </a>
                                            <span>
                                            or</span>
                                            <a href="http://www.youronlinechoices.com">
                                                <span>www.youronlinechoices.com</span>
                                            </a>
                                            <span>manage.</span>
                                        </p>
                                        <p>However, we must inform you that comprehensive blocking/deletion of cookies may lead to impairments in the use of the website.</p>
                                        <h4>
                                            <span className="pr-1">3.2.3</span>
                                            <span>Technically necessary cookies</span>
                                        </h4>
                                        <p>We use technically necessary cookies on this website to ensure that our website functions without errors and in accordance with applicable laws. They help to make the website user-friendly. Some functions of our website cannot be displayed without the use of cookies.</p>
                                        <p>The legal basis for this is, depending on the individual case, Art. 6 para. 1 lit. b, c and/or f GDPR.</p>
                                        <h4>
                                            <span className="pr-1">3.2.4</span>
                                            <span>Technically unnecessary cookies</span>
                                        </h4>
                                        <p>In addition, we also use cookies on our website that are not technically necessary. These cookies are used, among other things, to analyze the surfing behavior of the website visitor or to offer website functions that are, however, not technically necessary.</p>
                                        <p>The legal basis for this is your consent pursuant to Art. 6 para. 1 lit. a GDPR.</p>
                                        <p>Technically unnecessary cookies are only set with your consent, which you can revoke at any time in the cookie consent tool.</p>
                                        <h3>
                                            <span className="pr-1">3.3</span>
                                            <span>Data processing through user input</span>
                                        </h3>
                                        <h4>
                                            <span className="pr-1">3.3.1</span>
                                            <span>Contact</span>
                                        </h4>
                                        <p>
                                            <span className="pr-1">a)</span>
                                            <span>E-mail</span>
                                        </p>
                                        <p>If you contact us by e-mail, we process your e-mail address and, if applicable, other data contained in the e-mail. These are stored on the mail server and partly on the respective end devices. Depending on the request, the legal basis for this is regularly Art. 6 para. 1 lit. f GDPR or Art. 6 para. 1 lit. b GDPR. The data will be deleted as soon as the respective purpose ceases to apply and it is possible according to the legal requirements.</p>
                                        <p>
                                            <span className="pr-1">b)</span>
                                            <span> Contact form</span>
                                        </p>
                                        <p>We offer a contact form. This is used to contact our company.</p>
                                        <p>In this form we usually process your first and last name, your telephone number, your e-mail address, a postal address and the content of the message. The data is stored on our web server and forwarded internally to the respective responsible e-mail addresses.</p>
                                        <p>The legal basis for data processing is Art. 6 para. 1 lit. f GDPR, as we have a legitimate interest in responding to your request and in an uncomplicated way of contacting you. If the contact is aimed at the conclusion of a contract, the additional legal basis for the processing is Art. 6 para. 1 lit. b GDPR.</p>
                                        <p>We delete this data no later than 3 months after receipt, unless it is required for a contractual relationship that has arisen.</p>
                                        <p>We bind the contact form of</p>
                                        <p>Web3Forms</p>
                                        <p>
                                            <a href="https://web3forms.com/privacy">
                                                <span>https://web3forms.com/privacy</span>
                                            </a>
                                            <span>.</span>
                                        </p>
                                        <p>on our website.</p>
                                        <h3>
                                            <span className="pr-1">3.4</span>
                                            <span>Analysis and tracking tools</span>
                                        </h3>
                                        <h4>
                                            <span className="pr-1">3.4.1</span>
                                            <span>IONOS WebAnalytics</span>
                                        </h4>
                                        <p>We use IONOS WebAnalytics on this website. IONOS WebAnalytics is a web analytics service. This service is provided by 1&amp;1 IONOS SE, Elgendorfer Straße 57, 56410 Montabaur, Germany.</p>
                                        <p>For the purpose of analysis, IONOS stores in particular these data: previously visited website (referrer), requested website or file, browser type and version, operating system used, device type used, time of access and the IP address in anonymized form.</p>
                                        <p>The data collection is completely anonymized. No cookies are stored by IONOS WebAnalytics.</p>
                                        <p>The legal basis for the processing is Art. 6 para. 1 lit. f GDPR. We have a legitimate interest in analyzing user behavior on our website in order to optimize our web offer and also our advertising.</p>
                                        <p>More details:</p>
                                        <p>
                                            <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/">
                                                <span>https://www.ionos.de/terms-gtc/datenschutzerklaerung/.</span>
                                            </a>
                                        </p>
                                        <h3>
                                            <span className="pr-1">3.5</span>
                                            <span>Social media profiles</span>
                                        </h3>
                                        <p>In addition to our website, our company is also present on social networks. Here
                                        we want to present our company and create the opportunity to get in touch with us.</p>
                                        <p>We also use the opportunity to place advertisements and job advertisements on social media.</p>
                                        <p>In the following, we provide information about what data we and the respective social network process when you visit and
                                        interaction with our profile.</p>
                                        <h3>
                                            <span className="pr-1">3.6</span>
                                            <span>X (formerly Twitter)</span>
                                        </h3>
                                        <p>We use the short message service "X" (formerly Twitter). This is a service of X Corp, 1355 Market Street, Suite 900, San Francisco, CA 94103 USA. Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2 D02 AX07, Ireland, is responsible for the data processing of persons living outside the United States.</p>
                                        <h4>
                                            <span className="pr-1">3.6.1</span>
                                            <span>Interactions with our account</span>
                                        </h4>
                                        <p>In principle, we do not collect and process any data from you when you use our short message service. The data you enter on X, in particular your user name and the content published under your account, will be processed by us on the basis of your consent in accordance with Art. 6 para. 1 lit. a GDPR, insofar as your tweets may be re-tweeted, we may reply to them or tweets may be written that refer to your account. The data freely published and disseminated on X is thus included by us and made accessible to our followers.</p>
                                        <h4>
                                            <span className="pr-1">3.6.2</span>
                                            <span>Data processed by X</span>
                                        </h4>
                                        <p>We have no control over the nature and extent of the data processed by X Corp., how it is processed and used, or whether it is disclosed to third parties. When you use X, your personal data will be collected, transferred, stored, disclosed and used by X Corp. and transferred to, stored and used in the United States, Ireland and any other country in which X Corp. does business, regardless of your country of residence.</p>
                                        <p>On the one hand, X processes all voluntarily entered data such as name and user name, e-mail address, telephone number or the contacts in the address book, insofar as these have been uploaded or synchronized.</p>
                                        <p>On the other hand, X also evaluates the shared content to determine which topics the user is interested in. X processes and stores confidential messages that are sent directly to other users. Using GPS data, information on wireless networks or the IP address, X can determine the user's location.</p>
                                        <p>X also receives information about what content is viewed, even if the user has not created an account.</p>
                                        <p>X processes so-called "log data". This includes the IP address, the browser type, the operating system, information on the previously accessed website and the pages accessed, the location, the mobile phone provider, the end device used (including device ID and application ID), the search terms used and cookie information.</p>
                                        <p>Due to the fact that X Corp. is a non-European provider that only has a European branch in Ireland, it is not bound by German data protection regulations in its own opinion. This concerns, for example, the rights to information, blocking or deletion of data or the possibility of objecting to the use of usage data for advertising purposes.</p>
                                        <p>The processing of data can be restricted in the general settings of the X account and under "Data protection and security". In addition, on mobile devices (smartphones, tablet computers), X's access to contact and calendar data, photos, location data, etc. can be restricted in the settings options there. However, this depends on the operating system used.</p>
                                        <p>Further information can be found here:</p>
                                        <p>
                                            <a href="https://help.twitter.com/de/safety-and-security/x-privacy-settings.">
                                                <span>https://help.twitter.com/de/safety-and-security/x-privacy-settings.</span>
                                            </a>
                                        </p>
                                        <p>Information on the processing of data by X can be found in X's Privacy Policy:</p>
                                        <p>https://twitter.com/de/privacy.</p>
                                        <p>Information can also be requested via the X data protection form or the archive requests:</p>
                                        <p>https://support.twitter.com/forms/privacy.</p>
                                        <h3>
                                            <span className="pr-1">3.7</span>
                                            <span>Third-party content</span>
                                        </h3>
                                        <h4>
                                            <span className="pr-1">3.7.1</span>
                                            <span>Google Fonts</span>
                                        </h4>
                                        <p>We have integrated Google Fonts locally on our server. Thus, despite the use, no data is transmitted to Google.</p>
                                        <h4>
                                            <span className="pr-1">3.7.2</span>
                                            <span>hCaptcha</span>
                                        </h4>
                                        <p>We use Google hCaptcha on this website. hCaptcha is a plugin provided by Intuition Machines, Inc, 2211 Selig Drive, Los Angeles, CA 90026, USA.</p>
                                        <p>The service makes it possible to determine whether a data entry is made by a human or by an automated program. This analysis starts automatically in the background as soon as the website is entered. For this purpose, various information is collected, which is transmitted to hCaptcha. There is no indication of this analysis when using the "invisible mode".</p>
                                        <p>The legal basis for the processing is Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG. The consent can be revoked at any time.</p>
                                        <p>More details:</p>
                                        <p>
                                            <a href="https://www.hcaptcha.com/privacy">
                                                <span>https://www.hcaptcha.com/privacy</span>
                                            </a>
                                        </p>
                                        <p>
                                            <a href="https://hcaptcha.com/terms">
                                                <span>https://hcaptcha.com/terms</span>
                                            </a>
                                            <span>.</span>
                                        </p>
                                        <h2>
                                            <span className="pr-1">4.</span>
                                            <span>This is also important</span>
                                        </h2>
                                        <p>Finally, we would like to inform you in detail about your rights and how you will be informed about changes in data protection requirements.</p>
                                        <h3>
                                            <span className="pr-1">4.1</span>
                                            <span>Your</span>
                                            <span> Rights in detail</span>
                                        </h3>
                                        <h4>
                                            <span className="pr-1">4.1.1</span>
                                            <span>Right to information according to Art. 15 GDPR</span>
                                        </h4>
                                        <p>You can request information about whether personal data about you is being processed. If this is the case, you can request further information on the type and manner of processing. A detailed list can be found in Art. 15 (1) lit. a to h GDPR.</p>
                                        <h4>
                                            <span className="pr-1">4.1.2</span>
                                            <span>Right to rectification according to Art. 16 GDPR</span>
                                        </h4>
                                        <p>This right includes the correction of inaccurate data and the completion of incomplete personal data.</p>
                                        <h4>
                                            <span className="pr-1">4.1.3</span>
                                            <span>Right to deletion according to Art. 17 GDPR</span>
                                        </h4>
                                        <p>This so-called 'right to be forgotten' gives you the right, under certain conditions, to request the deletion of personal data by the controller. This is generally the case if the purpose of the data processing has ceased to exist, if consent has been revoked or if the initial processing took place without a legal basis. A detailed list of reasons can be found in Art. 17 (1) a to f GDPR. Furthermore, this "right to be forgotten" corresponds with the obligation of the controller under Art. 17 (2) GDPR to take appropriate measures to bring about a general erasure of the data.</p>
                                        <h4>
                                            <span className="pr-1">4.1.4</span>
                                            <span>Right to restriction of processing according to Art. 18 GDPR</span>
                                        </h4>
                                        <p>This right is subject to the conditions set out in Art. 18(1)(a) to (d).</p>
                                        <h4>
                                            <span className="pr-1">4.1.5</span>
                                            <span>Right to data portability according to Art. 20 GDPR</span>
                                        </h4>
                                        <p>Here, the basic right to receive one's own data in a common form and to transfer it to another data controller is regulated. However, this only applies to data processed on the basis of consent or a contract pursuant to Art. 20 (1) (a) and (b) and to the extent that this is technically feasible.</p>
                                        <h4>
                                            <span className="pr-1">4.1.6</span>
                                            <span>Right of objection according to Art. 21 GDPR</span>
                                        </h4>
                                        <p>In principle, you can object to the processing of your personal data. This applies in particular if your interest in objecting outweighs the legitimate interest of the controller in the processing and if the processing relates to direct marketing and or profiling.</p>
                                        <h4>
                                            <span className="pr-1">4.1.7</span>
                                            <span>Right to "decision in individual cases" according to Art. 22 GDPR</span>
                                        </h4>
                                        <p>In principle, you have the right not to be subject to a decision based solely on automated processing (including profiling) which produces legal effects concerning you or similarly significantly affects you. However, this right is also subject to limitations and supplements in Art. 22 (2) and (4) GDPR.</p>
                                        <h4>
                                            <span className="pr-1">4.1.8</span>
                                            <span>Other rights</span>
                                        </h4>
                                        <p>The GDPR includes comprehensive rights to inform third parties whether or how you have asserted rights under Art. 16, 17, 18 GDPR. This, however, only insofar as this is also possible or feasible with a reasonable effort.</p>
                                        <p>We would like to take this opportunity to once again inform you of your right to withdraw your consent in accordance with Article 7 (3) of the GDPR. However, this does not affect the lawfulness of the processing carried out up to that point.</p>
                                        <p>In addition, we would also like to inform you about your rights according to §§ 32 ff. BDSG, which, however, are largely congruent with the rights just described.</p>
                                        <h4>
                                            <span className="pr-1">4.1.9</span>
                                            <span>Right of appeal according to Art. 77 GDPR</span>
                                        </h4>
                                        <p>You also have the right to complain to a data protection supervisory authority if you consider that any processing of personal data concerning you is in breach of this Regulation.</p>
                                        <h2>
                                            <span className="pr-1">5.</span>
                                            <span>What if tomorrow the GDPR is abolished or other changes take place?</span>
                                        </h2>
                                        <p>The current status of this Privacy Policy is 12.05.2024. From time to time it is necessary to adapt the content of the Privacy Policy in order to react to actual and legal changes. We therefore reserve the right to amend this Privacy Policy at any time. We will publish the amended version in the same place and recommend that you read the Privacy Policy regularly.</p>

                                        <p className="pt-4 text-sm text-primary-mid-grey">
                                            <span className="pr-1">Created with the kind support of</span>
                                            <a className="hover:text-secondary hover:cursor-pointer" href="https://www.dieter-datenschutz.de/">
                                                <span>Dieter does data protection</span>
                                            </a>
                                        </p>
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
                <HoneycombPatternSection className="absolute top-[232px] -left-[400px] sm:top-[268px] sm:-left-[320px] lg:top-[268px] lg:-left-[235px] xl:-left-[185px] w-[465px] h-[528px] text-secondary" aria-hidden="true" />
                <HoneycombPatternSection className="absolute -top-[36px] -right-[400px] sm:top-[0px] sm:-right-[320px] lg:top-[0px] lg:-right-[235px] xl:-right-[185px] w-[465px] h-[528px] text-secondary" aria-hidden="true" />

            </div>

            {/* <!-- Bees --> */}
            <BackgroundBeeAbout className='absolute top-[8rem] md:top-[10rem] left-[1rem] sm:left-[1.5rem] md:left-[6rem] lg:left-[10rem] xl:left-[20rem] text-main opacity-50 scale-x-[-1]'/>

        </div>
    );
};

export default TermsOfServiceSection;