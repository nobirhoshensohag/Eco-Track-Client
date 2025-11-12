import React from "react";
import { Link } from "react-router";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaUsers } from "react-icons/fa";

const EventsCard = ({ event }) => {
  const {
    _id,
    title,
    description,
    date,
    location,
    organizer,
    maxParticipants,
    currentParticipants,
  } = event;

  const formattedDate = new Date(date).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="card w-full max-w-md bg-white border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-2xl">
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-semibold text-[#297B33]">
          {title}
        </h2>
        <p className="text-gray-600">{description}</p>

        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#297B33]" /> {formattedDate}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#297B33]" /> {location}
          </p>
          <p className="flex items-center gap-2">
            <FaUser className="text-[#297B33]" /> {organizer}
          </p>
          <p className="flex items-center gap-2">
            <FaUsers className="text-[#297B33]" /> {currentParticipants} / {maxParticipants} participants
          </p>
        </div>

        <div className="card-actions justify-end mt-5">
          <Link
            to={`/events/${_id}`}
            className="btn btn-sm text-white bg-[#297B33] hover:bg-[#82B532] border-none rounded-full transition-all"
          >
            View Event Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;