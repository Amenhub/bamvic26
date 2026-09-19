import Hero from "../components/sections/Hero";
import QuickLinks from "../components/sections/QuickLinks";
import Invite from "../components/sections/Invite";
import Countdown from "../components/sections/Countdown";
import EventsPreview from "../components/sections/EventsPreview";
import StoryPreview from "../components/sections/StoryPreview";
import GalleryPreview from "../components/sections/GalleryPreview";
import DonationCTA from "../components/sections/DOnationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Invite />
      <QuickLinks />
      <Countdown />
      <EventsPreview />
      <StoryPreview />
      <GalleryPreview />
      <DonationCTA />
    </>
  );
}