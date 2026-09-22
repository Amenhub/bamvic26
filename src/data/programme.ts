export type ContentBlock =
  | { type: "paragraph" | "yoruba" | "note" | "verse"; text: string }
  | { type: "dialogue"; speaker: string; text: string };

export type Hymn = {
  id: string;
  title: string;
  yorubaTitle?: string;
  verses: string[];
  yorubaVerses?: string[];
};

export type ProgrammeItem = {
  id: string;
  title: string;
  note?: string;
  content?: ContentBlock[];
};

export type TeamMember = {
  role: string;
  name: string;
};

export type PartyMember = {
  name: string;
  image: string;
};

// ============================================================
// OFFICIATING TEAM
// ============================================================
export const officiatingTeam = [
  { role: "Vicar", name: "The Rev'd Sam. Ayo Akinwunmi" },
  { role: "Archdeacon of Osi Archdeaconry", name: "The Ven. Favour O. Olumakinde" },
  { role: "Bishop Diocese of Ekiti Oke (DEO)", name: "The Rt. Rev. Dr. Julius Oyetunde Oyediran" },
]

export const churchOfficers = [
  { role: "Organist", name: "Mr Samuel Oluwole" },
  { role: "Pastor's Warden", name: "Mrs E.B. Lawal" },
  { role: "People's Warden", name: "Mr Abraham Fasae" },
  { role: "Verger 1", name: "Mr Ilesami Omoniyi" },
  { role: "Verger 2", name: "Mr Sunday Oluyede" },
];

// ============================================================
// WEDDING PARTY
// ============================================================
export type WeddingParty = {
  parents: PartyMember[];
  bridalTrain: {
    chiefBrideMaid: PartyMember;
    littleBride: PartyMember;
    ringBearer: PartyMember;
    brideSister: PartyMember;
    brideMaids: PartyMember[];
  };
  groomMen: {
    bestMan: PartyMember;
    menInUniform: PartyMember[];
    groomMen: PartyMember[];
  };
};

