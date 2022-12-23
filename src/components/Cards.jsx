import React from 'react'
import { cards } from '../constants'

function Cards() {
  return (
    <section id="reviews" className='w-full flex flex-col justify-center items-center bg-black relative py-[80px]'>
      <h2 className='font-poppins font-bold text-white text-[22px] md:text-[28px] lg:text-[36px] mb-8'>
        What other cats say about us:
      </h2>

      <div className="w-full flex flex-wrap justify-center items-center">
        {cards.map((card) =>
          <div key={card.id} className="flex justify-between flex-col-reverse m-6 p-6 rounded-[20px] w-[340px] min-h-[260px] bg-white">
            <div className="flex flex-row">
              <img src={card.img} className="w-[50px] h-[50px] rounded-full" />
              <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
                  {card.name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px]">
                  {card.title}
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="font-poppins font-normal leading-[32px] my-5">
                {card.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cards