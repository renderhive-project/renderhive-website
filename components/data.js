import {
  FaAppStoreIos,
  FaFileContract,
} from "react-icons/fa";

import {
  GiBee,
  GiHoneycomb,
} from "react-icons/gi";

import {
  HiUserGroup,
} from "react-icons/hi";

import {
  IoServerOutline,
  IoDesktopOutline,
  IoCodeSlash,
  IoIosAppstore,
} from "react-icons/io5";

import {
  SiIpfs,
} from "react-icons/si";

const FileCoinIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height="40" width="40" fill="currentColor">
      <path fill="#fff" d="M21.9,17.6l-0.6,3.2l5.7,0.8l-0.4,1.5L21,22.3c-0.4,1.3-0.6,2.7-1.1,3.9c-0.5,1.4-1,2.8-1.6,4.1
      	c-0.8,1.7-2.2,2.9-4.1,3.2c-1.1,0.2-2.3,0.1-3.2-0.6c-0.3-0.2-0.6-0.6-0.6-0.9c0-0.4,0.2-0.9,0.5-1.1c0.2-0.1,0.7,0,1,0.1
      	c0.3,0.3,0.6,0.7,0.8,1.1c0.6,0.8,1.4,0.9,2.2,0.3c0.9-0.8,1.4-1.9,1.7-3c0.6-2.4,1.2-4.7,1.7-7.1v-0.4L13,21.1l0.2-1.5l5.5,0.8
      	l0.7-3.1l-5.7-0.9l0.2-1.6l5.9,0.8c0.2-0.6,0.3-1.1,0.5-1.6c0.5-1.8,1-3.6,2.2-5.2s2.6-2.6,4.7-2.5c0.9,0,1.8,0.3,2.4,1
      	c0.1,0.1,0.3,0.3,0.3,0.5c0,0.4,0,0.9-0.3,1.2c-0.4,0.3-0.9,0.2-1.3-0.2c-0.3-0.3-0.5-0.6-0.8-0.9C26.9,7.1,26,7,25.3,7.7
      	c-0.5,0.5-1,1.2-1.3,1.9c-0.7,2.1-1.2,4.3-1.9,6.5l5.5,0.8l-0.4,1.5L21.9,17.6"/>
    </svg>
  )
}

const HederaIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500" width="40" height="40">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path fill="#fff" strokeWidth="2" stroke="white" d="M1758.12,1790.62H1599.38V1453.13H900.62v337.49H741.87V696.25H900.62v329.37h698.76V696.25h158.75Zm-850-463.75h698.75V1152.5H908.12Z"/>
        </g>
      </g>
    </svg>
  )
}

export default {FileCoinIcon, HederaIcon};


import principal_node_types from "../public/img/principals_node_types.png";
import principal_web3_technologies from "../public/img/principals_web3_technologies.png";
import principal_smart_contracts from "../public/img/principals_smart_contracts.png";

const principalOne = {
  title: "Node Types",
  desc: "The renderhive consists of two different node types that fulfill different tasks in the Renderhive network. Each user can transition between the roles at any time and no node is more important or has more rights than the other. All nodes are treated equally and according to the same rules.",
  image: principal_node_types,
  spline: "",
  bullets: [
    {
      title: "Render Nodes",
      desc: "They are the workers in our hive. They do the render work. Render nodes are Blender users who offer their computer's render power for a self-chosen price to the client nodes. Whenever the node is online, it takes part in the render job distribution and renders frames or parts of a frame.",
      icon: <GiBee />,
    },
    {
      title: "Client Nodes",
      desc: "They are the creatives in our hive. They provide the Blender files and artworks to be rendered. Client nodes submit render jobs to the renderhive and request rendering for a given price. As soon as enough render nodes with matching price offers are available, the render job will be processed and the client node pays for the final result.",
      icon: <GiHoneycomb />,
    },
  ],
};

