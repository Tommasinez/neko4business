import { Button } from "../components"
import { features } from "../constants"

function Features() {
  return (
    <section id="features" className="w-full flex sm:flex-row flex-col justify-around items-center py-[80px]">
      <div className="flex flex-col justify-center items-start mx-5 mb-8 sm:mb-0">
        <h2 className="font-poppins font-bold text-[22px] md:text-[28px] lg:text-[36px]">
          Just do your errands,
          <br />
          the SuperCat will
          <br />
          do the rest (and more)
        </h2>
        <p className="font-poppins font-normal max-w-[400px] my-4">
        Aenean laoreet erat nisl, in vestibulum ipsum iaculis in.
        Quisque placerat magna sit amet velit scelerisque, eu interdum diam commodo.
        Duis in tortor eget mi sollicitudin blandit non mollis felis. 
        </p>
        <Button />
      </div>

      <div className="flex justify-center items-center max-w-[400px] relative flex-col">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row m-7">
            <div className="w-[64px] h-[64px] flex justify-center items-center m-4">
              <img src={feature.icon} className="w-[100%] h-[100%] object-contain" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h4 className="font-poppins font-semibold text-[18px] mb-2">
                {feature.title}
              </h4>
              <p className="font-poppins font-normal text-[16px]">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features