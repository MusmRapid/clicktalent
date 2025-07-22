import React from "react";
import HeroSection from "../../components/HomeComp/HeroSection";
import TrustedSection from "../../components/HomeComp/TrustedSection";
import FAQs from "../../components/HomeComp/FAQs";
import FooterComp from "../../components/HomeComp/FooterComp";
import StepsSection from "../../components/HomeComp/StepsSection";
import MarketingScroller from "../../components/HomeComp/Marketing";
import NavbarMobile from "../../components/Navbar/NavbarMobile";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="md:py-4 md:px-4">
        <div className="md:hidden">
          <NavbarMobile />
        </div>
        <HeroSection />
      </div>
      <TrustedSection />
      <StepsSection />
      <MarketingScroller />
      <FAQs />
      <div className="py-2 md:py-10 px-2 md:px-4">
        <FooterComp
          mainText={"Looking to hire A high quality marketer?"}
          yellowText={"Schedule a call today."}
          buttonText={"Start Hiring"}
        />
      </div>
    </>
  );
};

export default HomePage;
