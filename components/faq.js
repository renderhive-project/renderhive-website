import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-yellow-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-yellow-400`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Where can I download and use the Renderhive software?",
    answer:
      "This is not possible yet. Renderhive is currently a project under development. Please have a look at our development roadmap above and our Github repository for more information on the current status of the project.",
  },
  {
    question: "Will Renderhive only support Blender?",
    answer:
      "Yes, this crowdrendering platform will be specifically designed for Blender. Other 3D computer graphics software will not be supported at release time. However, the project is open-source and the underlying principles can be applied to other renderers as well. So, let's see where the future leads us ...",
  },
  {
    question: "Which render engines will be supported?",
    answer:
      "At the beginning, Renderhive will only support Blender's native render engines EEVEE and Cycles. In the future we will explore the implementation of third-party engines. However, since the engine needs to be present on render nodes as well, the implementation will mainly depend on how many render nodes can support a specific engine.",
  },
  {
    question: "What will the Renderhive software and rendering cost?",
    answer:
      "All of the software provided by this project is open-source and, thus, free to use. Render prices will not be defined by the project but by each individual node that uses the Renderhive software. That means, that each render node can specifiy the price for which it offers its render power. On the other hand, each client node can defined at what maximum price it wants its Blender project to be rendered. A render job will only be executed, if the prices of at least one render node and the client node match. This way, a free market mechanism is created where the render price is continously defined by supply and demand of render power.",
  },
  {
    question: "Are there any other fees charged by the Renderhive project?",
    answer:
      "The Renderhive project itself does not charge any fees for own profit. However, we have to pass the (small) fees of the specific blockchain and web3 services our project relies on to each Renderhive node. For example, the Hedera services charges network fees to its users. Depending on the specific service functions called, these fees are in the range of a fraction of a cent (e.g., 0.0001 USD for a simple payment transaction) to a few cents (e.g., 0.05 USD for a smart contract call or minting of a NFT). These fees are extremely low and used by Hedera to keep the network safe and to compensate the computers that run the Hedera Hashgraph algorithms for their expenses.",
  },
  {
    question: "So, you really don't make any profit with this project?",
    answer:
      "The Renderhive project is not focussed on making large amounts of money. In order to compensate the operational expenses and to pay for required infrastructure (e.g., this website), the Renderhive project will operate own render nodes in the same way (and with the same rights) as anyone. Furthermore, the project will rely on voluntary donations by users and organizations and will explore Hedera's native, risk-free staking mechanism to generate interest from the user funds which are temporarily escrowed in the smart contracts.",
  },
  {
    question: "What about the copyrights for my art?",
    answer:
      "This is an important question, if you send you Blender files to external render services. On Renderhive, your artworks are and remain your intellectual property alone no matter who renders it. The Renderhive project makes use of the immutable blockchain technology to protect this intellectual property: Whenever you send a Blender file to the renderhive, a unique fingerprint of this file (i.e., the IPFS content identifier) is stored on the Hedera blockchain. That way, you can always proof that you owned the Blender file and, thus, the art at this specific date and time. This allows you to take action against copyright infringements with an independently verifiable, immutable proof of your copyright ownership if anybody tries to steal your art. Even, if Renderhive would suddenly disappear, the file fingerprint would still remain on the blockchain.",
  },
  {
    question: "This sounds cool! How can I support the project? ",
    answer:
      "Thank you! Glad you ask! Renderhive strives to be an open source, community project. So, there are multiple options to support it: From simple donations over advertisement to coding. Any help is welcome! Be creative and please don't hesitate to get in contact. If you are a developer, have a look at the Github repository to see which issues need to be solved and feel free to get involved or open a new issue to discuss your own ideas.",
  },
];
