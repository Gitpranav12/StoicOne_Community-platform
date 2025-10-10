import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

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
    { label: "Stoicone Suite", href: "#customers" },
    { label: "Stoic Club", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ];

  const handleToggle = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      const collapseInstance =
        window.bootstrap.Collapse.getInstance(navbarCollapse) ||
        new window.bootstrap.Collapse(navbarCollapse, { toggle: false });

      navbarCollapse.classList.contains("show")
        ? collapseInstance.hide()
        : collapseInstance.show();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      } transition-all`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container-fluid px-5">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: "36px",
              height: "36px",
              background:
                "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
              color: "#fff",
            }}
          >
            <Sparkles size={18} />
          </div>
          <span className="fw-semibold text-dark fs-6">
            Stoicone Products
          </span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item px-lg-2" key={link.label}>
                <a
                  href={link.href}
                  className="nav-link fw-medium text-dark px-3"
                  style={{
                    position: "relative",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1E88E5";
                    e.target.style.textDecoration = "underline";
                    e.target.style.textDecorationThickness = "2px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#212529";
                    e.target.style.textDecoration = "none";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-2">
            <a
              href="#"
              className="text-dark fw-medium me-2"
              style={{ transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.color = "#1E88E5")}
              onMouseLeave={(e) => (e.target.style.color = "#212529")}
            >
              Login
            </a>
            <a
              href="https://www.stoicsalamander.com/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary fw-semibold px-3"
              style={{
                borderRadius: "30px",
                background:
                  "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
                border: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0px)")}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
