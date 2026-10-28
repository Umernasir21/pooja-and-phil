// Centralized, typed site copy. All factual claims here are sourced from the
// manuscript and the supplied asset pack — see CONTENT_SOURCE_NOTES.md at the
// project root (private, not published) for sourcing and the spoiler policy
// that shaped every sentence in this file.

export const site = {
  name: "Bansi Pattni",
  bookTitle: "Pooja and Phil",
  tagline: "Different worlds. An unexpected friendship.",
  // Verified 2026-10-28: poojaandphil.com does not resolve (connection
  // failure). The live, resolving deployment is the Vercel URL below.
  // Swap this back to the custom domain once it's actually live — see
  // LAUNCH_CHECKLIST.md.
  domain: "https://pooja-and-phil.vercel.app",
} as const;

// Nav shown in the desktop header — every page, nothing dropped.
export const headerNav = [
  { href: "/the-book", label: "The Book" },
  { href: "/characters", label: "Characters" },
  { href: "/trailer", label: "Trailer" },
  { href: "/reading-guide", label: "Reading Guide" },
  { href: "/about", label: "About" },
  { href: "/media", label: "Media" },
] as const;

// Full nav — used in the mobile menu and footer, so every page stays reachable.
export const nav = [
  { href: "/", label: "Home" },
  { href: "/the-book", label: "The Book" },
  { href: "/characters", label: "Characters" },
  { href: "/trailer", label: "Trailer" },
  { href: "/reading-guide", label: "Reading Guide" },
  { href: "/about", label: "About the Author" },
  { href: "/media", label: "Media" },
] as const;

// Homepage hero copy — matches the approved design's exact headline line
// breaks and short supporting copy.
export const hero = {
  eyebrow: "The Debut Novel",
  headline: [
    { text: "Different", italic: false },
    { text: "worlds.", italic: false },
    { text: "An unexpected", italic: true },
    { text: "friendship.", italic: true },
  ],
  support: [
    "Pooja dreams of the stage.",
    "Phil is confronting a changed life.",
    "Neither expects the connection that follows.",
  ],
} as const;

// Verbatim (lightly reflowed) from the client-approved back-cover blurb —
// see CONTENT_SOURCE_NOTES.md for the full transcription and sourcing.
export const bookIntro = {
  eyebrow: "The Book",
  heading: ["A story about", "finding your own way."],
  paragraphs: [
    "Pooja is a young, effervescent South Asian woman of Indian heritage who dreams of becoming a performer and forging a career in performing arts. However, she does not have any supporters and does not quite fit in with societal expectations. Pooja lands a job as a personal assistant and carer for a disabled septuagenarian, a successful businessman Philip Rivers.",
    "Both Pooja and Phil are on their personal journeys, carrying the metaphorical weight of their dreams and traumas when their worlds collide. The story captures the journeys of both characters and their unconventional friendship.",
  ],
} as const;

// Short, homepage-band character descriptions (the full profiles live on /characters).
export const homeCharacters = {
  eyebrow: "The Characters",
  pooja: {
    name: "Pooja",
    description: "A young woman with big dreams and a love for the performing arts.",
  },
  phil: {
    name: "Phil",
    description: "A successful businessman navigating a changed life.",
  },
} as const;

export const trailerBand = {
  eyebrow: "Book Trailer",
  heading: ["See where", "their story begins."],
} as const;

export const authorBand = {
  eyebrow: "About the Author",
  heading: "Meet Bansi Pattni.",
  bio: "Bansi Pattni is a London-based lawyer and a first time author. Bansi is a lover of books and enjoys reading fiction. She particularly enjoys stories that touch on cultural heritage and focuses on human emotions. She is fascinated by human psychology and how it has shaped society over time. Bansi lives with her family and likes to visit new places whenever she can.",
} as const;

export const closingBand = {
  heading: ["Every friendship", "begins somewhere."],
} as const;

