'use client';
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
          with 1.5+ yrs of freelancing experience
        </p>


        <WebSwitch onToggle={handleToggle} />
      </div>


      {/* expertise */}
      <div className=" mb-2 sm:text-lg md:text-2xl">/expertise in</div>

      {isWeb3 ? (
        <p className="text-white font-light sm:text-lg md:text-2xl">
          Solidity, Ethereum, Chainlink, Hardhat
          <br />
          Ethers.js, Web3.js, Security Audits,
          <br />
          Redux, Recoil, Git, TailwindCSS,
          <br />
          Next.js, React.js, JavaScript
        </p>
      ) : (
        <p className="text-white font-light sm:text-lg md:text-2xl">
          Next.js, React.js, Express.js, Node.js,
          <br />
          PostgreSQL, MongoDB, PrismaORM,
          <br />
          Redux, Recoil, Git, TailwindCSS,
          <br />
          HTML, CSS, JavaScript
        </p>
      )}

      {/* projects */}
      <div className=" mt-40 mb-3 sm:text-lg md:text-2xl xl:mb-4">/projects</div>
      {/* project-1 */}
      <div className="mb-5 xl:mb-8 project p-4 md:px-6 md:py-6 border rounded-lg border-[#989898] sm:max-w-[375px] md:text-2xl md:max-w-[500px] xl:max-w-[700px]">
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl">
          Ether Watches
        </h3>
        <p className="text-sm mb-4 md:text-lg md:mb-6 xl:text-xl xl:mb-10">A Watch Ecommerce store</p>
        <p className="">-MERN Stack</p>
        <p className="">-JavaScript</p>
        <p className="mb-2 md:mb-5 xl:mb-8">-Recoil for State Management</p>
        <a href="https://etherwatches.vercel.app/" target="_blank" className="px-3 py-1 text-base md:text-xl border rounded-lg mr-2 hover:bg-white hover:text-black border-[#989898]">Live -{">"} </a>
        <a href="https://github.com/mohitisimmortal/ether-watches" target="_blank" className="px-3 py-1 text-base md:text-xl border rounded-lg hover:bg-white hover:text-black border-[#989898]">Code -{">"} </a>
      </div>
      {/* project-2 */}
      {isWeb3 ? (
        <>
          <div className="mb-5 project p-4 md:px-6 md:py-6  border rounded-lg border-[#989898] sm:max-w-[375px] md:text-2xl md:max-w-[500px] xl:max-w-[700px]">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              Minimal Draw
            </h3>
            <p className="text-sm mb-4 md:text-lg md:mb-6 xl:text-xl xl:mb-10">A Decentralized rewards Distribution system</p>
            <p className="">-Solidity</p>
            <p className="">-Next.js frontend</p>
            <p className="">-Testing with Hardhat</p>
            <p className="mb-2 md:mb-5 xl:mb-8">-Chainlink keepers for Automation</p>
            <a target="_blank" href="https://minimaldraw.vercel.app/" className="px-3 py-1 text-base md:text-xl border rounded-lg mr-2 hover:bg-white hover:text-black border-[#989898]">Live -{">"} </a>
            <a target="_blank" href="https://github.com/mohitisimmortal/minimaldraw" className="px-3 py-1 text-base md:text-xl border rounded-lg hover:bg-white hover:text-black border-[#989898]">Code -{">"} </a>
            <div className="mt-3">
            <a target="_blank" href="https://github.com/mohitisimmortal/minimaldrawcontract" className="px-3 py-1 text-base md:text-xl border rounded-lg hover:bg-white hover:text-black border-[#989898]">Smart Contract -{">"} </a>
            </div>
          </div>
        </>
      ) :
        (<>
          <div className="mb-5 project p-4 md:px-6 md:py-6  border rounded-lg border-[#989898] sm:max-w-[375px] md:text-2xl md:max-w-[500px] xl:max-w-[700px]">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              Kickcase Creations
            </h3>
            <p className="text-sm mb-4 md:text-lg md:mb-6 xl:text-xl xl:mb-10">A Personalised Drawer Selling startup</p>
            <p className="">-Next.js Framework</p>
            <p className="">-Recoil for State Management</p>
            <p className="">-PostgreSQL Database</p>
            <p className="mb-2 md:mb-5 xl:mb-8">-TypeScript</p>
            <a target="_blank" href="https://kickcasecreations.in/" className="px-3 py-1 text-base md:text-xl  border rounded-lg mr-2 hover:bg-white hover:text-black border-[#989898]">Live -{">"} </a>
            <a target="_blank" href="https://github.com/mohitisimmortal/kickcase_creations" className="px-3 py-1 text-base md:text-xl border rounded-lg hover:bg-white hover:text-black border-[#989898]">Code -{">"} </a>
          </div>
        </>
        )
      }




      {/* connect */}
      <div className=" mt-40 mb-4 xl:mb-6 md:text-2xl">/connect with me</div>

      <a href="https://x.com/mohitisimmortal" target='_blank'><i className="fa-brands fa-x-twitter text-white text-3xl mr-4 md:mr-7 xl:mr-8 md:text-4xl"></i></a>
      <a href="https://www.linkedin.com/in/mohitisimmortal/" target='_blank'><i className="fa-brands fa-linkedin text-white text-3xl mr-4 md:mr-7 xl:mr-8 md:text-4xl"></i></a>
      <a href="https://github.com/mohitisimmortal" target='_blank'><i className="fa-brands fa-github text-white text-3xl md:text-4xl"></i></a>
      <p className="text-white text-lg mt-2 mb-20 md:text-3xl md:mt-4 xl:mt-5">mohitisimmortal@gmail.com</p>
    </main>
  );
}
