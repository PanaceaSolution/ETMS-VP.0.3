import FaqAccordion from "@/components/features/FAQ/FAQAccordin";
import FAQBanner from "@/components/features/FAQ/FAQBanner";
import FAQTextBlock from "@/components/features/FAQ/FAQTextBlock";
import MapSection from "@/components/ui/MapSection";

const FAQPage = () => {
  return (
    <div className="bg-[#F2F2F2] w-full overflow-x-hidden">
      <FAQBanner />
      <div className="py-8">
        <FAQTextBlock />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10">
        <FaqAccordion />
      </div>
      <MapSection />
    
    </div>
  );
};

export default FAQPage;
