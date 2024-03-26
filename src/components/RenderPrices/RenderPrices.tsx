import React, { useEffect, useState } from 'react';
import { Area, ComposedChart, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface TooltipProps {
    active?: boolean;
    payload?: { value: string }[];
    label?: string;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        // <div className="p-2 rounded-xl bg-primary-main border border-primary-navy opacity-80 text-main text-left">
        //   <p className="text-xs sm:text-sm text-secondary">{`Render request: ${ Number(payload[0].value).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) } BBh`}</p>
        //   <p className="text-xs sm:text-sm text-light">{`Render offer: ${ Number(payload[1].value).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) } BBh`}</p>
        //   <p className="text-xs sm:text-sm text-white">{`Render price: ${ Number(label).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) } USD`}</p>
        // </div>

        <div className="flex flex-row p-2 space-x-2 rounded-xl bg-primary-main border border-primary-navy opacity-80 text-main text-left">
            <div className="w-1/2 min-w-max  h-full overflow-visible whitespace-nowrap">
                <p className="text-xs sm:text-sm text-secondary">Request</p>
                <p className="text-xs sm:text-sm text-light">Offer</p>
                <p className="text-xs sm:text-sm text-white">Price</p>
            </div>
            <div className="w-1/2 min-w-max h-full overflow-visible whitespace-nowrap">
                <p className="text-xs sm:text-sm text-secondary">{`: ${ Number(payload[0].value).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) } BBh`}</p>
                <p className="text-xs sm:text-sm text-light">{`: ${ Number(payload[1].value).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) } BBh`}</p>
                <p className="text-xs sm:text-sm text-white">{`: ${ Number(label).toLocaleString('en-US', { minimumFractionDigits: 5, maximumFractionDigits: 5 }) } USD per BBh`}</p>
            </div>
        </div>
      );
    }
  
    return null;
};

interface DataItem {
    price: number;
    power: number;
    type: 'request' | 'offer' | string;
}

interface Data {
    price: number;
    bidPower: number;
    askPower: number;
}

interface RenderPricesProps {
    data?: DataItem[];
    accumlationStep?: number;
}

