import Explore from '@/components/Explore'
import FooterBanner from '@/components/FooterBanner'
import HeroCarousel from '@/components/HeroCarousel ' 
import OurObjective from '@/components/OurObjective'

const Home = () => {
  return (
    <main>
      <HeroCarousel/>
      <Explore/>
      <FooterBanner/>
      <OurObjective/>
    </main>
  )
}

export default Home