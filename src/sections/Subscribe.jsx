import Button from "../components/Button"

export default function Subscribe() {
  return (
    // Subscribe section with width as max-container, flex container
    <section id='contact-us'  className='max-container flex justify-between items-center max-lg:flex-col gap-10' >
      {/* flex item */}
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      {/* flex item, flex container */}
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        {/* flex item, input field */}
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        {/* flex item, flex container*/}
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>

    </section>
  )
}
