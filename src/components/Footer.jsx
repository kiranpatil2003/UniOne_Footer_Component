import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FiFileText,
  FiStar,
  FiCpu,
  FiAward,
  FiBookOpen,
  FiUsers,
  FiBriefcase,
  FiLifeBuoy,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";

function Footer({ className = "" }) {
  return (
    <footer className={`unione-footer ${className}`}>
      {/* MAIN FOOTER GRID */}
      <div className="footer-inner">
        {/* BRAND */}
        <div className="footer-brand">
          <div className="logo-container">
            <div className="logo">
              <span className="logo-icon">U</span>
              <h2>UniOne</h2>
            </div>
          </div>

          <p className="brand-text">
            The AI-first academic hub designed to help engineering students
            transform their learning journey with premium resources and
            intelligent tools.
          </p>

          <div className="status-badge">PLATFORM STATUS: OPERATIONAL</div>
        </div>

        {/* RESOURCES */}
        <div className="footer-section">
          <h4>RESOURCES</h4>

          <ul className="footer-list">
            <li>
              <Link to="/" className="list-item">
                <FiCpu className="footer-icon" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/notes" className="list-item">
                <FiFileText className="footer-icon" />
                Free Study Notes
              </Link>
            </li>

            <li>
              <Link to="/premium" className="list-item">
                <FiStar className="footer-icon" />
                Premium Packs
              </Link>
            </li>

            <li>
              <Link to="/scholarships" className="list-item">
                <FiAward className="footer-icon" />
                Scholarship Hub
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div class="footer-section">
          <h4>COMPANY</h4>

          <ul className="footer-list">
            <li>
              <Link to="/about" className="list-item">
                <FiBookOpen className="footer-icon" />
                About
              </Link>
            </li>

            <li>
              <Link to="/team" className="list-item">
                <FiUsers className="footer-icon" />
                Team
              </Link>
            </li>

            <li>
              <Link to="/faqs" className="list-item">
                <FiBriefcase className="footer-icon" />
                FAQs
              </Link>
            </li>

            <li>
              <Link to="/Contact" className="list-item">
                <FiLifeBuoy className="footer-icon" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="footer-section">
          <h4>CONNECT</h4>

          <ul className="footer-list">
            <li>
              <a href="https://linkedin.com" className="list-item">
                <FiLinkedin className="footer-icon" />
                LinkedIn
              </a>
            </li>

            <li>
              <a href="https://instagram.com" className="list-item">
                <FiInstagram className="footer-icon" />
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://x.com/UniOne_129?t=mVFL6d7aDvWPP8-_9iVA7g&s=09"
                className="list-item"
              >
                <FiTwitter className="footer-icon" />
                Twitter (X)
              </a>
            </li>

            <li>
              <a
                href="https://github.com/sayalikale318/UniOne"
                className="list-item"
              >
                <FiGithub className="footer-icon" />
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-section newsletter">
          <h4>STAY UPDATED</h4>

          <p>Get the latest study tips and platform updates.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Your email..." />
            <button>→</button>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-left">
          © {new Date().getFullYear()} UniOne Platform. Developed for Academic
          Excellence.
        </div>

        <div className="footer-right">
          <Link to="/privacy" className="footer-bottom-link">
            Privacy Policy
          </Link>

          <Link to="/terms" className="footer-bottom-link">
            Terms of Service
          </Link>

          <Link to="/cookies" className="footer-bottom-link">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