// Editorial banner copy for the inner-page graphics supplied 2026-10-28.
// Theme/object-position were set by visually inspecting each banner — see
// ASSET_MAP.md for the discrepancy against the supplied placement table.
export const banners = {
  theBook: {
    image: "/images/editorial/01-book-story-banner.png",
    theme: "light" as const,
    eyebrow: "The Book",
    heading: "A story about finding your own way.",
    objectPosition: "75% 45%",
    mobileObjectPosition: "80% 40%",
  },
  characters: {
    image: "/images/editorial/02-characters-banner.png",
    theme: "dark" as const,
    eyebrow: "The Characters",
    heading: "Two lives. An unexpected connection.",
    objectPosition: "70% center",
    mobileObjectPosition: "75% center",
  },
  about: {
    image: "/images/editorial/03-author-banner.png",
    theme: "light" as const,
    eyebrow: "The Author",
    heading: "The author behind the friendship.",
    objectPosition: "72% center",
    mobileObjectPosition: "78% center",
  },
  readingGuide: {
    image: "/images/editorial/04-reading-guide-banner.png",
    theme: "light" as const,
    eyebrow: "Book Clubs",
    heading: "Good stories start conversations.",
    objectPosition: "75% center",
    mobileObjectPosition: "80% center",
  },
  trailer: {
    image: "/images/editorial/05-trailer-cinema-banner.png",
    theme: "dark" as const,
    eyebrow: "Watch",
    heading: "Step into their story.",
    objectPosition: "65% center",
    mobileObjectPosition: "70% center",
  },
  media: {
    image: "/images/editorial/06-media-press-banner.png",
    theme: "light" as const,
    eyebrow: "Press & Media",
    heading: "The story, ready to share.",
    objectPosition: "72% center",
    mobileObjectPosition: "78% center",
  },
} as const;

export const synopsis = {
  short:
    "Pooja Patel is twenty-one, working a Tesco checkout and dreaming of choreographing a West End musical that brings South Asian dance to the British stage. Philip Rivers is a self-made business tycoon relearning how to live since the car accident that changed everything. When Pooja takes a job as his personal assistant, neither expects the friendship that follows — one that will ask both of them to be braver than they planned to be.",
  extended: [
    "Pooja Patel has spent her whole life being told what success should look like. A good degree. A stable job. A suitable marriage. What she actually wants is to dance — to choreograph a West End musical that brings garba, Bollywood and South Asian culture to a British stage that has never quite made room for it. Instead, she's behind a Tesco till, counting down the days between shifts and auditions.",
    "Philip \"Phil\" Rivers built Ray and Co. from nothing, left school at fourteen, and answered to no one. Six months ago, a car accident changed that. Now he uses a wheelchair, he has already run off two personal assistants, and he has no interest in a third.",
    "Pooja takes the job anyway — flexible hours, decent pay, and a boss who barely looks up from his post. What begins as diaries, deliveries and deliberately short answers slowly, stubbornly becomes something neither of them saw coming: two people from entirely different worlds, each carrying more than they let on, learning to let someone else in.",
    "Told in alternating voices, Pooja and Phil is a story about the families we're born into and the ones we choose, about chasing a dream the people who love you don't understand, and about what it costs — and what it's worth — to finally be seen.",
  ],
  themeList: [
    {
      title: "Friendship across difference",
      body: "A twenty-one-year-old British Asian dreamer and a guarded, self-made businessman decades her senior — two lives that were never supposed to intersect, finding unlikely common ground.",
    },
    {
      title: "Chasing a dream against the odds",
      body: "Pooja's pull toward dance and theatre collides with her family's hopes for a conventional career, and with how much courage it takes to keep believing in yourself when no one else does yet.",
    },
    {
      title: "British Asian identity and belonging",
      body: "What it means to be, in Pooja's own words, 'a fusion of being British and Indian' — and to refuse to abandon either half of that identity.",
    },
    {
      title: "Vulnerability and connection",
      body: "Beneath Phil's guardedness is a man learning, slowly, that being truly known is worth the risk — a lesson that reshapes them both.",
    },
  ],
} as const;

