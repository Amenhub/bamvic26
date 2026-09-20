import { useState } from "react";
import PageHero from "../components/sections/PageHero";
import GalleryFilter from "../components/ui/GalleryFilter";
import GalleryGrid from "../components/sections/GalleryGrid";
import { galleryItems, videos, type GalleryFilterValue } from "../data/gallery";
import VideoGrid from "../components/sections/VideoGrid";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilterValue>("all");

  return (
    <>
      <PageHero
        eyebrow="Capturing the Love"
        title="Our Gallery"
        subtitle="Ayobami & Israel"
        image="https://res.cloudinary.com/dskyahrkd/image/upload/v1788439240/DSC_1239_pgm5za.jpg"
      />

      <GalleryFilter active={activeFilter} onChange={setActiveFilter} />

      {activeFilter === "videos" ? (
        <VideoGrid videos={videos} />
      ) : (
        <GalleryGrid items={galleryItems} filter={activeFilter} />
      )}
    </>
  );
}