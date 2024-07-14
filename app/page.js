import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/home/hero";
import GenerateMathWorksheet from "./components/home/generateMathWorksheet";
import Pricing from "./components/home/pricing";
import Faqs from "./components/home/Faqs";
import WhoCanUse from "./components/home/whoCanUse";
import JoinCommunity from "./components/home/joinCommunity";
import Footer from "./components/Footer";
import SubFooter from "./components/home/subFooter";
import WorksheetFormat from "./components/home/worksheetFormat";
import HowWorks from "./components/home/howWorks";
import LearnMath from "./components/home/learnMath";

export default function Home() {
  return (

    <main>
      <Header />
      <Hero />
      <GenerateMathWorksheet />
      <LearnMath />
      <JoinCommunity />
      <WhoCanUse />
      <Pricing />
      <HowWorks />
      <WorksheetFormat />
      <Faqs />
      <SubFooter />
      <Footer />
    </main>
  );
}
