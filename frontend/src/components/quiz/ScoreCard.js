import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import questions from "./data/questions";

export default function ScoreCard() {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = (location.state && location.state.answers) || {};
    const statusColor = ((Object.keys(answers).length / questions.length) >= 0.7) ? "#18cfab" : "#fc5f7c";

  // Score calculation
  const correctAnswers = [2, 0, 2];
  const total = questions.length;
  let score = 0;
  for (let i = 0; i < total; i++) {
    if (answers[i] === correctAnswers[i]) score++;
  }
  const incorrect = total - score;
  const percentage = ((score / total) * 100).toFixed(0);

  // No answers guard
  if (!Object.keys(answers).length) {
    return (
      <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-3">
        <div className="alert alert-warning shadow-sm text-center" style={{ maxWidth: 400 }}>
          No quiz data found! Please complete the quiz first.
        </div>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/events/quiz")}>
          Go to Quiz
        </button>
      </div>
    );
  }

  // Main UI
  return (
    <div
      className="vw-100 vh-100"
      style={{
        background: "linear-gradient(90deg, #18202C 43%, #f7f8fc 100%)",
        fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif"
      }}
    >
      <div className="d-flex w-100 min-vh-100">
        {/* Left Sidebar */}
        <aside
          className="d-none d-md-flex flex-column align-items-center justify-content-start pt-5 px-4"
          style={{
            minWidth: 280,
            maxWidth: 340,
            background: "linear-gradient(120deg, #161d29 80%, #1b2537 100%)",
            color: "#f8f9fa",
            boxShadow: "2px 0 20px -5px #181d24",
            height: "100vh",
          }}
        >
          <div>
            {/* Circle avatar */}
            <div
              className="rounded-circle border border-2 border-info mb-4 d-flex align-items-center justify-content-center"
              style={{
                width: 86,
                height: 86,
                fontSize: "2.3rem",
                fontWeight: 700,
                background: "#222a33",
                color: "#23cd8c",
              }}
            >
              JD
            </div>
            {/* Name and badges */}
            <div className="text-center mb-1" style={{ fontSize: "1.45rem", fontWeight: 600 }}>Jagrat Desai</div>
            <div className="text-center mb-3" style={{ fontSize: "1rem", color: "#a7b7c5" }}>
              <i className="bi bi-journal me-2"></i>Quiz Taker
            </div>
            <div className="d-flex justify-content-center gap-4 mb-3 pb-1">
              <span><i className="bi bi-envelope"></i> 1</span>
              <span><i className="bi bi-star"></i> 2</span>
            </div>
            <hr className="w-75 border-secondary" />
          </div>

        
        </aside>

        {/* Main score card */}
        <main className="flex-grow-1 d-flex justify-content-center align-items-center px-2 py-4">
          <div
            className="card shadow-lg p-4 py-md-5"
            style={{
              minWidth: 320,
              maxWidth: 540,
              width: "100%",
              borderRadius: "24px",
              background: "#fff",
              boxShadow: "0 20px 44px 0 rgba(0,0,10,0.10)",
              fontWeight: 500,
            }}
          >
            {/* Score header */}
            <h2 className="fw-bolder text-center mb-3" style={{ fontSize: "2.2rem", color: "#1d273b", letterSpacing: ".5px" }}>
              Quiz Score Card
            </h2>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 mb-4">
              {/* Attractive Score circle */}
              <div style={{ position: "relative", width: 142, height: 142 }}>
                <svg width="142" height="142" style={{ position: "absolute", left: 0, top: 0 }}>
                  <circle r="60" cx="71" cy="71" fill="none" stroke="#f1f3f7" strokeWidth="12" />
                  <circle
                    r="60" cx="71" cy="71"
                    fill="none"
                    stroke="#18cfab"
                    strokeWidth="12"
                    strokeDasharray={`${(Number(percentage) / 100) * 377}, 377`}
                    strokeLinecap="round"
                    transform="rotate(-90 71 71)"
                  />
                </svg>
               <div
  className="rounded-circle shadow-lg d-flex flex-column align-items-center justify-content-center"
  style={{ width: '140px', height: '140px', transition: 'all 0.3s ease-in-out' }}
>
  <div style={{ display: 'flex', alignItems: 'flex-start', lineHeight: 1 }}>
    <h3 className="fw-bold m-0" style={{ color: statusColor, fontSize: '3.5rem' }}>
      {percentage}
    </h3>
    <small style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: 12, marginLeft: 2 }}>
      %
    </small>
  </div>
</div>


              </div>
              {/* Stats summary */}
              <div className="d-flex flex-column gap-2">
                <div className="bg-success bg-opacity-10 px-3 py-2 rounded-3 mb-1 d-flex align-items-center" style={{ fontSize: "1.1rem", color: "#079a67" }}>
                  <i className="bi bi-check2-circle me-2"></i>
                  Correct <b className="ms-2"> {score}</b>
                </div>
                <div className="bg-danger bg-opacity-10 px-3 py-2 rounded-3 d-flex align-items-center" style={{ fontSize: "1.1rem", color: "#fc5f7c" }}>
                  <i className="bi bi-x-circle me-2"></i>
                  Incorrect <b className="ms-2">{incorrect}</b>
                </div>
                <div className="bg-secondary bg-opacity-10 px-3 py-2 rounded-3 d-flex align-items-center" style={{ fontSize: "1.1rem", color: "#36405a" }}>
                  <i className="bi bi-list-ul me-2"></i>
                  Answered <b className="ms-2">{Object.keys(answers).length}/{total}</b>
                </div>
              </div>
            </div>
            {/* Status bar/banner */}
            <div className="text-center my-3 px-0 px-md-2">
              <span className="badge rounded-pill px-4 py-2 text-white shadow-sm"
                style={{
                  fontSize: "1.12rem",
                  background: score / total >= 0.7 ? "#18cfab" : "#fc5f7c"
                }}>
                <i className={`bi ${score / total >= 0.7 ? "bi-check-circle-fill" : "bi-x-circle-fill"} me-2`}></i>
                {score / total >= 0.7 ? "Passed" : "Try Again"}
              </span>
            </div>
            {/* Action button */}
            <button
              className="btn btn-primary w-100 fw-bold py-3 mt-3"
              style={{
                fontSize: "1.15rem",
                borderRadius: "12px",
                boxShadow: "0 6px 18px #18cfab60",
                background: "#18cfab",
                border: "none",
                color: "#12312a"
              }}
              onClick={() => navigate("/events/progress")}
            >Return to Home</button>
          </div>
        </main>
      </div>
    </div>
  );
}
