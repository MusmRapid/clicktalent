import React from 'react'
import HeroSection from '../../components/HomeComp/HeroSection'
import TrustedSection from '../../components/HomeComp/TrustedSection'
import FAQs from '../../components/HomeComp/FAQs'
import FooterComp from '../../components/HomeComp/FooterComp'
import StepsSection from '../../components/HomeComp/StepsSection'
import MarketingScroller from '../../components/HomeComp/Marketing'

const HomePage: React.FC = () => {
  return (
   <>
      <div className="md:py-10 md:px-36">
        <HeroSection/>
      </div>
      <TrustedSection/>
      <StepsSection/>
      <MarketingScroller/>
      <FAQs/>
      <div className="md:py-10 md:px-36">
        <FooterComp/>
      </div>
   </>
  )
}

export default HomePage