export const weddingParty: WeddingParty = {
  parents: [
    {
      name: "Bride's Father",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1790012194/Dad_Ayo_bmyimk.jpg",
    },
    {
      name: "Bride's Mother",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789999217/MUm_Ayo_kecm8a.jpg",
    },
    {
      name: "Groom's Father",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1790028287/dad_jof4lv.png",
    },
    {
      name: "Groom's Mother",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1790012086/mum_dl06ck.png",
    },
  ],

  bridalTrain: {
    chiefBrideMaid: {
      name: "Racheal Ayomide",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1790001952/Racheal_hskqnp.png",
    },
    littleBride: {
      name: "OGUNTUNDE Ayomide Mercy",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1790001952/AyomideG_qmc2q8.png",
    },
    ringBearer: {
      name: "Akinwunmi Fogofoluwa Maxwell",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789999218/WhatsApp_Image_2026-09-18_at_10.08.14_mhg6e7.jpg",
    },
    brideSister: {
      name: "Ayotomiwa Jawolusi",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789999219/AYOTOMIWA_esrdwi.png",
    },
      brideMaids: [
      { name: "Adaralegbe Oluwafunmilayo", image: "" },
      { name: "AGBOOLA Esther",            image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789999219/ESTHER_au5lzc.png" },
      { name: "AKINLOYE Ifeolowa",         image: "" },
      { name: "AJIBI Oluwapelumi",         image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789997336/OLUWAPELUMI_lx56es.png" },
      { name: "ADEBAYO Mololuwa Mary",     image: "" },
      { name: "OYEBODE Temitope",          image: "" },
    ],
  },

  groomMen: {
    bestMan: {
      name: "AYINDE Dickson",
      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789999217/Dickson2_th3c8p.jpg",
    },
    menInUniform: [
      { name: "FEMI-ADESINA Ajolayo", image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789997334/Ajolayo_vgwbts.jpg" },
      { name: "IBIYOMI Stephen Olamide",      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789997337/Stephen_zbj0iw.jpg" },
      { name: "OJO Ayomide Enoch",            image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789997335/Ayomide_r2byiv.jpg" },
    ],
    groomMen: [
      { name: "ONI Ifeoluwa Olayinka",   image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789997336/IFEoluwa_cxpq7h.jpg" },
      { name: "OJO Ayomikun Moses",      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789997334/Ayomikun_v7qonh.jpg" },
      { name: "BAMIGBADE Aderinto",      image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1790004419/Aderinto_hinjgg.jpg" },
      { name: "BADA Babalola Oluwapamilerinayo",    image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789997335/Pamilerin_zwpppy.jpg" },
      { name: "OGUNDIRAN Damilare Feranni",          image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1789997336/Ferami_qedzi1.jpg" },
    ],
  },
};

// ============================================================
// ORDER OF PHOTOGRAPHY
// ============================================================
export const photographyOrder: string[] = [
  "Officiating Ministers",
  "Bridal Train",
  "Bride's Parents",
  "Groom's Parents",
  "Both Parents",
  "Bride's family",
  "Groom's family",
  "Both families",
  "Bride's friends",
  "Groom's friends",
  "Both friends",
  "New Heritage Baptist Church, Ilorin",
  "Kings and Queens",
  "Amazing Sisters",
  "Ladoke Akintola University of Technology (LAUTECH) Staff",
  "Bride and Chief Bride's Maid alone",
  "Groom and Best Man alone",
  "Chief Bride's Maid and Best Man alone",
  "Couple with Chief Bride's Maid and Best Man",
  "Couple alone",
  "Bride alone",
  "Groom alone",
];

// ============================================================
// RECEPTION ORDER
// ============================================================
export const receptionOrder: ProgrammeItem[] = [
  { id: "arrival-of-guests",          title: "Arrival of Guests" },
  { id: "to-the-high-table",          title: "To the High Table" },
  { id: "couples-entrance",           title: "Couples Entrance" },
  { id: "opening-prayer",             title: "Opening Prayer" },
  { id: "chairmans-opening-remarks",  title: "Chairman's Opening Remarks" },
  { id: "cutting-of-cake",            title: "Cutting of Cake" },
  { id: "first-assignment",           title: "First Assignment" },
  { id: "toast-to-the-couple",        title: "Toast to the Couple" },
  { id: "couple-dance-with-parents",  title: "Couple dance with Parents" },
  { id: "dance-by-latest-couple",     title: "Dance by the latest Couple" },
  { id: "presentation-of-gifts",      title: "Presentation of Gifts" },
  { id: "vote-of-thanks",             title: "Vote of Thanks" },
  { id: "closing-prayer",             title: "Closing Prayer" },
  { id: "dance-dance-dance",          title: "Dance! Dance!! Dance!!!" },
];

export const churchOrderEnglish: ProgrammeItem[] = [
  {
    id: "hymn-1",
    title: "Processional Hymn",
    note: "Praise my soul the King of Heaven",
  },
  {
    id: "introduction",
    title: "Introduction",
    content: [
      { type: "note", text: "The congregation remains standing as the Bride and Groom stand before the Priest." },
      {
        type: "dialogue",
        speaker: "Priest",
        text:
          "Dear beloved, we have come together in the presence of God to witness and to celebrate the marriage of AYOBAMI OLAJUMOKE and ISRAEL VICTOR, to ask His blessings on them, and to share in their joy. Our Lord Jesus Christ was Himself a guest at a wedding in Cana of Galilee and blessed this way of life, and through His Spirit, He is with us now.",
      },
      {
        type: "paragraph",
        text:
          "The Scriptures teach us that marriage is a gift of God in creation and a means of His grace, a holy mystery in which man and woman become one flesh. It is God's purpose that as husband and wife give themselves to each other in love throughout their lives, they shall be united in their love as Christ is united with His Church.",
      },
      { type: "paragraph", text: "Lastly, it is given that they may have children. And be blessed in caring for them and bringing them in accordance with God's will to His praise and glory" },
      {
        type: "paragraph",
        text:
          "Marriage is given primarily so that husband and wife may comfort and help each other, living faithfully together in need and in plenty, in sorrow and in joy. It is also given that with delight and tenderness, they may know each other in love and, through the joy of their union, may strengthen the union of their hearts and lives.",
      },
      {
        type: "paragraph",
        text:
          "In marriage, husband and wife belong to one another and are linked to each other's families as they begin a new life together in the community. This is the way of life that all should honour. And it must not be undertaken carelessly, lightly, or selfishly. But reverently, responsibly, and after serious thought. Into this way of life, OLAJUMOKE and ISRAEL VICTOR come to be joined.",
      },
      {
        type: "paragraph",
        text:
          "If any of you can show any just cause why they may not be lawfully married, you must now declare it — now or forever hold your peace.",
      },
      { type: "note", text: "If there is no impediment declared, the Minister continues." },
    ],
  },
  {
    id: "declaration",
    title: "Declaration",
    content: [
      { type: "note", text: "The Priest says to the couple." },
      {
        type: "paragraph",
        text:
          "AYOBAMI OLAJUMOKE and ISRAEL VICTOR, the vows you are about to make are to be made in the name of God, and I charge you both, as you will answer before God, who is the judge of all and who knows all the secrets of our hearts, that if either of you knows a reason why you may not be lawfully married, you must declare it now.",
      },
      { type: "note", text: "If no impediment is declared, the Minister continues." },
      {
        type: "dialogue",
        speaker: "Priest",
        text: "ISRAEL VICTOR, of your own free choice, will you take AYOBAMI OLAJUMOKE to be your wife?",
      },
      { type: "dialogue", speaker: "Groom", text: "I will." },
      {
        type: "dialogue",
        speaker: "Priest",
        text:
          "Will you love her, comfort her, honour and protect her, in sickness and in health, in poverty and prosperity, and, forsaking all others, be faithful to her as long as you both live?",
      },
      { type: "dialogue", speaker: "Groom", text: "I will." },
      {
        type: "dialogue",
        speaker: "Priest",
        text: "AYOBAMI OLAJUMOKE, of your own free choice, will you take ISRAEL VICTOR to be your husband?",
      },
      { type: "dialogue", speaker: "Bride", text: "I will." },
      {
        type: "dialogue",
        speaker: "Priest",
        text:
          "Will you love him, comfort him, honour and protect him, in sickness and in health, in poverty and prosperity, and, forsaking all others, be faithful to him as long as you both live?",
      },
      { type: "dialogue", speaker: "Bride", text: "I will." },
    ],
  },
  {
    id: "hymn-2",
    title: "Hymn 2",
    note: "The Voice that Breathed O'er Eden",
  },
  {
    id: "marriage",
    title: "The Marriage",
    content: [
      {
        type: "dialogue",
        speaker: "Priest",
        text: "Who gives this woman to be married to this man?",
      },
      { type: "dialogue", speaker: "Father", text: "I do." },
      {
        type: "note",
        text: "The Priest, receiving the bride from the hand of her father, causes the man to take the woman by his right hand and face her. The Bridegroom says:",
      },
      {
        type: "dialogue",
        speaker: "Groom",
        text:
          "I, ISRAEL VICTOR, take you, AYOBAMI OLAJUMOKE, to be my wife, to have and to hold, from this day forward, for better for worse, for richer for poorer, in sickness and in health, to love and to cherish, until we are parted by death, according to God's holy law. This is my solemn vow.",
      },
      {
        type: "note",
        text: "They loose hands. The Bride takes the Bridegroom by the right hand and says:",
      },
      {
        type: "dialogue",
        speaker: "Bride",
        text:
          "I, AYOBAMI OLAJUMOKE, take you, ISRAEL VICTOR, to be my husband, to have and to hold, from this day forward, for better for worse, for richer for poorer, in sickness and in health, to love and to cherish, until we are parted by death, according to God's holy law. This is my solemn vow.",
      },
      {
        type: "dialogue",
        speaker: "Priest",
        text: "And what token do you share to represent your love and commitment to each other?",
      },
      { type: "note", text: "The Priest receives the ring, holds it up, and says:" },
      {
        type: "dialogue",
        speaker: "Priest",
        text:
          "The ring is a symbol of wholeness and perfection. It is made of gold, which is a precious and durable metal. What better representation of your feelings for each other?",
      },
      {
        type: "paragraph",
        text:
          "Heavenly Father, by your blessing, let these rings be to AYOBAMI OLAJUMOKE and ISRAEL VICTOR a symbol of an unending love and faithfulness, to remind them of the vow and covenant which they have made this day, through Jesus Christ our Lord.",
      },
      {
        type: "note",
        text: "The Bridegroom places the ring on the fourth finger of the Bride's left hand, and holding it there, says:",
      },
      {
        type: "dialogue",
        speaker: "Groom",
        text:
          "I give you this ring as a sign of our marriage; with my body I honour you, all that I am, I give to you, and all that I have I share with you, within the love of God the Father, Son, and Holy Spirit. Amen.",
      },
      {
        type: "note",
        text: "The Bride places the ring on the fourth finger of the Bridegroom's left hand, and holding it there, says:",
      },
      {
        type: "dialogue",
        speaker: "Bride",
        text:
          "I give you this ring as a sign of our marriage; with my body I honour you, all that I am, I give to you, and all that I have I share with you, within the love of God the Father, Son, and Holy Spirit. Amen.",
      },
      {
        type: "dialogue",
        speaker: "Priest",
        text:
          "Now that AYOBAMI OLAJUMOKE and ISRAEL VICTOR have given their consent and made their vows to each other before God and this congregation, with the joining of hands and the giving and receiving of rings, I declare that they are husband and wife in the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      },
      { type: "paragraph", text: "Those whom God has joined together, let no man put asunder." },
      { type: "note", text: "The Priest blesses them." },
      {
        type: "paragraph",
        text:
          "God the Father, God the Son, God the Holy Spirit, bless, preserve and keep you. The Lord pour upon you the riches of His grace, that you may faithfully live together and receive the blessings of eternal life, through Jesus Christ our Lord. Amen.",
      },
      {
        type: "dialogue",
        speaker: "Priest",
        text: "As AYOBAMI OLAJUMOKE and ISRAEL VICTOR enter a new life together, will you, their parents…",
      },
      { type: "dialogue", speaker: "Congregation", text: "We shall." },
      {
        type: "dialogue",
        speaker: "Priest",
        text:
          "You, as friends and family, have come to witness this exchange of vows. Will you, with all your power, support this marriage now and in the years ahead?",
      },
      { type: "dialogue", speaker: "The People", text: "We shall." },
    ],
  },
  {
    id: "acclamation",
    title: "The Acclamation",
    content: [
      { type: "note", text: "The Bridegroom's mother comes forward." },
      {
        type: "dialogue",
        speaker: "Priest",
        text:
          "In the name of God and in the presence of His congregation, we hand over former MISS AYOBAMI OLAJUMOKE — now MRS. AYOBAMI OLAJUMOKE — as a full member of your family. Will you promise, on behalf of your family, to continue to uphold them in prayer and give them your moral support?",
      },
      { type: "dialogue", speaker: "Groom's Mother", text: "I promise so in the name of God." },
      {
        type: "paragraph",
        text:
          "Let us pray. Eternal God, creator and sustainer of us all, give your grace to the family of VICTOR and AYOBAMI. Grant them that in the years to come they may be united in your love and in the strength of the Holy Spirit, and may live together in the love, joy and peace of our Saviour Jesus Christ. Amen.",
      },
    ],
  },
  {
    id: "hymn-3",
    title: "Hymn 3",
    note: "God Give Us Christian Home",
  },
  {
    id: "ministry",
    title: "The Ministry of the Word",
    content: [
      { type: "paragraph", text: "1 Corinthians 13:1–13 — to be read by the Bride." },
      { type: "paragraph", text: "Colossians 3:12–19 — to be read by the Bridegroom." },
    ],
  },
  {
    id: "hymn-4",
    title: "Hymn 4",
    note: "Jesus, My Lord, My God, My All",
  },
  {
    id: "sermon",
    title: "Sermon",
  },
  {
    id: "hymn-5",
    title: "Hymn 5",
    note: "O Perfect Love — to be sung kneeling",
  },
  {
    id: "closing-prayers",
    title: "Closing Prayers",
    content: [
      {
        type: "paragraph",
        text:
          "God of our ancestors, you are worthy of praise. May your name be honoured forever and ever by all your creatures in heaven and on earth. You said, 'It is not good for a man to be alone. I will make a suitable helper for him.' You created Adam and gave him Eve to be his helper and support. They became the parents of all mankind.",
      },
      {
        type: "paragraph",
        text:
          "Lord, I have chosen AYOBAMI / VICTOR to be my spouse, because it is right — not because I lusted after him/her. Please, be merciful to us so that we may grow old together. Grant us your mercy and protection. Let us live our lives in happiness and love. Give us children and guide us to bring them up to your honour and glory. We pray that you will grant our requests through Jesus Christ our Lord.",
      },
      {
        type: "dialogue",
        speaker: "Priest",
        text:
          "Heavenly Father, Maker of all things, you enable us to share in your work of creation. Bless this couple with the gift and care of children, that their home may be a place of love, security and truth, and their children grow up to know You and Your only begotten Son, Jesus Christ our Lord. Amen.",
      },
    ],
  },
  {
    id: "benediction",
    title: "Benediction",
    content: [
      {
        type: "paragraph",
        text:
          "May the Lord guide you and direct you.\nMay His words instruct and inspire all you do.\nMay His arms uphold and defend you.\nMay His heavenly hosts surround and guard you.",
      },
      {
        type: "paragraph",
        text:
          "May His light surround you and lighten your darkness.\nMay His love enfold, abound in, and flow through you.\nMay His presence be felt around you.",
      },
      {
        type: "paragraph",
        text:
          "May the blessing of God Almighty — Father, Son, and Holy Spirit — abide with you and remain with you always. Amen.",
      },
    ],
  },
  { id: "signing", title: "Signing of the Marriage Register" },
  { id: "thanksgiving", title: "Thanksgiving" },
  { id: "announcement", title: "Announcement" },
  { id: "withdrawal", title: "Withdrawal Hymn", note: "To God Be the Glory" },
];

// ============================================================
// CHURCH SERVICE — ETO ISIN (Yoruba)
// ============================================================
export const churchOrderYoruba: ProgrammeItem[] = [
  {
    id: "orin-akowole",
    title: "Orin Akowole",
    note: "Okan mi yin Oba Orun",
  },
  {
    id: "oro-iyanju",
    title: "Oro Iyanju",
    content: [
      {
        type: "note",
        text: "Ijo yoo wa ni iduro bi Iyawo ati Oko Iyawo ti duro niwaju Alufa.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "Olufe owon, awa pejo niwaju Olorun lati se eleri ajoyo igbeyawo ti AYOBAMI OLAJUMOKE ati ISRAEL VICTOR lati beere ibukun Olorun fun won ati lati se alabapin ninu ayo won. Jesu Kristi ti kara re je alejo ni igbeyawo ti Kana ti Galili, ti O si fi ibukun Re sori ona yii, ati nipa Emi Re, o wa pelu wa nisiyi.",
      },
      {
        type: "yoruba",
        text:
          "Iwe Mimo ko wa pe ebun Olorun ni igbeyawo je ni iseda ati ona oore ofe; ni ijine mimo ninu eyi ti Okunrin ati Obinrin di ara kan. Eto Olorun ni pe Oko ati iyawo ti n fi ara won fun ara won, eni ikini si eni ikeji ninu ife gbogbo aye won, won di okan ninu ife won bi Kristi ti je okan pelu ijo Re.",
      },
      {
        type: "yoruba",
        text:
          "A fi igbeyawo fun ni ki Oko ati Aya le je itunu ati oluranlowo fun ara won, ki won jumo maa gbe tokantokon ninu aini ati oro, ni ibanuje ati ayo. A tun fi fun ni pe ki won le mo ara won ni ife ati idunnu ati nipa idapo ara won, ki igbe aye won le kun fun isokan ati agbara emi.",
      },
      {
        type: "yoruba",
        text:
          "A fi igbeyawo fun ni nitori omo bibi, ki a si le gba ibukun ni sise itoju won; ki a si to won ninu ife Olorun si iyin ati Ogo Re.",
      },
      {
        type: "yoruba",
        text:
          "Ni igbeyawo, Oko ati Aya wa fun ara won, won si ni ajosepo laarin ebi kini ati keji, pelu ibere igbe aye otun, ajumogbe f'awujo, igbe aye yi je eyi ti a gbodo fi ola fun, a ko gbodo fi owo ye pere, aikas tiabi ife ara eni nikan mu un. Sugbon towotowo, toye-toye, pelu ironu jinle. Igbe aye yi ni AYOBAMI OLAJUMOKE ati ISRAEL VICTOR.",
      },
      {
        type: "yoruba",
        text:
          "Bi enikeni ninu yin ba mo ohun idena tooto kan, eyi ti a ko fi le da awon eniyan wonyi po ni igbeyawo mimo, ki o wi ni iwoyi, bi ko se bee lati oni lo ki o pa enu re mo titi lae.",
      },
      {
        type: "note",
        text: "Bi ohun idena kan ko ba si, Alufa yio tesiwaju.",
      },
    ],
  },
  {
    id: "ibeere-ati-idahun",
    title: "Ibeere ati Idahun",
    content: [
      {
        type: "note",
        text: "Alufa yio wipe fun oko ati iyawo.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "AYOBAMI OLAJUMOKE ati ISRAEL VICTOR, eje ti e o je ni e o je ni oruko Olorun, nitorina mo bere lowo eyin mejeeji, bi e o ti dahun niwaju Olorun eni ti o mo ohun ikoko okan wa; pe bi enikeni ninu yin ba mo idi ti a ko fi gbodo da yin po ni igbeyawo labe ofin ki o wi ni iwoyi.",
      },
      {
        type: "note",
        text: "Bi ohun idiwo ko ba si, Alufa yio tesiwaju.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "ISRAEL VICTOR, ninu erongba ife okan ara re ni iwo fe lati gbe AYOBAMI OLAJUMOKE ni iyawo?",
      },
      {
        type: "dialogue",
        speaker: "Oko Iyawo",
        text: "Mo fe.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "Iwo yoo ma fe, iwo yoo ma tuu ninu, iwo yoo ma bu ola fun un, iwo yoo si maa dabobo nigba aisan ati oro, ki iwo ki o ko awon elomiran sile, ki iwo si je olooto si niwon igba ti eyin mejeeji yo fi wa ni aye?",
      },
      {
        type: "dialogue",
        speaker: "Oko Iyawo",
        text: "Mo fe.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "AYOBAMI OLAJUMOKE, ninu erongba ife okan re ni iwo fe gbe ISRAEL VICTOR ni oko?",
      },
      {
        type: "dialogue",
        speaker: "Iyawo",
        text: "Mo fe.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "Iwo yoo ma fe, iwo yoo ma tuu ninu, iwo yoo ma bu ola fun un, iwo yoo si ma da abo bo nigba aisan ati oro, ki iwo ki o ko awon elomiran sile, ki iwo si je olooto si niwon igba ti eyin mejeeji yo fi wa ni aye?",
      },
      {
        type: "dialogue",
        speaker: "Iyawo",
        text: "Mo fe.",
      },
    ],
  },
  {
    id: "orin-keji",
    title: "Orin Keji",
    note: "Ire ta su ni Eden",
  },
  {
    id: "igbeyawo",
    title: "Igbeyawo",
    content: [
      {
        type: "dialogue",
        speaker: "Alufa",
        text: "Tani o fi Obirin yi fun Okunrin yi lati gbe ni iyawo?",
      },
      {
        type: "dialogue",
        speaker: "Baba",
        text: "Emi ni.",
      },
      {
        type: "note",
        text:
          "Bi Alufa ti gba Obinrin naa, yoo fi owo otun iyawo le owo otun Oko-iyawo, Oko-iyawo yoo si wi pe:",
      },
      {
        type: "dialogue",
        speaker: "Oko Iyawo",
        text:
          "Emi ISRAEL VICTOR gba iwo AYOBAMI OLAJUMOKE ni aya mi, lati ni ati lati mu, lati oni lo, ti ibi ti re, nigba oro ati aini, ninu aisan ati ilera, lati fe, lati ke titi iku yoo fi ya wa, gege bi idasile mimo Olorun. Si eyi mo fi otito mi fun O.",
      },
      {
        type: "note",
        text:
          "Iyawo yoo fi owo otun re mu owo otun Oko re, yoo si wipe:",
      },
      {
        type: "dialogue",
        speaker: "Iyawo",
        text:
          "Emi AYOBAMI OLAJUMOKE gba iwo ISRAEL VICTOR ni Oko mi, lati ni ati lati mu lati oni lo, ti ibi ti re nigba oro ati aini, ninu aisan ati ilera, lati fe, lati ke titi iku yoo fi ya wa, gege bi idasile mimo Olorun. Si eyi mo fi otito mi fun o.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "Kini ami edidi ife ijowo ara eni fun enikeji laarin yin?",
      },
      {
        type: "note",
        text: "Alufa yio gba oruka naa yio gbe soke yio si wipe:",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "Oruka je ami isokan ati alalabawon, wura ti se ohun iyebiye, ti ojo re pe, ni a fi se, kini iba tun dara ju eyi lo bi ami ife laarin yin.",
      },
      {
        type: "paragraph",
        text:
          "Baba orun, nipa ibukun re, se oruka yi ni ami ife ailopin laarin AYOBAMI OLAJUMOKE ati ISRAEL VICTOR ki o je ami isotito ti yoo maa ran won leti eje ati majemu ti won ba won da loni nipase Jesu Kristi Oluwa wa. Amin.",
      },
      {
        type: "note",
        text:
          "Okunrin yoo fi oruka bo ika kerin owo osi Iyawo, yoo dii mu yoo si wipe:",
      },
      {
        type: "dialogue",
        speaker: "Oko Iyawo",
        text:
          "Mo fi oruka yii fun o bi ami igbeyawo wa. Ara mi ni eni o maa fi bu ola fun O, gbogbo ohun to mo ni ni eni o fi ke o; ni oruko Baba, ati ni ti Omo ati ni ti Emi Mimo. Amin.",
      },
      {
        type: "note",
        text:
          "Iyawo yio ki oruka bo ika kerin owo osi Oko re, yio si dimu, yio si wipe:",
      },
      {
        type: "dialogue",
        speaker: "Iyawo",
        text:
          "Mo fi oruka yii fun o bi ami igbeyawo wa. Ara mi ni emi o maa fi bu ola fun O, gbogbo ohun to mo ni ni emi o fi ke o; ni oruko Baba, ati ni ti Omo ati ni ti Emi Mimo. Amin.",
      },
    ],
  },
  {
    id: "ikede",
    title: "Ikede",
    content: [
      {
        type: "note",
        text: "Iya Oko yoo jade siwaju.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "Ni oruko Olorun ati ni oju ijo, a fi OMIDAN AYOBAMI OLAJUMOKE... nisisiyi IYA AFIN AYOBAMI OLAJUMOKE... le o lowo gege bi okan ninu ebi yin; nje eyin yoo se ileri loruko ebi yin lati maa gbe won ro pelu adura ki eyin ki o si maa ti won leyin.",
      },
      {
        type: "dialogue",
        speaker: "Iya Oko",
        text: "Mo seleri bee, ni oruko Oluwa.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text: "E je ki a gbadura.",
      },
      {
        type: "paragraph",
        text:
          "Olorun ayeraye, Eleda ati Olupamo gbogbo eniyan, fi oore-ofe fun idile toko taya VICTOR ati AYOBAMI... fi fun won pe ni awon odun ti n bo, ki won ki o le je okan ninu ife Re, ati nipa agbara Emi Mimo, ki won le maa gbe po ninu ife ati ayo ti Olugbala wa Jesu Kristi. Amin.",
      },
    ],
  },
  {
    id: "orin-keta",
    title: "Orin Keta",
    note: "Fun wa ni idile Kristieni",
  },
  {
    id: "kika-oro-oloun",
    title: "Kika Oro Olorun",
    content: [
      { type: "paragraph", text: "1 Korinti 13:1–13 — Iyawo yoo ka." },
      { type: "paragraph", text: "Kolose 3:12–19 — Oko Iyawo yoo ka." },
    ],
  },
  {
    id: "orin-kerin",
    title: "Orin Kerin",
    note: "Jesu Oluwa, Oba mi",
  },
  {
    id: "iwaasu",
    title: "Iwaasu",
  },
  {
    id: "orin-karun",
    title: "Orin Karun",
    note: "Ile Pipe — a o ko fori ikunle",
  },
  {
    id: "adura-ipari",
    title: "Adura Ipari",
    content: [
      {
        type: "paragraph",
        text:
          "A fi iyin fun O, Olorun awon Baba nla wa, jowo je ki awon eda owo Re ni aye ati orun le maa bowo fun oruko Re laelae. O wipe, 'ko dara ki Okunrin naa ki o nikan ma gbe. Emi o se oluranlowo ti o dabi re fun.' O da Adamu O si fun ni iyawo re Efa lati je oluranlowo ati alatilehin re; awon mejeeji si je obi gbogbo aniyan.",
      },
      {
        type: "paragraph",
        text:
          "Oluwa, mo ti yan AYOBAMI / VICTOR lati je Oko/Aya mi, nitoripe o to, kii se pe mo se ifekufe sii. Jowo, saanu fun wa ki a le dagba papo titi di ojo ogbo. Fun wa ni aanu ati abo. Je ki a le gbe igbesi aye wa ninu ayo ati ife. Fun wa ni awon omo, ki o si je ki a ni imo lati to won ni ona otito ati ododo. A gba adura yi nipase Jesu Kristi.",
      },
      {
        type: "dialogue",
        speaker: "Alufa",
        text:
          "Baba wa orun, Iwo ti da ohun gbogbo ti o si fun wa ni anfani lati ni ipin ninu ise iseda aye. Bukun ile yi pelu ebun omo ati itoju won; ki ile won je ibi ife, abo ati otito; ki awon omo won dagba lati mo O ati feran Re, nitori omo bibi re nilansoso, Jesu Kristi Oluwa wa. Amin.",
      },
    ],
  },
  {
    id: "ibukun",
    title: "Ibukun",
    content: [
      {
        type: "paragraph",
        text:
          "Ki Oluwa maa to yin; ki O si ma dariori yin.\nKi ogbon Re maa to yin, ki o si maa fi oye ye yin;\nki oro Re maa ko yin; ki o si maa mi si yin ninu gbogbo ise yin;\nki owo Re gbe yin ro; ki o si maa dabobo yin.",
      },
      {
        type: "paragraph",
        text:
          "Ki awon ogun orun ki won rogba yi yin ka, ki won si pa yin mo.\nKi imole Re mole yi yin ka; ki o si ma san ninu yin;\nki agbara Re pa yin mo, ki o si maa ba yin gbe; ki o wa lodo yin, nibi gbogbo.",
      },
      {
        type: "paragraph",
        text:
          "Ki ibukun Olorun Olodumare, ti Baba, ti Omo ati ni ti Emi Mimo, ki o wa pelu yin, ki o si maa ba yin gbe nigba gbogbo. Amin.",
      },
    ],
  },
  {
    id: "fifi-owo",
    title: "Fifi Owo si Iwe Eri Igbeyawo",
  },
  {
    id: "idupe",
    title: "Idupe",
  },
  {
    id: "ifilo",
    title: "Ifilo",
  },
  {
    id: "orin-akojade",
    title: "Orin Akojade",
    note: "Ogo ni fOlowa",
  },
];
