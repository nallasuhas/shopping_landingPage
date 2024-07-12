import {services} from '../constants/index'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    //  flex container , services section with width as max container
      <section className='max-container flex justify-center flex-wrap gap-9'>
         {/* service card */}
          {services.map((service) => (
           < ServiceCard key={service.label} {...service} />
          ))}
      </section>
  )
}
