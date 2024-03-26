import React, { useState } from 'react';

type TabItemProps = {
    name: string;
    children: React.ReactNode;
};

type TabsProps = {
    children: React.ReactElement<TabItemProps>[];
    classNames?: string;
};

const TabItem: React.FC<TabItemProps> = ({ children }) => {
    return <div>{children}</div>;
};

const Tabs: React.FC<TabsProps> = ({ children, classNames }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.name);

    const classNamesFunc = (...classes: (false | null | undefined | string)[]) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <div className={`flex flex-col space-y-0 lg:space-y-4 items-center w-full h-full lg:overflow-hidden ${classNames}`}>
            <div className="w-full px-8 md:hidden">
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
            <div className="hidden border border-primary-light rounded-lg p-[4px] md:block">
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