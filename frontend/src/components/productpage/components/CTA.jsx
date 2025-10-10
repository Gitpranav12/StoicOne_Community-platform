import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section
      className="section-padding position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1E88E5 0%, #1976D2 50%, #1565C0 100%)',
        paddingTop: '30px',
        paddingBottom: '20px',
        scrollMarginTop: '80px' // prevents overlap with fixed navbar
      }}
    >
      {/* Background decoration */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1, pointerEvents: 'none' }}>
        <div
          className="position-absolute top-0 start-0 bg-white rounded-circle"
          style={{ width: '400px', height: '400px', filter: 'blur(80px)' }}
        ></div>
        <div
          className="position-absolute bottom-0 end-0 bg-white rounded-circle"
          style={{ width: '400px', height: '400px', filter: 'blur(80px)' }}
        ></div>
      </div>

      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-semibold text-white mb-4">
              Ready to Transform Your Business?
            </h2>

            <p className="lead mb-5" style={{ color: '#e3f2fd' }}>
              Join 10,000+ teams already using CRM Pro to build better customer relationships, 
              close more deals, and grow their business faster.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
              <button
                className="btn btn-light btn-lg d-flex align-items-center justify-content-center gap-2"
                style={{ color: '#1E88E5', minWidth: '220px' }}
              >
                Get Started with CRM Today
                <ArrowRight size={20} />
              </button>

              <button className="btn btn-outline-light btn-lg" style={{ minWidth: '220px' }}>
                Schedule a Demo
              </button>
            </div>

            <p className="mt-2" style={{ color: '#e3f2fd', fontSize: '0.9rem' }}>
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
