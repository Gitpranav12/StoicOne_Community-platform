import React, { useEffect } from "react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductDropdown } from './components/ProductDropdown';
import { UseCases } from './components/UseCases';
import { Features } from './components/Features';
import { Customers } from './components/Customers';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function Productpage() {
  useEffect(() => {
    // Bootstrap JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-vh-100 bg-white">
      <Navbar />
      <Hero />
      <ProductDropdown />
      <UseCases />
      <Features />
      <Customers />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
