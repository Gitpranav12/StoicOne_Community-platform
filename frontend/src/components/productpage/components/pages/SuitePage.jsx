import { Zap, Settings, BarChart3, Users, Shield, Layers, CheckCircle, ArrowRight } from 'lucide-react';

export function SuitePage({ onNavigate }) {
  const features = [
    {
      icon: <Settings size={48} />,
      title: 'All-in-One Platform',
      description: 'Complete business management solution with CRM, HRM, and Invoicing integrated seamlessly.'
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Unified Analytics',
      description: 'Real-time insights across all modules with customizable dashboards and reports.'
    },
    {
      icon: <Zap size={48} />,
      title: 'Workflow Automation',
      description: 'Cross-module automation to streamline processes and eliminate manual work.'
    },
    {
      icon: <Users size={48} />,
      title: 'Team Collaboration',
      description: 'Enhanced collaboration tools for teams to work together efficiently.'
    },
    {
      icon: <Shield size={48} />,
      title: 'Enterprise Security',
      description: 'Advanced security features with role-based access control and compliance.'
    },
    {
      icon: <Layers size={48} />,
      title: 'Custom Integrations',
      description: 'Connect with your favorite tools via API and custom integrations.'
    }
  ];

  const benefits = [
    'Save 70% on software costs',
    'Boost productivity by 100%',
    'Unified data across all modules',
    'Single sign-on for all tools',
    'Comprehensive analytics dashboard',
    'Enterprise-grade security'
  ];

  const modules = [
    {
      name: 'CRM Module',
      description: 'Complete customer relationship management',
      icon: '📊',
      color: 'primary'
    },
    {
      name: 'HRM Module',
      description: 'Full human resource management',
      icon: '👥',
      color: 'success'
    },
    {
      name: 'Invoicing Module',
      description: 'Professional invoicing and billing',
      icon: '💰',
      color: 'warning'
    },
    {
      name: 'Analytics Hub',
      description: 'Cross-module insights and reports',
      icon: '📈',
      color: 'info'
    }
  ];

  const pricing = [
    {
      name: 'Business',
      price: '$149',
      period: '/user/month',
      features: [
        'All modules included',
        'Up to 50 users',
        'Advanced analytics',
        'Workflow automation',
        'Priority support',
        'API access',
        'Custom reports'
      ]
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: '/user/month',
      popular: true,
      features: [
        'Everything in Business',
        'Unlimited users',
        'Dedicated manager',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'White-label options',
        'On-premise deployment'
      ]
    },
    {
      name: 'Custom',
      price: 'Let\'s Talk',
      period: 'Contact sales',
      features: [
        'Everything in Enterprise',
        'Custom development',
        'Dedicated team',
        'Custom training',
        'Migration support',
        'Custom SLA',
        'Premium support'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-dark bg-gradient text-white py-5" style={{ background: 'linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)' }}>
        <div className="container py-5 my-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="badge bg-light text-dark mb-3 px-3 py-2">
                Complete Business Suite
              </div>
              <h1 className="display-3 fw-bold mb-4">
                All-in-One Business Solution
              </h1>
              <p className="lead mb-4">
                Complete business suite integrating CRM, HRM, and Invoicing with unified analytics, 
                powerful automation, and enterprise-grade security.
              </p>
              <div className="d-flex gap-3 mb-4">
                <button className="btn btn-light btn-lg">
                  Start Free Trial
                </button>
                <button className="btn btn-outline-light btn-lg">
                  Schedule Demo
                </button>
              </div>
              <div className="d-flex gap-4 pt-3">
                <div>
                  <h3 className="fw-bold mb-0">70%</h3>
                  <small>Cost Savings</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">100%</h3>
                  <small>Data Sync</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">24/7</h3>
                  <small>Support</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1704655295066-681e61ecca6b?w=800"
                alt="Business Suite Dashboard"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Integrated Modules</h2>
            <p className="lead text-muted">
              All your business tools in one powerful platform
            </p>
          </div>
          <div className="row g-4">
            {modules.map((module, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className={`card h-100 border-${module.color} shadow-sm`}>
                  <div className="card-body p-4 text-center">
                    <div className="display-3 mb-3">{module.icon}</div>
                    <h5 className="card-title fw-bold">{module.name}</h5>
                    <p className="card-text text-muted">{module.description}</p>
                    <button className={`btn btn-${module.color} btn-sm`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Suite Features</h2>
            <p className="lead text-muted">
              Everything you need to run your entire business
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-purple mb-3" style={{ color: '#6f42c1' }}>{feature.icon}</div>
                    <h5 className="card-title fw-bold">{feature.title}</h5>
                    <p className="card-text text-muted">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team Collaboration"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">
                Why Choose Our Suite?
              </h2>
              <p className="lead text-muted mb-4">
                Trusted by enterprises to manage their entire business operations.
              </p>
              <ul className="list-unstyled">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-3">
                    <CheckCircle size={24} className="me-3 flex-shrink-0" style={{ color: '#6f42c1' }} />
                    <span className="fs-5">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Suite Pricing</h2>
            <p className="lead text-muted">
              Choose the perfect plan for your organization
            </p>
          </div>
          <div className="row g-4">
            {pricing.map((plan, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className={`card h-100 ${plan.popular ? 'shadow-lg' : 'border-0 shadow-sm'}`} style={plan.popular ? { borderColor: '#6f42c1', borderWidth: '2px' } : {}}>
                  {plan.popular && (
                    <div className="card-header text-white text-center py-2" style={{ backgroundColor: '#6f42c1' }}>
                      Most Popular
                    </div>
                  )}
                  <div className="card-body p-4 text-center">
                    <h4 className="fw-bold mb-3">{plan.name}</h4>
                    <div className="mb-4">
                      <h2 className="display-4 fw-bold">{plan.price}</h2>
                      <small className="text-muted">{plan.period}</small>
                    </div>
                    <ul className="list-unstyled mb-4 text-start">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          <CheckCircle size={18} className="me-2" style={{ color: '#6f42c1' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`btn w-100`}
                      style={plan.popular ? { backgroundColor: '#6f42c1', color: 'white' } : { borderColor: '#6f42c1', color: '#6f42c1' }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)' }}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="lead mb-4">
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-light btn-lg">
                  Start Free Trial
                  <ArrowRight size={20} className="ms-2" />
                </button>
                <button 
                  className="btn btn-outline-light btn-lg"
                  onClick={() => onNavigate('home')}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
