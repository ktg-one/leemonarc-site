import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/chrome";
import { business, services } from "@/content/site";
import { Perspective } from "@/components/perspective";
import { MonogramStudy } from "@/components/monogram-study";

export const metadata: Metadata = {
  title: "Know what your next move means for your money — Lee Monarc",
};

const ownerQuestions = [
  {
    question:
      "If sales stopped growing, would cash still cover our commitments?",
    answer:
      "Growth can disguise pressure. Look at the timing of receipts and payments, not just the sales total.",
  },
  {
    question:
      "What would our next hire or investment do to cash over the coming months?",
    answer:
      "The upfront cost is only part of the decision. A forecast helps you examine the ongoing commitments and the assumptions behind them.",
  },
  {
    question: "Could the business run without me for a month?",
    answer:
      "Your answer can highlight dependencies worth addressing, whether you want to grow, take time away or eventually sell.",
  },
];

const gettingStarted = [
  {
    n: "01",
    title: "Bring the question.",
    body:
      "Share where your business stands, what you want to achieve and the questions on your mind.",
  },
  {
    n: "02",
    title: "Work out what needs attention.",
    body:
      "We’ll identify the information needed, recommend the relevant support and explain the work and fees before you decide to proceed.",
  },
  {
    n: "03",
    title: "Put the numbers to work.",
    body:
      "Use the findings to decide what to do next, what to watch and which assumptions to revisit.",
  },
];

const whoWeHelp = [
  {
    title: "Starting out.",
    body: "Set up records and a business structure that fit what you’re building.",
  },
  {
    title: "Growing.",
    body: "Understand how changes in revenue, people and operations affect profit and cashflow.",
  },
  {
    title: "Planning a transition.",
    body:
      "Prepare for acquisition, succession, sale or stepping back, with your future goals in view.",
  },
];

const faqs = [
  {
    q: "What does Lee Monarc help with?",
    a:
      "Accounting, tax planning, business structuring, cashflow management and business advisory. Our services also include fractional CFO support, acquisition due diligence, and succession and exit planning.",
  },
  {
    q: "Do I need to be based in Perth?",
    a:
      "Lee Monarc is based in Perth and supports clients across Australia. Get in touch to discuss how we can work together.",
  },
  {
    q: "What is fractional CFO support?",
    a:
      "Access to experienced financial guidance without employing a full-time chief financial officer. Depending on the agreed scope, support can include reporting, cashflow analysis, performance reviews and help assessing business decisions.",
  },
  {
    q: "How much does it cost?",
    a:
      "Tell us what you need help with and we’ll explain the proposed work and fees before you commit. For ongoing support, we’ll also discuss what’s included and how any additional work would be handled.",
  },
];

