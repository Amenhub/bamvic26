export type GalleryFilterValue =
  | "all"
  | "pre-wedding"
  | "traditional"
  | "engagement"
  | "videos";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryFilterValue, "all" | "videos">;
};

// Home page preview — 4 hero images
export const galleryPreview: GalleryItem[] = [
  {
    id: "preview-1",
    src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439191/DSC_1046_l0tmfp.jpg",
    alt: "Ayobami and Victor walking hand in hand",
    category: "pre-wedding",
  },
  {
    id: "preview-2",
    src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439195/DSC_1076_hx7lam.jpg",
    alt: "Ayobami and Victor laughing together",
    category: "pre-wedding",
  },
  {
    id: "preview-3",
    src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439245/DSC_1262_aoltav.jpg",
    alt: "The engagement ring",
    category: "engagement",
  },
  {
    id: "preview-4",
    src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789760413/IMG_4271_1_k8lmor.png",
    alt: "Ayobami and Victor portrait",
    category: "pre-wedding",
  },
];

// Full gallery — for the Gallery page
export const galleryItems: GalleryItem[] = [
  // Pre-wedding
  { id: "pw-1", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789893453/Studio_1_j2cqhj.jpg", alt: "Pre-wedding 1", category: "pre-wedding" },
  { id: "pw-2", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439245/DSC_1258_yxgqul.jpg", alt: "Pre-wedding 2", category: "pre-wedding" },
  { id: "pw-3", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439245/DSC_1240_hzf9qd.jpg", alt: "Pre-wedding 3", category: "pre-wedding" },
  { id: "pw-4", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439231/DSC_1205_kxgodc.jpg", alt: "Pre-wedding 4", category: "pre-wedding" },
  { id: "pw-5", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439226/DSC_1177_umoakb.jpg", alt: "Pre-wedding 5", category: "pre-wedding" },
  { id: "pw-6", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439221/DSC_1176_sn7wx7.jpg", alt: "Pre-wedding 6", category: "pre-wedding" },
  { id: "pw-7", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439204/DSC_1104_lnmiqf.jpg", alt: "Pre-wedding 7", category: "pre-wedding" },
  { id: "pw-8", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439200/DSC_1097_afwpc0.jpg", alt: "Pre-wedding 8", category: "pre-wedding" },
  { id: "pw-9", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439195/DSC_1082_cy2zws.jpg", alt: "Pre-wedding 9", category: "pre-wedding" },
  { id: "pw-10", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439191/DSC_1046_l0tmfp.jpg", alt: "Pre-wedding 10", category: "pre-wedding" },
  { id: "pw-11", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439181/DSC_1032_aes7ww.jpg", alt: "Pre-wedding 11", category: "pre-wedding" },
  { id: "pw-12", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439185/DSC_1036_jy7ehk.jpg", alt: "Pre-wedding 12", category: "pre-wedding" },
  { id: "pw-13", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439177/DSC_1053_cowanz.jpg", alt: "Pre-wedding 13", category: "pre-wedding" },
  { id: "pw-14", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439240/DSC_1239_pgm5za.jpg", alt: "Pre-wedding 14", category: "pre-wedding" },
  { id: "pw-15", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439236/DSC_1186_ae7rrw.jpg", alt: "Pre-wedding 15", category: "pre-wedding" },
  { id: "pw-16", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439194/DSC_1068_ydrkmk.jpg", alt: "Pre-wedding 16", category: "pre-wedding" },
  { id: "pw-17", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439211/DSC_1144_vxwwg7.jpg", alt: "Pre-wedding 17", category: "pre-wedding" },
  { id: "pw-18", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439210/DSC_1140_ks4gh5.jpg", alt: "Pre-wedding 18", category: "pre-wedding" },
  { id: "pw-19", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439216/DSC_1145_yufeze.jpg", alt: "Pre-wedding 19", category: "pre-wedding" },
  { id: "pw-20", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439219/DSC_1163_ev3exv.jpg", alt: "Pre-wedding 20", category: "pre-wedding" },
  { id: "pw-21", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439220/DSC_1159_vhurmh.jpg", alt: "Pre-wedding 21", category: "pre-wedding" },
  { id: "pw-22", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439231/DSC_1215_g2mxnc.jpg", alt: "Pre-wedding 22", category: "pre-wedding" },
  { id: "pw-23", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439226/DSC_1201_vwyzm1.jpg", alt: "Pre-wedding 23", category: "pre-wedding" },
  { id: "pw-24", src: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789758660/eh_q6jqwh.jpg", alt: "Pre-wedding 24", category: "pre-wedding" },
  
/* Traditional
  { id: "tr-1", src: "/images/gallery/traditional/1.jpg", alt: "Traditional 1", category: "traditional" },
  { id: "tr-2", src: "/images/gallery/traditional/2.jpg", alt: "Traditional 2", category: "traditional" },
  { id: "tr-3", src: "/images/gallery/traditional/3.jpg", alt: "Traditional 3", category: "traditional" },
  { id: "tr-4", src: "/images/gallery/traditional/4.jpg", alt: "Traditional 4", category: "traditional" },

  // Engagement
  { id: "en-1", src: "/images/gallery/engagement/1.jpg", alt: "Engagement 1", category: "engagement" },
  { id: "en-2", src: "/images/gallery/engagement/2.jpg", alt: "Engagement 2", category: "engagement" },
  { id: "en-3", src: "/images/gallery/engagement/3.jpg", alt: "Engagement 3", category: "engagement" }, */
];

// Video gallery — for the Videos page
export type VideoSource = "youtube" | "cloudinary";

export type VideoItem = {
  id: string;
  title: string;
  thumbnail: string;
  source: VideoSource;
  videoId: string;
  duration?: string;
  featured?: boolean;
  isLive?: boolean;
};

export const liveEventVideo: VideoItem = {
  id: "live-ceremony",
  title: "Live Wedding Ceremony",
  thumbnail: "/images/videos/live-standby.jpg",
  source: "cloudinary",
  videoId: "live_stream_ee8f7a3b93214646bfd263d2e22ec82e_hls",
  duration: "Live now",
  featured: true,
  isLive: true,
};

export const videos: VideoItem[] = [
  {
    id: "vid-1",
    title: "Our Pre-Wedding Story (version 1)",
    thumbnail: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439240/DSC_1239_pgm5za.jpg",
    source: "cloudinary",
    videoId: "v1789910638/Bamifeiiv_vkyg2m",
  },
  {
    id: "vid-2",
    title: "Our Pre-Wedding Story (version 2)",
    thumbnail: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439195/DSC_1087_grrgjq.jpg",
    source: "cloudinary",
    videoId: "Bamitifeaiv2_ihgn9k",
  },
];