import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why CRM?', href: '#why' },
    { label: 'Stoic HRMS', href: '#use-cases' },
    { label: 'Stoic Invoicing', href: '#features' },
    { label: 'Stoicone Bussiness suite', href: '#customers' },
    { label: 'Stoic club', href: '#resources' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <div className="d-flex align-items-center gap-2">
            <div 
              className="d-flex align-items-center justify-content-center rounded" 
              style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #1E88E5, #1565C0)',
                color: 'white',
                fontWeight: '600'
              }}
            >
              C
            </div>
            <span className="fw-semibold text-dark">Stoicone</span>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                <a 
                  className="nav-link text-dark" 
                  href={link.href}
                  style={{ transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.target.style.color = '#1E88E5'}
                  onMouseLeave={(e) => e.target.style.color = ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="d-flex gap-2 align-items-center">
            <a href="#login" className="text-decoration-none text-dark me-2">Login</a>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
