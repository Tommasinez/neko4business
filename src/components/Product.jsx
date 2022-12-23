import React from 'react'
import { ProductCat, Apple, Google } from '../assets'

function Product() {
  return (
    <section id="product" className='w-full flex sm:flex-row flex-col-reverse justify-around items-center py-[80px] bg-black'>
      <div className='flex justify-center items-center p-8'>
        <img src={ProductCat} className="w-[400px] rounded-[20px] object-contain" />
      </div>

      <div className='flex justify-center items-start flex-col mx-5'>
        <div className='font-poppins font-bold text-[22px] md:text-[28px] lg:text-[36px] text-white'>
          Get meowpdates <br/> using the app.
        </div>
        <p className='font-poppins font-medium my-8 text-white max-w-[400px]'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap mb-20 sm:mb-0">
          <img src={Apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 mb-5 cursor-pointer" />
          <img src={Google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Product