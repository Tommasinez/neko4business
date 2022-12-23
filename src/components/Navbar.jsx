import { useState } from 'react';
import { NavbarCat, Close, Menu } from '../assets';
import { navLinks } from '../constants';

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <nav className="w-full flex justify-around items-center py-4 bg-white">
      <div className='flex flex-row items-center px-4'>
        <div className='pr-2'>
          <img src={NavbarCat} className="w-12 h-12" />
        </div>
        <div className='font-poppins font-semibold text-[23px] leading-[1]'>
          <h1>Neko4</h1>
          <h1>Business</h1>
        </div>
      </div>
      {/* Desktop */}
      <div>
        <ul className="sm:flex hidden justify-end items-center list-none">
          {navLinks.map((link) => (
            <li key={link.id} className='font-poppins font-normal cursor-pointer text-black mx-4'>
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex justify-end items-center">
        <div className='px-4'>
          <img src={sidebar ? Close : Menu} alt="sidebar" className="w-7 h-7 object-contain" onClick={() => setSidebar((prev) => !prev)} />
        </div>
        <div className={`${sidebar ? 'flex' : 'hidden'} justify-center items-center py-5 bg-black absolute top-[80px] right-[0px] w-[100%]`}>
            <ul className="list-none flex flex-col justify-center items-center">
              {navLinks.map((link) => (
                <li key={link.id} className={`font-poppins font-normal cursor-pointer text-base text-white my-4`}>
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar