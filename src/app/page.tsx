import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/chrome";
import { business, services } from "@/content/site";
import { Perspective } from "@/components/perspective";

export default function Home() {
  return (
    <main id="main">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-cross" aria-hidden="true">
              +
            </span>{" "}
            Accounting & Advisory · Perth
          </p>
          <h1 id="hero-title">
            <span>The bigger picture.</span> A clearer
            <br /> <em>way forward.</em>
          </h1>
          <p className="hero-description">
            Your numbers tell a story.
            <br />
            Let’s see what they make possible.
          </p>
          <Link href="/contact" className="button button-dark">
            A conversation with Vivienne <Arrow diagonal />
          </Link>
          <div className="hero-footnote">
            <span className="line-mark" aria-hidden="true" />
            <p>
              Clear thinking. Personal advice.
              <br />
              Your business, seen as a whole.
            </p>
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

      <div className="introduction-strip section-shell">
        <p>
          For the business you have.
          <br />
          <span>And the one you’re building.</span>
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

      <section
        id="expertise"
        className="expertise section-shell section-space"
        aria-labelledby="expertise-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            <span className="section-number">01 /</span> Expertise
          </p>
          <h2 id="expertise-title">
            Good with numbers.
            <br />
            <em>Better with the bigger picture.</em>
          </h2>
          <p className="section-description">
            The right advice doesn’t stop at the accounts. It connects the
            details to the decisions that matter to you.
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

      <section
        id="perspective"
        className="perspective-section"
        aria-labelledby="perspective-title"
      >
        <div className="section-shell perspective-inner">
          <p className="eyebrow">
            <span className="section-number">02 /</span> A different perspective
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

      <section
        id="vivienne"
        className="adviser-section section-shell section-space"
        aria-labelledby="adviser-title"
      >
        <div className="adviser-art">
          <span className="eyebrow">An independent perspective</span>
          <div className="monogram-frame">
            <Image
              src="/brand/logo-light.png"
              width={292}
              height={311}
              alt="Lee Monarc monogram"
            />
          </div>
          <div className="adviser-art-caption">
            <span>Personal by design.</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
        <div className="adviser-copy">
          <p className="eyebrow">
            <span className="section-number">03 /</span> Meet Vivienne
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

      <section
        className="contact-banner section-shell"
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">Your next chapter</p>
        <div>
          <h2 id="contact-title">
            Start with
            <br />
            <em>a conversation.</em>
          </h2>
          <div className="contact-banner-copy">
            <p>
              A question. A decision. A new direction.
              <br />
              Let’s talk about what’s on your mind.
            </p>
            <Link href="/contact" className="button button-dark">
              Let’s talk <Arrow diagonal />
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
