import Container from "@/components/layout/Container";
import PageBanner from "@/components/Pagebanner/PageBanner";
import FaqSection from "@/components/Faqsection/FaqSection";
import FaqCategories from "@/components/Faqsection/FaqCategories";

export default function FaqPage() {
  return (
    <Container>
      <div className="relative w-full mb-16 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-5">
        <PageBanner
          bgImage="/assets/Pagebanner/page-banner.png"
          title="Tez-tez verilən suallar"
          description="GreenPay ilə bağlı ən çox soruşulan suallara cavablar"
        />
      </div>
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5">
            <FaqCategories className="h-full" />
          </div>
          <div className="lg:col-span-7">
            <FaqSection
              showLeft={false}
              title="Frequently Asked"
              highlighted="Questions"
              cta={{ label: "Contact Support", href: "/contact" }}
              defaultOpenIndex={0}
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
