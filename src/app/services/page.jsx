import FooterBanner from '@/components/FooterBanner'
import PageBanner from '@/components/PageBanner'
import ServicesCard from '@/components/ServicesCard'
import { serviceList } from '@/utils/appData'

const Services = () => {
  return (
    <>
    <PageBanner image={'/service-banner.jpg'} title={'Services'} text={'Experience elevated trave with us: Where Style, comfort, and safety meet for every occasion. Travel in sophistication and peace of mind.'} /> 

    <section
    aria-label="Services List"
    className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
    {serviceList.map((service, index) => (
        <ServicesCard key={index} service={service} />
    ))}
    </section>

    <FooterBanner/>
    </>
  )
}

export default Services