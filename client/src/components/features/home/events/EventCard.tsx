import { FC } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import {EventCardProps} from '@/types/Event';

const EventCard= ({
  id,
  imageUrl,
  title,
  startDate,
  endDate,
  location,
  price,
}: EventCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-h-[483px] max-w-[350px]">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-2/3 object-cover"
    />
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex space-x-2 mb-2 text-gray-600 text-sm">
          <div className="flex items-center space-x-1 border border-gray-200 px-3 py-1 rounded-full">
            <BiCalendar />
            <span>{startDate}</span>
          </div>
          <div className="flex items-center space-x-1 border border-gray-200 px-3 py-1 rounded-full">
            <BiCalendar />
            <span>{endDate}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <GoLocation className="mr-1" />
          <span>{location}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xl font-bold">{price}</span>
        <button
          className="bg-blue-500 cursor-pointer transition-all duration-300 hover:bg-teal-500 text-white text-sm font-medium px-4 py-2 rounded-lg"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
);

export default EventCard;
