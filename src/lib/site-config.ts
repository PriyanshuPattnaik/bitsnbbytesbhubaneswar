export const siteConfig = {
  name: "bits&bytes Bhubaneswar",
  url: "https://bhubaneswar.bitsnbytes.org",
  description: "A teen-led community for curious builders in Bhubaneswar, Odisha. Make things, meet your people, and ship together. A local chapter of bits&bytes.",
  links: {
    community: "https://discord.gg/rjqPfwKKTE",
    upstream: "https://gobitsnbytes.org/",
    fork: "https://gobitsnbytes.org/fork",
    contribute: "https://gobitsnbytes.org/join",
    github: "https://github.com/gobitsnbytes",
  },
  gathering: { status: "In the works", date: "To be announced", venue: "To be announced" },
  navigation: [
    { label: "The chapter", href: "#chapter" },
    { label: "What we do", href: "#build" },
    { label: "The next thing", href: "#gathering" },
  ],
  faqs: [
    { question: "Who is this for?", answer: "Curious people aged 13–19 in Bhubaneswar and across Odisha. If you like making things — with code, design, hardware, or an idea you cannot stop thinking about — you belong here." },
    { question: "Do I need to know how to code?", answer: "No. Beginners are welcome. Bring your curiosity, ask questions, and learn by making something with other people. Designers, writers, and hardware tinkerers have a place here too." },
    { question: "Does it cost anything to join?", answer: "Membership is free. Join the national bits&bytes Discord and introduce yourself as a builder from Bhubaneswar. Any event-specific arrangements will be shared when an event is announced." },
    { question: "When is the first local gathering?", answer: "It is in the works. A date and venue have not been announced yet. Join the community to meet other builders and hear about the next local gathering when details are ready." },
    { question: "How is this connected to bits&bytes?", answer: "Bhubaneswar is a local fork of the national bits&bytes network. We share the community, playbook, and spirit of building in public, with a local identity and student leadership." },
    { question: "Can I help build the chapter?", answer: "Absolutely. Join the community, introduce yourself, and tell us what you would like to help with — organizing sessions, making projects, designing things, or bringing more curious people along. The national contributor page is linked below too." },
  ],
} as const;
