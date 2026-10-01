import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMailSendLine } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { BRAND } from '../utils/constants';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const serviceLinks = [
  { name: 'GST Registration & Returns', href: '/services/gst-services' },
  { name: 'ITR Filing', href: '/services/income-tax' },
  { name: 'Company Registration', href: '/services/company-registration' },
  { name: 'TDS Compliance', href: '/services/tds-compliance' },
  { name: 'MSME Registration', href: '/services/msme-registration' },
  { name: 'ROC Compliance', href: '/services/roc-compliance' },
  { name: 'Startup Services', href: '/services/startup-services' },
  { name: 'Trademark Registration', href: '/services/trademark' },
];

const socialLinks = [
  { icon: FaFacebookF, href: BRAND.social.facebook, label: 'Facebook' },
  { icon: FaTwitter, href: BRAND.social.twitter, label: 'Twitter' },
  { icon: FaLinkedinIn, href: BRAND.social.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: BRAND.social.instagram, label: 'Instagram' },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Accu Nex tax updates!');
    setEmail('');
  };

  return (
    <footer
      id="contact"
      className="bg-[#070e16] border-t border-[#1e3a54]"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 bg-[#f4b942] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#d9a230] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0d1b2a]">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <div className="text-[#f4b942] font-extrabold text-lg leading-none">AccuNex</div>
                <div className="text-white/60 text-xs leading-none mt-0.5">Taxation Services</div>
              </div>
            </Link>

            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
              <span className="text-[#f4b942] font-semibold">ICAI-registered CA firm</span> providing GST, ITR, company registration & all compliance services 100% online across India.
            </p>

            {/* ICAI Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f4b942]/10 border border-[#f4b942]/30 rounded-full px-3 py-1.5 mb-5">
              <span className="text-[#f4b942] text-[10px] font-bold tracking-wide">🏆 ICAI REGISTERED</span>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-icon w-9 h-9 rounded-full bg-[#162032] border border-[#1e3a54] flex items-center justify-center text-[#94a3b8] hover:bg-[#f4b942] hover:text-[#0d1b2a] hover:border-[#f4b942] transition-all duration-300"
                >
                  <s.icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="footer-link text-[#94a3b8] text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="footer-link text-[#94a3b8] text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#f4b942] text-base mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-sm">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#f4b942] text-sm flex-shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="footer-link text-[#94a3b8] text-sm">
                  +91 {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#f4b942] text-sm flex-shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="footer-link text-[#94a3b8] text-sm break-all">
                  {BRAND.email}
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">
                <RiMailSendLine className="inline mr-2" /> Tax Updates Newsletter
              </h4>
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-[#162032] border border-[#1e3a54] focus:border-[#f4b942] rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none transition-colors placeholder-[#64748b]"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-colors"
                >
                  <FaPaperPlane className="text-xs" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e3a54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[#64748b] text-xs sm:text-sm">
            © {new Date().getFullYear()} Accu Nex Taxation Services. All Rights Reserved. | ICAI Registered CA Firm
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="footer-link text-[#64748b] text-xs sm:text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="footer-link text-[#64748b] text-xs sm:text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
