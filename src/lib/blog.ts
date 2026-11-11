import { promises as fs } from "fs";
import path from "path";

// Blog posts are editable from /admin and persisted as JSON on the server's
// local filesystem — same pattern as newsletter/contact storage in store.ts.
// See LAUNCH_CHECKLIST.md: this requires an always-on Node host with a
// persistent filesystem (the Namecheap/cPanel deployment this site targets),
// not serverless hosting.

const DATA_DIR = path.join(process.cwd(), ".data");
const FILE = "blog.json";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Markdown-lite body: see src/lib/markdown.ts for the supported subset. */
  content: string;
  coverImage: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
};

export type BlogPostInput = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  published: boolean;
};

// Seeded so the blog ships with real, SEO-considered launch content even
// before the author publishes anything of her own from /admin. All factual
// claims here follow the same spoiler boundary and verified facts as the
// rest of the site — see CONTENT_SOURCE_NOTES.md.
const SEED_POSTS: BlogPost[] = [
  {
    slug: "the-story-behind-pooja-and-phil",
    title: "The Story Behind Pooja and Phil: How Bansi Pattni Wrote Her Debut Novel",
    excerpt:
      "Lawyer by day, debut novelist by calling — how Bansi Pattni spent two years turning two voices in her head into Pooja and Phil, a novel about an unlikely friendship.",
    coverImage: "/images/blog/the-story-behind-pooja-and-phil.webp",
    tags: ["Behind the Book", "Author"],
    seoTitle: "The Story Behind Pooja and Phil | Bansi Pattni",
    seoDescription:
      "How London lawyer Bansi Pattni wrote her debut novel Pooja and Phil — the real story behind two of contemporary fiction's most unlikely friends.",
    published: true,
    publishedAt: "2026-11-02T09:00:00.000Z",
    updatedAt: "2026-11-02T09:00:00.000Z",
    content: `By day, Bansi Pattni is a lawyer based in London. By every other hour she could find, for the better part of two years, she was something else entirely: the author of *Pooja and Phil*, her debut novel about an unlikely friendship that crosses age, background and circumstance.

## Two voices, long before a plot

Most writing advice starts with plot. Bansi's novel didn't. In her own acknowledgements, she describes developing her two central characters, Pooja and Phil, starting in 2024 — their voices arriving first, long before she was certain the rest of the story would follow. "I wasn't sure at that point whether they would ever come to life," she has said of those early drafts, "because I was carrying so much self-doubt."

That tension between doubt and determination is, perhaps fittingly, close to the emotional core of the novel itself. Pooja Patel, a twenty-one-year-old dreaming of a career in dance and theatre against her family's wishes, and Phil Rivers, a self-made businessman relearning how to live his life on his own terms — both are characters defined by the gap between what they want and what's expected of them.

## Writing as a leap of faith

Bansi describes the writing process itself as "a journey of faith, and training the mind to focus on the present, and trusting the process." It's an unusually candid line for an acknowledgements page, and it tracks with how first novels actually tend to get written: not in one confident draft, but in small, disciplined sessions squeezed around a full-time legal career.

What kept her going, by her own account, wasn't a guaranteed outcome — it was simply continuing to write "with discipline until it was ready to be published."

## Where the story draws from

*Pooja and Phil* is a work of fiction, but it's shaped by the interests Bansi has spoken about openly: a fascination with human psychology, a pull toward fiction that explores cultural heritage, and an interest in how people carry emotional weight differently depending on who they are and where they come from. Pooja's story — a young British Asian woman navigating family expectation and a dream in the performing arts — and Phil's — a guarded man confronting a changed life — both draw on that same curiosity about how people become who they are, and what it takes for two very different people to actually see each other.

## A debut novel, out now

*Pooja and Phil* is Bansi Pattni's first published novel. If the story of how it came together resonates with you half as much as the novel itself, [the book itself](/the-book) is the natural next stop — or dive straight into [who Pooja and Phil actually are](/characters) before you start reading.`,
  },
  {
    slug: "why-pooja-and-phil-is-the-friendship-story-readers-need",
    title: "Why Pooja and Phil Is the Friendship Story Readers Need Right Now",
    excerpt:
      "Not every great story needs a romance at its centre. Pooja and Phil is built entirely around a friendship — and that's exactly why readers are connecting with it.",
    coverImage: "/images/blog/why-pooja-and-phil-friendship-story.webp",
    tags: ["Themes", "Why Read It"],
    seoTitle: "Why Pooja and Phil Is the Friendship Story Readers Need",
    seoDescription:
      "Pooja and Phil is a friendship novel, not a romance — a story about an unlikely bond between a young dreamer and a guarded businessman. Here's why it resonates.",
    published: true,
    publishedAt: "2026-11-05T09:00:00.000Z",
    updatedAt: "2026-11-05T09:00:00.000Z",
    content: `There's a quiet trend in contemporary fiction worth naming: some of the most talked-about new novels aren't romances at all. They're friendship stories — books that build their entire emotional architecture around two people who were never supposed to understand each other, and somehow do. *Pooja and Phil*, the debut novel from Bansi Pattni, belongs firmly in that tradition.

## An unlikely pairing, on purpose

Pooja Patel is twenty-one, working a till at her local Tesco, and dreaming of choreographing a West End musical that brings South Asian dance and culture to a British stage that's never quite made room for it. Phil Rivers is a self-made business owner decades her senior, relearning how to run his life and his company since an accident changed what his day-to-day looks like.

On paper, they have nothing in common. That's exactly the point. When Pooja takes a job as Phil's personal assistant, neither of them is looking for a friendship — and that's usually when the best ones happen.

## Friendship across difference, done honestly

What makes *Pooja and Phil* stand out isn't just the premise — it's the commitment to it. This is a novel about **friendship across difference**: age, culture, class, life stage. It doesn't rush the two leads toward easy affection, and it never tips into romance. Instead, it sits in the slower, more believable territory of two guarded people cautiously letting each other in — Pooja carrying the weight of a dream nobody in her family understands, Phil carrying the weight of a past he'd rather not discuss.

That restraint is also what gives the book its second major thread: **chasing a dream against the odds**. Pooja's pull toward dance and theatre collides, again and again, with her family's hopes for something more conventional. Readers who have ever wanted something their own family didn't understand will recognise the particular ache of that tension immediately.

## A story about being seen

Underneath both threads is a simpler idea that the novel returns to from multiple angles: the cost, and the relief, of finally being seen by someone — for who you actually are, not who you're expected to be. It's there in Pooja's relationship with her own ambitions, and it's there in the walls Phil has spent a lifetime building around himself.

It's also, quietly, a novel about identity and belonging — Pooja describes herself, in one of the book's most quoted lines, as "a fusion of being British and Indian," unwilling to set either half of that aside. That kind of specificity is part of why the friendship at the centre of the book feels earned rather than convenient.

## Read it for the friendship, stay for everything else

If you've been looking for a novel that takes friendship as seriously as most books take romance, [*Pooja and Phil*](/the-book) is worth your next read. Meet [Pooja and Phil](/characters) properly before you start, or go straight to the [book trailer](/trailer) for a first look at their world.`,
  },
  {
    slug: "book-club-questions-pooja-and-phil",
    title: "5 Book Club Questions to Ask After Reading Pooja and Phil",
    excerpt:
      "Finished Pooja and Phil with your book club? Here are five spoiler-free discussion questions to get the conversation started — plus where to find more.",
    coverImage: "/images/blog/book-club-questions.webp",
    tags: ["Book Clubs", "Reading Guide"],
    seoTitle: "5 Book Club Questions for Pooja and Phil by Bansi Pattni",
    seoDescription:
      "Planning a book club discussion of Pooja and Phil? Start with these five spoiler-free questions about friendship, ambition and identity.",
    published: true,
    publishedAt: "2026-11-09T09:00:00.000Z",
    updatedAt: "2026-11-09T09:00:00.000Z",
    content: `*Pooja and Phil* was written with exactly this kind of conversation in mind — a story with enough underneath the plot to argue about over tea, wine, or whatever your book club prefers. If you've just finished it, or you're choosing it for next month's pick, here are five questions to get you started. All spoiler-free.

## 1. What finally earns Phil's trust?

Phil is, by his own admission, difficult to work for in the early chapters. What do you think actually lets Pooja see past that? More broadly: what does it take, in your own experience, to rebuild trust with someone who hasn't given you much reason to?

## 2. Why does this friendship work, against the odds?

The friendship between Pooja and Phil crosses a wide gap — age, background, culture, life stage. Most of the people around them would probably have bet against it working. What do you think makes it work anyway? Is it something specific about these two people, or something more universal about what unlikely friendships need?

## 3. Is the pressure from Pooja's family fair?

Pooja's parents equate a degree and a stable job with love and protection — it's not malice, it's their version of care. Do you read their pressure on her as fair, given what they want for her? Or is it more complicated than "fair" or "unfair"?

## 4. What does independence actually mean to Pooja?

At one point, Pooja insists furiously on her own independence. What does that word mean to her in that specific moment — and does it match what independence means to you, in your own life?

## 5. When does the relationship stop being transactional?

Pooja is, in a very literal sense, employed to help care for Phil. The novel is curious about what that does to a relationship that starts as a job. Is there a single moment you'd point to where it stops being transactional? Or is it more gradual than a single turning point?

## Keep the conversation going

Want more? The full [reading guide](/reading-guide) has additional discussion questions organised by theme — including a clearly marked section for groups who have finished the whole book and are ready for the bigger questions. And if anyone in your club hasn't picked up a copy yet, [here's where to find it](/the-book).`,
  },
];

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readPosts(): Promise<BlogPost[]> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, FILE), "utf-8");
    return JSON.parse(raw) as BlogPost[];
  } catch {
    // First run on a fresh deployment: seed the file so the launch content
    // ships immediately, then persist it so future admin edits take over.
    await writePosts(SEED_POSTS);
    return SEED_POSTS;
  }
}

