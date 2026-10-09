export const PLANS = {
  free: { id: "free", name: "Free", price: "$0", tagline: "Show up with intention" },
  premium: {
    id: "aura",
    name: "Premium",
    badge: "Aura",
    tagline: "Reach further",
    options: [
      { id: "aura_weekly",  label: "Weekly",  price: "$4.99",  per: "per week",  bestValue: false },
      { id: "aura_monthly", label: "Monthly", price: "$14.99", per: "per month", bestValue: true  },
    ],
    // No annual plan. Do NOT show $7.99 or $47.99.
  },
} as const;

export const INTENTS = [
  { key: "coffee",     label: "Coffee",     emoji: "☕" },
  { key: "chat",       label: "Chat",       emoji: "💬" },
  { key: "spark",      label: "Spark",      emoji: "🔥" },
  { key: "collab",     label: "Collab",     emoji: "💡" },
  { key: "activity",   label: "Activity",   emoji: "🏃" },
  { key: "networking", label: "Networking", emoji: "🤝" },
  { key: "open",       label: "Open",       emoji: "✨" },
] as const;

// Place categories people can join (mirrors the app's supported Google place types).
export const PLACE_TYPES = [
  { emoji: "☕", label: "Cafes" },
  { emoji: "🍴", label: "Restaurants" },
  { emoji: "🍷", label: "Bars" },
  { emoji: "🍸", label: "Nightlife" },
  { emoji: "🌳", label: "Parks" },
  { emoji: "🏋️", label: "Gyms" },
  { emoji: "🎬", label: "Cinemas" },
  { emoji: "🛍️", label: "Shopping" },
  { emoji: "🛏️", label: "Hotels" },
] as const;

export const PEOPLE_MATRIX = [
  { feature: "Active plants",          free: "2",         premium: "10"        },
  { feature: "Plant drops / week",     free: "3",         premium: "15"        },
  { feature: "Discovery reach",        free: "5 km",      premium: "50 km"     },
  { feature: "Woozly AI compatibility",free: "Live",      premium: "Live"      },
  { feature: "Waters (likes) / day",   free: "20",        premium: "50"        },
  { feature: "Super likes / day",      free: "1",         premium: "5"         },
  { feature: "See who watered you",    free: false,       premium: true        },
  { feature: "Messages",               free: "E2EE text", premium: "E2EE + photos" },
  { feature: "AI conversation openers",free: "1 / chat",  premium: "Unlimited" },
  { feature: "Ghost mode",             free: false,       premium: true        },
] as const;

export const PLACE_MATRIX = [
  { feature: "Place radius",            free: "5 km",  premium: "50 km"   },
  { feature: "Join + see who's here",   free: true,    premium: true      },
  { feature: "Sticky notes / day",      free: "3",     premium: "6"       },
  { feature: "Plant notes / day",       free: "3",     premium: "Unlimited" },
  { feature: "Become a regular",        free: true,    premium: true      },
  { feature: "Priority placement",      free: false,   premium: true      },
  { feature: "Vibe Check (AI crowd)",   free: false,   premium: true      },
  { feature: "Incognito (join anon.)",  free: false,   premium: true      },
  { feature: "Message incognito",       free: false,   premium: true      },
  { feature: "Ghost mode (linger after)",free: false,  premium: true      },
  { feature: "Instagram share cards",   free: false,   premium: true      },
  { feature: "Mute a place",            free: "1 day", premium: "3 days"  },
] as const;
