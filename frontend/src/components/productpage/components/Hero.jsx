import { ArrowRight, PlayCircle,Zap,ChartLineIcon} from 'lucide-react';


export function Hero() {
  return (
    <section
      className="section-padding"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px', // ensures spacing from next section
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 50%, #ffffff 100%)',
        scrollMarginTop: '80px', // prevents overlap with fixed navbar
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="mb-4">
              <span
                className="badge rounded-pill px-4 py-2"
                style={{ backgroundColor: '#e3f2fd', color: '#1E88E5' }}
              >
                ✨ Trusted by 10,000+ teams worldwide
              </span>
            </div>

            <h1 className="display-4 fw-semibold text-dark mb-4">
              Empower Your Team with Smart CRM
            </h1>

            <p className="lead text-muted mb-4">
              Streamline your sales, marketing, and customer support with an intelligent
              CRM platform built for modern teams. Increase productivity by 40% and close
              deals faster with AI-powered insights.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
              <button
                className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
                style={{ transition: 'all 0.3s ease', minWidth: '200px' }}
              >
                Try Free for 14 Days
                <ArrowRight size={20} />
              </button>

              <button
                className="btn btn-outline-secondary btn-lg d-flex align-items-center justify-content-center gap-2"
                style={{ minWidth: '200px' }}
              >
                <PlayCircle size={20} />
                Request Demo
              </button>
            </div>

            {/* Stats */}
            <div className="d-flex flex-wrap gap-4 pt-4 border-top">
              <div>
                <div className="h4 fw-semibold text-dark mb-1">99.9%</div>
                <div className="text-muted small">Uptime</div>
              </div>
              <div>
                <div className="h4 fw-semibold text-dark mb-1">10K+</div>
                <div className="text-muted small">Active Users</div>
              </div>
              <div>
                <div className="h4 fw-semibold text-dark mb-1">4.9/5</div>
                <div className="text-muted small">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="position-relative">
              <div className="rounded-4 overflow-hidden shadow-lg border">
                <img
                  src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="CRM Dashboard"
                  className="w-100 h-auto"
                  style={{ objectFit: 'cover', maxHeight: '450px' }}
                  onError={(e) =>
                    (e.currentTarget.src =
                      'https://via.placeholder.com/1080x600?text=CRM+Dashboard')
                  }
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      'linear-gradient(to top right, rgba(30, 136, 229, 0.1), transparent)',
                    pointerEvents: 'none',
                  }}
                ></div>
              </div>

              {/* Floating elements */}
              <div
                className="position-absolute bg-white rounded-3 shadow-lg p-3 border"
                style={{ top: '-20px', right: '-20px' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{ width: '40px', height: '40px', backgroundColor: '#d4edda' }}
                  >
                    <span><ChartLineIcon className="text-primary" size={24} /></span>
                  </div>
                  <div>
                    <div className="fw-semibold text-dark small">+28%</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                      Sales Growth
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="position-absolute bg-white rounded-3 shadow-lg p-3 border"
                style={{ bottom: '-20px', left: '-20px' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{ width: '40px', height: '40px', backgroundColor: '#cce5ff' }}
                  >
                    <span><Zap className="text-primary" size={24} /></span>
                  </div>
                  <div>
                    <div className="fw-semibold text-dark small">2.5x</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                      Faster Response
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
