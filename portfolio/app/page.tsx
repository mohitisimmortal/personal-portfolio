'use client';
import Web2Projects from "@/components/Web2Projects";
import Web3Projects from "@/components/Web3Projects";
import WebSwitch from "@/components/WebSwitch";
import { useState } from "react";

export default function Home() {
  const [isWeb3, setIsWeb3] = useState(false);

  const handleToggle = (isWeb3Active: boolean) => {
    setIsWeb3(isWeb3Active);
  };
  return (
    <main className="pl-4 pr-5 text-gr text-pr sm:pl-10 sm:pr-10 xl:pl-14 xl:pr-14">

      <div className="h-[40rem] flex justify-center flex-col xl:h-[40rem]">
        <p className=" sm:text-lg md:text-2xl">
          hello! I'm Mohit
        </p>
        {/* <mp/> */}

        <h1 className="font-normal text-white leading-[2.8rem] text-[3rem] sm:text-[4rem] sm:leading-[3.8rem] md:text-8xl">
          Full Stack<br />Developer
        </h1>
        <p className="text-sm mt-2 sm:text-base md:text-xl md:mt-4 xl:mt-6">
          with 1.5+ yrs of experience
        </p>


        <WebSwitch onToggle={handleToggle} />
      </div>


      {/* expertise */}
      <div className=" mb-2 sm:text-lg md:text-2xl">/expertise in</div>

      {isWeb3 ? (
        <p className="text-white font-light sm:text-lg md:text-2xl">
          Solidity, Ethereum, Chainlink Oracles, 
          <br />
          Ethers.js, Hardhat, Foundry,
          <br />
          Next.js, React.js, Recoil,
          <br />
          JavaScript, TypeScript
        </p>
      ) : (
        <p className="text-white font-light sm:text-lg md:text-2xl">
          Next.js, React.js, Express.js, Node.js,
          <br />
          MongoDB, Recoil, Git, TailwindCSS,
          <br />
          JavaScript, TypeScript
          <br />
          HTML, CSS
        </p>
      )}

      {/* projects */}
      <div className=" mt-40 mb-3 sm:text-lg md:text-2xl xl:mb-4">/projects</div>
      {isWeb3?<Web3Projects/>:<Web2Projects/>}




      {/* connect */}
      <div className=" mt-40 mb-4 xl:mb-6 md:text-2xl">/connect with me</div>

      <a href="https://x.com/mohitisimmortal" target='_blank'><i className="fa-brands fa-x-twitter text-white text-3xl mr-4 md:mr-7 xl:mr-8 md:text-4xl"></i></a>
      <a href="https://www.linkedin.com/in/mohitisimmortal/" target='_blank'><i className="fa-brands fa-linkedin text-white text-3xl mr-4 md:mr-7 xl:mr-8 md:text-4xl"></i></a>
      <a href="https://github.com/mohitisimmortal" target='_blank'><i className="fa-brands fa-github text-white text-3xl md:text-4xl"></i></a>
      <p className="text-white text-lg mt-2 mb-20 md:text-3xl md:mt-4 xl:mt-5">mohitisimmortal@gmail.com</p>
    </main>
  );
}
