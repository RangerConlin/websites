"use client";

import type { FormEvent } from "react";

const CONTACT_EMAIL = "pheleyb@arcadiacommandsolutions.com";

export default function ContactForm() {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (name: string) =>
      String(data.get(name) || "Not provided").trim();
    const subject = `Arcadia Command Solutions inquiry — ${value("service")}`;
    const body = [
      "ARCADIA COMMAND SOLUTIONS — WEBSITE INQUIRY",
      "",
      `Name: ${value("name")}`,
      `Organization: ${value("organization")}`,
      `Reply email: ${value("email")}`,
      `Phone: ${value("phone")}`,
      "",
      `Support requested: ${value("service")}`,
      `Event or incident type: ${value("operationType")}`,
      `Location: ${value("location")}`,
      `Date or timeframe: ${value("date")}`,
      `Anticipated scale: ${value("scale")}`,
      "",
      "OPERATION / REQUEST",
      value("details"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={prepareEmail}>
      <div className="form-heading">
        <p className="section-label">Operational inquiry</p>
        <h2>What are you planning?</h2>
      </div>
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Organization</span>
          <input name="organization" autoComplete="organization" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="form-wide">
          <span>What support are you considering? *</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option>Field communications</option>
            <option>Incident management</option>
            <option>Planned-event support</option>
            <option>Arc-Horizon</option>
            <option>General inquiry</option>
          </select>
        </label>
        <label>
          <span>Event or incident type</span>
          <input name="operationType" placeholder="Race, festival, exercise…" />
        </label>
        <label>
          <span>Location</span>
          <input name="location" placeholder="City and state" />
        </label>
        <label>
          <span>Date or timeframe</span>
          <input name="date" placeholder="Known date or approximate window" />
        </label>
        <label>
          <span>Anticipated scale</span>
          <input name="scale" placeholder="Attendance, teams, agencies…" />
        </label>
        <label className="form-wide">
          <span>What should we know? *</span>
          <textarea
            name="details"
            rows={7}
            required
            placeholder="Describe the operation, what is already in place, and where support may be needed."
          />
        </label>
      </div>
      <div className="form-submit">
        <p>
          This temporary form opens a prepared message in your email
          application. Nothing is sent until you review and send it.
        </p>
        <button className="button button--primary" type="submit">
          Prepare email <span>↗</span>
        </button>
      </div>
    </form>
  );
}
