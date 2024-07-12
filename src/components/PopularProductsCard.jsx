import {star} from "../assets/icons"

export default function PopularProductsCard({imgURL, name, price}) {
  
  return (
    // flex container
    <div  className='flex flex-1 flex-col w-full max-sm:w-full'>
        {/* flex item, img wrapper div */}
       <div className="hover:translate-y-[-5px] ">
        <img src={imgURL} alt=""  className='w-[280px] h-[280px]'/>
       </div>
       {/* flex item, rating */}
       <div className='mt-8 flex justify-start gap-2.5'>
            {/* stars */}
           <img src={star} alt=""  width={25} height={25}/>
           {/* number rating */}
           <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
          </p>
       </div>
       {/* flex item, name of the product */}
       <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      {/* flex item, price of the product */}
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  )
}
