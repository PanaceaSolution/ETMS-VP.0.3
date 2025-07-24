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
        mt-[60px] sm:mt-[80px] md:mt-[98px]
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
      <div
        className="
          absolute inset-0
          flex flex-col items-center justify-center
          text-white text-center px-4
        "
      >
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
            mt-2
            drop-shadow
          "
        >
          Your guide to hassle-free booking and event experiences with THE EVENTIX.
        </p>
      </div>
    </section>
  );
};

export default FAQBanner;
