import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/site";
import { MobileMenu } from "./mobile-menu";

export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Link href="/" className="brand" aria-label="Lee Monarc home">
        <Image
          src="/brand/logo-banner-light.png"
          width={812}
          height={149}
          alt="Lee Monarc Accounting & Advisory"
          loading="eager"
        />
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav">
        <Link href="/services">Services</Link>
        <Link href="/who-we-help">Who we help</Link>
        <Link href="/about">About us</Link>
      </nav>
      <Link href="/contact" className="header-contact">
        Tell us what’s on your mind <Arrow diagonal />
      </Link>
      <MobileMenu />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" aria-label="Lee Monarc home">
          <Image
            src="/brand/logo-banner-light.png"
            alt="Lee Monarc Accounting & Advisory"
            width={812}
            height={149}
            className="footer-brand"
          />
        </Link>
        <p>
          Know your numbers.
          <br />
          Decide what comes next.
        </p>
        <nav aria-label="Footer navigation" className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/who-we-help">Who we help</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
        <a href="#top" className="back-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Lee Monarc Accounting & Advisory</span>
        <span>{business.location} · Working Australia wide</span>
        <a href={`mailto:${business.email}`}>
          Email Vivienne <Arrow diagonal />
        </a>
      </div>
    </footer>
  );
}
