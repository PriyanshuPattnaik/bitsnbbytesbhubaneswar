import Image from "next/image";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site-config";

const activities = [
  { number: "01", label: "Build sessions", code: "MAKE / BREAK / REPEAT", text: "Bring a half-finished idea. Find someone to untangle it with. Leave with something that works — or a better question.", tags: "Code · Design · Hardware" },
  { number: "02", label: "Hackathons", code: "SMALL TEAMS, BIG IDEAS", text: "Turn a what-if into a working prototype. A little friendly chaos, a lot of learning, and something you can show the world.", tags: "Experiment · Collaborate · Demo" },
  { number: "03", label: "Open source", code: "SHIP IT IN THE OPEN", text: "Make your first pull request. Build useful tools. Share the rough drafts and learn from the people who make them better.", tags: "Contribute · Document · Ship" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero container" id="top" aria-labelledby="hero-title">
          <div className="hero-topline"><span><span className="status-dot" /> A LOCAL FORK OF BITS&BYTES</span><span className="coordinates">20.2961° N / 85.8245° E</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-location"><span lang="or" className="odia">ଭୁବନେଶ୍ୱର</span><span>BHUBANESWAR, ODISHA</span></div>
              <h1 id="hero-title">Old roots.<br /><span>New routes.</span></h1>
              <p className="hero-description">A city of makers.<br />A new generation of builders.</p>
              <p className="hero-body">The teen-led bits&bytes community, now in Bhubaneswar. For the curious ones who would rather make something than wait for something.</p>
              <div className="hero-actions"><a className="button button-primary" href={siteConfig.links.community} target="_blank" rel="noopener noreferrer">Find your people <Arrow /><span className="sr-only"> on national Discord, opens a new tab</span></a><a className="text-link" href="#chapter">Meet the chapter <span aria-hidden="true">↓</span></a></div>
              <p className="join-note">Free to join. Beginners welcome. Ages 13–19.</p>
            </div>
            <figure className="hero-art">
              <div className="photo-mount"><span className="image-index">FIG. 01 / BUILT TO LAST</span><div className="hero-photo"><Image src="/assets/konark-wheel.jpg" alt="Intricately carved stone wheel at Konark Sun Temple in Odisha" fill priority sizes="(max-width: 760px) 100vw, 42vw" /></div><span className="photo-cross cross-one" aria-hidden="true">+</span><span className="photo-cross cross-two" aria-hidden="true">+</span><span className="photo-label" aria-hidden="true">OD / IN</span></div>
              <figcaption><span>Konark, Odisha · Detail in stone</span><span className="photo-caption-end">ROOTED HERE. REACHING OUT.</span></figcaption>
            </figure>
          </div>
          <div className="hero-bottom"><span>STUDENT-LED. INDEPENDENT. BUILT TO SHIP.</span><a href="#chapter" aria-label="Scroll to the chapter"><span aria-hidden="true">↓</span> KEEP EXPLORING</a></div>
        </section>

        <section className="chapter container section-space" id="chapter" aria-labelledby="chapter-title">
          <div className="section-label"><span>[01]</span> THE LOCAL CHAPTER</div>
          <div className="chapter-grid"><div><h2 id="chapter-title">Built in Bhubaneswar.<br /><span className="muted">Connected to<br className="desktop-break" /> everywhere.</span></h2><p className="chapter-paragraph">Good things happen when curious people find each other. We&apos;re building a space for young people in Odisha to trade ideas, learn by doing, and make things together.</p><p className="chapter-paragraph">Our roots are local. Our network is national. As a fork of bits&bytes, we share a playbook and a community — with our own city, people, and point of view.</p><a className="text-link" href={siteConfig.links.fork} target="_blank" rel="noopener noreferrer">Explore the bits&bytes network <Arrow /><span className="sr-only">, opens a new tab</span></a></div>
          <aside className="manifest" aria-label="Chapter manifest"><div className="manifest-bar"><span>chapter.config</span><span aria-hidden="true">− &nbsp; □ &nbsp; ×</span></div><div className="manifest-body"><p className="terminal-comment">// a place to start something</p><p><span className="syntax-key">chapter</span> <span className="syntax-punct">=</span> <span className="syntax-string">&quot;bhubaneswar&quot;</span></p><p><span className="syntax-key">network</span> <span className="syntax-punct">=</span> <span className="syntax-string">&quot;bits&bytes&quot;</span></p><p><span className="syntax-key">led_by</span> <span className="syntax-punct">=</span> <span className="syntax-string">&quot;students&quot;</span></p><p><span className="syntax-key">membership</span> <span className="syntax-punct">=</span> <span className="syntax-string">&quot;free&quot;</span></p><div className="manifest-rule" /><p className="terminal-comment">// no perfect ideas required</p><p className="terminal-command"><span aria-hidden="true">❯</span> bring_your_curiosity<span className="terminal-cursor" aria-hidden="true">_</span></p></div><div className="manifest-footer"><span className="status-dot" /> OPEN TO THE CURIOUS</div></aside></div>
        </section>

        <section className="build-section" id="build" aria-labelledby="build-title"><div className="container section-space"><div className="section-label"><span>[02]</span> LESS TALK. MORE MAKING.</div><div className="build-heading"><h2 id="build-title">Things get interesting<br />when we build together.</h2><p>No spectators required.<br />Just people willing to try.</p></div><div className="activity-list">{activities.map(activity => <article className="activity" key={activity.number}><span className="activity-number">/{activity.number}</span><div><span className="activity-code">{activity.code}</span><h3>{activity.label}</h3></div><div className="activity-detail"><p>{activity.text}</p><span className="activity-tags">{activity.tags}</span></div></article>)}</div><div className="build-footnote"><span>IDEA → PROTOTYPE → &ldquo;HEY, I MADE THIS.&rdquo;</span><a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">Explore national projects <Arrow /><span className="sr-only"> on GitHub, opens a new tab</span></a></div></div></section>

        <section className="gathering container section-space" id="gathering" aria-labelledby="gathering-title"><div className="section-label"><span>[03]</span> ON THE CHAPTER NOTICEBOARD</div><div className="noticeboard"><div className="notice-copy"><span className="notice-tag"><span className="status-dot" /> IN THE WORKS</span><h2 id="gathering-title">The next thing<br />starts with us.</h2><p>Our first local gathering is taking shape. Expect curious people, open laptops, and ideas worth staying up for.</p><p className="notice-honest">No date or venue yet. We&apos;ll share the details when they&apos;re ready.</p><a className="text-link" href={siteConfig.links.community} target="_blank" rel="noopener noreferrer">Be there from the beginning <Arrow /><span className="sr-only"> on Discord, opens a new tab</span></a></div><div className="notice-ticket"><div className="ticket-top"><span>BITS&BYTES / BBSR</span><span aria-hidden="true">↗</span></div><p className="ticket-title">A room full<br />of possibility.</p><dl className="ticket-meta"><div><dt>WHEN</dt><dd>{siteConfig.gathering.date}</dd></div><div><dt>WHERE</dt><dd>{siteConfig.gathering.venue}</dd></div><div><dt>BRING</dt><dd>Your curiosity</dd></div></dl><div className="ticket-bottom"><span>LOCAL GATHERING / 001</span><div className="ticket-pixels" aria-hidden="true" /></div></div></div></section>

        <section className="roots-section" aria-labelledby="roots-title"><div className="ikat-strip" aria-hidden="true" /><div className="container roots-inner"><span className="section-label"><span>[04]</span> MADE OF THIS PLACE</span><div className="roots-grid"><h2 id="roots-title">A little Kalinga.<br />A lot of curiosity.</h2><div><p>We come from a place that knows how to make things with care. In stone, in thread, in the details that reward a closer look.</p><p>We carry that spirit into what comes next. Thoughtful code. Bold experiments. Things built to be useful, and built to be shared.</p><span className="roots-signoff">FROM ODISHA, WITH INTENT. <span aria-hidden="true">✳</span></span></div></div><div className="roots-bottom"><span lang="or" className="odia">ଆମ ସହର। ଆମ କଥା।</span><span>OUR CITY. OUR STORY.</span></div></div></section>

        <section className="faq container section-space" id="faq" aria-labelledby="faq-title"><div className="faq-heading"><div className="section-label"><span>[05]</span> BEFORE YOU SAY HELLO</div><h2 id="faq-title">A few good<br />questions.</h2><p>Still figuring it out?<br />That&apos;s a good place to start.</p></div><div className="faq-list">{siteConfig.faqs.map((faq, index) => <details key={faq.question}><summary><span className="faq-number">0{index + 1}</span><span>{faq.question}</span><span className="faq-symbol" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></section>

        <section className="join-section" id="join" aria-labelledby="join-title"><div className="container join-inner"><div className="section-label"><span>[06]</span> YOUR NEXT COMMIT</div><div className="join-heading"><h2 id="join-title">Come curious.<br />Leave a builder.</h2><span className="join-star" aria-hidden="true">✳</span></div><div className="join-lower"><p>Your people are out there.<br />Let&apos;s make something together.</p><div className="join-action"><a className="button button-light" href={siteConfig.links.community} target="_blank" rel="noopener noreferrer">Join the crew <Arrow /><span className="sr-only"> on national Discord, opens a new tab</span></a><p>Opens the national bits&bytes Discord.<br />Say hello and tell us you&apos;re from Bhubaneswar.</p></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="container"><div className="footer-main"><a className="footer-brand" href="#top">bits&bytes<span>/ bhubaneswar</span></a><div className="footer-links"><a href={siteConfig.links.upstream} target="_blank" rel="noopener noreferrer">The national network ↗</a><a href={siteConfig.links.contribute} target="_blank" rel="noopener noreferrer">Help build bits&bytes ↗</a><a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div><div className="footer-bottom"><span>BUILT IN BHUBANESWAR. CONNECTED TO EVERYWHERE.</span><span>ODISHA, INDIA / <span lang="or" className="odia">ଓଡ଼ିଶା</span></span></div><p className="photo-credit">Konark photograph: <a href="https://commons.wikimedia.org/wiki/File:Wheel_in_konark_sun_temple.jpg" target="_blank" rel="noopener noreferrer">Hemaquen / Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. Cropped and color-treated for display.</p></div></footer>
    </>
  );
}
