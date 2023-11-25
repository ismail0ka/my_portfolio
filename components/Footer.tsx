import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
        <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'/>
        <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
            <div>By Ismail Karouata</div>
            <div className='flex flex-row justify-center items-center space-x-2 mb-1'>
                <a href='https://github.com/ismail0ka' rel='noreferrer' target='_blank'>
                    <AiOutlineGithub
                        size={30}
                    />
                </a>
                <a href='https://linkedin.com/in/ismail-karouata' rel='noreferrer' target='_blank'>
                    <AiOutlineLinkedin
                        size={30}
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer