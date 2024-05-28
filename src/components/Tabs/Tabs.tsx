import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type TabItemProps = {
    name: string;
    children: React.ReactNode;
    id?: string;
};

type TabsProps = {
    children: React.ReactElement<TabItemProps>[];
    className?: string;
    onChange?: (activeTab: string) => void;
};

const TabItem: React.FC<TabItemProps> = ({ children, id }) => {
    return (
        <div id={id} className="flex flex-col w-full">
            {children}
        </div>
    );
};

const Tabs: React.FC<TabsProps> = ({ children, className, onChange }) => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(children[0].props.name);

    const classNamesFunc = (...classes: (false | null | undefined | string)[]) => {
        return classes.filter(Boolean).join(' ');
    };

    // Listen for hash changes
    useEffect(() => {

        // calculate the navbar height
        const hash = location.hash.slice(1);
        const childWithHash = children.find(child => child.props.id === hash);
        if (childWithHash) {
            setActiveTab(childWithHash.props.name);
            onChange && onChange(childWithHash.props.name); // Call onChange here

            // Scroll to the position of the tab after the DOM updates
            setTimeout(() => {
                const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
                const element = document.getElementById(hash)?.parentElement;
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: 'auto'
                    })
                }
            }, 100);
        }

    }, [location, onChange]);

    // listen for tab changes
    useEffect(() => {
        if (onChange) {
        onChange(activeTab);
        }
    }, [activeTab, onChange]);

    return (
        <div className={`flex flex-col space-y-0 lg:space-y-4 items-center w-full h-full lg:overflow-hidden ${className}`}>
            <div className="w-full px-8 lg:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md bg-primary-dark text-white border-primary-light focus:border-secondary focus:ring-secondary"
                    defaultValue={children.find((child) => child.props.name === activeTab)?.props.name}
                    onChange={(e) => setActiveTab(e.target.value)}
                >
                    {children.map((child, index) => (
                        <option key={index}>{child.props.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden border border-primary-light rounded-lg p-[4px] lg:block">
                <nav className="flex space-x-1" aria-label="Tabs">
                    {children.map((child, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(child.props.name)}
                            className={classNamesFunc(
                                child.props.name === activeTab ? 'bg-primary-light text-white shadow-lg shadow-primary-dark' : 'text-main hover:text-white',
                                'w-[150px] rounded-md px-3 py-2 text-sm'
                            )}
                            aria-current={child.props.name === activeTab ? 'page' : undefined}
                        >
                            {child.props.name}
                        </button>
                    ))}
                </nav>
            </div>
            
            {children.filter(child => child.props.name === activeTab)}
        </div>
    );
};

export { Tabs, TabItem };