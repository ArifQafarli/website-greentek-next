import HeroSection from "@/components/HeroSection/HeroSection";
import Converter from "@/components/Converter/ConverterUi";
import TransferOption from "@/components/TransferOption/TransferOptions";
import PaymentCountry from "@/components/PaymentCountry/PaymentCountry";
import GlobalServices from "@/components/Globalservices/GlobalServices";
import OurMission from "@/components/Ourmission/OurMission";
import DigitalWalletCard from "@/components/Digitalwallet/DigitalWalletCard";
import QrDownloadBanner from "@/components/Qrdownload/QrDownloadBanner";
import GreenChat from "@/components/Greenchat/GreenChat";
import FaqSection from "@/components/Faqsection/FaqSection";
import ContactSection from "@/components/Contactsection/ContactSection";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="transfer">
        <TransferOption />
      </section>
      <section id="payment">
        <PaymentCountry />
      </section>
      <section id="#">
        <GlobalServices />
      </section>
      <section id="#">
        <OurMission />
      </section>
      <section id="#">
        <DigitalWalletCard />
      </section>
      <section id="#">
        <GreenChat />
      </section>
      <section id="#">
        <QrDownloadBanner />
      </section>
      <section id="#">
        <FaqSection />
      </section>
      <section id="#">
        <Converter />
      </section>
      <section id="#">
        <ContactSection />
      </section>
    </main>
  );
}
