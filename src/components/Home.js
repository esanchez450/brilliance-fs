import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import GroupIcon from '@material-ui/icons/Group';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BuildIcon from '@material-ui/icons/Build';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const previewServices = [
  {
    icon: '🧹',
    title: 'Floor Services',
    desc: 'Scrubbing, buffing, strip & wax, and ongoing maintenance for every floor type.',
  },
  {
    icon: '🛡️',
    title: 'Disinfecting Services',
    desc: 'Hospital-grade disinfection protocols to keep your team and clients safe.',
  },
  {
    icon: '🌫️',
    title: 'Fogging & Sanitizing',
    desc: 'Electrostatic fogging for full-room coverage against viruses and bacteria.',
  },
  {
    icon: '🪑',
    title: 'Carpet & Upholstery',
    desc: 'Deep extraction cleaning that removes stains, odors, and allergens from fabric.',
  },
];

const whyPoints = [
  'Trained, background-checked professionals on every job',
  'Eco-friendly, commercial-grade products',
  'Fully insured and bonded services',
  'Flexible scheduling — nights, weekends, and off-hours',
  'Consistent quality with every single visit',
];

const whyCards = [
  {
    icon: <VerifiedUserIcon />,
    title: 'Licensed & Insured',
    desc: 'Full liability coverage and bonded technicians protecting your property.',
  },
  {
    icon: <GroupIcon />,
    title: 'Experienced Team',
    desc: 'Over a decade of commercial cleaning expertise across industries.',
  },
  {
    icon: <AccessTimeIcon />,
    title: 'Reliable Scheduling',
    desc: 'On-time arrivals and flexible hours including nights and weekends.',
  },
  {
    icon: <BuildIcon />,
    title: 'Custom Solutions',
    desc: 'Tailored cleaning plans designed around your needs and budget.',
  },
];

const Home = () => {
  return (
    <main className="home">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="tag hero-tag">Professional Facility Services</span>
            <h1 className="hero-title">
              Cleaner Spaces.<br />
              <span className="hero-accent">Better Business.</span>
            </h1>
            <p className="hero-subtitle">
              Brilliance FS delivers premium commercial cleaning and facility maintenance
              services. We help businesses maintain spotless, sanitized, and professionally
              maintained environments.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
              <Link to="/solutions" className="btn-secondary">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Service Types</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Services preview ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Comprehensive Facility Solutions</h2>
            <p className="section-subtitle">
              From daily maintenance to deep cleaning, we offer a full suite of
              professional services tailored to your facility's needs.
            </p>
          </div>

          <div className="preview-grid">
            {previewServices.map((s) => (
              <div key={s.title} className="preview-card">
                <div className="preview-icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="preview-cta">
            <Link to="/solutions" className="btn-outline">
              View All Services <ArrowForwardIcon className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why choose us ──────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <span className="section-eyebrow">Why Brilliance FS</span>
              <h2 className="section-title">We Go Beyond Clean</h2>
              <p className="why-desc">
                A clean facility impacts employee health, client impressions, and daily
                operations. We bring professionalism and precision to every job — whether
                it's a single suite or a multi-floor campus.
              </p>
              <ul className="why-list">
                {whyPoints.map((p) => (
                  <li key={p}>
                    <CheckCircleOutlineIcon className="check-icon" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary why-learn-more">
                Learn More About Us
              </Link>
            </div>

            <div className="why-right">
              <div className="why-cards">
                {whyCards.map((c) => (
                  <div key={c.title} className="why-card">
                    <div className="why-card-icon">{c.icon}</div>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ─────────────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Facility?</h2>
            <p>Contact us today for a free, no-obligation quote tailored to your needs.</p>
            <Link to="/contact" className="btn-cta-white">Get a Free Quote</Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
