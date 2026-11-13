import type { Metadata } from "next";
import { PageHero, Shell } from "../site-components";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Arcadia Command Solutions about field communications, incident management, planned-event support, or Arc-Horizon.",
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Contact Arcadia Command Solutions"
        code="CONTACT"
        title="Tell us what the operation needs."
        intro="Share the basic scope, location, timing, and support you are considering. We will use that information to start a practical conversation—without forcing your operation into a preset package."
      />

      <section className="contact-layout">
        <aside className="contact-sidebar">
          <p className="section-label">Start here</p>
          <h2>A few useful details are enough.</h2>
          <p>
            You do not need a finished plan before contacting us. Tell us what
            is known, what is still uncertain, and where you expect the greatest
            operational friction.
          </p>
          <div className="contact-direct">
            <span>DIRECT EMAIL</span>
            <a href="mailto:pheleyb@arcadiacommandsolutions.com">
              pheleyb@arcadiacommandsolutions.com
            </a>
            <small>Arcadia Command Solutions contact address</small>
          </div>
          <div className="contact-facts">
            <div>
              <b>REGION</b>
              <span>South Central Michigan</span>
            </div>
            <div>
              <b>PRICING</b>
              <span>Quoted to the operation</span>
            </div>
            <div>
              <b>FOCUS</b>
              <span>Planning and field execution</span>
            </div>
          </div>
        </aside>
        <ContactForm />
      </section>
    </Shell>
  );
}
