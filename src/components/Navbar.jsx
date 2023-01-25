import {React, useState} from 'react'

import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex py-6 justify-between'> {/*w-full  items-center navbar*/}
      <img src={logo} alt="" className='w-[124px] h-[32px]'/>
      {/* HZTAL LIST ON DESKTOP */}
      <ul className='hidden sm:flex'> {/* list-none items-center flex-1 justify-end*/}
        {navLinks.map((navLink, idx)=>
          <li
            id={navLink.id}
            className={
                        `font-poppins font-normal cursor-pointer
                          px-10 text-white text-[16px]
                          ${ idx === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${navLink.id}`}>
              {navLink.title}
            </a>
          </li>
        )}
      </ul>

      {/* VRTCAL LIST ON MOBILE */}
      <div className='flex-1 flex justify-end'> {/* flex */}
        <img 
          className='w-[28px] h-[28px] object-contain'
          src={toggle ? close : menu}
          alt="menu" 
          onClick={()=>(setToggle((prev)=>(!prev)))}
        />
        <div 
          className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 right-0
            mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >

        </div>
      </div>
    </nav>
  )
}

export default Navbar