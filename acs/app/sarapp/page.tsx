import { PageHero, SectionTitle, Shell } from "../site-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc-Horizon",
  description:
    "Arc-Horizon is an offline-first incident command platform for search and rescue, developed by Arcadia Command Solutions.",
};

export default function Page() {
  return (
    <Shell>
      <PageHero
        eyebrow="Arc-Horizon by Arcadia Command Solutions"
        code="ARC-HORIZON"
        title="One operational picture. Command post to field."
        intro="Arc-Horizon is an offline-first incident command platform built first for search and rescue, with a companion app that connects command-post coordination to work in the field."
      >
        <a className="button button--primary" href="https://arc-horizon.net" target="_blank" rel="noreferrer">
          Visit arc-horizon.net <span>↗</span>
        </a>
      </PageHero>

      <section className="product-overview">
        <SectionTitle
          label="The platform"
          title="Built around how search operations actually run."
          text="Arc-Horizon brings personnel, teams, assignments, maps, field reporting, operational information, and incident documentation into one connected system without assuming dependable internet access."
        />
        <div className="product-console">
          <div className="console-top">
            <span>
              ARC-<b>HORIZON</b>
            </span>
            <i>INCIDENT ACTIVE</i>
          </div>
          <div className="console-content">
            <aside>
              <i />
              <i />
              <i />
              <i />
              <i />
            </aside>
            <div>
              <p>COMMAND OVERVIEW</p>
              <h3>Operational picture</h3>
              <div className="metric-row">
                <span>
                  <b>06</b>TEAMS
                </span>
                <span>
                  <b>09</b>TASKS
                </span>
                <span>
                  <b>02</b>ALERTS
                </span>
              </div>
              <div className="board-row">
                <div className="map-panel">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="team-panel">
                  <span>
                    G-01 <b>ENROUTE</b>
                  </span>
                  <span>
                    G-02 <b>ASSIGNED</b>
                  </span>
                  <span>
                    A-01 <b>AVAILABLE</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sarapp-focus">
        <figure>
          <img
            src="/photo-sarapp-field.jpg"
            alt="A search and rescue team member using a rugged field tablet near a response vehicle"
          />
        </figure>
        <div>
          <p className="section-label">Search and rescue first</p>
          <h2>Command information that reaches the field—and comes back.</h2>
          <p>
            Arc-Horizon is being designed around the full search operation:
            building teams, assigning work, maintaining an operational map,
            following progress, receiving field reports, tracking critical
            information, and preserving the incident record.
          </p>
          <p>
            The same foundation can support other incidents and planned events
            without turning every operation into the same workflow.
          </p>
        </div>
      </section>

      <section className="sarapp-principle">
        <div className="sarapp-principle-head">
          <p className="section-label">The idea behind Arc-Horizon</p>
          <h2>
            Plan. Coordinate.
            <br />
            Respond. <em>Together.</em>
          </h2>
          <p>
            Arc-Horizon is not meant to create another isolated command-post
            system. It is meant to connect the people developing the plan,
            coordinating the operation, and carrying out the work in the field.
          </p>
        </div>
        <div className="sarapp-principle-steps">
          <article>
            <b>01</b>
            <h3>Plan</h3>
            <p>
              Turn objectives, intelligence, geography, risks, resources, and
              operational priorities into work that can be understood and
              assigned.
            </p>
          </article>
          <article>
            <b>02</b>
            <h3>Coordinate</h3>
            <p>
              Keep command staff, partner agencies, support functions, and field
              teams working from the same operational picture.
            </p>
          </article>
          <article>
            <b>03</b>
            <h3>Respond</h3>
            <p>
              Move assignments and critical information into the field, then
              return status, observations, and results to command.
            </p>
          </article>
          <article className="together">
            <b>04</b>
            <h3>Together</h3>
            <p>
              The value comes from closing the gap between those four groups—not
              from giving each of them another separate tool.
            </p>
          </article>
        </div>
      </section>

      <section className="product-capabilities sarapp-capabilities">
        <article>
          <b>01</b>
          <h3>Command</h3>
          <p>
            Incident organization, personnel, teams, resources, operational
            status, alerts, and a common command picture.
          </p>
        </article>
        <article>
          <b>02</b>
          <h3>Assignments</h3>
          <p>
            Task development, briefing, team assignment, status tracking, field
            progress, and operational closeout.
          </p>
        </article>
        <article>
          <b>03</b>
          <h3>GIS</h3>
          <p>
            Search planning, operational layers, assignments, clues, hazards,
            drawing tools, and map exchange.
          </p>
        </article>
        <article>
          <b>04</b>
          <h3>Information</h3>
          <p>
            Field reports, subjects, clues, leads, weather, safety information,
            agency coordination, and situation awareness.
          </p>
        </article>
        <article>
          <b>05</b>
          <h3>Planning</h3>
          <p>
            Objectives, strategies, tactics, meetings, resource needs,
            operational periods, and action-plan development.
          </p>
        </article>
        <article>
          <b>06</b>
          <h3>Documentation</h3>
          <p>
            ICS forms, logs, assignment records, situation reports, and an
            incident record built from work already being tracked.
          </p>
        </article>
      </section>

      <section className="sarapp-surfaces">
        <div>
          <p className="section-label">Command application</p>
          <h2>A complete working environment for the command post.</h2>
          <p>
            The Windows desktop application is being designed for incident
            command, section staff, planners, dispatchers, and other personnel
            who need the complete operational picture and the tools to manage
            it.
          </p>
          <ul>
            <li>Incident and organizational management</li>
            <li>Team, task, and resource boards</li>
            <li>Operational GIS and search planning</li>
            <li>Planning-cycle and documentation support</li>
          </ul>
        </div>
        <div>
          <p className="section-label">Companion field app</p>
          <h2>The team’s connection to the incident.</h2>
          <p>
            The companion app gives field personnel a focused mobile experience
            without reproducing the entire command application on a smaller
            screen.
          </p>
          <ul>
            <li>Team check-in and assignment details</li>
            <li>Maps and task information</li>
            <li>Status and narrative reporting</li>
            <li>Hazards, messages, and field intelligence</li>
          </ul>
        </div>
      </section>

      <section className="offline-band">
        <span>OFFLINE FIRST</span>
        <h2>
          LAN when available.
          <br />
          Cloud when reachable.
          <br />
          Local when neither is possible.
        </h2>
        <p>
          Arc-Horizon is designed so an incident can continue operating
          when connectivity degrades instead of making the network another
          single point of failure.
        </p>
      </section>

      <section className="detail-band">
        <p className="section-label">Designed to extend beyond SAR</p>
        <div>
          <span>Emergency incidents</span>
          <span>Planned events</span>
          <span>Multi-agency operations</span>
          <span>Field coordination</span>
          <span>Training exercises</span>
        </div>
      </section>

      <section className="page-cta">
        <p className="section-label">Follow the development</p>
        <h2>See the full Arc-Horizon platform.</h2>
        <p>
          Explore the platform, product direction, and current information on
          the dedicated Arc-Horizon website.
        </p>
        <a className="button button--primary" href="https://arc-horizon.net" target="_blank" rel="noreferrer">
          Visit arc-horizon.net <span>↗</span>
        </a>
      </section>
    </Shell>
  );
}
