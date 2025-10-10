import { FileText, DollarSign, BarChart3, Zap, CreditCard, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export function InvoicingPage({ onNavigate }) {
  const features = [
    {
      icon: <FileText size={48} />,
      title: 'Invoice Builder',
      description: 'Create professional invoices in seconds with customizable templates and branding.'
    },
    {
      icon: <DollarSign size={48} />,
      title: 'Payment Tracking',
      description: 'Monitor all payments, track outstanding balances, and automated payment reminders.'
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Financial Reports',
      description: 'Comprehensive financial analytics, cash flow reports, and revenue insights.'
    },
    {
      icon: <Zap size={48} />,
      title: 'Automation',
      description: 'Automated recurring invoices, payment reminders, and follow-up workflows.'
    },
    {
      icon: <CreditCard size={48} />,
      title: 'Payment Gateway',
      description: 'Accept payments online with integrated payment processing and multiple methods.'
    },
    {
      icon: <Globe size={48} />,
      title: 'Multi-Currency',
      description: 'Support for multiple currencies with automatic exchange rate calculations.'
    }
  ];

  const benefits = [
    'Get paid 50% faster with automation',
    'Reduce billing errors by 95%',
    'Save 10+ hours per week',
    'Professional branded invoices',
    'Real-time financial insights',
    'Automated tax compliance'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      features: [
        'Up to 25 invoices/month',
        'Professional templates',
        'Payment tracking',
        'Basic reports',
        'Email support',
        '2 users'
      ]
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      popular: true,
      features: [
        'Unlimited invoices',
        'Custom branding',
        'Recurring invoices',
        'Advanced reports',
        'Payment gateway',
        'Priority support',
        'Unlimited users'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      features: [
        'Everything in Pro',
        'Multi-currency',
        'Custom integrations',
        'Dedicated manager',
        'API access',
        'White-label',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warning bg-gradient text-dark py-5">
        <div className="container py-5 my-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="badge bg-dark text-warning mb-3 px-3 py-2">
                Invoicing Solution
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Get Paid Faster with Smart Invoicing
              </h1>
              <p className="lead mb-4">
                Professional invoicing and billing software to manage payments, automate recurring 
                invoices, and track your finances with ease.
              </p>
              <div className="d-flex gap-3 mb-4">
                <button className="btn btn-dark btn-lg">
                  Start Free Trial
                </button>
                <button className="btn btn-outline-dark btn-lg">
                  Watch Demo
                </button>
              </div>
              <div className="d-flex gap-4 pt-3">
                <div>
                  <h3 className="fw-bold mb-0">50%</h3>
                  <small>Faster Payments</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">95%</h3>
                  <small>Accuracy</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">24/7</h3>
                  <small>Available</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?w=800"
                alt="Invoicing Dashboard"
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
            <h2 className="display-5 fw-bold mb-3">Powerful Invoicing Features</h2>
            <p className="lead text-muted">
              Everything you need to manage invoices and get paid on time
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-warning mb-3">{feature.icon}</div>
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
                alt="Financial Dashboard"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">
                Why Choose Our Invoicing?
              </h2>
              <p className="lead text-muted mb-4">
                Trusted by finance teams to streamline billing and improve cash flow.
              </p>
              <ul className="list-unstyled">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-3">
                    <CheckCircle size={24} className="text-warning me-3 flex-shrink-0" />
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
              Choose the perfect plan for your business
            </p>
          </div>
          <div className="row g-4">
            {pricing.map((plan, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className={`card h-100 ${plan.popular ? 'border-warning shadow-lg' : 'border-0 shadow-sm'}`}>
                  {plan.popular && (
                    <div className="card-header bg-warning text-dark text-center py-2 fw-bold">
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
                          <CheckCircle size={18} className="text-warning me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`btn ${plan.popular ? 'btn-warning' : 'btn-outline-warning'} w-100`}>
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
      <section className="py-5 bg-warning text-dark">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Streamline Your Billing?
              </h2>
              <p className="lead mb-4">
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-dark btn-lg">
                  Start Free Trial
                  <ArrowRight size={20} className="ms-2" />
                </button>
                <button 
                  className="btn btn-outline-dark btn-lg"
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
