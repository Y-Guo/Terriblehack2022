import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import PaymentPage from "components/payment/PaymentPage";


export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading="Garage Sale Token (GST)"
        description="The future of NFTs is here. Introducing GST, a fiat based, environment-friendly token backed by physical assets."
        primaryButtonText="Get Started"
        primaryButtonUrl="https://docs.google.com/spreadsheets/d/15v1D6ATVyma89dBqt28UTtqFjHInLR3CDFxDNA1MNYY/edit?usp=sharing"
      />
      <Features />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}
