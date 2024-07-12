import React, { useState } from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'

export default function Hero() {
  // maintains a currently selected bigShoeImg
  const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe)
  return (
    // hero section, flex container-1
    <section  id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '>
      {/* hero div, flex container, flex item-1 */}
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
          {/* flex item */}
          <p className='text-xl font-montserrat text-coral-red'>
              Our Summer collections
          </p>
          {/* flex item */}
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]    max-sm:leading-[82px] font-bold'>
            {/* for special look at larger widths */}
              <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
                The New Arrival
              </span>
              <br />
              <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
          </h1>
          {/* flex item */}
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestias.
            </p>
            {/* flex item */}
            <Button label='shop now' iconURL={arrowRight}></Button>
            {/* flex item, flex container */}
            <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
      </div>
      {/* flex item-1, flex container for hero-Shoe section */}
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        {/* big Shoe img  */}
        <img src={bigShoeImg} width={600} height={500} className='object-contain  relative z-10'  />
        {/* absolutely positioned flex item and a flex container */}
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {/* flex items, thumbnail images */}
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard 
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
