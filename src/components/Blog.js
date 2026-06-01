import React from 'react';
import '../css/blog.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const posts = [
  {
    category: 'Case Study',
    date: 'March 2024',
    title: 'How We Reduced Sick Days for a 200-Person Manhattan Office',
    excerpt:
      'A mid-size financial services firm was experiencing above-average employee absenteeism. After implementing our weekly disinfection and daily high-touch cleaning program, they reported a 35% reduction in sick days within three months.',
    readTime: '4 min read',
  },
  {
    category: 'Case Study',
    date: 'January 2024',
    title: 'Complete Floor Restoration for a Brooklyn Retail Chain',
    excerpt:
      'A 12-location retail brand had severely worn VCT flooring across their stores. Our strip, wax, and buffing program transformed every location in under two weeks — without a single day of store closure.',
    readTime: '3 min read',
  },
  {
    category: 'Case Study',
    date: 'October 2023',
    title: 'Post-Construction Deep Clean for a Medical Office Buildout',
    excerpt:
      'After a full renovation, a specialty medical practice needed a thorough clean before opening. We performed a multi-day post-construction clean including floor restoration and disinfection of all clinical surfaces.',
    readTime: '5 min read',
  },
  {
    category: 'Industry Tips',
    date: 'August 2023',
    title: 'The Hidden Cost of Neglecting Commercial Floor Maintenance',
    excerpt:
      'Most facility managers underestimate how quickly unaddressed floor wear leads to premature replacement. Regular maintenance — scrubbing, buffing, and annual strip-and-wax — can extend floor life by 5–10 years.',
    readTime: '6 min read',
  },
  {
    category: 'Industry Tips',
    date: 'June 2023',
    title: "Electrostatic Fogging vs. Traditional Disinfecting: What's the Difference?",
    excerpt:
      "Traditional sprays cover surfaces you can see. Electrostatic fogging wraps around objects and reaches areas that manual wiping simply can't. We break down the science and explain when each method is most effective.",
    readTime: '5 min read',
  },
  {
    category: 'Company News',
    date: 'April 2023',
    title: 'Brilliance FS Adds Professional Upholstery Cleaning to Its Service Line',
    excerpt:
      "We're excited to announce upholstery cleaning as a new offering. Office chairs, lobby sofas, and cubicle panels harbor more bacteria than most people realize — and we're here to change that.",
    readTime: '2 min read',
  },
];

const tagClass = {
  'Case Study':    'tag-blue',
  'Industry Tips': 'tag-green',
  'Company News':  'tag-amber',
};

const Blog = () => {
  return (
    <div className="blog-page">

      <section className="page-hero">
        <div className="container">
          <span className="tag">Insights</span>
          <h1 className="page-hero-title">Case Studies & Industry Insights</h1>
          <p className="page-hero-subtitle">
            Real results, practical knowledge, and news from the Brilliance FS team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.title} className="blog-card">
                <div className="blog-card-meta">
                  <span className={`blog-label ${tagClass[post.category] || ''}`}>
                    {post.category}
                  </span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="read-time">{post.readTime}</span>
                  <button className="read-more-btn">
                    Read More <ArrowForwardIcon className="btn-icon" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Want Results Like These?</h2>
            <p>Let's talk about what Brilliance FS can do for your facility.</p>
            <Link to="/contact" className="btn-cta-white">Contact Us Today</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
