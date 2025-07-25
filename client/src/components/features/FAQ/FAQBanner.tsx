'use client';

import Image from 'next/image';

const FAQBanner = () => {
  return (
    <section
       className="
    relative
    w-full
    h-[200px] sm:h-[350px] md:h-[533px]
    overflow-hidden
  "
  style={{ transform: 'rotate(0deg)', opacity: 1 }}

    >
      {/* Background Image */}
      <Image
        src="/assets/FAQBanner.png"
        alt="FAQ Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-white text-center max-w-[90%] md:max-w-[960px] xl:max-w-[1280px]">
          <h1
            className="
              font-bauman
              text-[24px] sm:text-[32px] md:text-[48px]
              leading-tight
              font-normal
              drop-shadow
            "
          >
            Frequently Asked Questions
          </h1>
          <p
            className="
              font-bauman
              text-[14px] sm:text-[18px] md:text-[24px]
              font-normal
              mt-2 sm:mt-4 md:mt-6
              drop-shadow
            "
          >
            Your guide to hassle-free booking and event experiences with THE EVENTIX.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQBanner;
