import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import "./navbar.css";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Why CRM?", href: "#why" },
    { label: "Stoic HRMS", href: "#use-cases" },
    { label: "Stoic Invoicing", href: "#features" },
    { label: "Stoicone Business Suite", href: "#customers" },
    { label: "Stoic Club", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ];

  // ✅ Custom handler to toggle collapse manually
  const handleToggle = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      const collapseInstance =
        window.bootstrap.Collapse.getInstance(navbarCollapse) ||
        new window.bootstrap.Collapse(navbarCollapse, { toggle: false });

      if (navbarCollapse.classList.contains("show")) {
        collapseInstance.hide(); // close menu
      } else {
        collapseInstance.show(); // open menu
      }
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "navbar-scrolled shadow-sm" : "navbar-transparent"
        }`}
    >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div
            className="d-flex align-items-center justify-content-center rounded"
            style={{
              width: "34px",
              height: "34px",
              background: "linear-gradient(135deg, #1E88E5, #1565C0)",
              color: "white",
              fontWeight: "600",
            }}
          >
            <Sparkles size={18} />
          </div>
          <span className="fw-semibold text-dark">Stoicone</span>
        </a>

        {/* Toggler Button (manual toggle) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle} // ✅ custom toggle handler
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                <a className="nav-link text-dark" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-2">
            <a href="#" className="text-decoration-none text-dark me-2">
              Login
            </a>
            <button className="btn btn-primary"><a
              href="https://www.stoicsalamander.com/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Contact Us
            </a></button>
          </div>
        </div>
      </div>
    </nav>
  );
}
