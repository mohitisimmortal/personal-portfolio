// 'use client';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import React from 'react';

const Web3Projects = () => {
    return (
        <>
            <div className="relative mb-5 project p-4 md:px-6 md:py-6  border rounded-lg border-[#989898] sm:max-w-[375px] md:text-2xl md:max-w-[500px] xl:max-w-[700px]">
                <div className="absolute right-2 sm:right-4 flex items-center text-xs sm:text-sm bg-red-700 text-white px-2 py-1 rounded-md">
                    {/* <StarFilledIcon className="h-4 w-4 mr-1" ></StarFilledIcon> */}
                    Smart Contract
                </div>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                    Token Marketplace
                </h3>
                <p className="text-sm mb-4 md:text-lg md:mb-6 xl:text-xl xl:mb-10">A Decentralized Token Marketplace contract</p>
                <p className="">-Solidity</p>
                <p className="">-OpenZeppelin ERC20</p>
                <p className="mb-2 md:mb-5 xl:mb-8">-OpenZeppelin ReentrancyGuard</p>
                <a target="_blank" href="https://github.com/mohitisimmortal/tokenmarketplace-contract" className="px-3 py-1 text-base md:text-xl border rounded-lg hover:bg-white hover:text-black border-[#989898]">Code -{">"} </a>
            </div>

            <div className="relative mb-5 project p-4 md:px-6 md:py-6  border rounded-lg border-[#989898] sm:max-w-[375px] md:text-2xl md:max-w-[500px] xl:max-w-[700px]">
                <div className="absolute right-2 sm:right-4 flex items-center text-xs sm:text-sm bg-red-700 text-white px-2 py-1 rounded-md">
                    <StarFilledIcon className="h-4 w-4 mr-1" ></StarFilledIcon>
                    Full Stack Dapp
                </div>
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
    );
};

export default Web3Projects;
