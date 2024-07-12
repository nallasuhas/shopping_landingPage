import React from 'react'

function ShoeCard({imgURL, changeBigShoeImage, bigShoeImg}) {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
          changeBigShoeImage(imgURL.bigShoe);
        }
      };
  return (
    // wrapper div for the thumbnail image, check if the current thumbnail image is bigShoeImg that is being selected. When clicked on this div it should change the bigShoeImg state in the parent component through eventhandler handleClick
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1 hover:scale-[1.05]  `}  
    onClick={handleClick}>
       {/* thumbnail img holder div*/}
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard
