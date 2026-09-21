export type StoryChapter = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  align: "left" | "right";
};

export const storyChapters: StoryChapter[] = [
  {
    id: "beginning",
    eyebrow: "The Beginning",
    title: "A Shared Chapter",
    paragraphs: [
      "Their story began in Ilorin, in a season neither of them knew would become the beginning of something so beautiful.",
      "She had come for her M.A. programme, and he became her graphic design teacher. At the time, there was nothing romantic about their relationship. He was simply her teacher, and she was his student.",
      "He was attentive, available, and surprisingly lenient with her, even though she considered him to be quite strict. Little did either of them know that what looked like an ordinary connection was quietly becoming the foundation of their love story.",
    ],
    image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789909844/WhatsApp_Image_2026-09-20_at_14.02.39_lzsgnn.jpg",
    imageAlt: "As a teacher and student they are",
    align: "left",
  },
  {
    id: "shift",
    eyebrow: "The Shift",
    title: "When \u201CNever\u201D Became \u201CMaybe\u201D",
    paragraphs: [
      "If anyone had told her then that she would one day marry him, she probably would have laughed. For months, she confidently declared that she could never date him.",
      "As the months passed, however, conversations became more frequent, familiarity grew, and the connection began to change. What started as a simple teacher-student relationship slowly became a friendship.",
      "Sometimes, love doesn't announce itself. It simply grows quietly until one day, you realize it has been there all along.",
    ],
    image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789909819/WhatsApp_Image_2026-09-20_at_14.02.35_2_vxcjfl.jpg",
    imageAlt: "The two lover in native wear",
    align: "right",
  },
  {
    id: "commitment",
    eyebrow: "The Commitment",
    title: "The Confession & The Journey",
    paragraphs: [
      "Then came the confession. After countless conversations, he finally said what had been on his heart — he was in love with her.",
      "Over the next three years and three months, they grew together, learning each other, building friendship, sharing laughter, and discovering what it truly means to love and be loved.",
      "What began in a classroom eventually found its way into a relationship, and that relationship has now brought them to the most beautiful decision of all — to choose each other for life.",
    ],
    image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439245/DSC_1240_hzf9qd.jpg",
    imageAlt: "A couple standing on a walk path",
    align: "left",
  },
];