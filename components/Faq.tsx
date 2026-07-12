export const FAQ_ITEMS = [
  {
    q: "What is a plant?",
    a: "A plant is a sticky note you pin to a real physical spot — the bench you're sitting on, a bookshop shelf, a trailhead. You write your intention for being there. People who visit that exact spot can find it, reply to it, and add their own. Free accounts can keep 2 plants active at a time; Premium raises that to 10.",
  },
  {
    q: "How does Woozly AI matching work?",
    a: "When you drop a plant with your intention, Woozly reads all the active plants at that place and calculates compatibility between you and everyone else there. It's based on what you and the others wrote — not on profile photos, ages, or swipe history. The score updates live as new plants are dropped.",
  },
  {
    q: "What is Woozly?",
    a: "Woozly is a social app for meeting people at real places. Instead of swiping through profiles, you join the cafe, bar, park, or campus you're actually at, drop a plant with your intention for being there, and let Woozly AI find who at this place you'd actually want to talk to.",
  },
  {
    q: "Can I share my place to Instagram?",
    a: "Yes. One tap generates a shareable card showing your plant, the vibe at the place, and how many people are there. Post it to your story and friends can join your room directly from the link.",
  },
  {
    q: "How do I host an event?",
    a: "From any place's room, tap 'Host an event' to create a gathering — a morning run, trivia night, a study session. Woozly sends invites to everyone in the room, collects RSVPs, and sends a reminder before it starts. The place is already the venue.",
  },
  {
    q: "How does Woozly use my location?",
    a: "Your location is used while the app is open to show nearby places and to put you in the room of the place you joined. When you physically walk away, Woozly removes you automatically. You are never shown at a place you're not at.",
  },
  {
    q: "Are my chats private?",
    a: "Every message is end-to-end encrypted on your device before it's sent. Nobody outside the conversation can read it, including us. First messages arrive as requests — a conversation only starts when both people accept.",
  },
  {
    q: "Is Woozly free?",
    a: "Yes. Joining places, dropping plants, seeing who's there, and chatting are all free. Premium adds a wider 50 km radius, up to 10 active plants, ghost mode, and priority placement in busy rooms, for $7.99 a month or $47.99 a year.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-[-0.025em] text-ink">
          Questions worth asking
        </h2>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="faq-item group py-5">
              <summary className="flex items-center justify-between gap-6 text-left font-display text-base font-semibold text-ink sm:text-lg">
                {item.q}
                <span className="faq-chevron shrink-0 text-muted" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-[62ch] leading-[1.65] text-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
