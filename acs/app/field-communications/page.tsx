import { NextPage, PageHero, SectionTitle, Shell } from "../site-components";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Field Communications" };

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow="Field Communications"
        code="COMMS"
        title="The operation only works if people can communicate."
        intro="Arcadia Command Solutions provides planned, configured, and supported radio communications for events and field operations across South Central Michigan."
      />
      <section className="detail-intro">
        <SectionTitle
          label="Three levels of support"
          title="More than a box of radios."
          text="Choose the level of support the operation needs—from configured equipment through a fully managed field communications function."
        />
        <div className="detail-grid">
          <article>
            <b>01 / RENTAL</b>
            <h3>Equipment rental</h3>
            <p>
              Portable radios and supporting equipment configured for the event,
              with clear channel assignments and straightforward operating
              guidance.
            </p>
          </article>
          <article>
            <b>02 / PACKAGE</b>
            <h3>Communications package</h3>
            <p>
              Equipment rental combined with preplanning, programming, a channel
              plan, delivery, setup, testing, and a complete communications
              plan.
            </p>
          </article>
          <article>
            <b>03 / MANAGED</b>
            <h3>Managed field communications</h3>
            <p>
              A complete package with on-scene technical support and a
              communications specialist supporting the operation from the
              command post.
            </p>
          </article>
        </div>
      </section>
      <section
        className="page-photo-pair"
        aria-label="Field communications in operation"
      >
        <figure>
          <img
            src="/field-comms-radio-issue-branded.jpg"
            alt="A communications technician preparing portable radios and batteries for an event"
          />
          <figcaption>
            <span>Equipment preparation</span>
            <strong>Configured, checked, and ready before users arrive.</strong>
          </figcaption>
        </figure>
        <figure>
          <img
            src="/field-comms-station.jpg"
            alt="A radio operator staffing a temporary communications station at an outdoor event"
          />
          <figcaption>
            <span>On-scene support</span>
            <strong>
              A staffed communications position connected to the operation.
            </strong>
          </figcaption>
        </figure>
      </section>
      <section className="service-split">
        <div>
          <p className="section-label">System capabilities</p>
          <h2>One plan for flexible, interoperable communications.</h2>
          <p>
            Arcadia Command Solutions operates on licensed radio frequencies
            with equipment offering a wide range of digital and analog
            capabilities. That flexibility allows channel plans and equipment
            assignments to be tailored to different user groups and integrated
            into a broader interoperability plan with participating agencies.
            Repeater and mobile-radio options can extend coverage and support a
            dedicated communications station at the command post.
          </p>
        </div>
        <ul>
          <li>DMR and analog portable radios</li>
          <li>Licensed UHF frequencies</li>
          <li>Repeater-capable systems</li>
          <li>Mobile-radio communications stations</li>
          <li>Radio programming and configuration</li>
          <li>Motorola, Vertex Standard, and Retevis equipment</li>
        </ul>
      </section>
      <section className="detail-intro">
        <SectionTitle
          label="Preplanning"
          title="Interoperability starts before the event."
          text="We coordinate with the governmental and nongovernmental organizations involved in the operation to determine how information must move between teams, agencies, and command."
        />
        <div className="phase-list">
          <div>
            <b>01</b>
            <span>
              <strong>Understand the operation</strong>Review the site,
              operating area, staffing, assignments, critical functions,
              expected radio traffic, and known coverage concerns.
            </span>
          </div>
          <div>
            <b>02</b>
            <span>
              <strong>Coordinate the partners</strong>Work with participating
              public-safety agencies, government organizations, event staff,
              contractors, and volunteer groups to identify interoperable
              communications needs.
            </span>
          </div>
          <div>
            <b>03</b>
            <span>
              <strong>Build the plan</strong>Develop channel assignments, radio
              identifiers, communications procedures, contingencies, and a
              complete incident communications plan.
            </span>
          </div>
          <div>
            <b>04</b>
            <span>
              <strong>Prepare the system</strong>Program, label, stage, deliver,
              test, and issue equipment so users know what they have and how to
              use it.
            </span>
          </div>
        </div>
      </section>
      <section className="detail-band">
        <p className="section-label">Designed for</p>
        <div>
          <span>Community events</span>
          <span>Races and festivals</span>
          <span>Fairs and venues</span>
          <span>Private security</span>
          <span>Search and rescue</span>
          <span>Emergency management</span>
          <span>Municipal operations</span>
          <span>Multi-agency incidents</span>
        </div>
      </section>
      <section className="detail-quote">
        <p>
          Reliable communications are an operational system—not simply a
          collection of radios.
        </p>
      </section>
      <section className="page-cta">
        <p className="section-label">Start a conversation</p>
        <h2>Tell us what the operation needs to cover.</h2>
        <p>
          We will help determine the right equipment, channel structure,
          planning support, and on-scene presence.
        </p>
        <a className="button button--primary" href="/contact">
          Contact Us <span>↗</span>
        </a>
      </section>
      <NextPage
        href="/incident-management"
        label="Next capability"
        title="Incident Management"
      />
    </Shell>
  );
}
