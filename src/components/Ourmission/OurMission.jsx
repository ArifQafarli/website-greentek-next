"use client";

import Image from "next/image";
import Container from "../../components/layout/Container";

const MissionCard = ({ number, title, description, gradient }) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white p-6 sm:p-8 shadow-sm h-[380px] sm:h-[420px] lg:h-[450px] w-full sm:w-[320px] lg:w-[350px] overflow-hidden border-t border-[#0000001C]">
      {/* Number */}
      <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800">
        {number}
      </span>

      {/* Separator */}
      <div className="absolute left-0 right-0 top-[230px] sm:top-[250px] lg:top-[270px] px-6 sm:px-8">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Title & Description */}
      <div className="absolute left-0 right-0 top-[260px] sm:top-[280px] lg:top-[300px] px-6 sm:px-8">
        <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0C0D10]">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[var(--Black-medium,#00000099)]">
          {description}
        </p>
      </div>

      {/* Gradient Bottom Border */}
      <div
        className="absolute bottom-0 left-0 h-3 sm:h-4 w-full"
        style={{ background: gradient }}
      />
    </div>
  );
};

const OurMission = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-poppins leading-snug text-[#0C0D10] text-left">
          Bizim missiyamız,{" "}
          <span className="font-bold text-black">yenilikçi və dayanıqlı</span>
          <br className="hidden sm:block" />
          maliyyə alətləri təqdim etməkdir
        </h2>

        {/* Content */}
        <div className="mt-12 sm:mt-14 lg:mt-16 grid gap-10 lg:grid-cols-4 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start lg:flex hidden lg:flex">
            <Image
              src="/assets/Ourmission/mission.png"
              alt="Bizim missiyamız illüstrasiyası"
              width={550}
              height={550}
              className="object-contain max-w-[300px] sm:max-w-[400px] lg:max-w-none"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:col-span-3">
            <MissionCard
              number="01"
              title="Sadə və Əlçatan"
              description="Xidmətlərimizi asan və istifadəçi dostu edərək, müştəri tələblərinə uyğun daim təkmilləşdiririk"
              gradient="linear-gradient(91.55deg, #8C84FF 1.31%, #C7E3FF 147.49%)"
            />
            <MissionCard
              number="02"
              title="Müştəri Məmnuniyyəti"
              description="Live chat vasitəsilə dəstək komandamız hər zaman suallarınıza cavab verməyə hazırdır."
              gradient="linear-gradient(91.04deg, #FF943C 0.89%, #FEB177 70.44%, #FFF7E2 139.99%)"
            />
            <MissionCard
              number="03"
              title="Təhlükəsiz və Sürətli"
              description="Pul köçürmələri və digər əməliyyatlar vaxtınıza qənaət edəcək şəkildə həyata keçirilir."
              gradient="linear-gradient(90deg, #37D36E 0%, #84EEC2 100%)"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