const principalTwo = {
  title: "Built on Web3 Technologies",
  desc: "While honey bees communicate via pheromones and waggle dances, the nodes in our renderhive rely on distributed ledger technologies – also known as blockchains. They make sure that all the nodes in the hive have a common understanding of who renders what part of a specific frame and at which price. The project relies on the following technologies and web3 services.",
  image: principal_web3_technologies,
  spline: "",
  bullets: [
    {
      title: "Hedera Hashgraph",
      desc: "Hedera's distributed ledger technology offers an enterprise-grade, carbon-negative technology stack and is built with a sustainable long-term vision. It offers low, predictable network fees and its unique consensus mechanism ensures a fair, verifiable ordering of our render jobs and a secure payment system. It's native cryptocurrency, hbar (ħ), is used as the currency in our hive to buy and sell render power.",
      icon: <HederaIcon />,
    },
    {
      title: "InterPlanetary File System (IPFS)",
      desc: "The InterPlanetary File System is a distributed data storage and transfer protocol. Its unique content-addressing approach locates files not by their storage location, but by their content. This makes sure that files are accessible by all nodes and guarentees that all nodes get the exact same file. In connection with Hedera Hashgraph, it also provides copyright proofs for all Blender files submitted to our renderhive.",
      icon: <SiIpfs />,
    },
    {
      title: "Filecoin",
      desc: "Filecoin is a blockchain that is build on top of the IPFS. It adds an incentive system to IPFS, which enables a verifiable and redundant long-term storage of files by paying nodes for storing the data. Basically, we utilize it as the 'honeycombs' in our hive, where important data is stored until it's needed by the nodes.",
      icon: <FileCoinIcon />,
    },
  ],
};

const principalThree = {
  title: "A Hive Without Queen",
  desc: "Unlike conventional render farms, the renderhive is not coordinated by a central authority or middle-man that mediates between the render and client nodes with centralized servers. It is a peer-to-peer network that is managed by rules written into the code of the decentralized Renderhive Service App and the project's smart contracts.",
  image: principal_smart_contracts,
  spline: "",
  bullets: [
    {
      title: "Renderhive Service App",
      desc: "The Renderhive Service App is the software that is running on the computer of each render node and client node. It manages the local functions of the node and provides a local web front-end that each user can access from their web browser. It is open source so everyone can check that it is safe and has no backdoors.",
      icon: <FaAppStoreIos />,
    },
    {
      title: "Smart Contracts",
      desc: "Smart contracts are one of the most exciting pieces of web3 technologies. They are small, immutable computer programs that run on a blockchain. These contracts execute automatically if certain verifiable conditions are met. For example, the renderhive's smart contract manages the payment flows between the render nodes and client nodes. Client nodes transfer money to the smart contract when they submit a job. The smart contract only pays the render nodes if they deliver the render results. Since noone except you – not even the developers – have access to the funds on the smart contract, the money is safe by design.",
      icon: <FaFileContract />,
    },
  ],
};


const timeline = {
  events: [
    {
      date: "Q4 / 2022",
      title: "Milestone 1",
      bullets: ["Drafting of the project's whitepaper", "Create a first project landing page", "Create basic code structure & repositories", "Basic implementation of Hedera service calls"],
      icon: <IoCodeSlash />,
    },
    {
      date: "Q1 / 2023",
      title: "Milestone 2",
      bullets: ["Publish project whitepaper", "Implementation of the node configurations", "Implementation of a local IPFS node", "Implementation of a Filecoin service", "Implementation of an internal render job management", "Implementation of basic rendering procedures"],
      icon: <IoCodeSlash />,
    },
    {
      date: "Q2 / 2023",
      title: "Milestone 3",
      bullets: ["Implementation of basic file types (e.g., render offers, render requests)", "Smart contract development", "Implementation of the smart contract calls", "Re-design of the landing page & website"],
      icon: <IoCodeSlash />,
    },
    {
      date: "Q3 / 2023",
      title: "Milestone 4",
      bullets: ["Implementation of the render job distribution algorithm", "Implementation of the render result verification mechanism", "Create basic, local web front end", "Create the full project website"],
      icon: <IoCodeSlash />,
    },
    {
      date: "Q4 / 2023",
      title: "Milestone 5",
      bullets: ["Optimization of the render job distribution algorithm", "Optimization of the rendering process", "Extend the front end with required forms and status pages"],
      icon: <IoDesktopOutline />,
    },
    {
      date: "Q1 / 2024",
      title: "Milestone 6",
      bullets: ["Start of the closed beta phase", "Onboarding of the first 25 external render nodes", "Onboarding of the first 50 to 100 client nodes"],
      icon: <HiUserGroup />,
    },
  ],
};

export { principalOne, principalTwo, principalThree, timeline };
