import React from "react";
import ArtistSlider from "@/components/features/EventDetails/ArtistSlider";
import MapSection from "@/components/ui/MapSection";
import EventTextBlock from "@/components/features/EventDetails/EventTextBlock";

const EventDetailsPage = () => {
  return (
  <main className="min-h-screen pt-10 bg-gray-50">
 
  <div className="w-full  sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
   
     <EventTextBlock />
      <ArtistSlider />
      <MapSection />
    </div>
</main>
  );
};

export default EventDetailsPage;
