import { star } from "../assets/icons"

export default function ReviewCard({imgURL, customerName, rating, feedback }) {
  return (
    //  reviewCard, flex container, flex item
     <div className='flex justify-center items-center flex-col flex-1'>
        {/* flex-item */}
        <div >
            <img
            src={imgURL}
            alt='customer'
            className='object-cover w-[120px] h-[120px] rounded-full'
           />
        </div>
         {/* flex-item */}
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
         {/* flex-item, flex container */}
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img
            src={star}
            width={24}
            height={24}
            alt='rating star'
            className='object-contain m-0'
            />
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        {/* flex item */}
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
            {customerName}
        </h3>
        
     </div>
  )
}
