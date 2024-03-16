import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { close, logo, menu } from "../assets/index"
import { styles } from "../styles"
import { navLinks } from "../constans"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [openSmallMenu, setOpenSmallMenu] = useState(false)
  return (
    <nav className={`${styles.paddingX} flex items-center w-full py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex items-center justify-between max-w-7xl mx-auto'>
        <Link
          to={"/"}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='size-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Heydar Rabbaniha</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white 
            text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            ><a href={`#${link.id}`}>{link.title}</a></li>
          )))}
        </ul>
        <div className='sm:hidden flex flex-1 items-center justify-end'>
          <img src={openSmallMenu ? close : menu} alt="menu" className='size-[28px] cursor-pointer object-contain'
            onClick={() => setOpenSmallMenu(!openSmallMenu)}
          />
          <div className={`${openSmallMenu ? "flex" : "hidden"} p-6 black-gradient absolute top-20 ring-0
          mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4 justify-end items-start'>
              {navLinks.map((link => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white 
            text-[16px] font-medium cursor-pointer font-poppins transition-colors`}
                  onClick={() => {
                    setActive(link.title)
                    setOpenSmallMenu(!openSmallMenu)
                  }}
                ><a href={`#${link.id}`}>{link.title}</a></li>
              )))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar