'use client';
import { CopyIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { useState } from 'react';

const projects = [
    {
        name: 'X',
        url: 'https://x.com/mohitisimmortal/',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mohitisimmortal/',
    },
    {
        name: 'Github',
        url: 'https://github.com/mohitisimmortal/',
    },
    {
        name: 'GatherDocAI',
        url: 'https://gatherdocai.vercel.app/',
        code: 'https://github.com/mohitisimmortal/gatherdocai/'
    },
    {
        name: 'Fusion Courses',
        url: 'https://fusioncourses.vercel.app/',
        code: 'https://github.com/mohitisimmortal/fusion-courses/'
    },
    {
        name: 'Ether Watches',
        url: 'https://etherwatches.vercel.app/',
        code: 'https://github.com/mohitisimmortal/ether-watches/'
    },
    {
        name: 'Immortal Studio',
        url: 'https://immortalstudio.vercel.app/',
        code: 'https://github.com/mohitisimmortal/immortal-studio'
    },
    {
        name: 'Minimal Draw',
        url: 'https://minimaldraw.vercel.app/',
        code: 'https://github.com/mohitisimmortal/minimaldraw'
    },
]

const page = () => {
    const [lastCopied, setLastCopied] = useState<string | null>(null)
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
        setLastCopied(text)
        setTimeout(() => {
            setLastCopied(null)
        }, 2000);
    }
    return (
        <div className='p-4 md:p-10 text-white'>
            <div>
                <Link href={'/'} className='inline'>Portfolio</Link>
                <CopyIcon className={`inline ml-2 cursor-pointer ${lastCopied === 'https://www.mohitisimmortal.in/' ? 'text-neutral-600' : 'text-white'}`} onClick={() => handleCopy("https://www.mohitisimmortal.in/")} />
            </div>
            <div>
                Email
                <CopyIcon className={`inline ml-2 cursor-pointer ${lastCopied === 'mohitisimmortal@gmail.com' ? 'text-neutral-600' : 'text-white'}`} onClick={() => handleCopy("mohitisimmortal@gmail.com")} />
            </div>
            {
                projects.map((project) => (
                    <div className='mt-4'>
                        <div>
                            {project.name}

                        </div>
                        <div className='flex items-center'>
                            <a href={project.url} target='_blank'>{project.url}</a>
                            <CopyIcon className={`ml-2 cursor-pointer ${lastCopied === project.url ? 'text-neutral-600' : 'text-white'}`} onClick={() => handleCopy(project.url)} />
                        </div>
                        {
                            project.code ? (
                                <div className='flex items-center'>
                                    <a href={project.code} target='_blank' className=' text-wrap'>{project.code}</a>
                                    <CopyIcon className={`ml-2 cursor-pointer ${lastCopied === project.code ? 'text-neutral-600' : 'text-white'}`} onClick={() => handleCopy(project.code)} />
                                </div>
                            ) : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default page;