export const readingSample = {
  heading: "From Chapter One",
  paragraphs: [
    "I wake up on a frosty Monday morning; it's dark, and the trees have lost all their leaves. It's as though life has gone into hiding, and time seems to have stopped. I hear Mum fussing downstairs in the kitchen, getting breakfast ready. I drag myself into the shower, the pit of my stomach filled with dread. A new week, same old shift working at the local Tesco.",
    "I make my way to the kitchen, grab my favourite mug from the cabinet above the sink, and greet my Mum. \"Morning, Mum.\" \"Morning, diku,\" she replies in a chirpy tone. Mum is a morning person and always in a good mood before nine. \"You're up early today.\" \"Yep — got an early shift.\" \"I've made masala tea, give me your mug.\" Mum's magic masala tea: a much-needed hug of motivation in a mug on a frosty morning. \"I don't like you working in this job,\" Mum says. \"Can you not find a good office job?\" Education is everything in the Patel household. My brother is a doctor. All five of my cousins have Master's degrees. And then there's me — the one who scraped Bs at GCSE and went straight into retail.",
    "My heart is not made for conventional education; my love is dance and theatre. Ever since I was seven years old, watching my first Bollywood film, I fell for it completely. I still dance away my problems every Navratri, nine nights given over to garba in reverence of Mataji. My ultimate dream is to act, dance and choreograph a West End musical built around South Asian culture. My other dream is drama school — but your girl needs funds.",
  ],
} as const;

export const characters = {
  pooja: {
    name: "Pooja Patel",
    age: "21",
    role: "Dreamer. Dancer. Reluctant Tesco cashier.",
    image: "/images/characters/pooja-transparent.png",
    bio: [
      "Pooja grew up in the Patel household knowing exactly what success was supposed to look like — a degree, a respectable job, eventually a respectable marriage. She never quite fit the mould. What she loves is dance: garba and dandiya at Navratri, the Bollywood films that first captivated her at seven years old, and a dream — fierce, specific, not remotely practical — of choreographing a West End musical that brings South Asian culture to a British stage.",
      "While her brother trained as a doctor and her cousins collected postgraduate degrees, Pooja finished school and went straight into retail, working a Tesco till in Windstead and auditioning whenever she can afford the train fare. When her best friend Tracey points her toward flexible, better-paid work as a personal assistant, Pooja takes it — never expecting the job, or the man she's working for, to change the course of her year.",
    ],
    quote:
      "My heart is not made for conventional education; my love is dance and theatre.",
  },
  phil: {
    name: "Phil Rivers",
    age: "70s",
    role: "Self-made businessman. Founder of Ray and Co. Learning a new normal.",
    image: "/images/characters/phil-transparent.png",
    bio: [
      "Phil Rivers built Ray and Co. from nothing — he left school at fourteen, answered to no one, and ran his company the same way he ran his life: on his own terms. A car accident six months before the story begins changed that. He now uses a wheelchair, and the control he spent a lifetime building suddenly feels a great deal harder to hold onto.",
      "He has already gone through two personal assistants by the time Pooja arrives, and he gives her no reason to expect she'll last any longer. Underneath the short temper, though, is a man guarding a lot more than his diary — a past he rarely discusses, and a wariness about letting anyone close enough to see it. What Pooja slowly earns, almost without either of them noticing, is his trust.",
    ],
    quote:
      "Rule number one: do not sell yourself short.",
  },
} as const;

export const authorBio = {
  short:
    "Bansi Pattni is a lawyer based in London and a first-time author. Pooja and Phil is her debut novel.",
  extended: [
    "Bansi Pattni is a lawyer based in London and a first-time author. A lifelong lover of books, she is drawn to fiction that touches on cultural heritage and human emotion, and is fascinated by human psychology and how it has shaped society over time.",
    "Pooja and Phil is her debut novel. She began developing its two central characters, Pooja and Phil, in 2024 — their voices came first, long before the rest of the story followed. Bansi lives with her family and likes to visit new places whenever she can. She shares updates on her writing on Instagram (@bansi_pattni) and Substack.",
  ],
} as const;

export const trailer = {
  heading: "Watch the Trailer",
  intro:
    "A first look at the world of Pooja and Phil — two lives from entirely different worlds, and the friendship neither of them saw coming.",
  videoSrc: "/video/pooja-and-phil-trailer.mp4" as string | null,
  captionsSrc: null as string | null,
  posters: [
    "/images/trailer/trailer-poster-opening.png",
    "/images/trailer/trailer-poster-scene-02.png",
    "/images/trailer/trailer-poster-scene-03.png",
  ],
} as const;

export type DiscussionQuestion = {
  question: string;
  spoiler?: boolean;
};

export type DiscussionGroup = {
  title: string;
  intro: string;
  questions: DiscussionQuestion[];
};

