import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Calendar, Clock, Users, HelpCircle, Play } from "lucide-react";
import Layout from "../../Layout/Layout"; // 1. Import the standard Layout
import { useNavigate } from "react-router-dom";

const dummyContests = [
  {
    id: 1,
    title: "JavaScript Fundamentals Quiz",
    description:
      "Test your knowledge of JavaScript basics and advanced concepts.",
    date: "10/1/2025",
    time: "10:15 PM",
    duration: "Ends in 0h 59m",
    participants: 45,
    maxParticipants: 100,
    questions: 3,
    status: "Ongoing",
    type: "Contest",
  },
  {
    id: 2,
    title: "React Basics Coding Contest",
    description: "Hands-on coding problems to test your React knowledge.",
    date: "10/2/2025",
    time: "05:00 PM",
    duration: "Starts soon",
    participants: 0,
    maxParticipants: 200,
    questions: 5,
    status: "Upcoming",
    type: "Contest",
  },
  {
    id: 3,
    title: "Frontend Design Challenge",
    description: "Showcase your UI/UX skills in this design hackathon.",
    date: "09/28/2025",
    time: "02:00 PM",
    duration: "Completed",
    participants: 70,
    maxParticipants: 100,
    questions: 2,
    status: "Past",
    type: "Event",
  },
  {
    id: 4,
    title: "Node.js API Challenge",
    description: "Build APIs with Node.js & Express in limited time.",
    date: "09/25/2025",
    time: "08:00 PM",
    duration: "Completed",
    participants: 55,
    maxParticipants: 80,
    questions: 4,
    status: "Past",
    type: "Contest",
  },

  {
    id: 5,
    title: "Node.js API Challenge",
    description: "Build APIs with Node.js & Express in limited time.",
    date: "09/25/2025",
    time: "08:00 PM",
    duration: "Completed",
    participants: 55,
    maxParticipants: 80,
    questions: 4,
    status: "Past",
    type: "Contest",
  },

  {
    id: 6,
    title: "JavaScript Fundamentals Quiz",
    description:
      "Test your knowledge of JavaScript basics and advanced concepts.",
    date: "10/1/2025",
    time: "10:15 PM",
    duration: "Ends in 0h 59m",
    participants: 45,
    maxParticipants: 100,
    questions: 3,
    status: "Ongoing",
    type: "Contest",
  },
];

export default function EventsUserPage() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [viewType, setViewType] = useState("Contest"); // Contest | Event
  const navigate = useNavigate();

  // Filter by status & type
  const filteredContests = dummyContests.filter(
    (c) => c.status === activeTab && c.type === viewType
  );

  const stats = {
    total: dummyContests.length,
    live: dummyContests.filter((c) => c.status === "Ongoing").length,
    upcoming: dummyContests.filter((c) => c.status === "Upcoming").length,
    completed: dummyContests.filter((c) => c.status === "Past").length,
  };

  return (
    <Layout>
      <div className="mt-4">
        <h4>Contests & Events</h4>

        {/* Switch between Contest / Event */}
        <Row className="mt-3 mb-3">
          <Col className="d-flex justify-content-start">
            <ToggleButtonGroup
              type="radio"
              name="options"
              value={viewType}
              onChange={(val) => setViewType(val)}
              className="shadow-sm overflow-hidden"
            >
              <ToggleButton
                id="tbg-btn-1"
                value={"Contest"}
                variant={viewType === "Contest" ? "primary" : "outline-primary"}
                className="px-4 d-flex align-items-center"
              >
                <Play size={16} className="me-2" /> Contests
              </ToggleButton>
              <ToggleButton
                id="tbg-btn-2"
                value={"Event"}
                variant={viewType === "Event" ? "success" : "outline-success"}
                className="px-4 d-flex align-items-center"
              >
                <Calendar size={16} className="me-2" /> Events
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>

        {/* Stats */}
        <Row className="mt-4 text-center">
          <Col>
            <Card className="p-3 bg-light">
              <h5>{stats.total}</h5>
              <p>Total</p>
            </Card>
          </Col>
          <Col>
            <Card className="p-3 bg-success bg-opacity-10">
              <h5>{stats.live}</h5>
              <p>Live Now</p>
            </Card>
          </Col>
          <Col>
            <Card className="p-3 bg-warning bg-opacity-10">
              <h5>{stats.upcoming}</h5>
              <p>Upcoming</p>
            </Card>
          </Col>
          <Col>
            <Card className="p-3 bg-info bg-opacity-10">
              <h5>{stats.completed}</h5>
              <p>Completed</p>
            </Card>
          </Col>
        </Row>

        {/* Full row filter buttons */}
        <Row className="mb-3 mt-3">
          <Col>
            <Button
              variant={activeTab === "Ongoing" ? "primary" : "outline-primary"}
              onClick={() => setActiveTab("Ongoing")}
              className="w-100"
            >
              Ongoing ({stats.live})
            </Button>
          </Col>
          <Col>
            <Button
              variant={activeTab === "Upcoming" ? "warning" : "outline-warning"}
              onClick={() => setActiveTab("Upcoming")}
              className="w-100"
            >
              Upcoming ({stats.upcoming})
            </Button>
          </Col>
          <Col>
            <Button
              variant={activeTab === "Past" ? "secondary" : "outline-secondary"}
              onClick={() => setActiveTab("Past")}
              className="w-100"
            >
              Past ({stats.completed})
            </Button>
          </Col>
        </Row>

        {/* Contest Cards */}
        <Row>
          {filteredContests.length > 0 ? (
            filteredContests.map((contest) => (
              <Col md={4} key={contest.id} className="mb-3">
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title>{contest.title}</Card.Title>
                    <Badge
                      bg={
                        contest.status === "Ongoing" ? "success" : "secondary"
                      }
                      className="me-2"
                    >
                      {contest.status}
                    </Badge>
                    <Badge bg="info">{contest.type}</Badge>

                    <Card.Text className="mt-2">
                      {contest.description}
                    </Card.Text>

                    <p className="mb-1">
                      <Calendar size={16} className="me-2" /> {contest.date} •{" "}
                      {contest.time}
                    </p>
                    <p className="mb-1">
                      <Clock size={16} className="me-2" /> {contest.duration}
                    </p>
                    <p className="mb-1">
                      <Users size={16} className="me-2" />{" "}
                      {contest.participants}/{contest.maxParticipants}
                    </p>
                    <p>
                      <HelpCircle size={16} className="me-2" />{" "}
                      {contest.questions} questions
                    </p>

                    {contest.status === "Ongoing" && (
                      <Button
                        variant="primary"
                        className="mt-2 w-100"
                        onClick={() => navigate("/events/code")}
                      >
                        <Play size={16} className="me-2" /> Join Contest
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center mt-4">
              No {viewType.toLowerCase()}s in this section.
            </p>
          )}
        </Row>
      </div>
    </Layout>
  );
}
