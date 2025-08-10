import AboutUs from '@/components/AboutUs'
import FooterBanner from '@/components/FooterBanner'
import PageBanner from '@/components/PageBanner'
import Title from '@/components/Title'
import React from 'react'

const About = () => {
  return (
    <>
    <PageBanner image="/about-banner.jpg" title="ABOUT US" text="We are an all-new chauffeured car service driving Victoria" />
    <Title text={'About Us'} />
    <AboutUs/>
    <FooterBanner/>
    </>
  )
}

export default About