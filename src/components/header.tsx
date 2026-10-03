"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="brand" aria-label="bits and bytes Bhubaneswar home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><img src="/assets/bits-and-bytes.svg" alt="" width="30" height="34" /></span>
          <span className="brand-name">bits<span className="brand-and">&</span>bytes<span className="brand-city">/ bhubaneswar</span></span>
        </a>
        <button ref={button} type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close −" : "Menu +"}
        </button>
        <nav id="primary-navigation" className={`navigation ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="header-join" href={siteConfig.links.community} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Join the crew <span aria-hidden="true">↗</span><span className="sr-only"> on Discord, opens a new tab</span></a>
        </nav>
      </div>
    </header>
  );
}
