'use client';
import React from 'react'
import { skills } from '../index';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id='about'>
        <div className='mb-3'>
            <h1 className='font-bold text-3xl text-center'>About Me</h1>
            <div className='flex flex-col py-4 space-y-10 items-stretch justify-center md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Who am I?</h1>
                    <p>
                        Hello, my name is Ismail a{' '}
                        <span>creative{' '}</span>and
                        <span>{' driven '}</span>
                        Software Engineer, obsessed with everything computer technology related with a special 
                        interest for WebApplications development, security and Malware Analysis keen on learning
                        new things and sharpening my skills.<br/>
                    </p>
                    <p>
                        In addition to Software development my passions include CTFs, dissecting malware and Jiu-jitsu. 
                    </p>
                    <div>
                        <button className='rounded-full py-2 px-4 shadow-xl mt-3 bg-red-600 text-neutral-100 font-semibold'>
                            <a href='/Ismail_Karouata.pdf' target='_blank' rel='noopener norefferer'>
                                MyResume
                            </a>
                        </button>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Skills</h1>
                    <div className="flex flex-row flex-wrap justify-center gap-10">
                        {skills.map((skill,index) => (
                        <div className="w-16 h-16 space-y-2">
                            <strong>{skill.name}</strong>
                            <Image 
                                key={index}
                                src={skill.icon}
                                alt='technology'
                                height={30} width={30}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection