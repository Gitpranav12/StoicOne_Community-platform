import { useState } from 'react';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';

export default function CreateContestForm({ onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'quiz',
    duration: 30,
    startDate: '',
    endDate: '',
    status: 'draft'
  });

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  const addQuestion = () => {
    if (currentQuestion.question && currentQuestion.options.every(opt => opt.trim())) {
      setQuestions([...questions, { ...currentQuestion, id: `q${questions.length + 1}` }]);
      setCurrentQuestion({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: 0
      });
    }
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const contestData = {
      ...formData,
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      duration: parseInt(formData.duration),
      questions: formData.type === 'quiz' ? questions : undefined,
      problemStatement: formData.type === 'coding' ? formData.problemStatement : undefined,
      starterCode: formData.type === 'coding' ? {
        javascript: formData.starterCode || '// Your solution here'
      } : undefined
    };

    onSuccess(contestData);
  };

  return (
    <div className="create-contest-form">
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">Create New Contest</h2>
            <p className="text-muted mb-0">Set up a new quiz or coding challenge</p>
          </div>
          <button className="btn btn-outline-secondary" onClick={onCancel}>
            <ArrowLeft size={18} className="me-2" />
            Back to Dashboard
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-8">
              {/* Basic Information */}
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
                        placeholder="Enter contest title"
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
                        placeholder="Describe what this contest is about"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Contest Type *</label>
                      <select
                        className="form-select"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="quiz">Quiz Contest</option>
                        <option value="coding">Coding Contest</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Duration (minutes) *</label>
                      <input
                        type="number"
                        className="form-control"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        min="5"
                        max="480"
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
                  </div>
                </div>
              </div>

              {/* Quiz Questions */}
              {formData.type === 'quiz' && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white">
                    <h5 className="card-title mb-0">Quiz Questions ({questions.length})</h5>
                  </div>
                  <div className="card-body">
                    {/* Add Question Form */}
                    <div className="border rounded-3 p-4 mb-4 bg-light">
                      <h6 className="mb-3">Add New Question</h6>
                      
                      <div className="mb-3">
                        <label className="form-label">Question</label>
                        <input
                          type="text"
                          className="form-control"
                          name="question"
                          value={currentQuestion.question}
                          onChange={handleQuestionChange}
                          placeholder="Enter your question"
                        />
                      </div>

                      <div className="row g-3 mb-3">
                        {currentQuestion.options.map((option, index) => (
                          <div key={index} className="col-md-6">
                            <label className="form-label">Option {String.fromCharCode(65 + index)}</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                placeholder={`Option ${String.fromCharCode(65 + index)}`}
                              />
                              <div className="input-group-text">
                                <input
                                  type="radio"
                                  name="correctAnswer"
                                  checked={currentQuestion.correctAnswer === index}
                                  onChange={() => setCurrentQuestion(prev => ({ ...prev, correctAnswer: index }))}
                                  title="Mark as correct answer"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={addQuestion}
                        disabled={!currentQuestion.question || !currentQuestion.options.every(opt => opt.trim())}
                      >
                        <Plus size={18} className="me-2" />
                        Add Question
                      </button>
                    </div>

                    {/* Questions List */}
                    {questions.map((question, index) => (
                      <div key={index} className="border rounded-3 p-3 mb-3">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="flex-grow-1">
                            <h6 className="mb-2">Q{index + 1}: {question.question}</h6>
                            <div className="row g-2">
                              {question.options.map((option, optIndex) => (
                                <div key={optIndex} className="col-md-6">
                                  <span className={`badge ${optIndex === question.correctAnswer ? 'bg-success' : 'bg-secondary'} me-2`}>
                                    {String.fromCharCode(65 + optIndex)}
                                  </span>
                                  {option}
                                </div>
                              ))}
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removeQuestion(index)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Coding Problem */}
              {formData.type === 'coding' && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white">
                    <h5 className="card-title mb-0">Coding Problem</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <label className="form-label">Problem Statement *</label>
                      <textarea
                        className="form-control"
                        name="problemStatement"
                        value={formData.problemStatement || ''}
                        onChange={handleInputChange}
                        rows="8"
                        placeholder="Describe the coding problem, include examples, constraints, etc."
                        required={formData.type === 'coding'}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Starter Code (JavaScript)</label>
                      <textarea
                        className="form-control code-editor"
                        name="starterCode"
                        value={formData.starterCode || ''}
                        onChange={handleInputChange}
                        rows="6"
                        placeholder="function solution() {&#10;    // Your solution here&#10;}"
                        style={{fontFamily: 'monospace'}}
                      />
                    </div>
                  </div>
                </div>
              )}
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
                      disabled={!formData.title || !formData.description || (formData.type === 'quiz' && questions.length === 0)}
                    >
                      Create Contest
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>
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