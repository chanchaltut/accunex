import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa';
import { BRAND, SERVICE_CATEGORIES } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      alert('Thank you for contacting Accu Nex Taxation Services! We will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Office Location', details: [BRAND.address] },
    { icon: <FaPhone />, title: 'Phone Number', details: ['+91 ' + BRAND.phone], link: `tel:${BRAND.phone}` },
    { icon: <FaEnvelope />, title: 'Email Address', details: [BRAND.email], link: `mailto:${BRAND.email}` },
    { icon: <FaWhatsapp />, title: 'WhatsApp', details: ['+91 ' + BRAND.whatsapp], link: `https://wa.me/${BRAND.whatsapp}?text=Hi!` },
    { icon: <FaClock />, title: 'Working Hours', details: ['Mon - Sat: 10:00 AM - 7:00 PM', 'Sunday: Closed'] }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Accu Nex Taxation Services</title>
        <meta name="description" content="Contact Accu Nex Taxation Services for GST, ITR, and company registration queries. ICAI-registered CAs available online." />
        <link rel="canonical" href="https://accunextaxation.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#0d1b2a] dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#1e3a54]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Contact <span className="text-[#f4b942]">Us</span>
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Get in touch with our CA experts for any taxation or compliance assistance. We provide 100% online services across India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#0f172a] py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-[#162032] border border-[#1e3a54] rounded-xl p-5 hover:border-[#f4b942]/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-[#f4b942] text-xl mt-1 flex-shrink-0">{info.icon}</div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        {info.link ? (
                          <a href={info.link} target={info.link.includes('wa.me') ? '_blank' : undefined} rel={info.link.includes('wa.me') ? 'noopener noreferrer' : undefined} className="text-[#94a3b8] hover:text-[#f4b942] text-sm transition-colors">
                            {detail}
                          </a>
                        ) : (
                          <p className="text-[#94a3b8] text-sm">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#162032] border border-[#1e3a54] rounded-2xl p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#94a3b8] text-sm font-semibold mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-[#0d1b2a] border border-[#1e3a54] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4b942]" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-[#94a3b8] text-sm font-semibold mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-[#0d1b2a] border border-[#1e3a54] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4b942]" placeholder="Phone Number" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#94a3b8] text-sm font-semibold mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-[#0d1b2a] border border-[#1e3a54] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4b942]" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-[#94a3b8] text-sm font-semibold mb-2">Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-[#0d1b2a] border border-[#1e3a54] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4b942]">
                    <option value="">Select Service Area</option>
                    {SERVICE_CATEGORIES.map((cat, i) => (
                      <option key={i} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#94a3b8] text-sm font-semibold mb-2">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full bg-[#0d1b2a] border border-[#1e3a54] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4b942] resize-none" placeholder="How can we help you?" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] px-8 py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                {isSubmitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
