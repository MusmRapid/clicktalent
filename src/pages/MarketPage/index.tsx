import React from 'react'
import TrustedSection from '../../components/HomeComp/TrustedSection'
import FAQs from '../../components/HomeComp/FAQs'
import FooterComp from '../../components/HomeComp/FooterComp'
import MarketingScroller from '../../components/HomeComp/Marketing'
import HeroSection from '../../components/MarketingComp/HeroSection'
import HowItWorks from '../../components/MarketingComp/HowItWorks'

const MarketPage: React.FC = () => {
  return (
   <>
      <div className="md:py-10 md:px-36">
        <HeroSection/>
      </div>
      <TrustedSection/>
      <HowItWorks/>
      <MarketingScroller/>
      <FAQs/>
      <div className="md:py-10 md:px-36">
        <FooterComp mainText={"Looking to connect with top companies? "} yellowText={"APPLY NOW"} buttonText={"Apply as a Marketer"}/>
      </div>
   </>
  )
}

export default MarketPage