import { Users, Target, BarChart3, Zap, Mail, Calendar, Database, TrendingUp } from 'lucide-react';

export function ProductDropdown() {
  const products = [
    { icon: <Target className="text-primary" size={24} />, title: 'Leads Management', description: 'Capture and nurture leads from multiple channels' },
    { icon: <Users className="text-primary" size={24} />, title: 'Contacts', description: 'Centralized customer database with smart segmentation' },
    { icon: <BarChart3 className="text-primary" size={24} />, title: 'Analytics', description: 'Real-time insights and custom reports' },
    { icon: <Zap className="text-primary" size={24} />, title: 'Automation', description: 'Workflow automation to save time and boost efficiency' },
    { icon: <Mail className="text-primary" size={24} />, title: 'Email Integration', description: 'Seamless email sync with Gmail and Outlook' },
    { icon: <Calendar className="text-primary" size={24} />, title: 'Sales Pipeline', description: 'Visual pipeline management with drag-and-drop' },
    { icon: <Database className="text-primary" size={24} />, title: 'Data Import', description: 'Import contacts from any source instantly' },
    { icon: <TrendingUp className="text-primary" size={24} />, title: 'Sales Forecasting', description: 'AI-powered revenue predictions' }
  ];

  return (
    <section
      className="section-padding bg-white border-bottom"
      style={{ paddingTop: '120px', paddingBottom: '120px', scrollMarginTop: '80px' }} // stable spacing
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="h1 fw-semibold text-dark mb-3">
            Everything You Need in One Platform
          </h2>
          <p className="lead text-muted">
            Powerful CRM tools designed to help your team sell smarter and faster
          </p>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.title} className="col-12 col-md-6 col-lg-3 d-flex">
              <div
                className="card h-100 card-hover p-3 flex-fill"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: '160px', // ensures equal height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#e3f2fd',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h5 className="card-title mb-2">{product.title}</h5>
                    <p className="card-text text-muted small mb-0">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
