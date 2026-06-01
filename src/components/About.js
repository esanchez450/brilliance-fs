import React from 'react';
import '../css/about.css';
import { Link } from 'react-router-dom';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import EcoIcon from '@material-ui/icons/Eco';
import PeopleIcon from '@material-ui/icons/People';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const values = [
  {
    icon: <VerifiedUserIcon />,
    title: 'Quality First',
    desc: 'We never cut corners. Every job is completed to the highest standard, backed by our satisfaction guarantee and a team that genuinely cares.',
  },
  {
    icon: <EcoIcon />,
    title: 'Eco-Conscious',
    desc: 'We use environmentally responsible, commercial-grade products that are effective against pathogens while being safe for people, pets, and the planet.',
  },
  {
    icon: <PeopleIcon />,
    title: 'Client-Centered',
    desc: 'Your needs drive everything we do. We listen, adapt, and build solutions around your schedule, facility type, and specific goals.',
  },
];

const commitments = [
  'All technicians are thoroughly background-checked and trained before entering any facility',
  'Fully insured and bonded — protecting your property and our team on every job',
  "Consistent crew assignments so you always know who's in your building",
  'Clear communication before, during, and after every service visit',
  'Transparent, competitive pricing with no hidden fees or surprise charges',
  'Dedicated account support available whenever you need us',
];

const About = () => {
  return (
    <div className="about-page">

      <section className="page-hero">
        <div className="container">
          <span className="tag">About Us</span>
          <h1 className="page-hero-title">Built on Trust. Driven by Results.</h1>
          <p className="page-hero-subtitle">
            Brilliance FS is a professional facility services company committed to
            delivering exceptional cleaning and maintenance for commercial clients.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-left">
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">A Commitment to Excellence Since Day One</h2>
              <p className="story-text">
                Brilliance FS was founded with a simple mission: provide commercial facilities
                with the level of care and attention that most cleaning services overlook. We
                saw an industry where speed was prioritized over quality — and we chose a
                different path.
              </p>
              <p className="story-text">
                Today, we serve a wide range of commercial clients including office buildings,
                medical facilities, retail spaces, and industrial properties across the New York
                area. Our team brings the same dedication to a single office suite as we do to
                a multi-floor corporate campus.
              </p>
              <p className="story-text">
                Every member of our staff is trained not just in cleaning techniques, but in
                professionalism, discretion, and client service. When you work with Brilliance
                FS, you're not hiring a cleaning crew — you're gaining a long-term facility
                partner.
              </p>
            </div>

            <div className="story-right">
              <div className="highlight-box highlight-primary">
                <span className="highlight-label">Our Mission</span>
                <p>
                  To deliver consistent, high-quality facility services that create healthier,
                  safer, and more productive environments for our clients and their teams.
                </p>
              </div>
              <div className="highlight-box highlight-accent">
                <span className="highlight-label">Our Vision</span>
                <p>
                  To be the most trusted name in commercial facility services — known for
                  reliability, professionalism, and a standard of cleanliness that truly
                  makes a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">
              These principles guide every decision we make and every service we deliver.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section">
        <div className="container">
          <div className="commitment-grid">
            <div className="commitment-left">
              <span className="section-eyebrow">Our Promise</span>
              <h2 className="section-title">What You Can Always Count On</h2>
              <p className="commitment-desc">
                We hold ourselves to a high standard because your facility deserves nothing
                less. Here's what every Brilliance FS client receives on every engagement.
              </p>
              <Link to="/contact" className="btn-primary commitment-cta">Work With Us</Link>
            </div>
            <ul className="commitment-list">
              {commitments.map((c) => (
                <li key={c}>
                  <CheckCircleOutlineIcon className="check-icon" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>Join hundreds of businesses that trust Brilliance FS to keep their facilities in peak condition.</p>
            <Link to="/contact" className="btn-cta-white">Get in Touch</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
