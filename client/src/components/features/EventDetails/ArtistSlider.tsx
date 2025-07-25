"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ArtistModal from "./ArtistModal";

const artists = [
  {
    name: "Amrit Gurung",
    role: "Vocalist",
    image: "/assets/amrit.png",
    description:
      "Amrit Gurung is the lead vocalist with over 15 years of stage experience and a passionate performer.",
  },
  {
    name: "Dhurba Lama",
    role: "Drums",
    image: "/assets/amrit.png",
    description: "Dhurba is known for his dynamic drumming style and precision.",
  },
  {
    name: "Niraj Gurung",
    role: "Lead Guitar",
    image: "/assets/amrit.png",
    description: "Niraj’s guitar solos bring electrifying energy to the band.",
  },
  {
    name: "Shanti Rayamajhi",
    role: "Madal",
    image: "/assets/amrit.png",
    description: "Shanti adds traditional rhythms with expert Madal performances.",
  },
  {
    name: "Extra Artist",
    role: "Bass",
    image: "/assets/amrit.png",
    description: "Extra Artist provides the deep bass grooves that hold the music together.",
  },
  {
    name: "Another Artist",
    role: "Percussion",
    image: "/assets/amrit.png",
    description: "Percussionist with rich experience in various rhythms and beats.",
  },
  {
    name: "More Artist",
    role: "Percussion",
    image: "/assets/amrit.png",
    description: "A versatile percussionist bringing diverse sounds to the band.",
  },
  {
    name: "Last Artist",
    role: "Percussion",
    image: "/assets/amrit.png",
    description: "Last Artist completes the percussion section with finesse.",
  },
];

function useResponsivePerSlide() {
  const [perSlide, setPerSlide] = React.useState(4);

  React.useEffect(() => {
    const updatePerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPerSlide(1);
      } else if (width < 1024) {
        setPerSlide(2);
      } else if (width < 1280) {
        setPerSlide(3);
      } else {
        setPerSlide(4);
      }
    };

    updatePerSlide();
    window.addEventListener("resize", updatePerSlide);
    return () => window.removeEventListener("resize", updatePerSlide);
  }, []);

  return perSlide;
}

const ArtistSlider = () => {
  const perSlide = useResponsivePerSlide();

  // Modal state
  const [selectedArtist, setSelectedArtist] = useState(null);

  const groups = React.useMemo(() => {
    const grouped = [];
    for (let i = 0; i < artists.length; i += perSlide) {
      grouped.push(artists.slice(i, i + perSlide));
    }
    return grouped;
  }, [perSlide]);

  const openModal = (artist) => {
    setSelectedArtist(artist);
  };

  const closeModal = () => {
    setSelectedArtist(null);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <div className="relative max-w-[1440px] mx-auto">
        <Carousel>
          <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white text-[#2B7BDB] w-10 h-10 rounded-full shadow" />
          <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white text-[#2B7BDB] w-10 h-10 rounded-full shadow" />

          <CarouselContent className="flex">
            {groups.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="flex gap-6 justify-center">

                {group.map((artist, index) => (
                  <Card
                    key={index}
                    className="w-[274px] h-[494px] bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
                    onClick={() => openModal(artist)}
                  >
                    <div className="relative w-[274px] h-[427px]">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        className="object-cover rounded-[10px]"
                        sizes="(max-width: 640px) 100vw, 274px"
                      />
                    </div>
                    <CardContent className="text-center py-3">
                      <p className="text-[#2B7BDB] font-semibold text-lg">{artist.name}</p>
                      <p className="text-black text-sm">{artist.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {selectedArtist && (
          <ArtistModal
            isOpen={!!selectedArtist}
            onClose={closeModal}
            image={selectedArtist.image}
            name={selectedArtist.name}
            role={selectedArtist.role}
            description={selectedArtist.description}
          />
        )}
      </div>
    </div>
  );
};

export default ArtistSlider;
