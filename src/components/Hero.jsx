import { HeroCat } from '../assets';
import Button from './Button';
import { stats } from '../constants';

function Hero() {
  return (
    <section id='home' className='w-full flex ss:flex-row flex-col justify-around items-center py-[80px]'>
      <div className='flex flex-col justify-center items-start mx-5'>
          <h2 className='font-poppins font-bold text-[22px] md:text-[28px] lg:text-[36px]'>
            THE BEST CAT
            <br />
            YOU CAN GET
            <br />
            SERIOUSLY, THAT'S ALL.
          </h2>
          <p className='font-poppins font-medium my-4'>
            Lorem ipsum dolor sit amet.
            <br />
            Neque illo non fugit tenetur possimus eos.
            <br />
            debitis accusamus accusantium perferendis.
            <br />
            exercitationem repellendus amet.
          </p>
          <Button />
          <div className='mb-8 ss:mb-0'>
            {stats.map((stat) => (
              <div key={stat.id} className='flex justify-start items-center flex-row my-3' >
                <h4 className="font-poppins font-semibold text-[40px] ">
                  {stat.value}
                </h4>
                <p className="font-poppins font-normal text-[20px] uppercase ml-3">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
      </div>
      <div className='flex justify-center items-center mx-5'>
        <img src={HeroCat} className='w-[250px] object-contain' />
      </div>
    </section>
  )
}

export default Hero