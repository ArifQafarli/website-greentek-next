import HeroSection from "@/components/HeroSection/HeroSection";
import Converter from "@/components/Converter/ConverterUi";
import TransferOption from "@/components/TransferOption/TransferOptions";
import PaymentCountry from "@/components/PaymentCountry/PaymentCountry";
import GlobalServices from "@/components/GlobalServices/GlobalServices";
import OurMission from "@/components/OurMission/OurMission";
import DigitalWalletCard from "@/components/DigitalWallet/DigitalWalletCard";
import QrDownloadBanner from "@/components/QrDownload/QrDownloadBanner";
import GreenChat from "@/components/GreenChat/GreenChat";
import FaqSection from "@/components/FaqSection/FaqSection";
import ContactSection from "@/components/ContactSection/ContactSection";

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
