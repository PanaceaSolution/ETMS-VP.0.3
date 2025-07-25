"use client";
import React from "react";
import Image from "next/image";

interface ArtistModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  name: string;
  role: string;
  description: string;
}

const ArtistModal: React.FC<ArtistModalProps> = ({
  isOpen,
  onClose,
  image,
  name,
  role,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
      <div className="bg-[#D9F3FF] w-full max-w-5xl rounded-xl shadow-xl flex flex-col lg:flex-row items-start p-6 relative gap-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-[#2B7BDB] font-bold hover:opacity-75"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Left Image Section */}
        <div className="relative w-full lg:w-[300px] h-[400px] flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex-1 text-black overflow-y-auto max-h-[400px] pr-2">
          <h2 className="text-2xl font-bold text-[#2B7BDB] uppercase mb-1">{name}</h2>
          <p className="font-medium text-md mb-4">{role}</p>
          <p className="text-sm leading-relaxed whitespace-pre-line mb-6">{description}</p>
          <button className="bg-[#22C9F1] text-white px-4 py-2 rounded hover:bg-[#1bb9dc] transition">
            View Upcoming Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistModal;
