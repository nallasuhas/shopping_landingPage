import React from 'react'

export default function Button({label, iconURL, backgroundColor="bg-coral-red ", borderColor, textColor}) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor} ${borderColor} ${textColor}` }>
      {label}
     {iconURL &&  <img src={iconURL} 
      className='ml-2 rounded-full w-5 h-5'/> }
    </button>
  )
}