const RenderPrices: React.FC<RenderPricesProps> = ({ data }) => {
    const [mergedData, setMergedData] = useState<Data[]>([]);
    const [maxPrice, setMaxPrice] = useState(0);
    const [maxPower, setMaxPower] = useState(0);
    const xAxisResolution = 0.00025;

    // when the component is initialized, generate the data
    useEffect(() => {
        const generatedData = generateData(0.00001);
        const bidData = ((data || generatedData).filter(item => item.type === 'request'));
        const askData = ((data || generatedData).filter(item => item.type === 'offer'));

        bidData.unshift({ price: 0, power: 0, type: 'request' });
        askData.push({ price: Math.round(parseFloat(Math.max(...askData.map(item => item.price)).toFixed(5)) / xAxisResolution) * xAxisResolution, power: 0, type: 'offer' });

        const allPrices = Array.from(new Set([...bidData.map(item => item.price), ...askData.map(item => item.price)]));

        const newMergedData = allPrices.map(price => {
            const bidItem = bidData.find(item => item.price === price);
            const askItem = askData.find(item => item.price === price);

            return {
                price: price,
                bidPower: bidItem ? bidItem.power : 0,
                askPower: askItem ? askItem.power : 0,
            };
        });

        setMergedData(newMergedData);

        const newMaxPrice = Math.max(...newMergedData.map(item => item.price));
        const newMaxPower = Math.max(...newMergedData.map(item => Math.max(item.bidPower, item.askPower)));

        setMaxPrice(newMaxPrice);
        setMaxPower(newMaxPower);

    }, []);

    // handle window resize
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const margin = windowWidth < 1024 ? { left: -55 } : { left: 20, right: 80};
    

    return (
        <div className="relative w-full h-full">

            {/* Axis labels */}
            <div className="absolute flex flex-row w-full h-full text-xs lg:text-base text-mid">
                <div className="absolute flex w-1/2 h-full items-start justify-start text-mid -top-[20px] left-[2px] lg:-top-[32px] lg:left-[64px]">
                <span className="mr-1 font-bold">BBh</span>
                </div>
                <div className="absolute flex w-1/2 h-full items-end justify-end -top-[35px] -right-[1px] lg:-top-[18px] lg:right-[35px]">
                    <span className="font-bold">USD</span>
                </div>
            </div>

            {/* Graph labels */}
            <div className="absolute flex flex-row -top-0 w-full h-full text-sm sm:text-base py-10 lg:py-10">
                <div className="flex w-[50%] h-full items-end justify-start ml-12 sm:ml-16 lg:ml-36 text-secondary text-left">
                <span className="hidden sm:block mr-1">Render</span>Requests
                </div>
                <div className="flex w-[50%] h-full items-end justify-end mr-11 sm:mr-14 lg:mr-36 text-light text-right">
                    <span className="hidden sm:block mr-1">Render</span>Offers
                </div>
            </div>

            {/* Graph */}
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={mergedData} margin={margin}>

                    {/* define gradients for the area curves */}
                    <defs>
                        <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ED9C11" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#ED9C11" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorOffers" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8F92A1" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8F92A1" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    
                    {/* plot the data */}
                    <XAxis 
                        dataKey="price" 
                        tickFormatter={(value) => value.toLocaleString('en-US', { minimumFractionDigits: 5, maximumFractionDigits: 5 })}
                        ticks={generateTicks(0, Math.round(parseFloat(maxPrice.toFixed(5)) / xAxisResolution) * xAxisResolution, xAxisResolution)} 
                        tickLine={false}
                        tick={{ fill: '#9CA3AF' }}
                        stroke="#26323F"
                        strokeWidth={4}
                        dy={5} 
                        className='text-xs md:text-sm'

                        padding={{ left: 35, right: 35 }}
                    >
                        <Label value="Price / USD" position="bottom"/>
                    </XAxis>
                    <YAxis 
                        name="Cumulative Render Power in BBh" 
                        tickFormatter={(value) => value.toLocaleString('en-US')} 
                        ticks={generateTicks(0, maxPower, 25000)} 
                        tickLine={false}
                        tick={{ fill: '#9CA3AF' }}
                        stroke="#26323F"
                        strokeWidth={4}
                        dx={-5}
                        className='text-xs md:text-sm'
                        // padding={{ top: 30, bottom: 30 }}
                    />
                    <Tooltip content={<CustomTooltip />} />

                    {/* Render Requests */}
                    <Area type="monotone" dataKey="bidPower" stroke="#ED9C11" fill="url(#colorRequests)" name="Requests"/>

                    {/* Render Offers */}
                    <Area type="monotone" dataKey="askPower" stroke="#8F92A1" fill="url(#colorOffers)" name="Offers"/>
                </ComposedChart>
            </ResponsiveContainer>
                
            {/* Disclaimer */}
            <div className="flex rounded-xl px-2 py-8 items-center justify-center text-sm sm:text-sm text-secondary">
                <i>Displayed numbers are random values for illustration purposes until the network launches.</i>
            </div>
        </div>
    );
};

/// skewnormal(..) returns a random number from the normal distribution that has
/// been streched and offset to range from `min` to `max`, skewed with `skew`,
/// and truncated to `sigma` standard deviations. See https://stackoverflow.com/a/74258559/213246
const skewedNormalDist = (min: number, max: number, skew: number, sigma: number) => {
    /// normal() returns a random number from the standard normal distribution.
    /// Uses the Box-Muller transform.
    const normal = () => Math.sqrt(-2.0 * Math.log(Math.random())) * Math.cos(2.0 * Math.PI * Math.random());

    /// normal01(..) returns normally distributed random number, whose range is
    /// truncated at `sigma` standard deviations and shifted to interval `[0, 1]`.
    const normal01 = (sigma: number) => {
        while (true) {
        let num = normal() / (sigma + 0.0) + 0.5; // translate to [0, 1]
        if (0 <= num && num <= 1) return num;     // ok if in range, else resample
        }
    }

    var num = normal01(sigma);
    num = Math.pow(num, skew) // skew
    num *= max - min // stretch to fill range
    num += min // offset to min
    return num;
}

