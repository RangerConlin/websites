export const offerings = [
  {
    href: "/field-communications",
    index: "01",
    short: "COMMS",
    title: "Field Communications",
    text: "Radio systems, equipment, and on-site support built around the geography and tempo of the operation.",
  },
  {
    href: "/incident-management",
    index: "02",
    short: "COMMAND",
    title: "Incident Management",
    text: "Planning, ICS consulting, coordination, and command support for planned events and evolving operations.",
  },
  {
    href: "/sarapp",
    index: "03",
    short: "SOFTWARE",
    title: "Arc-Horizon",
    text: "An offline-first incident command assistant for SAR, incidents, and planned events.",
  },
];

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand-lockup ${footer ? "brand-lockup--footer" : ""}`}
      href="/"
      aria-label="Arcadia Command Solutions home"
    >
      <picture>
        {footer ? (
          <>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="/brand-full-dark.png"
            />
            <img src="/brand-full-light.png" alt="Arcadia Command Solutions" />
          </>
        ) : (
          <>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="/brand-wordmark-white.png"
            />
            <img
              src="/brand-wordmark-blue.png"
              alt="Arcadia Command Solutions"
            />
          </>
        )}
      </picture>
    </a>
  );
}
const navigation = [
  { href: "/field-communications", label: "Field Communications" },
  { href: "/incident-management", label: "Incident Management" },
  { href: "/sarapp", label: "Arc-Horizon" },
  { href: "/portfolio", label: "Portfolio" },
];

export function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="/contact">
          Contact Us
        </a>
      </nav>
      <details className="mobile-nav">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/contact">Contact Us</a>
        </nav>
      </details>
    </header>
  );
}
export function Footer() {
  return (
    <footer id="contact">
      <div>
        <Brand footer />
        <p className="footer-tagline">
          Plan, Coordinate, Respond — <strong>Together</strong>
        </p>
      </div>
      <div className="footer-links">
        <p>Explore</p>
        {offerings.map((x) => (
          <a key={x.href} href={x.href}>
            {x.title}
          </a>
        ))}
        <a href="/portfolio">Portfolio</a>
      </div>
      <div className="footer-contact">
        <p>Start a conversation</p>
        <a href="/contact">Contact Us ↗</a>
        <small>Field communications and incident management consulting</small>
      </div>
    </footer>
  );
}
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export function PageHero({
  eyebrow,
  title,
  intro,
  code,
  children,
  brandLight,
  brandDark,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  code: string;
  children?: React.ReactNode;
  brandLight?: string;
  brandDark?: string;
}) {
  const productBrand = Boolean(brandLight || brandDark);
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <p className="page-code">ARC / {code}</p>
        <h1>{title}</h1>
        <p className="page-intro">{intro}</p>
        {children}
      </div>
      <div
        className={`page-hero-brand ${productBrand ? "page-hero-brand--product" : ""}`}
        aria-hidden="true"
      >
        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcSet={brandDark || "/brand-shield-dark.png"}
          />
          <img src={brandLight || "/brand-shield-light.png"} alt="" />
        </picture>
        <span>{code}</span>
      </div>
    </section>
  );
}
export function SectionTitle({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
export function NextPage({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <section className="next-page">
      <p>{label}</p>
      <a href={href}>
        <span>{title}</span>
        <b>↗</b>
      </a>
    </section>
  );
}
