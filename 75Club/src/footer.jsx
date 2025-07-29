import React from 'react';

// Footer Component
// This component now uses standard CSS for styling, defined within a <style> tag.
// Tailwind CSS has been removed.
export default function Footer() {
  return (
    <>
      <style>
        {`
        .footer-container {
          background-color: #000;
          color: #a0aec0; /* gray-400 */
          padding: 2rem 1rem; /* py-8 px-4 */
          font-family: 'Inter', sans-serif;
        }

        .footer-grid {
          max-width: 80rem; /* max-w-7xl */
          margin-left: auto;
          margin-right: auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem; /* gap-8 */
        }
        
        .footer-4th-row-two-clmn {
          display: flex;
          justify-content: space-between;
          gap: 2rem; /* or use margin-right on children */
          flex-wrap: wrap; /* for responsive stacking on small screens */
        }
        .footer-5th-row-two-clmn {
          display: flex;
          justify-content: space-between;
          gap: 2rem; /* or use margin-right on children */
          flex-wrap: wrap; /* for responsive stacking on small screens */
        }

        .footer-4th-row-two-clmn,
        .footer-5th-row-two-clmn {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          align-items: flex-start;
      }


        @media (min-width: 768px) { /* md breakpoint */
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) { /* lg breakpoint */
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .footer-section-title {
          font-size: 1.125rem; /* text-lg */
          font-weight: 600; /* font-semibold */
          color: #fff; /* text-white */
          margin-bottom: 1rem; /* mb-4 */
        }

        .footer-text {
          font-size: 0.875rem; /* text-sm */
          line-height: 1.5; /* leading-relaxed */
        }

        .footer-logo-group {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* space-x-2 */
        }

        .footer-icon-group {
          display: flex;
          align-items: center;
          gap: 1rem; /* space-x-4 */
        }

        .footer-img {
          height: 2.5rem; /* h-10 */
          width: auto;
          border-radius: 0.375rem; /* rounded-md */
        }

        .footer-img-round {
          height: 2.5rem; /* h-10 */
          width: 60px;
          border-radius: 9999px; /* rounded-full */
        }

        .footer-social-link {
          color: #a0aec0; /* gray-400 */
          transition: color 0.2s ease-in-out;
        }

        .footer-social-link:hover {
          color: #fff; /* hover:text-white */
        }

        .footer-social-icon {
          width: 1.5rem; /* w-6 */
          height: 1.5rem; /* h-6 */
        }

        .footer-responsible-gaming {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (min-width: 1024px) { /* lg breakpoint */
          .footer-responsible-gaming {
            align-items: flex-end;
          }
        }

        .footer-dis88-logo {
          margin-top: 1rem; /* mt-4 */
        }

        @media (min-width: 1024px) { /* lg breakpoint */
          .footer-dis88-logo {
            margin-top: 0;
            margin-left: auto; /* ml-auto */
          }
        }

        .dis88-logo-img {
          height: 5rem; /* h-20 */
          width: auto;
          border-radius: 9999px; /* rounded-full */
        }

        /* Specific column spans for larger screens */
        .col-span-md-2 {
            grid-column: span 1 / span 1;
        }
        @media (min-width: 768px) {
            .col-span-md-2 {
                grid-column: span 2 / span 2;
            }
        }
        .col-span-lg-1 {
            grid-column: span 1 / span 1;
        }
        @media (min-width: 1024px) {
            .col-span-lg-1 {
                grid-column: span 1 / span 1;
            }
        }
        `}
      </style>
      <footer className="footer-container">
        <div className="footer-grid">

          {/* About DIS88 Section */}
          <div className="col-span-md-2 col-span-lg-1">
            <h3 className="footer-section-title">About DIS88</h3>
            <p className="footer-text">
              DIS88 is licensed and regulated by the Government of Curaçao and
              operates under the master license of Gaming Services Provider N.V.
              #365/JAZ.
            </p>
          </div>

          {/* Gaming License Section */}
          <div>
            <h3 className="footer-section-title">Gaming License</h3>
            <div className="footer-logo-group">
              {/* Placeholder for Gaming Curacao Logo */}
              <img
                src="https://placehold.co/80x40/000000/ffffff?text=GC+Logo"
                alt="Gaming Curacao Logo"
                className="footer-img"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x40/555555/ffffff?text=Logo'; }}
              />
              <span className="footer-text">GAMING CURACAO</span>
            </div>
          </div>

          {/* Payment Method Section */}
          <div>
            <h3 className="footer-section-title">Payment Method</h3>
            <div className="footer-icon-group">
              {/* Placeholder for Bank Deposit Icon */}
              <img
                src="https://placehold.co/60x30/000000/ffffff?text=Bank"
                alt="Bank Deposit Icon"
                className="footer-img"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x30/555555/ffffff?text=Icon'; }}
              />
              {/* Placeholder for Pay Icon */}
              <img
                src="https://placehold.co/60x30/000000/ffffff?text=Pay"
                alt="Pay Icon"
                className="footer-img"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x30/555555/ffffff?text=Icon'; }}
              />
            </div>
          </div>

          <div className="footer-4th-row-two-clmn">
          {/* Certification Section */}
            <div>
              <h3 className="footer-section-title">Certification</h3>
              <div className="footer-icon-group">
              {/* Placeholder for Certification Logo 1 */}
                <img
                  src="https://placehold.co/60x30/000000/ffffff?text=Cert1"
                  alt="Certification Logo 1"
                  className="footer-img"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x30/555555/ffffff?text=Cert'; }}
                />
              {/* Placeholder for Certification Logo 2 */}
                <img
                  src="https://placehold.co/60x30/000000/ffffff?text=Cert2"
                  alt="Certification Logo 2"
                  className="footer-img"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x30/555555/ffffff?text=Cert'; }}
                />
              </div>
            </div>

          {/* Security Section */}
            <div>
              <h3 className="footer-section-title">Security</h3>
              <div className="footer-icon-group">
                {/* Placeholder for Security Logo 1 (iovation) */}
                <img
                  src="https://placehold.co/60x30/000000/ffffff?text=iovation"
                  alt="Iovation Logo"
                  className="footer-img"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x30/555555/ffffff?text=Sec'; }}
                />
                {/* Placeholder for Security Logo 2 (ThreatMetrix) */}
                <img
                  src="https://placehold.co/60x30/000000/ffffff?text=ThreatMetrix"
                  alt="ThreatMetrix Logo"
                  className="footer-img"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x30/555555/ffffff?text=Sec'; }}
                />
              </div>
            </div>
          </div>

          <div className="footer-5th-row-two-clmn">
            {/* Follow Us Section */}
            <div>
              <h3 className="footer-section-title">Follow Us</h3>
              <div className="footer-icon-group">
                {/* Facebook Icon */}
                <a href="#" className="footer-social-link">
                  <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* Instagram Icon */}
                <a href="#" className="footer-social-link">
                  <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.366 3.61c-.815-.176-1.68-.266-2.546-.266-.866 0-1.731.09-2.546.266C6.18 5.786 4.6 7.366 4.6 9.2c0 1.834 1.58 3.414 3.366 3.61.815.176 1.68.266 2.546.266.866 0 1.731-.09 2.546-.266 1.786-.196 3.366-1.776 3.366-3.61 0-1.834-1.58-3.414-3.366-3.61zM12 18a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* YouTube Icon */}
                <a href="#" className="footer-social-link">
                  <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-.31-.157-.753-.285-1.157-.333C17.486 2.05 12 2 12 2s-5.486 0-6.458.851c-.404.048-.847.176-1.157.333C3.486 3.682 3 4.416 3 5.4v13.2c0 .984.486 1.718 1.385 2.116.31.157.753.285 1.157.333C6.514 22 12 22 12 22s5.486 0 6.458-.851c.404-.048.847-.176 1.157-.333C20.514 20.318 21 19.584 21 18.6V5.4c0-.984-.486-1.718-1.385-2.116zM9.545 15.568V8.432L15.82 12l-6.275 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Responsible Gaming Section */}
            <div className="footer-responsible-gaming">
              <h3 className="footer-section-title">Responsible Gaming</h3>
              <div className="footer-icon-group">
                {/* Placeholder for 18+ Icon */}
                <img
                  src="https://placehold.co/40x40/000000/ffffff?text=18+"
                  alt="18+ Icon"
                  className="footer-img-round"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/555555/ffffff?text=Age'; }}
                />
                {/* Placeholder for G Icon */}
                <img
                  src="https://placehold.co/40x40/000000/ffffff?text=G"
                  alt="G Icon"
                  className="footer-img-round"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/555555/ffffff?text=G'; }}
                />
                {/* Placeholder for Be Gamble Aware Logo */}
                <img
                  src="https://placehold.co/100x40/000000/ffffff?text=Gamble+Aware"
                  alt="Be Gamble Aware Logo"
                  className="footer-img"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x40/555555/ffffff?text=Gamble'; }}
                />
             </div>
            </div>

            {/* DIS88 Logo in the corner */}
            <div className="footer-dis88-logo">
              <img
                src="https://placehold.co/80x80/000000/ffffff?text=DIS88"
                alt="DIS88 Logo"
                className="dis88-logo-img"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/555555/ffffff?text=Logo'; }}
              />
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
