import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"

export default function PopularProducts() {
  return (
    // popular products section with width as max container
   <section id='products' className="max-container max-sm:mt-12 ">
    {/* flex container */}
    <div className='flex flex-col justify-start gap-5'>
      {/* flex item */}
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        {/* flex item */}
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
        </p>
    </div >
   {/* grid container  */}
    <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
      {/* PopularProductsCards */}
      {products.map((product) => (
        <PopularProductsCard key={product.name} {...product} />
       
      ))}
    </div>

   </section>
  )
}
