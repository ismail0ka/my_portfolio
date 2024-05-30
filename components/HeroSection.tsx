'use client';

import React from 'react';

import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center py-10 my-5'>
            <div>
                <Image 
                    src='/portfolio_pic.jpeg' 
                    alt='profile picture' 
                    width={200} height={200}
                    className='rounded-full shadow-2xl'
                />
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Hi, I'm <strong className='text-red-500'>Ismail</strong></h1>
                <p>A <span className='font-semibold text-red-500'>Software Engineer </span> 
                    and Cyber Security enthusiast based in Casablanca,Morocco.  Mainly interested in 
                    Web Applications development/security and Malware Analysis.
                    I'm on the lookout for an internship opportunity to further improve my skills.
                </p>
            </div>
            <div className='my-5'>
            <Link
                    to='projects'
                    className='text-neutral-100 font-semibold py-2 px-6 rounded-full bg-red-600 hover:bg-red-500'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Projects
            </Link>
            </div>
            <div>
                <Link
                    to='about'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    <HiArrowDown className='hover:scale-125 animate-pulse' size={35}/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default HeroSection