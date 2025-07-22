import React from "react";
import TrustedSection from "../../components/HomeComp/TrustedSection";
import FAQs from "../../components/HomeComp/FAQs";
import FooterComp from "../../components/HomeComp/FooterComp";
import HeroSection from "../../components/MarketingComp/HeroSection";
import HowItWorks from "../../components/MarketingComp/HowItWorks";
import NavbarMobile from "../../components/Navbar/NavbarMobile";
import MarketingScrollerSection from "../../components/MarketingComp/Marketing";
import WhyJoinSection from "../../components/MarketingComp/WhyJoinSection";

const MarketPage: React.FC = () => {
  return (
    <>
      <div className="md:py-4 lg:px-4 xl:px-36">
        <div className="md:hidden">
          <NavbarMobile />
        </div>
        <HeroSection />
      </div>
      <TrustedSection />
      <MarketingScrollerSection />
      <WhyJoinSection />
      <HowItWorks />
      <FAQs />
      <div className="px-2 py-2 md:py-10 md:px-4">
        <FooterComp
          mainText={"Looking to connect with top companies? "}
          yellowText={"APPLY NOW"}
          buttonText={"Apply as a Marketer"}
        />
      </div>
    </>
  );
};

export default MarketPage;
