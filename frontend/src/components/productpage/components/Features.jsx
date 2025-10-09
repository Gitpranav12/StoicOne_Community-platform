import { useState } from 'react';
import { GitBranch, Mail, BarChart3, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      id: 'pipeline',
      label: 'Pipeline Management',
      icon: <GitBranch size={22} />,
      title: 'Visual Sales Pipeline',
      description:
        'Manage your entire sales process with an intuitive drag-and-drop interface. Track deals through every stage and identify bottlenecks instantly.',
      points: [
        'Customizable pipeline stages',
        'Drag-and-drop deal management',
        'Win/loss analysis',
        'Deal rotation & assignment',
      ],
      image:
        'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 'email',
      label: 'Email Integration',
      icon: <Mail size={22} />,
      title: 'Seamless Email Sync',
      description:
        'Connect your email and never miss a conversation. Automatically log emails, schedule follow-ups, and track engagement.',
      points: [
        'Gmail & Outlook integration',
        'Email tracking & templates',
        'Automated follow-up reminders',
        'Shared team inbox',
      ],
      image:
        'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 'analytics',
      label: 'Analytics Dashboard',
      icon: <BarChart3 size={22} />,
      title: 'Real-Time Insights',
      description:
        'Get a complete view of your business performance with customizable dashboards and detailed reports.',
      points: [
        'Custom report builder',
        'Real-time data updates',
        'Team performance metrics',
        'Revenue forecasting',
      ],
      image:
        'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 'automation',
      label: 'Automation Rules',
      icon: <Zap size={22} />,
      title: 'Workflow Automation',
      description:
        'Save time and eliminate repetitive tasks with powerful automation. Focus on what matters most - building relationships.',
      points: [
        'Custom workflow builder',
        'Automated task assignments',
        'Trigger-based actions',
        'Smart notifications',
      ],
      image:
        'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const [activeTab, setActiveTab] = useState('pipeline');
  const activeFeature = features.find((f) => f.id === activeTab);

  return (
    <section
      id="features"
      className="py-5 bg-white"
      style={{ scrollMarginTop: '80px' }} // prevents overlap with navbar
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="h1 fw-semibold text-dark mb-3">
            Powerful Features for Modern Teams
          </h2>
          <p className="lead text-muted">
            Everything you need to manage customer relationships and grow your business
          </p>
        </div>

        {/* Tabs Navigation */}
        <ul className="nav nav-pills justify-content-center mb-5 p-3 bg-light rounded-4 gap-2" role="tablist">
          {features.map((feature) => (
            <li className="nav-item" key={feature.id}>
              <button
                className={`nav-link d-flex align-items-center gap-2 ${
                  activeTab === feature.id ? 'active' : ''
                }`}
                onClick={() => setActiveTab(feature.id)}
                style={{
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: activeTab === feature.id ? 'white' : 'transparent',
                  color: activeTab === feature.id ? '#1E88E5' : '#6c757d',
                  fontWeight: 500,
                  minWidth: '150px',
                  justifyContent: 'center',
                }}
              >
                {feature.icon}
                <span className="d-none d-sm-inline">{feature.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        {activeFeature && (
          <div className="row align-items-center g-5">
            {/* Text Column */}
            <div className="col-lg-6 order-lg-1 order-2">
              {/* Blue Circular Icon */}
              <div
                className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1E88E5, #42A5F5)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              >
                {activeFeature.icon}
              </div>

              <h3 className="h2 fw-semibold text-dark mb-3">{activeFeature.title}</h3>
              <p className="lead text-muted mb-4">{activeFeature.description}</p>

              <ul className="list-unstyled">
                {activeFeature.points.map((point) => (
                  <li key={point} className="d-flex align-items-start mb-3">
                    <svg
                      className="text-primary me-3 mt-1 flex-shrink-0"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-dark">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="rounded-4 overflow-hidden shadow-lg border">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="w-100 h-auto"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
