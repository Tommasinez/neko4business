import React from 'react'
import { NavbarCat } from '../assets';
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <section className='w-full flex flex-col justify-center items-center md:pt-10 pb-8'>
      <div className='flex md:flex-row flex-col justify-center items-center w-full'>
        <div className="flex flex-col justify-start p-8 mx-6">
          <div className='flex flex-row items-center'>
            <div className='pr-2'>
              <img src={NavbarCat} className="min-w-[48px] h-12" />
            </div>
            <div className='font-poppins font-semibold text-[23px] leading-[1]'>
              <h1>Neko4</h1>
              <h1>Business</h1>
            </div>
          </div>
          <p className='font-poppins font-medium my-4 max-w-[400px]'>
            A cat designed<br />for your company.
          </p>
        </div>

        <div className="w-full flex flex-row justify-around flex-wrap md:mt-0 ss:mb-6">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className='flex flex-col ss:my-0 my-4 mx-6 min-w-[150px]'>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li key={link.name} className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer my-4'>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:flex-row flex-col flex justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] px-8">
          Copyright Ⓒ 2022 Neko4Business. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6 px-8">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className='w-[22px] h-[22px] object-contain cursor-pointer mx-3'
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer