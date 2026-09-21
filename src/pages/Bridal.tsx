import { bridalTrain, groomMen } from "../data/programme";

type BridalCard = {
  name: string;
  role: string;
  image: string;
};

const parents: BridalCard[] = [
  { name: "Bride's Father", role: "Parents", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" },
  { name: "Bride's Mother", role: "Parents", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80" },
  { name: "Groom's Father", role: "Parents", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80" },
  { name: "Groom's Mother", role: "Parents", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
];

const bestPair: BridalCard[] = [
  { name: groomMen.bestMan, role: "Best Man", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" },
  { name: bridalTrain.chiefBrideMaid, role: "Best Lady", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { name: bridalTrain.littleBride, role: "Little Bride", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80" },
  { name: "Little Bride II", role: "Little Bride", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80" },
];

const bridalParty: BridalCard[] = bridalTrain.brideMaids.map((name) => ({
  name,
  role: "Bridesmaid",
  image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
}));

const groomsParty: BridalCard[] = [
  ...groomMen.menInUniform.map((name) => ({
    name,
    role: "Men in Uniform",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  })),
  ...groomMen.groomMen.map((name) => ({
    name,
    role: "Groom's Man",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  })),
];

function PartyGrid({ members, title }: { members: BridalCard[]; title: string }) {
  return (
    <section className="rounded-[28px] border border-brown/10 bg-white p-5 shadow-[0_25px_60px_rgba(58,42,25,0.04)] md:p-8">
      <div className="mb-8 text-center md:text-left">
        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-orange">
          The People
        </p>
        <h2 className="mt-3 font-serif text-3xl text-brown md:text-5xl">
          {title}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <article
            key={`${title}-${member.name}`}
            className="overflow-hidden rounded-[24px] border border-brown/10 bg-[#f9f5f0]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-[420px] w-full object-cover object-center"
            />
            <div className="space-y-2 p-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange">
                {member.role}
              </p>
              <p className="font-serif text-xl text-brown">{member.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Bridal() {
  return (
    <main className="bg-[#f8f5f1] px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1500px] space-y-10">
        <header className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-orange">
            Our Celebration
          </p>
          <h1 className="mt-4 font-serif text-4xl text-brown md:text-6xl">
            Our Circle
          </h1>
        </header>

        <PartyGrid members={parents} title="Parents" />
        <PartyGrid members={bestPair} title="Best Man & Best Lady" />
        <PartyGrid members={bridalParty} title="Bridal Train" />
        <PartyGrid members={groomsParty} title="Groom's Men" />
      </div>
    </main>
  );
}