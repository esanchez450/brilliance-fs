import React, { useState } from 'react';
import '../css/contact.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const serviceOptions = [
  'Floor Services',
  'Disinfecting Services',
  'Fogging',
  'Cleaning & Disinfecting',
  'Strip & Wax',
  'Grout Cleaning',
  'Acid Wash',
  'Floor Scrubbing & Buffing',
  'Carpet Cleaning',
  'Upholstery Cleaning',
  'General Inquiry',
];

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim())  e.lastName  = 'Last name is required';
    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) e.message = 'Please describe your needs';
    return e;
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="contact-page">

      <section className="page-hero">
        <div className="container">
          <span className="tag">Contact Us</span>
          <h1 className="page-hero-title">Let's Start the Conversation</h1>
          <p className="page-hero-subtitle">
            Ready for a cleaner facility? Reach out for a free, no-obligation quote or
            to learn more about our services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Info cards */}
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon"><PhoneIcon /></div>
              <h3>Phone</h3>
              <p>Speak with our team directly</p>
              <a href="tel:+13474490795">(347) 449-0795</a>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon"><EmailIcon /></div>
              <h3>Email</h3>
              <p>We respond within 24 hours</p>
              <a href="mailto:BCapote@brilliance-fs.com">BCapote@brilliance-fs.com</a>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon"><AccessTimeIcon /></div>
              <h3>Service Hours</h3>
              <p>Available when you need us</p>
              <span>Mon – Sun, 6 am – 10 pm</span>
            </div>
          </div>

          {/* Form card */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success">
                <CheckCircleIcon className="success-icon" />
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. A member of our team will contact you
                  within one business day to discuss your needs.
                </p>
                <button className="btn-primary" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="form-card-header">
                  <h2>Request a Free Quote</h2>
                  <p>Fill out the form below and we'll get back to you within one business day.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className={`form-group${errors.firstName ? ' error' : ''}`}>
                      <label htmlFor="firstName">First Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                      />
                      {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                    </div>
                    <div className={`form-group${errors.lastName ? ' error' : ''}`}>
                      <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                      />
                      {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group${errors.email ? ' error' : ''}`}>
                      <label htmlFor="email">Email Address <span className="required">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                      />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <div className="select-wrapper">
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={`form-group${errors.message ? ' error' : ''}`}>
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your facility and what services you're looking for…"
                    />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
