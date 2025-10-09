import { TrendingUp, Megaphone, Headphones, BarChart2 } from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Sales Team',
      description: 'Accelerate your sales cycle with intelligent lead scoring, pipeline management, and automated follow-ups.',
      benefits: ['Lead prioritization', 'Deal tracking', 'Sales forecasting']
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Marketing',
      description: 'Create targeted campaigns, track ROI, and convert more leads with marketing automation tools.',
      benefits: ['Campaign management', 'Email marketing', 'Lead nurturing']
    },
    {
      icon: <Headphones size={32} />,
      title: 'Support',
      description: 'Deliver exceptional customer service with a 360° view of customer interactions and ticket management.',
      benefits: ['Ticket system', 'Customer history', 'SLA tracking']
    },
    {
      icon: <BarChart2 size={32} />,
      title: 'Analytics',
      description: 'Make data-driven decisions with comprehensive reporting, custom dashboards, and real-time insights.',
      benefits: ['Custom reports', 'KPI tracking', 'Data visualization']
    }
  ];

  return (
    <section
      id="use-cases"
      className="section-padding"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        paddingTop: '120px',
        paddingBottom: '120px'
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="h1 fw-semibold text-dark mb-3">
            Built for Every Team
          </h2>
          <p className="lead text-muted">
            Whether you're in sales, marketing, or support, CRM Pro adapts to your workflow
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="col-12 col-md-6 col-lg-3 d-flex">
              <div
                className="card h-100 shadow-sm border-0 flex-fill"
                style={{ transition: 'all 0.3s ease' }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div
                    className="icon-box mb-4 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: '#e3f2fd'
                    }}
                  >
                    {useCase.icon}
                  </div>

                  <h4 className="card-title fw-semibold text-dark mb-3">
                    {useCase.title}
                  </h4>

                  <p className="card-text text-muted mb-4" style={{ flexGrow: 1 }}>
                    {useCase.description}
                  </p>

                  <ul className="list-unstyled mt-auto">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="d-flex align-items-center text-dark mb-2">
                        <svg
                          className="text-primary me-2"
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <small>{benefit}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
