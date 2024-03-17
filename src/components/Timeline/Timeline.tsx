import React, { useState, ReactElement } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface MilestoneProps {
    name: string;
    date: string;
    description: React.ReactNode;
    done?: boolean;
    active?: boolean;
}

const Milestone:  React.FC<MilestoneProps> = ({name, date, description, done, active}) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <>
            <div className={`absolute flex h-8 w-8 rounded-full top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 items-center justify-center `} onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
                {(done || active) ? (
                    <div className={`flex ${active ? 'h-6 w-6' : 'h-5 w-5'} border border-4 border-white items-center justify-center rounded-full bg-secondary ${active && 'shadow-timeline shadow-secondary'}`} />
                ) : (
                    <div className={`flex ${active ? 'h-6 w-6' : 'h-5 w-5'} border border-4 border-white items-center justify-center rounded-full bg-primary-main`} />
                )}
            </div>

            <div className={`flex flex-col space-y-1`}>
                <span className="text-lg lg:text-xl font-medium text-white">{name}</span>
                <span className={`flex items-center justify-center text-md ${done ? 'text-secondary' : 'text-main'}`}>
                    {done ? (
                        <>
                            <CheckCircleIcon className="h-5 mr-1"/>
                            {'Done'}
                        </>
                    ) : (
                        date
                    )}
                </span>
            </div>


            {showDescription && description && (
                <div className="absolute flex w-full lg:w-[250px] bg-primary-navy rounded-md opacity-100 shadow-lg shadow-primary-dark p-4 top-[80%] lg:top-[60%] lg:-left-[30px] text-left text-sm text-white z-10">
                    <div className="text-main text-sm space-y-2">
                        {description}
                    </div>
                </div>
            )}
        </>
    );
};

interface TimelineProps {
  children: ReactElement<MilestoneProps>[];
}

