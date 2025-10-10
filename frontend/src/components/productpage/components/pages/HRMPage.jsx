import { Briefcase, Users, Calendar, BarChart3, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export function HRMPage({ onNavigate }) {
  const features = [
    {
      icon: <Briefcase size={48} />,
      title: 'Employee Management',
      description: 'Complete employee database with profiles, documents, and comprehensive records management.'
    },
    {
      icon: <Calendar size={48} />,
      title: 'Leave & Attendance',
      description: 'Automated leave requests, approvals, and attendance tracking with real-time reporting.'
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Performance Tracking',
      description: 'Set goals, track KPIs, and conduct regular performance reviews with structured feedback.'
    },
    {
      icon: <Users size={48} />,
      title: 'Recruitment',
      description: 'Streamline hiring process from job posting to onboarding with applicant tracking.'
    },
    {
      icon: <Award size={48} />,
      title: 'Training & Development',
      description: 'Manage employee training programs, certifications, and skill development tracking.'
    },
    {
      icon: <Clock size={48} />,
      title: 'Payroll Integration',
      description: 'Seamless integration with payroll systems for accurate salary processing and reports.'
    }
  ];

  const benefits = [
    'Save 60% time on HR admin tasks',
    'Improve employee satisfaction by 85%',
    'Streamline recruitment process',
    'Automate leave management',
    'Track performance effectively',
    'Ensure compliance and security'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$39',
      period: '/user/month',
      features: [
        'Up to 10 employees',
        'Employee database',
        'Leave management',
        'Basic reports',
        'Mobile app',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$89',
      period: '/user/month',
      popular: true,
      features: [
        'Up to 100 employees',
        'Everything in Starter',
        'Performance tracking',
        'Recruitment tools',
        'Advanced analytics',
        'Priority support',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      features: [
        'Unlimited employees',
        'Everything in Pro',
        'Dedicated manager',
        'Custom workflows',
        'Advanced security',
        'SLA guarantee',
        'On-premise option'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-success bg-gradient text-white py-5">
        <div className="container py-5 my-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="badge bg-light text-success mb-3 px-3 py-2">
                HRM Solution
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Empower Your Workforce
              </h1>
              <p className="lead mb-4">
                Complete HR management system to handle employees, track performance, streamline 
                recruitment, and manage your entire workforce efficiently.
              </p>
              <div className="d-flex gap-3 mb-4">
                <button className="btn btn-light btn-lg">
                  Start Free Trial
                </button>
                <button className="btn btn-outline-light btn-lg">
                  Watch Demo
                </button>
              </div>
              <div className="d-flex gap-4 pt-3">
                <div>
                  <h3 className="fw-bold mb-0">60%</h3>
                  <small>Time Saved</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">85%</h3>
                  <small>Satisfaction</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">100%</h3>
                  <small>Compliant</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1620221905485-86b2e9e1b594?w=800"
                alt="HRM Dashboard"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Complete HR Features</h2>
            <p className="lead text-muted">
              Everything you need to manage your workforce effectively
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-success mb-3">{feature.icon}</div>
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
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800"
                alt="Team Meeting"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">
                Why Choose Our HRM?
              </h2>
              <p className="lead text-muted mb-4">
                Trusted by HR departments to streamline operations and improve employee experience.
              </p>
              <ul className="list-unstyled">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-3">
                    <CheckCircle size={24} className="text-success me-3 flex-shrink-0" />
                    <span className="fs-5">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Simple Pricing</h2>
            <p className="lead text-muted">
              Choose the perfect plan for your organization
            </p>
          </div>
          <div className="row g-4">
            {pricing.map((plan, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className={`card h-100 ${plan.popular ? 'border-success shadow-lg' : 'border-0 shadow-sm'}`}>
                  {plan.popular && (
                    <div className="card-header bg-success text-white text-center py-2">
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
                          <CheckCircle size={18} className="text-success me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`btn ${plan.popular ? 'btn-success' : 'btn-outline-success'} w-100`}>
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
      <section className="py-5 bg-success text-white">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Transform Your HR?
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
