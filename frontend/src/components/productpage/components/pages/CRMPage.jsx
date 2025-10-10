import { 
  Users, 
  Target, 
  Mail, 
  Calendar, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CRMPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Target size={48} />,
      title: 'Lead Management',
      description:
        'Capture leads from multiple channels, score them automatically, and prioritize your outreach for maximum conversion.'
    },
    {
      icon: <Users size={48} />,
      title: 'Contact Database',
      description:
        'Centralized customer database with advanced segmentation, custom fields, and complete interaction history.'
    },
    {
      icon: <Calendar size={48} />,
      title: 'Sales Pipeline',
      description:
        'Visual drag-and-drop pipeline management with customizable stages and automated deal progression.'
    },
    {
      icon: <Mail size={48} />,
      title: 'Email Integration',
      description:
        'Two-way email sync with Gmail and Outlook. Track opens, clicks, and automatically log all communications.'
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Analytics & Reports',
      description:
        'Real-time dashboards, custom reports, and sales forecasting powered by AI insights.'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Sales Automation',
      description:
        'Automate repetitive tasks, follow-ups, and workflows to focus on closing deals.'
    }
  ];

  const benefits = [
    'Increase sales productivity by 40%',
    'Reduce sales cycle time by 30%',
    'Improve customer retention by 25%',
    'Boost conversion rates by 35%',
    'Save 10+ hours per week on admin tasks',
    'Get 360° view of customer interactions'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/user/month',
      features: [
        'Up to 5 users',
        '1,000 contacts',
        'Basic pipeline',
        'Email integration',
        'Mobile app',
        'Community support'
      ]
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/user/month',
      popular: true,
      features: [
        'Up to 50 users',
        'Unlimited contacts',
        'Advanced pipeline',
        'Automation workflows',
        'Custom reports',
        'Priority support',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      features: [
        'Unlimited users',
        'Unlimited contacts',
        'Everything in Pro',
        'Dedicated manager',
        'Custom integrations',
        'SLA guarantee',
        'White-label options'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary bg-gradient text-white py-5">
        <div className="container py-5 my-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="badge bg-light text-primary mb-3 px-3 py-2">
                CRM Solution
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Close More Deals with Smart CRM
              </h1>
              <p className="lead mb-4">
                Transform your sales process with our intelligent CRM platform. Track leads, 
                manage contacts, and close deals faster with powerful automation and insights.
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
                  <h3 className="fw-bold mb-0">40%</h3>
                  <small>More Conversions</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">3x</h3>
                  <small>Faster Sales</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">99.9%</h3>
                  <small>Uptime</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="CRM Dashboard"
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
            <h2 className="display-5 fw-bold mb-3">Powerful CRM Features</h2>
            <p className="lead text-muted">
              Everything you need to manage customer relationships and grow your business
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-primary mb-3">{feature.icon}</div>
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
                src="https://images.unsplash.com/photo-1590649849991-e9af438ea77d?w=800"
                alt="Sales Team"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Why Choose Our CRM?</h2>
              <p className="lead text-muted mb-4">
                Join thousands of sales teams who have transformed their process with our CRM platform.
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
            <p className="lead text-muted">Choose the perfect plan for your team</p>
          </div>
          <div className="row g-4">
            {pricing.map((plan, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className={`card h-100 ${plan.popular ? 'border-primary shadow-lg' : 'border-0 shadow-sm'}`}>
                  {plan.popular && (
                    <div className="card-header bg-primary text-white text-center py-2">
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
                    <button
                      className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-primary'} w-100`}
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
      <section className="py-5 bg-primary text-white">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Sales?</h2>
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
                  onClick={() => navigate('/home')}
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
