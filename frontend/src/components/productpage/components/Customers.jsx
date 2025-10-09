import { Star, Quote, Rocket, BarChart3, Cloud, Save, Lightbulb, CircleDollarSign } from 'lucide-react';

export function Customers() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'VP of Sales, TechFlow Inc',
      content: "CRM Pro transformed how our sales team operates. We've seen a 45% increase in productivity and our close rates have never been better.",
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthLabs',
      content: "The automation features are game-changing. We've cut our manual data entry time by 80% and can focus on what really matters - our customers.",
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=13'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager, CloudServe',
      content: "Best CRM we've ever used. The interface is intuitive, the support team is amazing, and the analytics help us make better decisions every day.",
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  const clients = [
    { name: 'TechFlow', logo: <Rocket className="text-primary" size={28} /> },
    { name: 'GrowthLabs', logo: <BarChart3 className="text-primary" size={28} /> },
    { name: 'CloudServe', logo: <Cloud className="text-primary" size={28} /> },
    { name: 'DataPro', logo: <Save className="text-primary" size={28} /> },
    { name: 'InnovateCo', logo: <Lightbulb className="text-primary" size={28} /> },
    { name: 'FinanceHub', logo: <CircleDollarSign className="text-primary" size={28} /> },
  ];

  return (
    <section
      id="customers"
      className="section-padding"
      style={{
        background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
        paddingTop: '120px',
        paddingBottom: '120px',
        scrollMarginTop: '80px'
      }}
    >
      <div className="container">
        {/* Client Logos */}
        <div className="text-center mb-5">
          <p className="lead text-muted mb-4">
            Trusted by innovative companies worldwide
          </p>
          <div className="row g-4 justify-content-center">
            {clients.map((client) => (
              <div key={client.name} className="col-6 col-md-4 col-lg-2">
                <div className="card h-100 text-center p-3 card-hover border-0 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <span className="fs-3 mb-2">{client.logo}</span>
                    <small className="text-dark">{client.name}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-5 mt-5">
          <h2 className="h1 fw-semibold text-dark mb-3">
            Loved by Teams Everywhere
          </h2>
          <p className="lead text-muted">
            See what our customers have to say about CRM Pro
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 position-relative pt-5 px-4 pb-4">
                {/* Quote Icon */}
                <div
                  className="position-absolute top-0 start-50"
                  style={{
                    width: '48px',
                    height: '48px',
                    transform: 'translate(-50%, -50%)',
                    background: '#e3f2fd',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Quote size={24} className="text-primary" />
                </div>

                {/* Card Body */}
                <div className="card-body pt-4 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-warning" fill="currentColor" />
                    ))}
                  </div>

                  <p className="card-text text-dark mb-4">"{testimonial.content}"</p>

                  <div className="d-flex align-items-center gap-3 justify-content-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle text-white fw-semibold"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, #1E88E5, #1565C0)'
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="text-start">
                      <div className="fw-semibold text-dark">{testimonial.name}</div>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
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
