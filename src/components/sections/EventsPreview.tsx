import EventCard from "../ui/EventCard";
import { events } from "../../data/events";

export default function EventsPreview() {
  return (
    <section className="bg-beige py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-[1152px] mx-auto flex flex-col gap-16 md:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-orange text-xs font-bold uppercase tracking-[0.5em]">
            Save the Date
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-brown">
            The Events
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-6 lg:gap-10">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}