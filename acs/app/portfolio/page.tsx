import { PageHero, Shell } from "../site-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected planned-event and operational work by Arcadia Command Solutions.",
};

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow="Portfolio"
        code="WORK"
        title="Operational work, shown in context."
        intro="Selected examples of how Arcadia Command Solutions applies planning, command structure, coordination, and communications to real operations."
      />

      <section className="portfolio-lead" id="tunnel-to-towers-jackson">
        <div
          className="case-visual"
          aria-label="Tunnel to Towers Jackson 5K case study"
        >
          <span>JACKSON, MI</span>
          <strong>T2T</strong>
          <p>PLANNED EVENT</p>
        </div>
        <div className="case-copy">
          <p className="section-label">Featured case study</p>
          <h2>Tunnel to Towers Jackson 5K</h2>
          <p className="case-summary">
            A community road race and remembrance event requiring coordinated
            event operations, public-safety integration, traffic management,
            communications, and command oversight.
          </p>
          <dl>
            <div>
              <dt>Environment</dt>
              <dd>Community planned event</dd>
            </div>
            <div>
              <dt>Scale</dt>
              <dd>Approximately 500 participants</dd>
            </div>
            <div>
              <dt>Region</dt>
              <dd>Jackson, Michigan</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Incident command and operational planning</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="case-work">
        <div>
          <p className="section-label">The assignment</p>
          <h2>Bring the moving parts into one operation.</h2>
        </div>
        <div>
          <p>
            Arcadia Command Solutions supported the event through incident
            command, operational planning, field communications, and
            coordination among event leadership, public-safety partners,
            volunteers, and operational teams.
          </p>
          <p>
            The work centered on turning a collection of event functions into a
            clear operating structure with defined responsibilities,
            communications paths, operational timelines, and command oversight.
          </p>
        </div>
      </section>

      <section className="case-capabilities">
        <article>
          <b>01</b>
          <h3>Command structure</h3>
          <p>
            A right-sized Incident Command System organization designed around
            the event’s actual functions and span of control.
          </p>
        </article>
        <article>
          <b>02</b>
          <h3>Operational planning</h3>
          <p>
            Objectives, schedules, assignments, contingencies, site operations,
            traffic considerations, and readiness coordination.
          </p>
        </article>
        <article>
          <b>03</b>
          <h3>Communications</h3>
          <p>
            A field radio system and communications plan supporting command,
            operational teams, and event coordination.
          </p>
        </article>
        <article>
          <b>04</b>
          <h3>Agency coordination</h3>
          <p>
            Integration of event personnel, volunteers, supporting
            organizations, and public-safety partners into a common plan.
          </p>
        </article>
      </section>

      <section className="case-outcome">
        <p className="section-label">Continuing improvement</p>
        <h2>The work does not end when the course closes.</h2>
        <p>
          Post-event review is used to strengthen policies, role clarity,
          planning timelines, resource readiness, communications, and future
          operating procedures. Specific internal findings remain with the event
          organization; the broader lesson is public: disciplined review is part
          of responsible incident management.
        </p>
      </section>

      <section className="case-study-detail">
        <div>
          <p className="section-label">Case study</p>
          <h2>From an event plan to an operating system.</h2>
        </div>
        <div className="case-study-grid">
          <article><span>01 / Challenge</span><h3>Many functions, one event.</h3><p>Race operations, public safety, traffic control, volunteers, vendors, communications, and event leadership all had to work from the same priorities without building an organization larger than the event required.</p></article>
          <article><span>02 / Approach</span><h3>Build around the work.</h3><p>The operation used a right-sized command structure, defined functional groups, written assignments, a common operational timeline, radio channel planning, command-post coordination, and contingencies for weather, medical, traffic, and crowd issues.</p></article>
          <article><span>03 / Execution</span><h3>Keep command connected to the field.</h3><p>During the event, command maintained the operating picture, coordinated supporting partners, tracked significant activity, resolved cross-functional issues, and adjusted assignments as conditions changed.</p></article>
          <article><span>04 / Improvement</span><h3>Carry lessons into the next year.</h3><p>The post-event review translated observations into practical improvements to tasking packets, logistics and check-in, demobilization, communications, and the organization of field functions for future events.</p></article>
        </div>
      </section>

      <section className="cap-case-studies">
        <div className="cap-case-intro">
          <p className="section-label">Additional operational experience</p>
          <h2>Civil Air Patrol experience, generalized by design.</h2>
          <p>These examples reflect staff experience supporting Civil Air Patrol and interagency operations. Names, locations, mission identifiers, and sensitive operational details have been intentionally omitted.</p>
        </div>
        <div className="cap-case-list">
          <article><b>SAR / 01</b><h3>Multi-team search operation</h3><p>Supported command and planning functions for a search involving ground teams, air resources, evolving intelligence, assignment tracking, operational mapping, and coordination with local authorities.</p><span>Command · Planning · Search coordination</span></article>
          <article><b>COMMS / 02</b><h3>Air-ground communications exercise</h3><p>Developed and operated a communications structure connecting aircraft, field teams, mission base, and partner agencies while managing channel use, message flow, and contingency paths.</p><span>Radio planning · Interoperability · RADO</span></article>
          <article><b>OPS / 03</b><h3>Regional emergency-support mission</h3><p>Helped organize personnel, aircraft, vehicles, tasking, situation reporting, and operational documentation during a multi-period response supporting governmental emergency-management partners.</p><span>Operations · Resource tracking · Coordination</span></article>
        </div>
      </section>

      <section className="experience-band">
        <div>
          <p className="section-label">Experience behind the work</p>
          <h2>Built on experience across the operation.</h2>
          <p className="experience-note">
            Years shown below are draft placeholders pending a final review of
            staff histories.
          </p>
        </div>
        <div className="experience-content">
          <div className="experience-metrics">
            <article>
              <strong>XX+</strong>
              <span>Combined years of operational experience</span>
            </article>
            <article>
              <strong>XX+</strong>
              <span>
                Years supporting incident command and emergency operations
              </span>
            </article>
            <article>
              <strong>XX+</strong>
              <span>
                Years in communications, radio, and dispatch environments
              </span>
            </article>
          </div>
          <p>
            Arcadia Command Solutions brings together staff experience from
            multiple parts of the operational system. That range matters: good
            plans account for what command needs, what field personnel can
            execute, and how information actually moves between them.
          </p>
        </div>
      </section>

      <section className="experience-fields">
        <div>
          <p className="section-label">Operational backgrounds</p>
          <h2>Different perspectives. One operating picture.</h2>
        </div>
        <div className="experience-grid">
          <span>Search &amp; rescue</span>
          <span>Emergency management</span>
          <span>Public-safety dispatch</span>
          <span>Field communications</span>
          <span>Radio systems</span>
          <span>Aviation operations</span>
          <span>Planned events</span>
          <span>Community service</span>
        </div>
      </section>

      <section className="ics-specialties">
        <p className="section-label">Incident Command System</p>
        <h2>Specialized where plans become operations.</h2>
        <div>
          <article>
            <b>COMMAND</b>
            <p>
              Objectives, priorities, coordination, risk decisions, and overall
              direction.
            </p>
          </article>
          <article>
            <b>PLANNING</b>
            <p>
              Situation awareness, operational planning, resources,
              documentation, and the planning cycle.
            </p>
          </article>
          <article>
            <b>OPERATIONS</b>
            <p>
              Assignments, field execution, span of control, problem-solving,
              and operational accountability.
            </p>
          </article>
        </div>
      </section>

      <section className="page-cta">
        <p className="section-label">Your operation</p>
        <h2>Need the same clarity around your event?</h2>
        <p>
          We can begin with the operation you already have, identify the gaps,
          and build the level of structure and support the work actually
          requires.
        </p>
        <a className="button button--primary" href="/contact">
          Contact Us <span>↗</span>
        </a>
      </section>
    </Shell>
  );
}
