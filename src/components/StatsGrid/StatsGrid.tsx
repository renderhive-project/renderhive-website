import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// icons
import { InformationCircleIcon } from '@heroicons/react/24/outline'


// Define StatProps props
interface StatProps {
    title: string;
    value: number;
    className: string;
    unit?: string;
    tooltip?: string;
}

// Stat component
const StatsCard: React.FC<StatProps> = ({ title, value, className, unit, tooltip }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    });

    return (
        <div className={`relative group flex flex-col w-full ${className} bg-primary-mid-dark rounded-xl px-2 py-2 items-center `}>
            <div className="flex w-full pb-2 justify-end">
                <InformationCircleIcon 
                    className={`h-5 w-5 text-white ${tooltip ? 'opacity-30 hover:text-primary-navy hover:opacity-100 cursor-pointer' : 'opacity-0'} `}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                />
            </div>

            <div ref={ref} className="flex flex-col w-full h-full space-y-2 px-2 pb-6 justify-center">
                <div className="text-secondary text-4xl lg:text-4xl">
                    <CountUp end={inView ? value : 0} duration={1.75} separator="," />
                    <span className="text-lg ml-2">{unit}</span>
                </div>
                <div className="text-white text-sm md:text-xs lg:text-sm">
                    {title} *
                </div>

                {showTooltip && tooltip && (
                <div className="absolute inset-0 flex translate-y-1/4 items-center justify-center bg-primary-navy p-4 text-sm text-white rounded-md opacity-100 shadow-lg shadow-primary-dark z-10">
                    <div className="text-main text-sm">
                        {tooltip}
                    </div>
                </div>
                )}

            </div>
        </div>
    );
};

// Define StatsRow props
interface StatsRowProps {
    children: React.ReactNode;
    classNames: string;
}

const StatsRow: React.FC<StatsRowProps> = ({ children, classNames }) => {
    return (
        <div className={`grid ${classNames} gap-4`}>
            {children}
        </div>
    );
};

// StatsGrid component
interface StatsGridProps {
    children: React.ReactNode;
}

const StatsGrid: React.FC<StatsGridProps> = ({ children }) => {
    return (
        <div className="relative flex flex-col w-full gap-4">
            {children}

            <div className="flex rounded-xl px-2 py-2 items-center justify-center rounded-xl bg-primary-dark text-sm sm:text-sm text-secondary">
                <i>* Displayed values are random numbers for illustration purposes until the network launches.</i>
            </div>

        </div>
    );
};

export { StatsGrid, StatsRow, StatsCard };