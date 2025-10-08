import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../Layout/Layout"; 
import { useNavigate } from "react-router-dom";
export default function ContestPage() {
  const navigate = useNavigate();

  const handleStartContest = () => {
    navigate("/events/progress"); 
  };
  return (
    <Layout>
  <div className="px-4 py-4">
          <div className="text-center mb-4">
            <div
              className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-4"
              style={{
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, #007bff, #28a745)",
              }}
            >
              <i
                className="bi bi-trophy-fill text-white"
                style={{ fontSize: "20px" }}
              ></i>
            </div>
            <h4 className="fw-semibold" style={{ fontSize: "24px" }}>Complete Programming Challenge</h4>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              A comprehensive contest with both aptitude questions and coding challenges to test your overall programming skills.
            </p>
          </div>
          <Row className="g-3 justify-content-center">
            <Col md={5}>
              <Card className="border border-primary h-100">
                <Card.Body>
                  <div className="d-flex align-items-start">
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "25px",
                        height: "25px",
                       borderRadius: "12px",
                        background: "linear-gradient(135deg, rgba(192, 228, 248, 1))",
                      }}
                    >
                      <i className="bi bi-book text-primary" style={{ fontSize: "15px" }}></i>
                    </div>

                    <div className="flex-grow-1">
                      <h6 className=" mb-1" style={{ fontSize: "16px" }}>Aptitude Questions</h6>
                      <p className="text-muted mb-2" style={{ fontSize: "13px" }}>
                        Test your logical and analytical skills
                      </p>
                      <table className="w-100" style={{ fontSize: "14px" }}>
                        <tbody>
                          <tr>
                            <td className="text-muted pb-1" style={{ width: "45%" }}>Questions:</td>
                            <td className="pb-1">5</td>
                          </tr>
                          <tr>
                            <td className="text-muted pb-1">Categories:</td>
                            <td className="pb-1">5 Types</td>
                          </tr>
                          <tr>
                            <td className="text-muted">Total Points:</td>
                            <td>70</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="border border-success h-100">
                <Card.Body>
                  <div className="d-flex align-items-start">
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "25px",
                        height: "25px",
                        background: "linear-gradient(135deg, #c4f5deff)",
                         borderRadius: "12px",
                      }}
                    >
                      <i className="bi bi-code text-success" style={{ fontSize: "15px" }}></i>
                    </div>

                    <div className="flex-grow-1">
                      <h6 className="mb-1" style={{ fontSize: "16px" }}>Coding Problems</h6>
                      <p className="text-muted mb-2" style={{ fontSize: "13px" }}>
                        Solve programming challenges
                      </p>
                      <table className="w-100" style={{ fontSize: "14px" }}>
                        <tbody>
                          <tr>
                            <td className="text-muted pb-1" style={{ width: "45%" }}>Problems:</td>
                            <td className="pb-1">7</td>
                          </tr>
                          <tr>
                            <td className="text-muted pb-1">Difficulty:</td>
                            <td className="pb-1">Easy to Medium</td>
                          </tr>
                          <tr>
                            <td className="text-muted">Languages:</td>
                            <td>Multi-language</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="mt-5 border rounded-3 p-4 bg-light">
            <h6 className="fw-semibold mb-3" style={{ fontSize: "16px" }}>
              <i className="bi bi-info-circle me-2 text-primary"></i> Contest Instructions
            </h6>

            <Row>
              <Col md={6}>
                <h6 className="fw-semibold mb-2" style={{ fontSize: "14px" }}>Contest Features:</h6>
                <ul className="list-unstyled small text-secondary" style={{ fontSize: "13px" }}>
                  <li><i className="bi bi-check-circle text-success me-2"></i> View all problems at once</li>
                  <li><i className="bi bi-check-circle text-success me-2"></i> Solve in any order</li>
                  <li><i className="bi bi-check-circle text-success me-2"></i> Real-time progress tracking</li>
                  <li><i className="bi bi-check-circle text-success me-2"></i> No time limit per problem</li>
                </ul>
              </Col>
              <Col md={6}>
                <h6 className="fw-semibold mb-2" style={{ fontSize: "14px" }}>Problem Types:</h6>
                <ul className="list-unstyled small text-secondary" style={{ fontSize: "13px" }}>
                  <li><i className="bi bi-terminal text-primary me-2"></i> Aptitude and reasoning</li>
                  <li><i className="bi bi-braces text-primary me-2"></i> Coding with IDE</li>
                  <li><i className="bi bi-funnel text-primary me-2"></i> Filter by category</li>
                  <li><i className="bi bi-lightbulb text-primary me-2"></i> Instant feedback</li>
                </ul>
              </Col>
            </Row>
          </div>
          <div 
            className="mt-4 p-3 rounded-3 text-center"
            style={{
              backgroundColor: '#f8e5d7ff',
              border:'1px solid #e8680cff',
            }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <div className="me-3">
                <i className="bi bi-clock" style={{ fontSize: "14px", color: "#c55f10ff" }}></i>
              </div>
              <div>
                <div className="fw-semibold" style={{ fontSize: "14px", color: "rgba(36, 35, 35, 1)" }}>
                  Total Contest Duration
                </div>
                <div className="fw-bold" style={{ fontSize: "14px", color: "#8e8f92ff" }}>
                  2 hours (120 minutes)
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-center align-items-center gap-3">
            <Button 
              variant="outline-secondary" 
              className="fw-semibold px-4 py-2"
              size="lg"
              style={{ fontSize: "14px" }}
            >
              Cancel
            </Button>
            
          <Button
  onClick={handleStartContest}
  className="fw-semibold px-4 py-2 text-white border-0 d-flex align-items-center justify-content-center gap-2"
  size="lg"
  style={{
    background: "linear-gradient(135deg, #007bff, #28a745)",
    fontSize: "14px"
  }}
>
  <i className="bi bi-play" style={{ fontSize: "14px" }}></i>
  Start Contest
</Button>
          </div>
      </div>
    </Layout>
  );
}