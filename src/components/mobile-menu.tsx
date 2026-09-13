"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node))
        menu.current.open = false;
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  function close() {
    if (!menu.current) return;
    menu.current.open = false;
    menu.current.querySelector("summary")?.focus({ preventScroll: true });
  }

  return (
    <details
      className="mobile-menu"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === "Escape") close();
      }}
    >
      <summary>
        <span>Menu</span>
        <span className="menu-symbol" aria-hidden="true">
          +
        </span>
      </summary>
      <nav aria-label="Mobile navigation">
        <Link href="/#expertise" onClick={close}>
          Expertise <span aria-hidden="true">↗</span>
        </Link>
        <Link href="/#perspective" onClick={close}>
          Our approach <span aria-hidden="true">↗</span>
        </Link>
        <Link href="/#vivienne" onClick={close}>
          Meet Vivienne <span aria-hidden="true">↗</span>
        </Link>
        <Link href="/contact" onClick={close}>
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </details>
  );
}