const Timeline:  React.FC<TimelineProps> = ({ children }) => {

    // Convert children to an array and find the index of the active milestone
    const childrenArray = React.Children.toArray(children);
    const activeIndex = childrenArray.findIndex(child => (child as React.ReactElement<MilestoneProps>).props.active);

    // Calculate the length of the line based on the index of the active milestone
    if (activeIndex + 1 === childrenArray.length) {
        var percentage = 100;
    } else {
        var percentage = Math.floor((activeIndex + 0.5) / childrenArray.length * 100);
    }
    
    switch (percentage) { 
        case 1:
            lineWidth = "lg:w-[1%]";
            lineHeight = "h-[1%]";
            break;
        case 2:
            lineWidth = "lg:w-[2%]";
            lineHeight = "h-[2%]";
            break;
        case 3:
            lineWidth = "lg:w-[3%]";
            lineHeight = "h-[3%]";
            break;
        case 4:
            lineWidth = "lg:w-[4%]";
            lineHeight = "h-[4%]";
            break;
        case 5:
            lineWidth = "lg:w-[5%]";
            lineHeight = "h-[5%]";
            break;
        case 6:
            lineWidth = "lg:w-[6%]";
            lineHeight = "h-[6%]";
            break;
        case 7:
            lineWidth = "lg:w-[7%]";
            lineHeight = "h-[7%]";
            break;
        case 8:
            lineWidth = "lg:w-[8%]";
            lineHeight = "h-[8%]";
            break;
        case 9:
            lineWidth = "lg:w-[9%]";
            lineHeight = "h-[9%]";
            break;
        case 10:
            lineWidth = "lg:w-[10%]";
            lineHeight = "h-[10%]";
            break;
        case 11:
            lineWidth = "lg:w-[11%]";
            lineHeight = "h-[11%]";
            break;
        case 12:
            lineWidth = "lg:w-[12%]";
            lineHeight = "h-[12%]";
            break;
        case 13:
            lineWidth = "lg:w-[13%]";
            lineHeight = "h-[13%]";
            break;
        case 14:
            lineWidth = "lg:w-[14%]";
            lineHeight = "h-[14%]";
            break;
        case 15:
            lineWidth = "lg:w-[15%]";
            lineHeight = "h-[15%]";
            break;
        case 16:
            lineWidth = "lg:w-[16%]";
            lineHeight = "h-[16%]";
            break;
        case 17:
            lineWidth = "lg:w-[17%]";
            lineHeight = "h-[17%]";
            break;
        case 18:
            lineWidth = "lg:w-[18%]";
            lineHeight = "h-[18%]";
            break;
        case 19:
            lineWidth = "lg:w-[19%]";
            lineHeight = "h-[19%]";
            break;
        case 20:
            lineWidth = "lg:w-[20%]";
            lineHeight = "h-[20%]";
            break;
        case 21:
            lineWidth = "lg:w-[21%]";
            lineHeight = "h-[21%]";
            break;
        case 22:
            lineWidth = "lg:w-[22%]";
            lineHeight = "h-[22%]";
            break;
        case 23:
            lineWidth = "lg:w-[23%]";
            lineHeight = "h-[23%]";
            break;
        case 24:
            lineWidth = "lg:w-[24%]";
            lineHeight = "h-[24%]";
            break;
        case 25:
            lineWidth = "lg:w-[25%]";
            lineHeight = "h-[25%]";
            break;
        case 26:
            lineWidth = "lg:w-[26%]";
            lineHeight = "h-[26%]";
            break;
        case 27:
            lineWidth = "lg:w-[27%]";
            lineHeight = "h-[27%]";
            break;
        case 28:
            lineWidth = "lg:w-[28%]";
            lineHeight = "h-[28%]";
            break;
        case 29:
            lineWidth = "lg:w-[29%]";
            lineHeight = "h-[29%]";
            break;
        case 30:
            lineWidth = "lg:w-[30%]";
            lineHeight = "h-[30%]";
            break;
        case 31:
            lineWidth = "lg:w-[31%]";
            lineHeight = "h-[31%]";
            break;
        case 32:
            lineWidth = "lg:w-[32%]";
            lineHeight = "h-[32%]";
            break;
        case 33:
            lineWidth = "lg:w-[33%]";
            lineHeight = "h-[33%]";
            break;
        case 34:
            lineWidth = "lg:w-[34%]";
            lineHeight = "h-[34%]";
            break;
        case 35:
            lineWidth = "lg:w-[35%]";
            lineHeight = "h-[35%]";
            break;
        case 36:
            lineWidth = "lg:w-[36%]";
            lineHeight = "h-[36%]";
            break;
        case 37:
            lineWidth = "lg:w-[37%]";
            lineHeight = "h-[37%]";
            break;
        case 38:
            lineWidth = "lg:w-[38%]";
            lineHeight = "h-[38%]";
            break;
        case 39:
            lineWidth = "lg:w-[39%]";
            lineHeight = "h-[39%]";
            break;
        case 40:
            lineWidth = "lg:w-[40%]";
            lineHeight = "h-[40%]";
            break;
        case 41:
            lineWidth = "lg:w-[41%]";
            lineHeight = "h-[41%]";
            break;
        case 42:
            lineWidth = "lg:w-[42%]";
            lineHeight = "h-[42%]";
            break;
        case 43:
            lineWidth = "lg:w-[43%]";
            lineHeight = "h-[43%]";
            break;
        case 44:
            lineWidth = "lg:w-[44%]";
            lineHeight = "h-[44%]";
            break;
        case 45:
            lineWidth = "lg:w-[45%]";
            lineHeight = "h-[45%]";
            break;
        case 46:
            lineWidth = "lg:w-[46%]";
            lineHeight = "h-[46%]";
            break;
        case 47:
            lineWidth = "lg:w-[47%]";
            lineHeight = "h-[47%]";
            break;
        case 48:
            lineWidth = "lg:w-[48%]";
            lineHeight = "h-[48%]";
            break;
        case 49:
            lineWidth = "lg:w-[49%]";
            lineHeight = "h-[49%]";
            break;
        case 50:
            lineWidth = "lg:w-[50%]";
            lineHeight = "h-[50%]";
            break;
        case 51:
            lineWidth = "lg:w-[51%]";
            lineHeight = "h-[51%]";
            break;
        case 52:
            lineWidth = "lg:w-[52%]";
            lineHeight = "h-[52%]";
            break;
        case 53:
            lineWidth = "lg:w-[53%]";
            lineHeight = "h-[53%]";
            break;
        case 54:
            lineWidth = "lg:w-[54%]";
            lineHeight = "h-[54%]";
            break;
        case 55:
            lineWidth = "lg:w-[55%]";
            lineHeight = "h-[55%]";
            break;
        case 56:
            lineWidth = "lg:w-[56%]";
            lineHeight = "h-[56%]";
            break;
        case 57:
            lineWidth = "lg:w-[57%]";
            lineHeight = "h-[57%]";
            break;
        case 58:
            lineWidth = "lg:w-[58%]";
            lineHeight = "h-[58%]";
            break;
        case 59:
            lineWidth = "lg:w-[59%]";
            lineHeight = "h-[59%]";
            break;
        case 60:
            lineWidth = "lg:w-[60%]";
            lineHeight = "h-[60%]";
            break;
        case 61:
            lineWidth = "lg:w-[61%]";
            lineHeight = "h-[61%]";
            break;
        case 62:
            lineWidth = "lg:w-[62%]";
            lineHeight = "h-[62%]";
            break;
        case 63:
            lineWidth = "lg:w-[63%]";
            lineHeight = "h-[63%]";
            break;
        case 64:
            lineWidth = "lg:w-[64%]";
            lineHeight = "h-[64%]";
            break;
        case 65:
            lineWidth = "lg:w-[65%]";
            lineHeight = "h-[65%]";
            break;
        case 66:
            lineWidth = "lg:w-[66%]";
            lineHeight = "h-[66%]";
            break;
        case 67:
            lineWidth = "lg:w-[67%]";
            lineHeight = "h-[67%]";
            break;
        case 68:
            lineWidth = "lg:w-[68%]";
            lineHeight = "h-[68%]";
            break;
        case 69:
            lineWidth = "lg:w-[69%]";
            lineHeight = "h-[69%]";
            break;
        case 70:
            lineWidth = "lg:w-[70%]";
            lineHeight = "h-[70%]";
            break;
        case 71:
            lineWidth = "lg:w-[71%]";
            lineHeight = "h-[71%]";
            break;
        case 72:
            lineWidth = "lg:w-[72%]";
            lineHeight = "h-[72%]";
            break;
        case 73:
            lineWidth = "lg:w-[73%]";
            lineHeight = "h-[73%]";
            break;
        case 74:
            lineWidth = "lg:w-[74%]";
            lineHeight = "h-[74%]";
            break;
        case 75:
            lineWidth = "lg:w-[75%]";
            lineHeight = "h-[75%]";
            break;
        case 76:
            lineWidth = "lg:w-[76%]";
            lineHeight = "h-[76%]";
            break;
        case 77:
            lineWidth = "lg:w-[77%]";
            lineHeight = "h-[77%]";
            break;
        case 78:
            lineWidth = "lg:w-[78%]";
            lineHeight = "h-[78%]";
            break;
        case 79:
            lineWidth = "lg:w-[79%]";
            lineHeight = "h-[79%]";
            break;
        case 80:
            lineWidth = "lg:w-[80%]";
            lineHeight = "h-[80%]";
            break;
        case 81:
            lineWidth = "lg:w-[81%]";
            lineHeight = "h-[81%]";
            break;
        case 82:
            lineWidth = "lg:w-[82%]";
            lineHeight = "h-[82%]";
            break;
        case 83:
            lineWidth = "lg:w-[83%]";
            lineHeight = "h-[83%]";
            break;
        case 84:
            lineWidth = "lg:w-[84%]";
            lineHeight = "h-[84%]";
            break;
        case 85:
            lineWidth = "lg:w-[85%]";
            lineHeight = "h-[85%]";
            break;
        case 86:
            lineWidth = "lg:w-[86%]";
            lineHeight = "h-[86%]";
            break;
        case 87:
            lineWidth = "lg:w-[87%]";
            lineHeight = "h-[87%]";
            break;
        case 88:
            lineWidth = "lg:w-[88%]";
            lineHeight = "h-[88%]";
            break;
        case 89:
            lineWidth = "lg:w-[89%]";
            lineHeight = "h-[89%]";
            break;
        case 90:
            lineWidth = "lg:w-[90%]";
            lineHeight = "h-[90%]";
            break;
        case 91:
            lineWidth = "lg:w-[91%]";
            lineHeight = "h-[91%]";
            break;
        case 92:
            lineWidth = "lg:w-[92%]";
            lineHeight = "h-[92%]";
            break;
        case 93:
            lineWidth = "lg:w-[93%]";
            lineHeight = "h-[93%]";
            break;
        case 94:
            lineWidth = "lg:w-[94%]";
            lineHeight = "h-[94%]";
            break;
        case 95:
            lineWidth = "lg:w-[95%]";
            lineHeight = "h-[95%]";
            break;
        case 96:
            lineWidth = "lg:w-[96%]";
            lineHeight = "h-[96%]";
            break;
        case 97:
            lineWidth = "lg:w-[97%]";
            lineHeight = "h-[97%]";
            break;
        case 98:
            lineWidth = "lg:w-[98%]";
            lineHeight = "h-[98%]";
            break;
        case 99:
            lineWidth = "lg:w-[99%]";
            lineHeight = "h-[99%]";
            break;
        case 100:
            lineWidth = "lg:w-[100%]";
            lineHeight = "h-[100%]";
            break;

        default:
            var lineWidth = "lg:w-[0%]";
            var lineHeight = "h-[0%]";
            break;
    }

    return (
    <div className="relative flex flex-col lg:flex-row p-4 items-center">
        <div className="flex flex-col lg:flex-row h-full lg:h-[208px] w-[100%] sm:w-[60%] md:w-[50%] lg:w-full">

            {/* Timeline – Dark line (for complete timeline) */}
            <div className={`absolute h-full lg:h-1 w-1 lg:w-full rounded-lg bg-primary-main left-[50%] lg:left-0 top-0 lg:top-[50%] transform -translate-x-1/2 lg:-translate-x-0 -translate-y-0 lg:-translate-y-1/2 `} />

            {/* Timeline – Bright line (for 'done' milestones) */}
            <div className={`absolute ${lineHeight} lg:h-1 w-1 ${lineWidth} rounded-lg bg-secondary left-[50%] lg:left-0 top-0 lg:top-[50%] transform -translate-x-1/2 lg:-translate-x-0 -translate-y-0 lg:-translate-y-1/2 `} />

            {/* Milestones */}
            <div className="flex flex-col lg:flex-row h-full w-full space-y-24 lg:space-y-0">
                {React.Children.map(children, (milestone, index) => {
                    return (
                        <div className={`relative group flex flex-row lg:flex-col h-full w-full ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>

                            {milestone}
                                        
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
};

export { Timeline, Milestone };