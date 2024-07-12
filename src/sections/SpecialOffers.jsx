import {offer} from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

export default function SpecialOffers() {
  return (
    // special offers section, flex container with width as max-container
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      {/* flex item, img wrapper div */}
       <div className='flex-1'>
         <img
            src={offer}
            alt='Shoe Promotion'
            width={780}
            height={690}
            className='object-contain w-full'
          />
       </div>
       {/* flex item, flex container */}
       <div className='flex flex-1 flex-col'>
          {/* flex item  */}
          <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
          </h2>
           {/* flex item  */}
          <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
           </p>
            {/* flex item  */}
           <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
           </p>
            {/* flex item, flex container */}
            <div className='mt-11 flex flex-wrap gap-4'>
             <Button label='Shop now' iconURL={arrowRight} />
              <Button
                label='Learn more'
                backgroundColor='bg-white'
                borderColor='border-slate-gray'
                textColor='text-slate-gray'
               />
            </div>

       </div>
    </section>
  )
}
