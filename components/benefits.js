import React from "react";
import Container from "./container";

import {
  BiNetworkChart,
} from "react-icons/bi";

import {
  IoIosPricetags,
  IoLogoGithub,
} from "react-icons/io";


export default function Benefits(props) {
  const { data } = props;

  return (
    <>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <div className="flex gap-4 items-start flex-col ">
                  <span className="flex items-center justify-center flex-shrink-0 mt-1 bg-yellow-400 rounded-md w-11 h-11 ">
                      {React.cloneElement(<BiNetworkChart/>, {
                        className: "w-7 h-7 text-yellow-50",
                      })}
                  </span>
                  <div>
                      <h3 className="font-semibold text-xl"> Fully Decentralized</h3>
                      <p className="mt-1">
                          Renderhive is not a cloud service. It's a crowdservice! The storage capacity and rendering power of the hive is distributed on the computers of all participating Blender users – for a maximum of availability. This is possible by the underlying blockchain technology of Hedera Hashgraph and IPFS / Filecoin.
                      </p>
                  </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <div className="flex gap-4 items-start flex-col ">
                  <span className="flex items-center justify-center flex-shrink-0 mt-1 bg-yellow-400 rounded-md w-11 h-11 ">
                      {React.cloneElement(<IoIosPricetags/>, {
                        className: "w-7 h-7 text-yellow-50",
                      })}
                  </span>
                  <div>
                      <h3 className="font-semibold text-xl">Fair & Transparent Pricing</h3>
                      <p className="mt-1">
                          Render prices are determined by you and all the other members of the hive. We just pass the small fees of the underlying blockchain services and do not charge any fees for our own profit. This ensures that you get a fair price at any time and that your render job is executed only under your terms.
                      </p>
                  </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <div className="flex gap-4 items-start flex-col ">
                  <span className="flex items-center justify-center flex-shrink-0 mt-1 bg-yellow-400 rounded-md w-11 h-11 ">
                      {React.cloneElement(<IoLogoGithub/>, {
                        className: "w-7 h-7 text-yellow-50",
                      })}
                  </span>
                  <div>
                      <h3 className="font-semibold text-xl">Open Source</h3>
                      <p className="mt-1">
                          Renderhive is a transparent, open source project. The software itself will be free and provide a free market for buying and selling render power. This project fully supports Blender's vision that <i>"Everyone should be free to create 3D CG content, with free technical and creative production means and free access to markets.</i>"
                      </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
