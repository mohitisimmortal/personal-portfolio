// 'use client';
import { StarFilledIcon} from '@radix-ui/react-icons';
import React from 'react';

const Web2Projects = () => {
    return (
        <>
            {/* project-1 */}
            <div className=" relative mb-5 project p-4 md:px-6 md:py-6  border rounded-lg border-[#989898] sm:max-w-[375px] md:text-2xl md:max-w-[500px] xl:max-w-[700px]">
                <div className="absolute right-2 sm:right-4 flex items-center text-xs sm:text-sm bg-red-700 text-white px-2 py-1 rounded-md">
                    Frontend Only
                </div>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                    Immortal Studio
                </h3>
                <p className="text-sm mb-4 md:text-lg md:mb-6 xl:text-xl xl:mb-10">Ui solutions studio for modern brands</p>
                <p className="">-Next.js Framework</p>
                <p className="">-TypeScript</p>
                <p className="mb-2 md:mb-5 xl:mb-8">-Shadcn/ui & Aceternity UI library</p>
                <a href="https://immortalstudio.vercel.app/" target="_blank" className="px-3 py-1 text-base md:text-xl border rounded-lg mr-2 hover:bg-white hover:text-black border-[#989898]">Live -{">"} </a>
                <a href="https://github.com/mohitisimmortal/immortal-studio" target="_blank" className="px-3 py-1 text-base md:text-xl border rounded-lg hover:bg-white hover:text-black border-[#989898]">Code -{">"} </a>
            </div>

            {/* project-2 */}
            <div className="relative mb-5 project p-4 md:px-6 md:py-6  border rounded-lg border-[#989898] sm:max-w-[375px] md:text-2xl md:max-w-[500px] xl:max-w-[700px]">
                <div className="absolute right-2 sm:right-4 flex items-center text-xs sm:text-sm bg-red-700 text-white px-2 py-1 rounded-md">
                    <StarFilledIcon className="h-4 w-4 mr-1" />
                    Full Stack
                </div>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                    Fusion Courses
                </h3>
                <p className="text-sm mb-4 md:text-lg md:mb-6 xl:text-xl xl:mb-10">A Course Selling Webapp</p>
                <p className="">-MERN Stack</p>
                <p className="">-JavaScript</p>
                <p className="">-Recoil for State Management</p>
                <p className="mb-2 md:mb-5 xl:mb-8">-Stripe Payment Integration</p>
                <a href="https://fusioncourses.vercel.app/" target="_blank" className="px-3 py-1 text-base md:text-xl border rounded-lg mr-2 hover:bg-white hover:text-black border-[#989898]">Live -{">"} </a>
                <a href="https://github.com/mohitisimmortal/fusion-courses" target="_blank" className="px-3 py-1 text-base md:text-xl border rounded-lg hover:bg-white hover:text-black border-[#989898]">Code -{">"} </a>
            </div>

            {/* project-3 */}
            <div className="relative mb-5 project p-4 md:px-6 md:py-6  border rounded-lg border-[#989898] sm:max-w-[375px] md:text-2xl md:max-w-[500px] xl:max-w-[700px]">
                <div className="absolute right-2 sm:right-4 flex items-center text-xs sm:text-sm bg-red-700 text-white px-2 py-1 rounded-md">
                    <StarFilledIcon className="h-4 w-4 mr-1" ></StarFilledIcon>
                    Full Stack
                </div>
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
        </>
    );
};

export default Web2Projects;
