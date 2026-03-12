import React from "react";
import "./Footer.css";

function Footer({ className = "" }) {
  return (
    <footer className={`unione-footer ${className}`}>
      <div className="footer-inner">
        <div className="footer-section about">
          <h3>Unione</h3>
          <p>Unione Description</p>
        </div>

        <div className="footer-section links">
          <details className="footer-accordion" open>
            <summary>Quick Links</summary>
            <ul>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/materials">Study Materials</a>
              </li>
              <li>
                <a href="/library">Library</a>
              </li>
              <li>
                <a href="/calendar">Academic Calendar</a>
              </li>
            </ul>
          </details>
        </div>

        <div className="footer-section resources">
          <details className="footer-accordion" open>
            <summary>Resources</summary>
            <ul>
              <li>
                <a href="/guides">Student Guides</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
          </details>
        </div>

        <div className="footer-section contact">
          <details className="footer-accordion" open>
            <summary>Contact</summary>
            <address>
              <div>
                Email:{" "}
                <a href="mailto:suppo rt@unione.edu">support@unione.edu</a>
              </div>
              <div>
                Phone: <a href="tel:+1234567890">+91 (123) 456-7890</a>
              </div>
              <div>Address: University Address</div>
            </address>

            <div className="social" aria-hidden="false">
              <a href="#" aria-label="Unione on Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Unione on Twitter">
                Twitter
              </a>
              <a href="#" aria-label="Unione on Instagram">
                Instagram
              </a>
            </div>
          </details>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Unione. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
