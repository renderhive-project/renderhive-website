import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// images
import RenderhiveLogo from "@assets/logo.svg?react";

// define type for the navigation menu items
type NavItem = {
    href: string;
    label: string;
};

const NavBar = ({ navItems }: { navItems: NavItem[] }) => {
    const [scrollPos, setScrollPos] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    const [isOpen, setIsOpen] = useState(false); // Add this line

    // handle scroll event to change the background color of the navbar and add a blur effect
    const maxScrollPos = 75; // adjust this value to your needs
    const alpha = Math.min(scrollPos / maxScrollPos, 0.8);

    const handleScroll = () => {
        setScrollPos(window.scrollY);
    };
    
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // detect the current section to mark the navigation items accordingly
    useEffect(() => {

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        console.log(activeSection);
                    } else {
                        setActiveSection('');
                    }
                });
            },
            { threshold: 0.25 } // the observer is triggered, as soon as XX% of the element is visible
        );

        navItems.forEach(item => {
            const element = document.querySelector(item.href);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            navItems.forEach(item => {
                const element = document.querySelector(item.href);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [navItems]);

    return (
        <header className={`fixed w-screen top-0 z-50 ${(scrollPos > maxScrollPos || isOpen) ? 'backdrop-filter backdrop-blur-lg border-b border-primary-main' : ''}`} style={{backgroundColor: `rgba(6, 13, 21, ${alpha})`}}>

            <Disclosure as="nav" className="py-6 px-6 md:px-8 xl:px-0" aria-label="Global">
                {({ open }) => (
                    <>
                    {/* // Update the isOpen state in the parent component, so that we can access the state there */}
                    {
                        useEffect(() => {
                            setIsOpen(open);
                        }, [open])
                    }

                    {/* // Update the isOpen state in the parent component */}
                    <div className="mx-auto max-w-8xl">
                        <div className="flex xl:mx-28 items-center justify-between">
                            <div className="flex">
                                <a href="#section-hero" className="flex items-center ">
                                    <RenderhiveLogo className="w-auto text-secondary"/>
                                    <span className="text-lg ml-4 leading-6 text-secondary font-logo tracking-widest">renderhive</span>
                                </a>
                            </div>
                            <div className="hidden lg:flex justify-center lg:gap-x-12">
                                {/* Current: "border-b-2 border-secondary", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                                {navItems.map((link, index) => (
                                        <a key={index} href={link.href} 
                                            className={
                                                link.href === `#${activeSection}`
                                                    ? "inline-flex items-center border-b-2 border-secondary px-1 pt-1 text-sm font-medium text-secondary hover:border-secondary hover:text-secondary-mid"
                                                    : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-main hover:border-secondary hover:text-secondary-mid"
                                            }
                                        >
                                            {link.label}
                                        </a>
                                ))}

                            </div>
                            <div className="hidden lg:block lg:justify-end">
                                <button type="button" className="inline-flex items-center justify-center rounded-md py-2.5 px-8 bg-secondary hover:bg-secondary-mid font-semibold text-sm leading-6 text-primary-dark">
                                    Sign In
                                </button>
                            </div>

                        
                            <div className="-mr-2 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-main hover:bg-gray-100 hover:text-secondary-mid focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                                </Disclosure.Button>
                            </div>
                        </div>

                        <Disclosure.Panel className="lg:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                {/* Current: "block border-l-4 border-secondary text-secondary", Default: "border-transparent text-main hover:border-secondary-mid hover:text-secondary-mid" */}

                                {navItems.map((link, index) => (
                                    <Disclosure.Button
                                        as="a"
                                        key={index}
                                        href={link.href}
                                        className={
                                            link.href === `#${activeSection}`
                                                ? "block border-r-4 border-secondary py-2 pl-3 pr-4 text-base font-medium text-secondary hover:border-secondary-mid hover:text-secondary-mid"
                                                : "block border-r-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-main hover:border-secondary-mid hover:text-secondary-mid"
                                        }
                                        
                                    >
                                        {link.label}
                                    </Disclosure.Button>
                                ))}
                                <div className="block border-r-4 border-transparent">
                                    <button type="button" className="inline-flex items-center justify-center rounded-md py-2.5 px-8 bg-secondary hover:bg-secondary-mid font-semibold text-sm leading-6 text-primary-dark">
                                        Sign In
                                    </button>
                                </div>
                            
                            </div>
                            
                            
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
            </Disclosure>
        </header>
    );
};

export default NavBar;