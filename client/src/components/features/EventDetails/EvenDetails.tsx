import Image from 'next/image';
import React from 'react'

function EventDetails() {
    const terms = [
        "One ticket admits one.",
        "Venue gates open at 4:30 pm. The show will start at 6:30 pm sharp.",
        "Gates will be closed at 7:00 pm. Ticket holders arriving after 7:00 pm may not be permitted to enter and will not be refunded.",
        "Refund of the ticket will only be activated in case of cancellation of the event.",
        "Ticket without valid QR code or entry stub will not be entertained.",
        "Reentry will not be allowed. Please retain the ticket throughout the event.",
        "Right to entry reserved. Intoxicated attendants may be barred from entry.",
        "Bottles, food items, tobacco, cigarettes, lighters, matches are restricted in the concert venue.",
        "Helmets, sharp objects, bags, weapons, explosives, flammable items, intoxicating agents including alcohol are strictly prohibited inside the venue.",
        "In case of accidents including those leading to death, organizers and performers will not be held liable in any way whatsoever.",
        "Unauthorized audio video recording is prohibited.",
        "Children under 5 years are not recommended.",
        "Children under 14 years must be accompanied by an adult.",
        "All tickets are standing areas, please come with comfortable footwear.",
        "Parking around concert venue will be at your own risk.",
    ];

    const data = [
        {
            id: 3,
            organizerName: "abc org",
            locationId: 1,
            name: "App Concert",
            description: "Join us for an unforgettable night with live performances and immersive visuals.",
            eventDate: "2026-08-10T12:00:00.000Z",
            eventTime: "2026-08-10T18:30:00.000Z",
            doorOpeningTime: "2026-08-10T16:30:00.000Z",
            baseTicketPrice: "200",
            eventPhoto: "abc",
            termsAndConditions: "tc",
            status: "active",
            isActive: true,
            createdAt: "2025-07-25T06:19:18.977Z",
            location: {
                id: 1,
                name: "Pokhara",
                address: "Pokhara Metro",
                mapLink: "https://maps.example.com/location"
            }
        }
    ];

    const event = data[0]; // picking the first event for now

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    const formatTime = (dateStr: string) =>
        new Date(dateStr).toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
        });

    return (
        <div className="w-full mx-auto p-6 space-y-6 flex flex-col">

            <div className='flex'>

                <div className="text-start">
                    <h1 className='text-[24px]'> Are you ready to Attend ?</h1>
                    <h1 className="text-[32px] font-bold text-[#4B91F1]">{event.name}</h1>
                    <p className="text-gray-700 mt-2">{event.description}</p>
                    <p className="mt-4">
                        <strong>Event Date:</strong> {formatDate(event.eventDate)}
                    </p>
                    <p>
                        <strong>Event Time:</strong> {formatTime(event.eventTime)}
                    </p>
                    <p>
                        <strong>Location of the event:</strong> {event.location.name} - {event.location.address}
                    </p>
                    <a>
                        <strong>Google Map:</strong>  {event.location.mapLink}
                    </a>
                    <p>
                        <strong>Ticket Price:</strong> Rs. {event.baseTicketPrice}
                    </p>
                </div>

                <div className='md:w-1/2 ' >

                    <Image src="/assets/auth.png" alt='auth.png'

                        height={677} width={630}
                        className=" h-[537px] w-[428.4181823730469px] sm:h-[677px] sm:w-auto object-cover md:w-[1249px] md:h-[677px] "
                    />
                </div>

            </div>

            <button className='w-[134px] h-[42px] bg-[#1EBBD7] text-white rounded-[10px] align-top text-[24px]'>
                Book Now
            </button>
            <div>
                <h2 className="text-[32px] font-semibold text-start text-[#4B91F1]">
                    Terms and Conditions accepted with the purchase of tickets for this event:  
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-gray-700 text-start mt-4 ">
                    {terms.map((term, index) => (
                        <li key={index}>{term}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default EventDetails;
