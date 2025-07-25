import React from "react";
import ArtistSlider from "@/components/features/EventDetails/ArtistSlider";
import MapSection from "@/components/ui/MapSection";

const EventDetailsPage = () => {
  return (
  <main className="min-h-screen pt-10 bg-gray-50">
 
  <div className="w-full px-20 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
    <section className="mb-10 text">
      <h2 className="text-lg sm:text-xl font-semibold mb-1">
        Get Ready to Meet the Artists!
      </h2>
      <h1 className="text-2xl sm:text-3xl text-[#2B7BDB] font-bold">
        Event Artist
      </h1>
    </section>

      <ArtistSlider />
      <MapSection />
    </div>
</main>
  );
};

export default EventDetailsPage;
