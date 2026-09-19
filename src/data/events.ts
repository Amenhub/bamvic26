export type WeddingEvent = {
  eyebrow: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  featured?: boolean;
};

export const events: WeddingEvent[] = [
  {
    eyebrow: "The Traditional",
    title: "Engagement",
    date: "7 November 2026",
    time: "7:00 AM",
    venue: "Behind Igboole Community Nursery and Primary School, Osi Road, Igboole, Ekiti.",
  },
  {
    eyebrow: "The Holy Matrimony",
    title: "Wedding Service",
    date: "7 November 2026",
    time: "10:00 AM",
    venue: "Our Savior's Anglican Church, Igboole, Ekiti.",
    featured: true,
  },
  {
    eyebrow: "The Grand Gala",
    title: "Reception",
    date: "7 November 2026",
    time: "12:00 PM",
    venue: "Igboole Ekiti Town hall",
  },
];