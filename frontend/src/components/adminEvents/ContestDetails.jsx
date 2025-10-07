import { ArrowLeft, Edit, Trash2, Users, Calendar, Clock, BarChart3 } from 'lucide-react';

export default function ContestDetails({ contest, onBack, onUpdate, onDelete }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { class: 'bg-success', text: 'Active' },
      upcoming: { class: 'bg-warning', text: 'Upcoming' },
      completed: { class: 'bg-secondary', text: 'Completed' },
      draft: { class: 'bg-info', text: 'Draft' }
    };
    
    const config = statusConfig[status] || statusConfig.draft;
    return (
      <span className={`badge ${config.class}`}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="contest-details">
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <div className="d-flex align-items-center gap-3 mb-2">
              <h2 className="mb-0">{contest.title}</h2>
              {getStatusBadge(contest.status)}
              <span className={`badge ${contest.type === 'quiz' ? 'bg-info' : 'bg-primary'}`}>
                {contest.type === 'quiz' ? 'Quiz' : 'Coding'}
              </span>
            </div>
            <p className="text-muted mb-0">Contest Details & Management</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">
              <Edit size={18} className="me-2" />
              Edit Contest
            </button>
            <button 
              className="btn btn-outline-danger"
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this contest?')) {
                  onDelete();
                }
              }}
            >
              <Trash2 size={18} className="me-2" />
              Delete
            </button>
            <button className="btn btn-outline-secondary" onClick={onBack}>
              <ArrowLeft size={18} className="me-2" />
              Back
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* Contest Overview */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white">
                <h5 className="card-title mb-0">Contest Overview</h5>
              </div>
              <div className="card-body">
                <p className="mb-4">{contest.description}</p>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Calendar className="text-muted me-3" size={20} />
                      <div>
                        <div className="small text-muted">Start Date</div>
                        <div className="fw-semibold">{formatDate(contest.startDate)}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Calendar className="text-muted me-3" size={20} />
                      <div>
                        <div className="small text-muted">End Date</div>
                        <div className="fw-semibold">{formatDate(contest.endDate)}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Clock className="text-muted me-3" size={20} />
                      <div>
                        <div className="small text-muted">Duration</div>
                        <div className="fw-semibold">{contest.duration} minutes</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Users className="text-muted me-3" size={20} />
                      <div>
                        <div className="small text-muted">Participants</div>
                        <div className="fw-semibold">{contest.participants}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Questions */}
            {contest.type === 'quiz' && contest.questions && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white">
                  <h5 className="card-title mb-0">Questions ({contest.questions.length})</h5>
                </div>
                <div className="card-body">
                  {contest.questions.map((question, index) => (
                    <div key={question.id} className="border rounded-3 p-3 mb-3">
                      <h6 className="mb-3">Q{index + 1}: {question.question}</h6>
                      <div className="row g-2">
                        {question.options.map((option, optIndex) => (
                          <div key={optIndex} className="col-md-6">
                            <div className={`p-2 rounded ${optIndex === question.correctAnswer ? 'bg-success bg-opacity-10 border border-success' : 'bg-light'}`}>
                              <span className="me-2 fw-bold">{String.fromCharCode(65 + optIndex)}.</span>
                              {option}
                              {optIndex === question.correctAnswer && (
                                <span className="badge bg-success ms-2">Correct</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coding Problem */}
            {contest.type === 'coding' && contest.problemStatement && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white">
                  <h5 className="card-title mb-0">Problem Statement</h5>
                </div>
                <div className="card-body">
                  <pre className="white-space-pre-wrap">{contest.problemStatement}</pre>
                  
                  {contest.starterCode && (
                    <div className="mt-4">
                      <h6>Starter Code (JavaScript):</h6>
                      <pre className="bg-dark text-light p-3 rounded">
                        <code>{contest.starterCode.javascript || contest.starterCode}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Stats */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white">
                <h5 className="card-title mb-0">Contest Statistics</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-primary bg-opacity-10 text-primary rounded-3 me-3">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">{contest.participants}</div>
                    <div className="small text-muted">Total Participants</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-success bg-opacity-10 text-success rounded-3 me-3">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">{Math.floor(contest.participants * 0.7)}</div>
                    <div className="small text-muted">Completed</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-warning bg-opacity-10 text-warning rounded-3 me-3">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">{contest.duration}m</div>
                    <div className="small text-muted">Duration</div>
                  </div>
                </div>

                <hr />

                <div className="small text-muted mb-2">Completion Rate</div>
                <div className="progress mb-3" style={{height: '8px'}}>
                  <div className="progress-bar bg-success" style={{width: '70%'}}></div>
                </div>
                
                <div className="small text-muted mb-2">Average Score</div>
                <div className="progress mb-3" style={{height: '8px'}}>
                  <div className="progress-bar bg-primary" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white">
                <h5 className="card-title mb-0">Recent Activity</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-success rounded-circle p-1 me-3 mt-1">
                    <div className="bg-white rounded-circle" style={{width: '8px', height: '8px'}}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="small fw-semibold">New participant joined</div>
                    <div className="small text-muted">2 minutes ago</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-primary rounded-circle p-1 me-3 mt-1">
                    <div className="bg-white rounded-circle" style={{width: '8px', height: '8px'}}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="small fw-semibold">Submission received</div>
                    <div className="small text-muted">5 minutes ago</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <div className="bg-info rounded-circle p-1 me-3 mt-1">
                    <div className="bg-white rounded-circle" style={{width: '8px', height: '8px'}}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="small fw-semibold">Contest updated</div>
                    <div className="small text-muted">1 hour ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}