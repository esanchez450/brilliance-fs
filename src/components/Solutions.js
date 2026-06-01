import React from 'react';
import '../css/solutions.css';
import { Link } from 'react-router-dom';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import GridOnIcon from '@material-ui/icons/GridOn';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import RefreshIcon from '@material-ui/icons/Refresh';
import HomeIcon from '@material-ui/icons/Home';
import WeekendIcon from '@material-ui/icons/Weekend';
import CheckIcon from '@material-ui/icons/Check';

const services = [
  {
    icon: <ViewModuleIcon />,
    title: 'Floor Services',
    desc: 'Comprehensive floor care and maintenance to keep your floors looking immaculate. Our technicians are trained on all commercial floor types and surfaces.',
    features: ['All floor types', 'Routine maintenance', 'Deep cleaning', 'Surface restoration'],
  },
  {
    icon: <LocalHospitalIcon />,
    title: 'Disinfecting Services',
    desc: 'Hospital-grade disinfection using EPA-registered products and proven protocols to eliminate pathogens and create a safe environment for everyone.',
    features: ['EPA-registered products', 'Hospital-grade protocols', 'High-touch point focus', 'Certified technicians'],
  },
  {
    icon: <BlurOnIcon />,
    title: 'Fogging',
    desc: 'Advanced electrostatic fogging technology delivers disinfectant to every surface — including hard-to-reach areas — for complete pathogen elimination.',
    features: ['Electrostatic application', 'Full-room coverage', 'Rapid treatment', 'No residue formula'],
  },
  {
    icon: <AutorenewIcon />,
    title: 'Cleaning & Disinfecting',
    desc: 'Integrated cleaning and disinfecting services combining thorough cleaning with targeted disinfection — the gold standard for high-traffic environments.',
    features: ['Two-step process', 'High-traffic areas', 'Scheduled programs', 'Detailed reporting'],
  },
  {
    icon: <BrightnessMediumIcon />,
    title: 'Strip & Wax',
    desc: 'Professional stripping of old floor finish followed by application of premium multi-coat wax, restoring long-lasting shine and a protective coating.',
    features: ['Old finish removal', 'Surface preparation', 'Multi-coat wax', 'High-gloss finish'],
  },
  {
    icon: <GridOnIcon />,
    title: 'Grout Cleaning',
    desc: 'Specialized grout cleaning and restoration that removes discoloration, mold, and buildup from tile grout lines, restoring the original look of tiled surfaces.',
    features: ['Deep stain removal', 'Mold & mildew treatment', 'Grout restoration', 'Sealant application'],
  },
  {
    icon: <InvertColorsIcon />,
    title: 'Acid Wash',
    desc: 'Professional acid washing for concrete and tile to remove mineral deposits, rust stains, and efflorescence that regular cleaning simply cannot address.',
    features: ['Mineral deposit removal', 'Rust stain treatment', 'Concrete & tile', 'Safe neutralization'],
  },
  {
    icon: <RefreshIcon />,
    title: 'Floor Scrubbing & Buffing',
    desc: 'Mechanical scrubbing and buffing using commercial-grade equipment to maintain shine, remove scuffs, and keep floors in peak condition between deep cleans.',
    features: ['Commercial equipment', 'Scuff removal', 'Streak-free shine', 'Quick turnaround'],
  },
  {
    icon: <HomeIcon />,
    title: 'Carpet Cleaning',
    desc: 'Hot water extraction carpet cleaning that reaches deep into fibers to remove dirt, stains, allergens, and odors — leaving carpets fresh and dry faster.',
    features: ['Hot water extraction', 'Stain pre-treatment', 'Odor elimination', 'Fast drying time'],
  },
  {
    icon: <WeekendIcon />,
    title: 'Upholstery Cleaning',
    desc: 'Professional upholstery cleaning for office furniture, lobby seating, and more. We restore fabric appearance and eliminate germs from frequently touched surfaces.',
    features: ['Fabric-safe solutions', 'Deep extraction', 'Deodorizing treatment', 'All fabric types'],
  },
];

const Solutions = () => {
  return (
    <div className="solutions-page">

      <section className="page-hero">
        <div className="container">
          <span className="tag">Our Services</span>
          <h1 className="page-hero-title">Complete Facility Solutions</h1>
          <p className="page-hero-subtitle">
            From routine maintenance to specialized treatments, Brilliance FS offers a
            full range of commercial cleaning and facility services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f) => (
                    <li key={f}>
                      <CheckIcon className="feature-check" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Service Plan?</h2>
            <p>We'll build a tailored program around your facility, schedule, and budget.</p>
            <Link to="/contact" className="btn-cta-white">Request a Quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;
