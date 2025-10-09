import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#security' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Changelog', href: '#changelog' }
    ],
    'Use Cases': [
      { label: 'Sales Teams', href: '#sales' },
      { label: 'Marketing', href: '#marketing' },
      { label: 'Support', href: '#support' },
      { label: 'Startups', href: '#startups' },
      { label: 'Enterprise', href: '#enterprise' }
    ],
    Resources: [
      { label: 'Documentation', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'Help Center', href: '#help' },
      { label: 'Blog', href: '#blog' },
      { label: 'Community', href: '#community' }
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#twitter', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#linkedin', label: 'LinkedIn' },
    { icon: <Facebook size={20} />, href: '#facebook', label: 'Facebook' },
    { icon: <Github size={20} />, href: '#github', label: 'GitHub' }
  ];

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4 mb-4">
          {/* Brand Column */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="d-flex align-items-center justify-content-center rounded text-white fw-semibold"
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #1E88E5, #1565C0)'
                }}
              >
                C
              </div>
              <span className="fw-semibold text-white">CRM Pro</span>
            </div>
            <p className="text-muted mb-3 small">
              The smart CRM platform for modern teams.
            </p>
            <div className="d-flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="btn btn-sm btn-outline-secondary rounded d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-6 col-md-6 col-lg-2">
              <h6 className="text-white mb-3">{title}</h6>
              <ul className="list-unstyled">
                {links.map((link) => (
                  <li key={link.label} className="mb-2">
                    <a
                      href={link.href}
                      className="text-muted text-decoration-none small"
                      style={{ transition: 'color 0.3s ease' }}
                      onMouseEnter={(e) => e.target.style.color = '#1E88E5'}
                      onMouseLeave={(e) => e.target.style.color = ''}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-muted small mb-0">
                © 2025 CRM Pro. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                <a href="#privacy" className="text-muted text-decoration-none small">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-muted text-decoration-none small">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-muted text-decoration-none small">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
