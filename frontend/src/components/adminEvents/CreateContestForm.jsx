import { useState } from "react";
import { ArrowLeft, Plus, Trash2, Upload, Edit2 } from "lucide-react";


export default function CreateContestForm({ onSuccess, onCancel }) {
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    banner: null,
    startDate: "",
    endDate: "",
    status: "draft",
  });

  const [rounds, setRounds] = useState([]);
  const [newRound, setNewRound] = useState({
    roundName: "",
    type: "quiz",
    duration: 30,
    questions: [],
  });

  const [loading, setLoading] = useState(false);

  // Input handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleBannerChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prev) => ({ ...prev, banner: file }));
  // };

  const handleRoundChange = (e) => {
    const { name, value } = e.target;
    setNewRound((prev) => ({ ...prev, [name]: value }));
  };

  // Round/Question handlers
  const addRound = () => {
    if (!newRound.roundName.trim()) return;
    setRounds([...rounds, { ...newRound, id: `r${rounds.length + 1}` }]);
    setNewRound({ roundName: "", type: "quiz", duration: 30, questions: [] });
  };

  const removeRound = (index) =>
    setRounds(rounds.filter((_, i) => i !== index));

  const addQuestion = (roundIndex, question) => {
    const updated = [...rounds];
    updated[roundIndex].questions.push(question);
    setRounds(updated);
  };

  const updateQuestion = (roundIndex, qIndex, updatedQ) => {
    const updated = [...rounds];
    updated[roundIndex].questions[qIndex] = updatedQ;
    setRounds(updated);
  };

  const removeQuestion = (roundIndex, qIndex) => {
    const updated = [...rounds];
    updated[roundIndex].questions.splice(qIndex, 1);
    setRounds(updated);
  };

  // Submit handler - send FormData to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title) return;
    if (rounds.length === 0) {
      alert("Please add at least one round!");
      return;
    }

    setLoading(true);
    try {
      const submissionData = {
        title: formData.title,
        description: formData.description,
        startDate: formData.startDate,
        endDate: formData.endDate,
        status: formData.status,
        rounds: rounds,
      };

      const res = await fetch("http://localhost:8080/api/contests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create contest");

      alert("Contest created successfully!");
      onSuccess(data);
    } catch (err) {
      alert("Failed to create contest: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-contest-form">
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">Create New Contest</h2>
            <p className="text-muted mb-0">
              Configure a multi-round hiring event (quiz + coding)
            </p>
          </div>
          {/* <button className="btn btn-outline-secondary" onClick={onCancel}>
            <ArrowLeft size={18} className="me-2" />
            Back
          </button> */}
            <button
              className="btn btn-outline-secondary d-flex align-items-center flex-shrink-0"
              onClick={onCancel}
            >
              <ArrowLeft size={18} className="me-2" />
              Back
            </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-8">
              {/* Basic Info */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white">
                  <h5 className="card-title mb-0">Basic Information</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Contest Title *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Description *</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="3"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Start Date & Time *</label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">End Date & Time *</label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* banner image  */}
                    {/* <div className="col-12">
                      <label className="form-label">
                        Contest Banner (optional)
                      </label>
                      <div className="input-group">
                        <input
                          type="file"
                          accept="image/*"
                          className="form-control"
                          onChange={handleBannerChange}
                        />
                        <span className="input-group-text">
                          <Upload size={18} />
                        </span>
                      </div>
                      {formData.banner && (
                        <img
                          src={URL.createObjectURL(formData.banner)}
                          alt="preview"
                          className="img-fluid mt-3 rounded"
                          style={{ maxHeight: "200px", objectFit: "cover" }}
                        />
                      )}
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Rounds Section */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white">
                  <h5 className="card-title mb-0">Rounds ({rounds.length})</h5>
                </div>
                <div className="card-body">
                  {/* Add Round */}
                  <div className="border rounded-3 p-4 mb-4 bg-light">
                    <h6 className="mb-3">Add New Round</h6>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Round Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="roundName"
                          value={newRound.roundName}
                          onChange={handleRoundChange}
                          placeholder="e.g., Aptitude Round"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Round Type *</label>
                        <select
                          className="form-select"
                          name="type"
                          value={newRound.type}
                          onChange={handleRoundChange}
                        >
                          <option value="quiz">Aptitude / Quiz</option>
                          <option value="coding">Coding</option>
                        </select>
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Duration (minutes)</label>
                        <input
                          type="number"
                          className="form-control"
                          name="duration"
                          value={newRound.duration}
                          onChange={handleRoundChange}
                          min="5"
                        />
                      </div>

                      <div className="col-md-4 d-flex align-items-end">
                        <button
                          type="button"
                          className="btn btn-primary w-100"
                          onClick={addRound}
                        >
                          <Plus size={18} className="me-2" />
                          Add Round
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Existing Rounds */}
                  {rounds.map((round, index) => (
                    <div key={index} className="border rounded-3 p-3 mb-3">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="mb-1">
                            {index + 1}. {round.roundName}{" "}
                            <span className="badge bg-secondary ms-2">
                              {round.type}
                            </span>
                          </h6>
                          <small className="text-muted">
                            Duration: {round.duration} min |{" "}
                            {round.type === "quiz"
                              ? `${round.questions.length} questions`
                              : `Coding Problems: ${round.questions.length}`}
                          </small>
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeRound(index)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-3 ps-2">
                        {round.type === "quiz" ? (
                          <QuizQuestionEditor
                            roundIndex={index}
                            addQuestion={addQuestion}
                            updateQuestion={updateQuestion}
                            removeQuestion={removeQuestion}
                            questions={round.questions}
                          />
                        ) : (
                          <CodingQuestionEditor
                            roundIndex={index}
                            addQuestion={addQuestion}
                            updateQuestion={updateQuestion}
                            removeQuestion={removeQuestion}
                            questions={round.questions}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white">
                  <h5 className="card-title mb-0">Contest Settings</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      <option value="draft">Draft</option>
                      <option value="upcoming">Upcoming</option>
                      <option value="active">Active</option>
                    </select>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={
                        !formData.title || rounds.length === 0 || loading
                      }
                    >
                      {loading ? "Submitting..." : "Create Contest"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={onCancel}
                      disabled={loading}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/* -------------------------------
   QUIZ QUESTION EDITOR COMPONENT
---------------------------------*/
function QuizQuestionEditor({
  roundIndex,
  addQuestion,
  updateQuestion,
  removeQuestion,
  questions,
}) {
  const [question, setQuestion] = useState({
    text: "",
    options: ["", "", "", ""],
    correctIndex: 0,
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleOptionChange = (i, value) => {
    const newOptions = [...question.options];
    newOptions[i] = value;
    setQuestion({ ...question, options: newOptions });
  };

  const handleSave = () => {
    if (!question.text.trim()) return;
    if (editIndex !== null) {
      updateQuestion(roundIndex, editIndex, question);
      setEditIndex(null);
    } else {
      addQuestion(roundIndex, question);
    }
    setQuestion({ text: "", options: ["", "", "", ""], correctIndex: 0 });
  };

  const handleEdit = (i) => {
    setEditIndex(i);
    setQuestion(questions[i]);
  };

  return (
    <div className="mt-2">
      <h6>{editIndex !== null ? "Edit Quiz Question" : "Add Quiz Question"}</h6>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter question"
        value={question.text}
        onChange={(e) => setQuestion({ ...question, text: e.target.value })}
      />
      {question.options.map((opt, i) => (
        <div key={i} className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => handleOptionChange(i, e.target.value)}
          />
          <div className="input-group-text">
            <input
              type="radio"
              name={`correct-${roundIndex}`}
              checked={question.correctIndex === i}
              onChange={() => setQuestion({ ...question, correctIndex: i })}
            />
          </div>
        </div>
      ))}
      <button className="btn btn-sm btn-success mb-3" onClick={handleSave}>
        {editIndex !== null ? "Update Question" : "Add Question"}
      </button>

      <ul className="list-group">
        {questions.map((q, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{q.text}</span>
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => handleEdit(i)}
              >
                <Edit2 size={14} />
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeQuestion(roundIndex, i)}
              >
                <Trash2 size={14} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------
   CODING QUESTION EDITOR COMPONENT
---------------------------------*/
function CodingQuestionEditor({
  roundIndex,
  addQuestion,
  updateQuestion,
  removeQuestion,
  questions,
}) {
  const [question, setQuestion] = useState({
    title: "",
    description: "",
    inputFormat: "",
    outputFormat: "",
    sampleInput: "",
    sampleOutput: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = () => {
    if (!question.title.trim()) return;
    if (editIndex !== null) {
      updateQuestion(roundIndex, editIndex, question);
      setEditIndex(null);
    } else {
      addQuestion(roundIndex, question);
    }
    setQuestion({
      title: "",
      description: "",
      inputFormat: "",
      outputFormat: "",
      sampleInput: "",
      sampleOutput: "",
    });
  };

  const handleEdit = (i) => {
    setEditIndex(i);
    setQuestion(questions[i]);
  };

  return (
    <div className="mt-2">
      <h6>
        {editIndex !== null ? "Edit Coding Question" : "Add Coding Question"}
      </h6>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Problem Title"
        value={question.title}
        onChange={(e) => setQuestion({ ...question, title: e.target.value })}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Problem Description"
        rows="3"
        value={question.description}
        onChange={(e) =>
          setQuestion({ ...question, description: e.target.value })
        }
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Input Format"
        value={question.inputFormat}
        onChange={(e) =>
          setQuestion({ ...question, inputFormat: e.target.value })
        }
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Output Format"
        value={question.outputFormat}
        onChange={(e) =>
          setQuestion({ ...question, outputFormat: e.target.value })
        }
      />
      <textarea
        className="form-control mb-2"
        placeholder="Sample Input"
        rows="2"
        value={question.sampleInput}
        onChange={(e) =>
          setQuestion({ ...question, sampleInput: e.target.value })
        }
      />
      <textarea
        className="form-control mb-2"
        placeholder="Sample Output"
        rows="2"
        value={question.sampleOutput}
        onChange={(e) =>
          setQuestion({ ...question, sampleOutput: e.target.value })
        }
      />
      <button className="btn btn-sm btn-success mb-3" onClick={handleSave}>
        {editIndex !== null ? "Update Problem" : "Add Problem"}
      </button>

      <ul className="list-group">
        {questions.map((q, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{q.title}</span>
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => handleEdit(i)}
              >
                <Edit2 size={14} />
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeQuestion(roundIndex, i)}
              >
                <Trash2 size={14} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
