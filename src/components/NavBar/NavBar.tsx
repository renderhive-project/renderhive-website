import { useState, useEffect } from 'react';

// images
import RenderhiveLogo from "@assets/logo.svg?react";

// define type for the navigation menu items
type NavItem = {
    href: string;
    label: string;
};

const NavBar = ({ navItems }: { navItems: NavItem[] }) => {
    const [scrollPos, setScrollPos] = useState(0);

    // handle scroll event to change the background color of the navbar and add a blur effect
    const maxScrollPos = 100; // adjust this value to your needs
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

    return (
        <header className={`sticky top-0 z-50 ${scrollPos > 100 ? 'backdrop-filter backdrop-blur-xl border-b border-primary-main' : ''}`} style={{backgroundColor: `rgba(6, 13, 21, ${alpha})`}}>
            <div className="mx-auto max-w-8xl">
                <nav className="xl:mx-20 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#section-hero" className="flex items-center ">
                            <RenderhiveLogo className="w-auto text-secondary"/>
                            <span className="text-lg ml-4 leading-6 text-secondary font-logo tracking-widest">renderhive</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navItems.map((link, index) => (
                            <a key={index} href={link.href} className="text-sm leading-6 text-main">{link.label}</a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button type="button" className="inline-flex items-center justify-center rounded-md py-2.5 px-8 bg-secondary hover:bg-secondary-mid font-semibold text-sm leading-6 text-primary-dark">
                            Sign In
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;