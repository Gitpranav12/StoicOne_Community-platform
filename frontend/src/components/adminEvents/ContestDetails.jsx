import {
  ArrowLeft,
  Edit,
  Trash2,
  Users,
  Calendar,
  Clock,
  BarChart3,
} from "lucide-react";

export default function ContestDetails({
  contest,
  onBack,
  onUpdate,
  onDelete,
}) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { class: "bg-success", text: "Active" },
      upcoming: { class: "bg-warning", text: "Upcoming" },
      completed: { class: "bg-secondary", text: "Completed" },
      draft: { class: "bg-info", text: "Draft" },
    };
    const config = statusConfig[status] || statusConfig.draft;
    return <span className={`badge ${config.class}`}>{config.text}</span>;
  };

  return (
    <div className="contest-details">
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div className="mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
              <h2 className="mb-0">{contest.title}</h2>
              {getStatusBadge(contest.status)}
              <span
                className={`badge ${
                  contest.rounds?.every((r) => r.type === "quiz")
                    ? "bg-info"
                    : contest.rounds?.every((r) => r.type === "coding")
                    ? "bg-primary"
                    : "bg-secondary"
                }`}
              >
                {contest.rounds?.every((r) => r.type === "quiz")
                  ? "Quiz"
                  : contest.rounds?.every((r) => r.type === "coding")
                  ? "Coding"
                  : "Quiz + Coding"}
              </span>
            </div>
            <p className="text-muted mb-0">Contest Details & Management</p>
          </div>

          <div className="d-flex flex-row flex-nowrap gap-2 overflow-auto">
            <button
              className="btn btn-outline-secondary d-flex align-items-center flex-shrink-0"
              onClick={onBack}
            >
              <ArrowLeft size={18} className="me-2" />
              Back
            </button>

            <button className="btn btn-outline-primary d-flex align-items-center flex-shrink-0">
              <Edit size={18} className="me-2" />
              Edit Contest
            </button>

            <button
              className="btn btn-outline-danger d-flex align-items-center flex-shrink-0"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete this contest?"
                  )
                ) {
                  onDelete();
                }
              }}
            >
              <Trash2 size={18} className="me-2" />
              Delete
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* Main Content */}
          <div className="col-lg-8">
            {/* Contest Overview */}
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
                        <div className="fw-semibold">
                          {" "}
                          {formatDate(contest.startDate)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Calendar className="text-muted me-3" size={20} />
                      <div>
                        <div className="small text-muted">End Date</div>
                        <div className="fw-semibold">
                          {" "}
                          {formatDate(contest.endDate)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Clock className="text-muted me-3" size={20} />
                      <div>
                        <div className="small text-muted">Total Duration</div>
                        <div className="fw-semibold">
                          {contest.rounds?.reduce(
                            (sum, r) => sum + r.duration,
                            0
                          ) || 0}{" "}
                          minutes
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Users className="text-muted me-3" size={20} />
                      <div>
                        <div className="small text-muted">Participants</div>
                        <div className="fw-semibold">
                          {contest.participants}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Render all rounds (quiz + coding) */}
            {contest.rounds?.length > 0 &&
              contest.rounds.map((round, index) => (
                <div key={index} className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white">
                    <h5 className="card-title mb-0">
                      {round.type === "quiz"
                        ? `${round.round_name} (Aptitude Questions: ${
                            round.questions?.length || 0
                          })`
                        : `${round.round_name} (Coding Problem)`}
                    </h5>
                  </div>
                  <div className="card-body">
                    {/* Quiz */}
                    {round.type === "quiz" &&
                      round.questions?.map((q, qIndex) => (
                        <div
                          key={q.id || qIndex}
                          className="border rounded-3 p-3 mb-3"
                        >
                          <h6 className="mb-3">
                            Q{qIndex + 1}: {q.text}
                          </h6>
                          <div className="row g-2">
                            {q.options?.map((option, optIndex) => (
                              <div key={optIndex} className="col-md-6">
                                <div
                                  className={`p-2 rounded ${
                                    optIndex === q.correct_index
                                      ? "bg-success bg-opacity-10 border border-success"
                                      : "bg-light"
                                  }`}
                                >
                                  <span className="me-2 fw-bold">
                                    {String.fromCharCode(65 + optIndex)}.
                                  </span>
                                  {option}
                                  {optIndex === q.correct_index && (
                                    <span className="badge bg-success ms-2">
                                      Correct
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                    {/* Coding */}
                    {/* Coding */}
                    {round.type === "coding" &&
                      round.questions?.map((q, qIndex) => (
                        <div
                          key={q.id || qIndex}
                          className="border rounded-3 p-3 mb-3"
                        >
                          <h6 className="mb-3">
                            Q{qIndex + 1}: {q.title}
                          </h6>
                          <p>{q.description}</p>
                          <div className="mb-2">
                            <strong>Input Format:</strong> {q.input_format}
                          </div>
                          <div className="mb-2">
                            <strong>Output Format:</strong> {q.output_format}
                          </div>
                          <div className="mb-2">
                            <strong>Sample Input:</strong>
                            <pre className="bg-light p-2 rounded">
                              {q.sample_input}
                            </pre>
                          </div>
                          <div className="mb-2">
                            <strong>Sample Output:</strong>
                            <pre className="bg-light p-2 rounded">
                              {q.sample_output}
                            </pre>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
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
                    <div className="fw-bold">
                      {Math.floor(contest.participants * 0.7)}
                    </div>
                    <div className="small text-muted">Completed</div>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-warning bg-opacity-10 text-warning rounded-3 me-3">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">
                      {contest.rounds?.reduce(
                        (sum, r) => sum + r.duration,
                        0
                      ) || 0}{" "}
                      minutes
                    </div>
                    <div className="small text-muted">Duration</div>
                  </div>
                </div>

                <hr />

                <div className="small text-muted mb-2">Completion Rate</div>
                <div className="progress mb-3" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "70%" }}
                  ></div>
                </div>

                <div className="small text-muted mb-2">Average Score</div>
                <div className="progress mb-3" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
