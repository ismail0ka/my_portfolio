import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BsGithub, BsArrowUpRightSquare} from 'react-icons/bs'

import {projects} from '../index';

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h1 className='font-bold text-3xl text-center'>Projects</h1>
      <div className="flex flex-col space-y-28 mt-5">
        {projects.map((project,index) => (
          (<div key={index}>
            <div className='flex flex-col md:flex-row md:space-x-12'>
              <div className='md:w-1/2'>
                <Image 
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={1000}
                  className='rounded-xl shadow-xl hover:opacity-70'  
                />
              </div>
              <div className='md:w-1/2'>
                <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                  {project.description}
                </p>
                <div className='flex flex-row space-x-4 align-bottom'>
                  <Link href={project.github} target='_blank'>
                    <BsGithub
                      size={30}
                      className='hover:-translate-y-1 transition-transform cursor-pointer'
                    />
                  </Link>
                  <Link href={project.link} target='_blank'>
                    <BsArrowUpRightSquare
                      size={30}
                      className='hover:-translate-y-1 transition-transform cursor-pointer'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>)
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection