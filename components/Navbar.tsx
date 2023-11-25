'use client';

import React,{useState} from 'react';

import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

import { navbar_items } from '../index';

const Navbar: React.FC = () => {
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [mobileNavbar,setMobileNavbar] = useState(false)

  return(
      <header className='sm:px-20 w-full mx-auto px-4 bg-white shadow fixed top-0 z-50  dark:bg-stone-900 dark:border-b dark:border-stone-600'>
        <div className='justify-between md:flex md:items-center'>
          <div className='flex items-center justify-between py-3'>
            <div>
              <Link to='home'>
                <h2 className='text-2xl font-bold'>Ismail Karouata</h2>
              </Link>
            </div>
            <div className='md:hidden'>
              <button onClick={() => {setMobileNavbar(!mobileNavbar)}}>
                {mobileNavbar ? (<IoMdClose/>) : (<IoMdMenu/>)}
              </button>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${mobileNavbar ? 'block' : 'hidden'}`}>
              
              <div className='items-center justify-center md:flex md:space-x-5 md:space-y-0 space-y-4'>
                  {navbar_items.map((navbaritem,index) => {
                    return(
                      <Link 
                        key={index} 
                        to={navbaritem.page}
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => setMobileNavbar(!mobileNavbar)}
                        className='block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100'
                      >
                        {navbaritem.label}
                      </Link>
                    )
                  })}
                  {
                    currentTheme === 'dark' ?
                    (
                      <button onClick={() => setTheme('light')} 
                        className='bg-slate-100 rounded-xl p-2'
                      >
                        <RiSunLine color='black' size={15}/>
                      </button>
                    ) :
                    (
                      <button onClick={() => setTheme('dark')}
                        className='bg-slate-100 rounded-xl p-2'
                      >
                        <RiMoonFill size={15}/>
                      </button>
                    )
                  }
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;