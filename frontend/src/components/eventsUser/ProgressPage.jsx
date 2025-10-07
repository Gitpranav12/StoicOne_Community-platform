import React, { useState } from "react";
import { Button, Card, Col, Row, ProgressBar, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";

export default function ProgressPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "Aptitude", icon: "bi-lightbulb" },
    { name: "Coding", icon: "bi-code-slash"},
  ];

  const problems = [
    { 
      id: 1, 
      title: "Solve Me First", 
      success: "98.1%", 
      maxScore: 1,
      type: "Coding"
    },
    { 
      id: 2, 
      title: "Simple Array Sum", 
      success: "94.7%", 
      maxScore: 10,
      type: "Coding"
    },
    { 
      id: 3, 
      title: "A Very Big Sum", 
      success: "97.8%", 
      maxScore: 10,
      type: "Coding"
    },
    { 
      id: 4, 
      title: "Diagonal Difference", 
      success: "95.0%", 
      maxScore: 10,
      type: "Coding"
    },
    { 
      id: 5, 
      title: "Plus Minus", 
      success: "97.6%", 
      maxScore: 10,
      type: "Coding"
    },
    { 
      id: 6, 
      title: "Logical Reasoning Question", 
      success: "92.1%", 
      maxScore: 10,
      type: "Aptitude"
    },
    { 
      id: 7, 
      title: "Quantitative Aptitude Question", 
      success: "92.8%", 
      maxScore: 15,
      type: "Aptitude"
    },
    { 
      id: 8, 
      title: "Verbal Reasoning Question", 
      success: "92.8%", 
      maxScore: 10,
      type: "Aptitude"
    },
    { 
      id: 9, 
      title: "Data Interpretation Question", 
      success: "90.7%", 
      maxScore: 20,
      type: "Aptitude"
    },
    { 
      id: 10, 
      title: "Programming Logic Question", 
      success: "81.6%", 
      maxScore: 15,
      type: "Coding"
    },
  ];

  const filteredProblems = activeCategory === "All" 
    ? problems 
    : problems.filter(p => p.type === activeCategory);

  return (
    <Layout>
      <div className="container py-5">
        {/* ---------- Header ---------- */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          {/* Left Section: Title + Icon */}
          <div>
            <div className="d-flex align-items-center mb-1">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 me-2"
                style={{
                  width: "35px",
                  height: "35px",
                  background: "linear-gradient(135deg, #007bff, #28a745)",
                }}
              >
                <i className="bi bi-trophy-fill text-white" style={{ fontSize: "16px" }}></i>
              </div>
              <h5 className="fw-semibold mb-0">Complete Programming Challenge</h5>
            </div>
            <p className="text-muted small mb-0">
              Solve problems in any order  • 12 total problems
            </p>
          </div>

          {/* Right Section: Buttons */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
            <Button
              size="sm"
              style={{
                backgroundColor: "#efcbb2ff",
                color: "#775757ff",
                border: "none",
                fontWeight: "500",
              }}
            >
              <i className="bi bi-clock me-1"></i> 01:59:54
            </Button>

            <Button
              size="sm"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid grey",
                fontWeight: "500",
              }}
            >
              0 / 10 Solved
            </Button>

            <Button
              size="sm"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid grey",
                fontWeight: "500",
              }}
              onClick={() => navigate("/events")}
            >
              Exit Contest
            </Button>
          </div>
        </div>

        {/* ---------- Progress Section ---------- */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-semibold mb-0">Progress</h6>
            <span className="text-muted small">0% Complete</span>
          </div>
          <ProgressBar
            now={0}
            style={{ height: "8px", borderRadius: "10px" }}
          />
        </div>

        {/* ---------- Combined Categories and Problems Card ---------- */}
        <Row className="justify-content-center">
          <Col md={12}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-0">
                <Row className="g-0">
                  {/* Categories Section */}
                  <Col md={3} className="border-end">
                    <div className="p-3 border-bottom bg-light">
                      <h6 className="fw-semibold mb-0">Categories</h6>
                    </div>
                    
                    <div className="p-3">
                      <div className="d-flex flex-column gap-2">
                        {categories.map((category, index) => (
                          <div
                            key={index}
                            className="category-btn d-flex align-items-center justify-content-center py-2 px-3"
                            style={{ 
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              borderRadius: "8px",
                              border: activeCategory === category.name ? "2px solid #007bff" : "2px solid #e9ecef",
                              backgroundColor: activeCategory === category.name ? "#007bff" : "transparent",
                              color: activeCategory === category.name ? "white" : "#495057",
                              fontWeight: "500"
                            }}
                            onClick={() => setActiveCategory(category.name)}
                            onMouseEnter={(e) => {
                              if (activeCategory !== category.name) {
                                e.currentTarget.style.backgroundColor = "#007bff";
                                e.currentTarget.style.color = "white";
                                e.currentTarget.style.borderColor = "#007bff";
                                // Update icon color on hover
                                const icon = e.currentTarget.querySelector('.category-icon');
                                if (icon) {
                                  icon.style.color = "white";
                                }
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (activeCategory !== category.name) {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "#495057";
                                e.currentTarget.style.borderColor = "#e9ecef";
                                // Reset icon color
                                const icon = e.currentTarget.querySelector('.category-icon');
                                if (icon) {
                                  icon.style.color = "#6c757d";
                                }
                              } else {
                                e.currentTarget.style.backgroundColor = "#007bff";
                                e.currentTarget.style.color = "white";
                                e.currentTarget.style.borderColor = "#007bff";
                                // Keep icon color for active category
                                const icon = e.currentTarget.querySelector('.category-icon');
                                if (icon) {
                                  icon.style.color = "white";
                                }
                              }
                            }}
                          >
                            <i 
                              className={`${category.icon} me-2 category-icon`}
                              style={{
                                color: activeCategory === category.name ? "white" : "#6c757d",
                                transition: "color 0.3s ease",
                                fontSize: "14px"
                              }}
                            ></i>
                            <span style={{ fontSize: "14px" }}>
                              {category.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>

                  {/* Problems Section */}
                  <Col md={9}>
                    <div className="p-3 border-bottom bg-light">
                      <h6 className="fw-semibold mb-0">
                        {activeCategory === "All" ? "All Problems" : activeCategory}
                      </h6>
                    </div>
                    
                    <div className="p-3">
                      {filteredProblems.map((problem) => (
                        <Card key={problem.id} className="mb-3 border-0 shadow-sm">
                          <Card.Body>
                            <Row className="align-items-center">
                              <Col md={8}>
                                <h6 className="fw-semibold mb-1">
                                  {problem.title}
                                </h6>
                                <div className="text-muted small">
                                  Success Rate: {problem.success} • Max Score: {problem.maxScore}
                                </div>
                              </Col>
                              <Col md={4} className="text-end">
                                <Button
                                  variant="success"
                                  size="sm"
                                  onClick={() => navigate(`/events/code/${problem.id}`)}
                                  style={{
                                    backgroundColor: "#28a745",
                                    borderColor: "#28a745",
                                    fontWeight: "500"
                                  }}
                                >
                                  Solve Challenge
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}