const generateCounts = (numSamples: number, decimals: number, min: number, max: number, skew: number, sigma: number) => {
    const counts: Record<number, number> = {};

    for (let i = 0; i < numSamples; i++) {
        const num = skewedNormalDist(min, max, skew, sigma);
        const roundedNum = parseFloat(num.toFixed(decimals));

        if (counts[roundedNum]) {
            counts[roundedNum]++;
        } else {
            counts[roundedNum] = 1;
        }
    }

    return counts;
};

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateData = (step: number) => {
    const stdDev = 5; // Define the standard deviation

    // generate a normal distribution for the render offers and requests
    // where the data has the form of counts per price (i.e., how many times a certain price occurs in the data set)
    const bidNormDist = generateCounts(getRandomInt(100, 750), 5, 0, 0.0025, 1, stdDev);
    const askNormDist = generateCounts(getRandomInt(26, 1000), 5, 0, 0.0025, 1, stdDev);

    // Transform counts into an array of objects
    const bidData = Object.entries(bidNormDist).map(([price, count]) => ({
        price: parseFloat(price),
        power: count * 10,
        type: 'request'
    }));

    // Transform counts into an array of objects
    const askData = Object.entries(askNormDist).map(([price, count]) => ({
        price: parseFloat(price),
        power: count * 10,
        type: 'offer'
    }));

    // sort the bid date by price
    bidData.sort((a, b) => b.price - a.price);
    askData.sort((a, b) => a.price - b.price);

    // create a new array using the defined step number in the range from 
    // the minimum price of the bidData to the maximum price of the askData
    // using a for loop to iterate over the range
    const accBidData = [];
    const accAskData = [];
    for (let price = 0; price <= askData[askData.length - 1].price; price += step) {
        var accBidPower = 0;
        var accAskPower = 0;

        bidData.forEach((_, index) => {
            accBidPower += bidData.slice(index).reduce((acc, cur) => {
                if (cur.price > price) {
                    return acc + cur.power;
                } else {
                    return acc;
                }
            }, 0);
        });
        
        accBidData.push({
            price: parseFloat(price.toFixed(5)),
            power: accBidPower,
            type: 'request'
        });


        askData.forEach((_, index) => {
            accAskPower += askData.slice(index).reduce((acc, cur) => {
                if (cur.price < price) {
                    return acc + cur.power;
                } else {
                    return acc;
                }
            }, 0);
        });
        
        accAskData.push({
            price: parseFloat(price.toFixed(5)),
            power: accAskPower,
            type: 'offer'
        });
    }
    



    // accumulate the power for each price range and type
    // using the following procedure:
    // 1. start from the highest price
    // 2. Sum the power of all elements in the array that have a lower price than the current element
    // 3. add the accumulated power to the current element
    // 4. repeat for the next element

    // Reverse the array to start from the highest price
    // bidData.reverse();

    // bidData.forEach((item, index) => {
    //     item.power += bidData.slice(index).reduce((acc, cur) => acc + cur.power, 0);
    // });

    // // // Reverse the array back to the original order
    // bidData.reverse();


    // accumulate the power for each price range and type
    // using the following procedure:
    // 1. start from the lowest price
    // 2. Sum the power of all elements in the array that have a lower price than the current element
    // 3. add the accumulated power to the current element
    // 4. repeat for the next element

    // Reverse the array to start from the highest price
    // askData.forEach((item, index) => {
    //     item.power += askData.slice(index).reduce((acc, cur) => acc + cur.power, 0);
    // });


    return [...accBidData, ...accAskData];
};

function generateTicks(min: number, max: number, step: number): number[] {
    const ticks = [];
    const length = Math.floor((max - min) / step);
    const decimalPlaces = (step.toString().split('.')[1] || []).length;
    for (let i = 0; i <= length; i++) {
        const value = min + i * step;
        ticks.push(Number(value.toFixed(decimalPlaces)));
    }
    return ticks;
}

export { RenderPrices };