async function writePosts(posts: BlogPost[]) {
  await ensureDir();
  await fs.writeFile(path.join(DATA_DIR, FILE), JSON.stringify(posts, null, 2), "utf-8");
}

function sortByDateDesc(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** Published posts only, newest first — for the public /blog pages. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await readPosts();
  return sortByDateDesc(posts.filter((p) => p.published));
}

/** Every post regardless of status — for the admin dashboard. */
export async function getAllPostsAdmin(): Promise<BlogPost[]> {
  return sortByDateDesc(await readPosts());
}

export async function getPostBySlug(
  slug: string,
  options: { includeUnpublished?: boolean } = {},
): Promise<BlogPost | null> {
  const posts = await readPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  if (!post.published && !options.includeUnpublished) return null;
  return post;
}

export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export async function createPost(input: BlogPostInput): Promise<{ error: string } | { post: BlogPost }> {
  if (!isValidSlug(input.slug)) {
    return { error: "Slug must be lowercase letters, numbers and hyphens only." };
  }
  const posts = await readPosts();
  if (posts.some((p) => p.slug === input.slug)) {
    return { error: "A post with this slug already exists." };
  }
  const now = new Date().toISOString();
  const post: BlogPost = { ...input, publishedAt: now, updatedAt: now };
  posts.push(post);
  await writePosts(posts);
  return { post };
}

export async function updatePost(
  slug: string,
  input: BlogPostInput,
): Promise<{ error: string } | { post: BlogPost }> {
  if (!isValidSlug(input.slug)) {
    return { error: "Slug must be lowercase letters, numbers and hyphens only." };
  }
  const posts = await readPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return { error: "Post not found." };

  if (input.slug !== slug && posts.some((p) => p.slug === input.slug)) {
    return { error: "A post with this slug already exists." };
  }

  const existing = posts[index];
  const updated: BlogPost = {
    ...existing,
    ...input,
    updatedAt: new Date().toISOString(),
  };
  posts[index] = updated;
  await writePosts(posts);
  return { post: updated };
}

export async function deletePost(slug: string): Promise<boolean> {
  const posts = await readPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) return false;
  await writePosts(next);
  return true;
}
