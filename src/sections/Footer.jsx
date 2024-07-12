import { footerLinks,socialMedia } from "../constants"
import { footerLogo } from "../assets/images"
import { copyrightSign } from "../assets/icons"

export default function Footer() {
  return (
    // footer section with width as max-container
    <footer className='max-container'>
      {/* flex container */}
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          {/* flex item, flex container */}
          <div className='flex flex-col items-start'>
                {/* flex item */}
                <a href='/'>
                    <img
                      src={footerLogo}
                      alt='logo'
                      width={150}
                      height={46}
                      className='m-0'
                    />
                </a>
                  {/* flex item */}
                <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                  Get shoes ready for the new term at your nearest Nike store. Find
                  Your perfect Size In Store. Get Rewards
                </p>
                {/* flex item, flex container, social icons div wrapper  */}
                <div className='flex items-center gap-5 mt-8'>
                  {socialMedia.map((icon) => (
                    // div wrapper for img
                      <div  key={icon.alt} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                        <img src={icon.src} alt={icon.alt} width={25} height={25} />
                      </div>
                  ))}
                </div>
          </div>
          {/* flex item, flex container */}
          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
              {/* footer link title */}
              {footerLinks.map((section) => (
                  //  div wrapper, links title
                  <div key={section.title}>
                      {/* title name */}
                      <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                        {section.title}
                        </h4>
                        {/* list of links */}
                        <ul>
                          {section.links.map((link) => (
                            <li  key={link.name}
                            className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                            >
                              <a href={link.link}>{link.name}</a>
                            </li>
                          ))}
                        </ul>
                  </div>
              ))}
           </div>
     </div>
      {/* flex container */}
     <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        {/* flex item, flex container */}
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
           <img
              src={copyrightSign}
              alt='copyright sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />
            <p>Copyright. All rights reserved.</p>
        </div>
        {/* flex item */}
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
     </div>

    </footer>
  )
}
