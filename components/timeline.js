import React from "react";
import Container from "./container";

export default function Timeline(props) {
  const { data } = props;

  return (
    <>

    <Container>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-0">
        <div className="py-3 w-full px-2 sm:px-0 sm:max-w-6xl sm:mx-auto ">

          <div className="relative text-gray-700 antialiased text-sm font-semibold">

            <div className="hidden sm:block w-1 bg-yellow-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {data.events.map((item, index) => (
              <TimelineEvent key={index} index={index} icon={item.icon} date={item.date} title={item.title} bullets={item.bullets}>
                {item.desc}
              </TimelineEvent>
            ))}

          </div>

        </div>
      </div>
    </Container>
  </>
);
}

function TimelineEvent(props) {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center">
        <div className={`${props.index % 2 == 0 ? "flex justify-start w-full mx-auto items-center" : "flex justify-end w-full mx-auto items-center" }`}>
          <div className={`${props.index % 2 == 0 ? "w-full sm:w-1/2 sm:pr-8" : "w-full sm:w-1/2 sm:pl-8" }`}>

            <div className={`${props.index == 0 ? "block p-6 rounded-lg mb-2 bg-gray-100 shadow-lg border-2 border-yellow-400 dark:bg-trueGray-800" : "opacity-70 block p-6 rounded-lg mb-2 bg-gray-100 shadow-lg dark:bg-trueGray-800" }`}>
              <div className="flex justify-between mb-4">
                <p className="font-bold text-sm dark:text-yellow-400">{props.title}</p>
                <p className="font-bold text-sm dark:text-yellow-400">{props.date}</p>
              </div>
              <ul role="list" className="marker:text-yellow-400 list-disc pl-5 space-y-3 text-white-400">
                {props.bullets.map((item, index) => (
                  <li key={index} className="font-medium text-gray-800 dark:text-gray-200">{item}</li>
                ))}
                {/* <button type="button" className="inline-block px-4 py-1.5 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button> */}
              </ul>
            </div>

          </div>
        </div>
        <div className="rounded-full bg-yellow-400 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          {React.cloneElement(props.icon, {
            className: "w-6 h-6 text-white",
          })}
        </div>
      </div>
    </div>
  );
}
