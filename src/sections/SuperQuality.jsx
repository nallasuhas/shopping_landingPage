import { shoe8 } from "../assets/images";
import  Button  from "../components/Button"
export default function SuperQuality() {
  return (
    // superquality section, flex container with width as max-container
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      {/* flex item, flex container */}
       <div className='flex flex-1 flex-col'>
         {/* flex item*/}
            <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
              We Provide You
              <span className='text-coral-red'> Super </span>
              <span className='text-coral-red'>Quality </span> Shoes
            </h2>
            {/* flex item*/}
            <p className='mt-4 lg:max-w-lg info-text'>
            Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance.
            </p>
          {/* flex item*/}
           <p className='mt-6 lg:max-w-lg info-text'>
            Our dedication to detail and excellence ensures your satisfaction
           </p>
          {/* flex item, button*/}
            <div className='mt-11'>
            <Button label='View details' />
            </div>
       </div>
       {/* flex item, flex container, shoeimg wrapper div */}
       <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={520}
          className='object-contain'
        />
      </div>
    </section>
  )
}
