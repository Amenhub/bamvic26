import { weddingParty, type PartyMember } from "../data/programme";

type BridalCard = {
  name: string;
  role: string;
  image: string;
};

// Build the arrays from the central data
const parents: BridalCard[] = weddingParty.parents.map((p) => ({
  ...p,
  role: "Parents",
}));

const bestPair: BridalCard[] = [
  {
    name: weddingParty.groomMen.bestMan.name,
    image: weddingParty.groomMen.bestMan.image,
    role: "Best Man",
  },
  {
    name: weddingParty.bridalTrain.chiefBrideMaid.name,
    image: weddingParty.bridalTrain.chiefBrideMaid.image,
    role: "Best Lady",
  },
  {
    name: weddingParty.bridalTrain.littleBride.name,
    image: weddingParty.bridalTrain.littleBride.image,
    role: "Little Bride",
  },
  {
    name: weddingParty.bridalTrain.ringBearer.name,
    image: weddingParty.bridalTrain.ringBearer.image,
    role: "Ring Bearer",
  },
];

const bridalParty: BridalCard[] = weddingParty.bridalTrain.brideMaids.map(
  (member: PartyMember) => ({
    ...member,
    role: "Bridesmaid",
  })
);

const groomsParty: BridalCard[] = [
  ...weddingParty.groomMen.menInUniform.map((member) => ({
    ...member,
    role: "Men in Uniform",
  })),
  ...weddingParty.groomMen.groomMen.map((member) => ({
    ...member,
    role: "Groom's Man",
  })),
];

function PartyGrid({ members, title }: { members: BridalCard[]; title: string }) {
  return (
    <section className="rounded-[28px] border border-brown/10 bg-white p-5 shadow-[0_25px_60px_rgba(58,42,25,0.04)] md:p-8">
      <div className="mb-8 text-center md:text-left">
        <h2 className="mt-3 font-serif text-3xl text-brown md:text-5xl">
          Our {title}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <a
            key={`${title}-${member.name}`}
            href={member.image}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-[24px] border border-brown/10 bg-[#f9f5f0] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(58,42,25,0.08)]"
            aria-label={`View larger image of ${member.name}`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-[420px] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
            />
            <div className="space-y-2 p-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange">
                {member.role}
              </p>
              <p className="font-serif text-xl text-brown">{member.name}</p>
            </div>
          </a>
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