import { useState } from 'react';
import EventCard from '@/components/features/home/events/EventCard';
import { nowShowingEvents, upcomingEvents } from '@/types/Event';
import UpcomingEvents from './events/UpcomingEvents';

const EventsPage = () => {
  const [showUpcoming, setShowUpcoming] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold">Events</h1>
        <div className="space-x-2">
          <button
            onClick={() => setShowUpcoming(false)}
            className={`px-4 py-2 cursor-pointer font-medium rounded ${
              !showUpcoming
                ? 'bg-blue-500 text-white'
                : 'border border-blue-500 text-blue-500'
            }`}
          >
            Now Showing
          </button>
          <button
            onClick={() => setShowUpcoming(true)}
            className={`px-4 py-2 cursor-pointer font-medium rounded ${
              showUpcoming
                ? 'bg-blue-500 text-white'
                : 'border border-blue-500 text-blue-500'
            }`}
          >
            Upcoming Events
          </button>
        </div>
      </div>

      {showUpcoming ? (
        <UpcomingEvents events={upcomingEvents} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nowShowingEvents.map((ev) => (
            <EventCard key={ev.id} {...ev} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
