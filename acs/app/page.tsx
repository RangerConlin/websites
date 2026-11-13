import { Footer, Header, offerings } from "./site-components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="home-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="home-copy">
            <p className="eyebrow">
              <span />
              Field communications · Incident management · Software
            </p>
            <h1>
              Clarity for the
              <br />
              <em>whole operation.</em>
            </h1>
            <p>
              Arcadia Command Solutions brings communications, command
              structure, operational coordination, and purpose-built software
              together around the work happening in the field.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#capabilities">
                Explore capabilities <span>↓</span>
              </a>
              <a className="button button--ghost" href="/sarapp">
                Discover Arc-Horizon <span>↗</span>
              </a>
            </div>
          </div>
          <div className="home-emblem">
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcSet="/brand-full-dark.png"
              />
              <img
                src="/brand-full-light.png"
                alt="Arcadia Command Solutions"
              />
            </picture>
          </div>
        </section>
        <section className="home-intro" id="about">
          <p className="section-label">One operational system</p>
          <h2>Planning and field execution should reinforce each other.</h2>
          <p>
            We work where command, communications, and field operations meet.
            That perspective shapes every service we provide—and the software we
            are building.
          </p>
        </section>
        <section
          className="operations-gallery"
          aria-label="Arcadia Command Solutions operations"
        >
          <figure>
            <img
              src="/photo-field-comms-v2.jpg"
              alt="A field communications specialist preparing radio equipment"
            />
            <figcaption>
              <span>01 / Field</span>
              <strong>
                Communications that work where the operation happens.
              </strong>
            </figcaption>
          </figure>
          <figure>
            <img
              src="/photo-command-team-embroidered.jpg"
              alt="An incident management team coordinating around maps"
            />
            <figcaption>
              <span>02 / Command</span>
              <strong>
                People, plans, and decisions brought into one room.
              </strong>
            </figcaption>
          </figure>
          <figure>
            <img
              src="/photo-sarapp-field.jpg"
              alt="A search and rescue team member using a rugged field tablet"
            />
            <figcaption>
              <span>03 / Software</span>
              <strong>Technology built around field reality.</strong>
            </figcaption>
          </figure>
        </section>
        <section className="capabilities" id="capabilities">
          <div className="section-head">
            <div>
              <p className="section-label">What we do</p>
              <h2>
                Three parts.
                <br />
                One purpose.
              </h2>
            </div>
            <p>
              Communications, incident management, and operational
              software—designed to work together around the people in the field.
            </p>
          </div>
          <div className="capability-list">
            {offerings.map((x) => (
              <a className="capability-row" href={x.href} key={x.href}>
                <span className="cap-index">{x.index}</span>
                <span className="cap-short">{x.short}</span>
                <span className="cap-content">
                  <strong>{x.title}</strong>
                  <small>{x.text}</small>
                </span>
                <b>↗</b>
              </a>
            ))}
          </div>
        </section>
        <section className="home-statement">
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="/brand-full-dark.png"
            />
            <img src="/brand-full-light.png" alt="Arcadia Command Solutions" />
          </picture>
          <div>
            <p className="section-label">Our operating approach</p>
            <h2>Plans built to survive contact with the field.</h2>
            <p>
              Clear responsibilities. Dependable communications. Usable
              information. Practical systems. We design around the people,
              geography, risks, and resources actually involved.
            </p>
            <a className="text-link" href="/incident-management">
              How we support operations ↗
            </a>
          </div>
        </section>
        <section className="portfolio-preview">
          <div>
            <p className="section-label">Selected work</p>
            <h2>Plans, systems, and support applied in the field.</h2>
            <p>
              Our portfolio focuses on the operational problem, the structure
              built around it, and the work required to carry the plan through
              execution.
            </p>
            <a className="text-link" href="/portfolio">
              View the portfolio ↗
            </a>
          </div>
          <a
            className="portfolio-preview-card"
            href="/portfolio#tunnel-to-towers-jackson"
          >
            <span>PLANNED EVENT / JACKSON, MICHIGAN</span>
            <strong>Tunnel to Towers Jackson 5K</strong>
            <p>
              Event command, operational planning, interagency coordination, and
              field communications.
            </p>
            <b>VIEW CASE STUDY ↗</b>
          </a>
        </section>
        <section className="home-cta">
          <p className="section-label">Let’s talk</p>
          <h2>
            Preparing for an event
            <br />
            or operation?
          </h2>
          <p>
            Tell us what you are planning, where the friction is, and what a
            successful day needs to look like.
          </p>
          <a className="button button--primary" href="/contact">
            Contact Us <span>↗</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
