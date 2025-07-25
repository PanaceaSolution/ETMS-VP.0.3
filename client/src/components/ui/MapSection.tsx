'use client';

import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

type MapSectionProps = {
  embedUrl?: string;
};

const defaultMapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.287495782597!2d85.38333393488772!3d27.73927719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b9a5a7278ab%3A0x597420f701bfc253!2sGokarneshwor%20Temple!5e0!3m2!1sen!2snp!4v1753423196360!5m2!1sen!2snp';

const defaultMapLink =
  'https://www.google.com/maps/place/Gokarneshwor+Temple/@27.7392772,85.3833339,17z';

const MapSection: React.FC<MapSectionProps> = ({ embedUrl }) => {
  return (
    <section className="w-full flex flex-col items-start px-4 md:px-10 lg:px-[97px] pt-10 md:pt-[120px] gap-6">
      {/* Typography Block */}
      <div className="w-full max-w-[580px] flex flex-col gap-4">
        <h2 className="text-[20px] md:text-[24px] leading-[100%] font-normal font-baumans">
          Location of the Event
        </h2>
        <div className="flex items-center gap-2 text-[24px] md:text-[32px] leading-[100%] font-normal font-baumans text-blue-600 whitespace-normal md:whitespace-nowrap">
          <MapPin className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
          <span>Near Hanuman Chowk, Gokarneshwor‑4</span>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative w-full max-w-[1172px] h-[300px] md:h-[400px] lg:h-[480px] rounded-[5px] overflow-hidden mb-10">
        {/* Google Map iframe (click-through disabled to allow overlay interaction) */}
        <iframe
          title="Event Location"
          src={embedUrl ?? defaultMapEmbedUrl}
          className="w-full h-full pointer-events-none"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Custom View Larger Map button - top left corner */}
        <a
          href={defaultMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            absolute top-4 left-4
            w-[169px] h-[39px]
            px-[10px] py-[11px]
            flex items-center justify-center gap-[10px]
            rounded-[5px] border border-white/50
            bg-[#4B91F1] text-white text-[14px] md:text-[16px] font-baumans
            shadow-md transition-all duration-200 hover:opacity-90
            z-10
          "
        >
          <ExternalLink className="w-4 h-4" />
          View larger map
        </a>
      </div>
    </section>
  );
};

export default MapSection;
