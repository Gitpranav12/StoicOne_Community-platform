import React from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitPopup({ show, total, answered, onReview, onSubmit,answers }) {
  const navigate = useNavigate();

  if (!show) return null;

const handleSubmit = () => {
  if (onSubmit) onSubmit();
  // answers prop is passed down from QuizPage
  navigate("/scorecard", { state: { answers } });
};


  return (
    <div
      style={{
        position: "fixed",
        zIndex: 2000,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.14)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          minWidth: 400,
          maxWidth: 540,
          width: "98%",
          boxShadow: "0 6px 32px rgba(0,0,0,0.17)",
          padding: "30px 30px 30px 30px",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>Submit Quiz?</div>
        <div style={{ color: "#76777A", fontSize: 17, marginBottom: 12 }}>
          You have answered <b>{answered}</b> out of <b>{total}</b> questions. Are you sure you want to submit your quiz?<br />
          <span style={{ fontSize: 14, color: "#999" }}>This action cannot be undone.</span>
        </div>
        <div style={{ display: "flex", gap: 18, justifyContent: "flex-end" }}>
          <button
            style={{
              border: "1.5px solid #e2e6ee",
              background: "#fff",
              color: "#18181f",
              fontWeight: 500,
              fontSize: 16,
              borderRadius: 9,
              padding: "10px 24px",
              minWidth: 140,
              cursor: "pointer"
            }}
            onClick={onReview}
          >
            Review Answers
          </button>
          <button
            style={{
              background: "#0a0a13",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              border: "none",
              borderRadius: 9,
              padding: "10px 28px",
              minWidth: 130,
              cursor: "pointer"
            }}
            onClick={handleSubmit}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