export const readingGuide: DiscussionGroup[] = [
  {
    title: "Friendship",
    intro:
      "Pooja and Phil begin as little more than employee and employer — and a fairly frosty version of that, at first.",
    questions: [
      {
        question:
          "Phil is, by his own admission, difficult to work for in the early chapters. What do you think finally lets Pooja see past that — and what does it take, in general, to rebuild trust with someone who hasn't given you much reason to?",
      },
      {
        question:
          "The friendship between Pooja and Phil crosses a wide gap in age, background and culture. What do you think makes it work anyway?",
      },
    ],
  },
  {
    title: "Ambition and family expectation",
    intro:
      "Pooja's dream of a career in dance and theatre runs headlong into her family's hopes for something more conventional.",
    questions: [
      {
        question:
          "Pooja's parents equate a degree and a stable job with love and protection. Do you think that's a fair way to read their pressure on her — or something more complicated?",
      },
      {
        question:
          "At one point, Pooja insists furiously on her own independence to her brother. What does \"independence\" mean to her in that moment, and does it match what independence means to you?",
      },
    ],
  },
  {
    title: "Identity and belonging",
    intro:
      "Pooja describes herself as a fusion of being British and Indian — and she's not interested in giving up either half.",
    questions: [
      {
        question:
          "How does the novel portray Navratri and garba as more than tradition — as something Pooja actively returns to and draws strength from?",
      },
      {
        question:
          "Where else in the book do you see characters negotiating between two cultures, two expectations, or two versions of themselves?",
      },
    ],
  },
  {
    title: "Independence and care",
    intro:
      "Pooja is, in a very literal sense, paid to care for Phil. The novel is curious about what that does to a relationship.",
    questions: [
      {
        question:
          "At what point does Pooja and Phil's relationship stop being transactional? Is there a single moment you'd point to, or is it more gradual than that?",
      },
      {
        question:
          "Pooja's friend Tracey is wary of how attached Pooja becomes to her employer. Do you think that wariness is fair?",
      },
    ],
  },
  {
    title: "For reading groups who have finished the book",
    intro:
      "The questions below assume you've read to the end. Reveal only when you're ready.",
    questions: [
      {
        question:
          "The novel's final part is titled 'Not Ready to Say Goodbye.' Looking back, where do you see that feeling building earlier in the book — maybe before you expected it to?",
        spoiler: true,
      },
      {
        question:
          "Phil reflects that \"legacy is about giving; unfortunately, I have taken.\" By the end of the novel, do you think he has changed that balance?",
        spoiler: true,
      },
      {
        question:
          "How does the ending reshape your understanding of everything Phil did for Pooja earlier in the book?",
        spoiler: true,
      },
    ],
  },
];

export const media = {
  shortBio:
    "Bansi Pattni is a lawyer based in London and a first-time author. Pooja and Phil is her debut novel.",
  extendedBio:
    "Bansi Pattni is a lawyer based in London and a first-time author. A lifelong lover of fiction drawn to stories of cultural heritage and human emotion, she began work on Pooja and Phil — the story of an unexpected friendship between a young British Asian dreamer chasing a career in dance and theatre, and a guarded, self-made businessman relearning how to live after a life-changing accident — as her debut novel. She shares updates on her writing on Instagram (@bansi_pattni) and Substack.",
  bookDescription:
    "Pooja Patel is twenty-one, working a Tesco checkout and dreaming of choreographing a West End musical. Philip Rivers is a self-made businessman relearning how to live since the accident that put him in a wheelchair. When Pooja becomes his personal assistant, an unexpected friendship forms between two people from entirely different worlds — one that asks both of them to be braver than they planned to be.",
  downloads: [
    {
      label: "Author photograph",
      href: "/images/author/bansi-pattni.png",
      description: "High-resolution author photograph of Bansi Pattni.",
      meta: "PNG · 1362×2048 · 2.3MB",
    },
    {
      label: "Book cover (front)",
      href: "/images/books/book-cover-front.png",
      description: "Front cover artwork for Pooja and Phil.",
      meta: "PNG · 1334×2048 · 2.6MB",
    },
    {
      label: "Book mockup (standing)",
      href: "/images/books/book-standing-with-shadow.png",
      description: "Approved standing book mockup with shadow.",
      meta: "PNG · 1600×2000 · 2.2MB",
    },
  ],
} as const;
