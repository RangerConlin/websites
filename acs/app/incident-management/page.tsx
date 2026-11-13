import { PageHero, SectionTitle, Shell } from "../site-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incident Management",
  description:
    "Planned-event management, ICS consulting, command staffing, and operational readiness support from Arcadia Command Solutions.",
};

const phases = [
  [
    "01",
    "Define",
    "Clarify the organizer’s intent, operational objectives, risks, authorities, partners, and measures of success.",
  ],
  [
    "02",
    "Design",
    "Build a right-sized command structure, communications plan, assignments, contingencies, and documentation package.",
  ],
  [
    "03",
    "Prepare",
    "Coordinate agencies and vendors, confirm resources, brief leaders, test communications, and establish readiness gates.",
  ],
  [
    "04",
    "Operate",
    "Maintain the common operating picture, support decisions, track work, resolve issues, and document the operation.",
  ],
  [
    "05",
    "Improve",
    "Close out records, review performance, identify causes, and convert lessons into assigned improvements.",
  ],
];

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow="Incident Management"
        code="COMMAND"
        title="A workable plan. A clear structure. A steadier operation."
        intro="Arcadia Command Solutions helps organizations plan and manage planned events, establish practical command systems, and staff selected incident-management positions when execution matters."
      >
        <a className="button button--primary" href="/contact">
          Discuss an operation <span>↗</span>
        </a>
      </PageHero>

      <section className="command-intro">
        <SectionTitle
          label="Built for real operations"
          title="Structure should make the work easier to run."
          text="We use the Incident Command System as an operating framework—not as paperwork for its own sake. The organization, meetings, plans, and documentation are scaled to the actual complexity of the event or incident."
        />
        <div className="command-phases">
          {phases.map(([number, title, text]) => (
            <article key={number}>
              <b>{number}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="command-feature">
        <figure>
          <img
            src="/photo-command-team-embroidered.jpg"
            alt="Incident management personnel coordinating an operation at a command post"
          />
        </figure>
        <div>
          <p className="section-label">Planned events</p>
          <h2>Management begins well before the public arrives.</h2>
          <p>
            Community events, races, festivals, ceremonies, and other public
            gatherings succeed when objectives, authority, assignments,
            communications, logistics, and contingencies are settled before
            opening time.
          </p>
          <ul>
            <li>Operational concept and command structure</li>
            <li>Agency, vendor, and stakeholder coordination</li>
            <li>Traffic, crowd, weather, medical, and safety planning</li>
            <li>Staffing plans, assignment packets, maps, and briefings</li>
            <li>Command-post setup and operational support</li>
          </ul>
        </div>
      </section>

      <section className="command-roles">
        <div className="command-roles-copy">
          <p className="section-label">On-scene support</p>
          <h2>Planning that stays connected to execution.</h2>
          <p>
            Arcadia Command Solutions can remain involved through the
            operational period instead of handing over a binder and walking
            away. Support can include staffing selected roles, maintaining
            coordination, and helping the organization respond when the plan
            meets reality.
          </p>
        </div>
        <div className="role-board">
          <article>
            <span>COMMAND</span>
            <h3>Incident Command</h3>
            <p>
              Objectives, priorities, risk decisions, coordination, and overall
              operational direction.
            </p>
          </article>
          <article>
            <span>PLANNING</span>
            <h3>Planning &amp; Coordination</h3>
            <p>
              Situation awareness, assignments, resources, meetings, action
              plans, and documentation.
            </p>
          </article>
          <article>
            <span>COMMS</span>
            <h3>Communications</h3>
            <p>
              Channel planning, interoperability, radio operations, and
              communications-position staffing.
            </p>
          </article>
        </div>
      </section>

      <section className="command-deliverables">
        <div>
          <p className="section-label">What the work produces</p>
          <h2>Usable products, not generic templates.</h2>
        </div>
        <div className="deliverable-list">
          <span>Incident or event action plans</span>
          <span>Command and organizational structures</span>
          <span>Operational objectives and assignments</span>
          <span>Communications plans</span>
          <span>Position guides and checklists</span>
          <span>Contingency and emergency plans</span>
          <span>Briefing and command-post materials</span>
          <span>After-action and improvement plans</span>
        </div>
      </section>

      <section className="readiness-band">
        <p className="section-label">Operational readiness</p>
        <h2>“Ready” should mean something specific.</h2>
        <p>
          Before an operation begins, critical conditions should be verified—not
          assumed. We help establish practical readiness gates for staffing,
          communications, equipment, site conditions, agency coordination, and
          leadership authorization.
        </p>
        <div>
          <span>People</span>
          <span>Plans</span>
          <span>Communications</span>
          <span>Resources</span>
          <span>Authority</span>
        </div>
      </section>

      <section className="command-split">
        <article>
          <p className="section-label">Evolving incidents</p>
          <h2>Add structure without slowing the response.</h2>
          <p>
            For expanding operations, support focuses on restoring span of
            control, defining responsibilities, organizing information,
            establishing an operational rhythm, and giving field personnel
            clearer direction.
          </p>
        </article>
        <article>
          <p className="section-label">After action</p>
          <h2>Turn experience into a better next operation.</h2>
          <p>
            We separate symptoms from causes, document decisions and
            observations, and develop specific corrective actions with ownership
            and follow-through.
          </p>
        </article>
      </section>

      <section className="page-cta">
        <p className="section-label">Start a conversation</p>
        <h2>Planning an event or strengthening an operation?</h2>
        <p>
          Tell us what you are responsible for, what is already in place, and
          where the operation needs more structure or support.
        </p>
        <a className="button button--primary" href="/contact">
          Contact Us <span>↗</span>
        </a>
      </section>
    </Shell>
  );
}
