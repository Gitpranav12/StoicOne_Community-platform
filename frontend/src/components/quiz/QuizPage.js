import React, { useState, useEffect, useMemo, useContext } from "react"; // useContext को इम्पोर्ट किया गया
import QUIZ_SECTIONS from "./data/questions";
import QuizHeader from "./QuizHeader";
import ProgressBar from "./ProgressBar";
import QuestionSection from "./QuestionSection";
import Pagination from "./Pagination";
import ExitPopup from "./ExitPopup";
import SubmitPopup from "./SubmitPopup"; 
import TopHeader from "./TopHeader";
import OverallScorePopup from "./OverallScorePopup"; 
import { UserContext } from "../UserProfilePage/context/UserContext"; 

export default function Quiz() {
    
    const { user: contextUser } = useContext(UserContext);
    
    // ProfileHeader.js se Name import kiya hai User Context se
    const currentUserName = contextUser?.profile?.name || "Candidate";
    const currentUserId = contextUser?.profile?.id;
    const currentUserPhotoUrl = currentUserId 
        ? `http://localhost:8080/api/user/${currentUserId}/profile-photo`
        : "https://via.placeholder.com/80/fc5f7c/ffffff?text=U"; 
    

    // --- STATE FOR MULTI-SECTION LOGIC ---
    const totalSections = QUIZ_SECTIONS.length;
    // Tracks the current section being displayed (0 to 3)
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0); 
    // Stores the score for each section: [{score: 0, total: 2}, ...]
    const [sectionScores, setSectionScores] = useState(
      QUIZ_SECTIONS.map(section => ({ score: 0, total: section.questions.length, completed: false }))
    );
    // Modal State for Progression
    const [showSectionComplete, setShowSectionComplete] = useState(false);
    const [showOverallScore, setShowOverallScore] = useState(false);
    // ------------------------------------------

    // VARIABLES derived from state
    const currentSection = QUIZ_SECTIONS[currentSectionIndex];
    const totalQuestions = currentSection.questions.length; 
    const isLastSection = currentSectionIndex === totalSections - 1;

    const [current, setCurrent] = useState(0); 
    const [answers, setAnswers] = useState({}); 
    const [showExit, setShowExit] = useState(false);
    const [timer, setTimer] = useState(59 * 60);

    // Memoize overall totals for the final score popup
    const overallScoreTotal = useMemo(() => 
      sectionScores.reduce((acc, s) => acc + s.score, 0)
    , [sectionScores]);

    const overallTotalQuestions = useMemo(() => 
      sectionScores.reduce((acc, s) => acc + s.total, 0)
    , [sectionScores]);


    // --- TIMER AND UTILITIES (Original logic) ---
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

    // --- HANDLERS (Section-scoped logic) ---
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

    // --- CORE PROGRESSION LOGIC ---

    // 1. Logic to calculate and save the current section's score
    function calculateSectionScore() {
      let score = 0;
      currentSection.questions.forEach((q, qIndex) => {
        // Check if the user's answer (stored by index) matches the correct answer index
        if (answers[qIndex] === q.correctAnswerIndex) {
          score += 1;
        }
      });
      return score;
    }

    // 2. Main handler to submit the current section
    function handleSubmitSection() {
      const score = calculateSectionScore();
      const total = totalQuestions;

      // Update section scores state
      setSectionScores(prevScores => {
        const newScores = [...prevScores];
        newScores[currentSectionIndex] = { score, total, completed: true };
        return newScores;
      });

      // Determine next step: Final score or next section popup
      if (isLastSection) {
        setShowOverallScore(true); // Show final score popup
      } else {
        setShowSectionComplete(true); // Show section completion popup
      }
    }

    // 3. Handler to move to the next section (Called by SubmitPopup)
    function handleNextSection() {
      setShowSectionComplete(false);
      setCurrentSectionIndex(prevIndex => prevIndex + 1);
      setCurrent(0); // Reset question index to 0 for the new section
      setAnswers({}); // Clear answers for the new section
    }

    // 4. Handler for Final Submit (Called by OverallScorePopup)
    function handleFinalSubmit() {
        // This is the final action after completing ALL sections
        console.log("Quiz submitted! Final Scores:", sectionScores);
        setShowOverallScore(false);
    }

    // Repurpose original handlers
    function handleReview() {
      // Used by the popup to close and return to the current section
      setShowSectionComplete(false);
    }

    return (
      <>
        <TopHeader />
        <div className="container my-4 px-2" style={{ maxWidth: "900px", fontFamily: "Arial, sans-serif" }}>
          
          {/* Quiz Header */}
          <QuizHeader
            // Display the specific section title from the data
            title={`${currentSection.title} (Section ${currentSectionIndex + 1} of ${totalSections})`}
            timer={formatTime(timer)}
            answered={Object.keys(answers).length}
            total={totalQuestions} // Total for current section
            onExit={handleExit}
          />

          {/* Section Progress */}
          <ProgressBar
            // ProgressBar now shows progress within the current section
            current={current}
            total={totalQuestions}
          />
          
          {/* Question Section */}
          <QuestionSection
            question={currentSection.questions[current]}
            idx={current}
            selected={answers[current]}
            onAnswer={handleAnswer}
          />

          {/* Pagination */}
          <Pagination
            current={current}
            total={totalQuestions}
            answeredArr={Object.keys(answers).map(n => Number(n))}
            onPaginate={handlePaginate}
            onNext={handleNext}
            onPrev={handlePrev}
          />

          {/* Submit Section Button */}
          {/* Show Submit Section button on the last question of the section */}
          {current === totalQuestions - 1 && (
            <div className="d-flex justify-content-end mt-3">
              <button 
                className="btn btn-success" 
                style={{ fontWeight: 600, minWidth: 150 }} 
                onClick={handleSubmitSection}
              >
                Submit Section {currentSectionIndex + 1}
              </button>
            </div>
          )}
          
          {/* --- POPUPS --- */}
          
          {/* Original Exit Popup */}
          <ExitPopup
            show={showExit}
            onCancel={() => setShowExit(false)}
          />
          
          {/* Re-purposed SubmitPopup for Section Completion */}
          <SubmitPopup
            show={showSectionComplete}
            total={currentSection.questions.length} 
            answered={Object.keys(answers).length}
            isSectionComplete={true} // Flag to change the popup's content
            onReview={handleReview}
            onSubmit={handleNextSection} // This calls the function to move to the next section
          />

          {/* New Overall Score Popup - Triggers after the last section */}
          <OverallScorePopup
            show={showOverallScore}
            sectionScores={sectionScores}
            overallScore={overallScoreTotal}
            overallTotal={overallTotalQuestions}
            onSubmit={handleFinalSubmit}
            // ✨ नया बदलाव: यूजर का नाम और फोटो URL पास करें
            userName={currentUserName}
            userPhotoUrl={currentUserPhotoUrl}
          />
        </div>
      </>
    );
}