export default function Home() {
  return (
    <main id="main">
      {/* ===== HERO — deck HERO reworded, composition preserved ===== */}
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-cross" aria-hidden="true">+</span>{" "}
            Chartered Accountant · Perth and Australia wide
          </p>
          <h1 id="hero-title">
            Know what your next move means for your money.
          </h1>
          <p className="hero-description">
            Can you afford another hire? Is growth putting pressure on cash? Is
            that business worth a closer look? Lee Monarc helps you work through
            the numbers behind decisions like these, alongside your accounting
            and tax.
          </p>
          <Link href="/contact" className="button button-dark">
            Tell us what’s on your mind <Arrow diagonal />
          </Link>
          <Link href="#owner-questions" className="text-link">
            Start with three questions <Arrow diagonal />
          </Link>
          <div className="hero-footnote">
            <span className="line-mark" aria-hidden="true" />
            <p>Know your numbers. Decide what comes next.</p>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-photo">
            <Image
              src="/images/perspective.webp"
              alt="Sculptural pale stone architecture opening onto a quiet courtyard"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
              preload
              className="architecture-image"
            />
          </div>
          <span className="image-index" aria-hidden="true">
            LM / A NEW PERSPECTIVE
          </span>
          <div className="viewfinder" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="image-caption">
            <span>
              Room to see
              <br />
              what’s next.
            </span>
            <span className="caption-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION STRIP — deck INTRODUCTION reworded ===== */}
      <div className="introduction-strip section-shell">
        <p>
          For the people building something of their own.
          <br />
          <span>
            Professional services · Property and construction · Healthcare ·
            Technology · Growing businesses
          </span>
        </p>
        <div>
          <span>Accounting</span>
          <i aria-hidden="true" />
          <span>Advisory</span>
          <i aria-hidden="true" />
          <span>e-CFO</span>
        </div>
        <a href="#expertise" className="scroll-link">
          Explore <span aria-hidden="true">↓</span>
        </a>
      </div>

      {/* ===== 01 / HOMEPAGE OWNER QUESTIONS — deck 16–23, new section ===== */}
      <section
        id="owner-questions"
        className="section-shell section-space"
        aria-labelledby="oq-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">
            <span className="section-number">01 /</span> Three questions
          </p>
          <h2 id="oq-heading">
            Worth asking about your business.
          </h2>
          <p className="section-description">
            Three questions worth asking about your business.
          </p>
        </div>
        <div className="service-list">
          {ownerQuestions.map((item, i) => (
            <div key={i} className="service">
              <h3>{item.question}</h3>
              <div className="service-body">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1px" }}>
          <Link href="/services/fractional-cfo-advisory" className="text-link">
            See how financial advisory can help <Arrow diagonal />
          </Link>
        </p>
      </section>

      {/* ===== 02 / SERVICES OVERVIEW (expertise) — heading/intro reworded, list preserved ===== */}
      <section
        id="expertise"
        className="expertise section-shell section-space"
        aria-labelledby="expertise-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            <span className="section-number">02 /</span> Expertise
          </p>
          <h2 id="expertise-title">
            Keep the essentials in order.
            <br />
            <em>Get help with the bigger calls.</em>
          </h2>
          <p className="section-description">
            Your tax return matters. So does the decision you need to make next
            month. Find support for both.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <details className="service" key={service.number}>
              <summary>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <span className="service-short">{service.short}</span>
                <span className="service-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="service-body">
                <p>{service.description}</p>
                <div className="service-topics">
                  {service.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                  <Link href="/contact" className="text-link">
                    Let’s discuss your business <Arrow diagonal />
                  </Link>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== 03 / GETTING STARTED — deck 47–54, new section ===== */}
      <section
        id="getting-started"
        className="section-shell section-space"
        aria-labelledby="gs-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">
            <span className="section-number">03 /</span> Getting started
          </p>
          <h2 id="gs-heading">
            Start with the question you can’t answer yet.
          </h2>
        </div>
        <div className="service-list">
          {gettingStarted.map((item, i) => (
            <div key={i} className="service">
              <div className="service-body">
                <span className="service-number" style={{ marginBottom: "6px", display: "block" }}>
                  {item.n}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1px" }}>
          <Link href="/contact" className="button button-dark">
            Let’s start a conversation <Arrow diagonal />
          </Link>
        </p>
      </section>

      {/* ===== 04 / WHO WE HELP teaser — deck 78–83, new section ===== */}
      <section
        id="who-we-help"
        className="section-shell section-space"
        aria-labelledby="whw-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">
            <span className="section-number">04 /</span> Who we help
          </p>
          <h2 id="whw-heading">
            For owners with something to build.
          </h2>
          <p className="section-description">
            Starting out. Growing. Planning a transition.
          </p>
        </div>
        <div className="service-list">
          {whoWeHelp.map((item, i) => (
            <div key={i} className="service">
              <h3>{item.title}</h3>
              <div className="service-body">
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1px" }}>
          <Link href="/who-we-help" className="text-link">
            Find your stage <Arrow diagonal />
          </Link>
        </p>
      </section>

      {/* ===== 05 / PERSPECTIVE — PRESERVED, number updated ===== */}
      <section
        id="perspective"
        className="perspective-section"
        aria-labelledby="perspective-title"
      >
        <div className="section-shell perspective-inner">
          <p className="eyebrow">
            <span className="section-number">05 /</span> A different perspective
          </p>
          <div className="perspective-intro">
            <h2 id="perspective-title">
              From the details.
              <br />
              <em>To the direction.</em>
            </h2>
            <p>
              Step back. See the connections.
              <br />
              Make room for a more considered next move.
            </p>
          </div>
          <Perspective />
        </div>
      </section>

      {/* ===== 06 / VIVIENNE + MonogramStudy — PRESERVED, number updated ===== */}
      <section
        id="vivienne"
        className="adviser-section section-shell section-space"
        aria-labelledby="adviser-title"
      >
        <MonogramStudy />
        <div className="adviser-copy">
          <p className="eyebrow">
            <span className="section-number">06 /</span> Meet Vivienne
          </p>
          <h2 id="adviser-title">
            A direct relationship.
            <br />
            <em>Not another handover.</em>
          </h2>
          <p>
            Work directly with Vivienne Lee, the person behind Lee Monarc. A
            Perth-based accountant and adviser who sees the business behind the
            balance sheet.
          </p>
          <p>
            Bring your questions, your plans and the things you haven’t quite
            worked out. This is a conversation about where you are—and where you
            want to go.
          </p>
          <div className="adviser-signoff">
            <span>Vivienne Lee</span>
            <small>Lee Monarc · Accounting & Advisory</small>
          </div>
          <Link href="/contact" className="text-link">
            Meet your financial thinking partner <Arrow diagonal />
          </Link>
        </div>
      </section>

      {/* ===== 07 / FAQ — deck 84–92, new section, native details/summary ===== */}
      <section
        id="faq"
        className="section-shell section-space"
        aria-labelledby="faq-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">
            <span className="section-number">07 /</span> Frequently asked questions
          </p>
          <h2 id="faq-heading">
            Before you reach out.
          </h2>
        </div>
        <div className="service-list">
          {faqs.map((item, i) => (
            <details key={i} className="service">
              <summary>
                <span className="service-number"></span>
                <h3>{item.q}</h3>
                <span className="service-short"></span>
                <span className="service-toggle" aria-hidden="true">
                  <Arrow />
                </span>
              </summary>
              <div className="service-body">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== CLOSING INVITATION — deck 93–96, reworded from contact-banner ===== */}
      <section
        className="contact-banner section-shell"
        aria-labelledby="closing-heading"
      >
        <p className="eyebrow">Your next chapter</p>
        <div>
          <h2 id="closing-heading">
            What’s the decision on
            <br />
            <em>your mind?</em>
          </h2>
          <div className="contact-banner-copy">
            <p>
              Tell us what’s happening. You don’t need to know which service to
              ask for.
            </p>
            <Link href="/contact" className="button button-dark">
              Tell us what’s on your mind <Arrow diagonal />
            </Link>
            <a href={business.phoneHref} className="phone-link">
              Or call {business.phone}
            </a>
          </div>
        </div>
        <span className="contact-watermark" aria-hidden="true">
          ↗
        </span>
      </section>
    </main>
  );
}
