import React, { useState, useEffect } from "react";
import questions from "./data/questions";
import QuizHeader from "./QuizHeader";
import ProgressBar from "./ProgressBar";
import QuestionSection from "./QuestionSection";
import Pagination from "./Pagination";
import ExitPopup from "./ExitPopup";
import SubmitPopup from "./SubmitPopup";
import TopHeader from "./TopHeader";


export default function Quiz() {
  const totalQuestions = questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showExit, setShowExit] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [timer, setTimer] = useState(59 * 60);

  useEffect(() => {
  if (timer === 0) return; 
  const interval = setInterval(() => {
    setTimer(t => (t > 0 ? t - 1 : 0));
  }, 1000);
  return () => clearInterval(interval);
}, [timer]);


  function formatTime(sec) {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  function handleAnswer(optionIdx) {
    setAnswers({ ...answers, [current]: optionIdx });
  }

  function handleNext() {
    if (current < totalQuestions - 1) setCurrent(current + 1);
  }
  function handlePrev() {
    if (current > 0) setCurrent(current - 1);
  }
  function handlePaginate(idx) {
    setCurrent(idx);
  }
  function handleExit() {
    setShowExit(true);
  }

  // Show submit popup
  function handleSubmitQuiz() {
    setShowSubmit(true);
  }

  function handleReview() {
    setShowSubmit(false);
  }
  function handleFinalSubmit() {
    setShowSubmit(false);
  }

  return (
    <>
      <TopHeader />
      <div className="container my-4 px-2" style={{ maxWidth: "900px", fontFamily: "Arial, sans-serif" }}>
      <QuizHeader
        title="JavaScript Fundamentals Quiz"
        timer={formatTime(timer)}
        answered={Object.keys(answers).length}
        total={totalQuestions}
        onExit={handleExit}
      />
      <ProgressBar
        current={current}
        total={totalQuestions}
      />
      <QuestionSection
        question={questions[current]}
        idx={current}
        selected={answers[current]}
        onAnswer={handleAnswer}
      />
      <Pagination
        current={current}
        total={totalQuestions}
        answeredArr={Object.keys(answers).map(n => Number(n))}
        onPaginate={handlePaginate}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      {current === totalQuestions - 1 && (
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-success" style={{ fontWeight: 600, minWidth: 130 }} onClick={handleSubmitQuiz}>
            Submit Quiz
          </button>
        </div>
      )}
      <ExitPopup
        show={showExit}
        onCancel={() => setShowExit(false)}
      />
      <SubmitPopup
        show={showSubmit}
        total={totalQuestions}
        answered={Object.keys(answers).length}
        onReview={handleReview}
        onSubmit={handleFinalSubmit}
      />
    </div>
    </>
    
  );
}
