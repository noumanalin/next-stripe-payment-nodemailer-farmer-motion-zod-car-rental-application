import Insights from '@/components/insights/Insights'
import PageBanner from '@/components/PageBanner'
import React from 'react'

const OurFleet = () => {
  return (
    <>
    <PageBanner image={'/our-fleet-banner.jpg'} title={'Our Fleet'} text={'Whether you’re after pure luxury or a high capacity transporter, we have a vehicle for any occasion. What will you choose? '} /> 
    <section>
        <Insights isForm={false} />
    </section>
    </>
  )
}

export default OurFleet