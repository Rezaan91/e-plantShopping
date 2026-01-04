
// src/pages/AboutUs.jsx
import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-us-container container" style={{ lineHeight: 1.6 }}>
      <h2 style={{ margin: '1rem 0' }}>About Paradise Nursery</h2>

      {/* Introduction */}
      <p>
        Welcome to <strong>Paradise Nursery</strong>, a Cape Town–based plant boutique offering
        a curated collection of indoor plants, planters, and accessories.
      </p>

      {/* Mission */}
      <h3>Our Mission</h3>
      <p>
        We bring nature closer to people—one leaf at a time—by providing hardy, low‑maintenance
        species and practical care guidance so your greens thrive at home and at work.
      </p>

      {/* Services */}
      <h3>Services</h3>
      <ul>
        <li>📦 Same‑week delivery in Cape Town</li>
        <li>🪴 Free repotting for orders over R800</li>
        <li>💬 Care support via chat and email</li>
      </ul>
    </section>
  );
}
