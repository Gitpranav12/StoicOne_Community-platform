import React, { useState } from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Calendar, Clock, Users, HelpCircle, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContestCard from "./ContestCard"; // ✅ Import the component

// --- Dummy data for Contests ---
const dummyContests = [
  {
    id: 1,
    title: "JavaScript Fundamentals Quiz",
    description: "Test your knowledge of JavaScript basics and advanced concepts.",
    date: "10/1/2025",
    time: "10:15 PM",
    duration: "Ends in 0h 59m",
    participants: 45,
    maxParticipants: 100,
    questions: 3,
    status: "Ongoing",
    type: "Quiz",
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
    type: "Coding",
  },
  {
    id: 3,
    title: "Frontend Design Challenge",
    description: "Showcase your UI/UX skills in this creative frontend hackathon.",
    date: "09/28/2025",
    time: "02:00 PM",
    duration: "Completed",
    participants: 70,
    maxParticipants: 100,
    questions: 2,
    status: "Past",
    type: "Hackathon",
  },
  {
    id: 4,
    title: "Data Structures Marathon",
    description: "Solve challenging problems on arrays, trees, and dynamic programming.",
    date: "10/10/2025",
    time: "08:00 PM",
    duration: "Ends in 2h 15m",
    participants: 120,
    maxParticipants: 150,
    questions: 8,
    status: "Ongoing",
    type: "Coding",
  },
  {
    id: 5,
    title: "Python for Beginners Quiz",
    description: "A fun quiz to test your Python programming basics and logic.",
    date: "10/12/2025",
    time: "03:30 PM",
    duration: "Starts in 2 days",
    participants: 12,
    maxParticipants: 80,
    questions: 10,
    status: "Upcoming",
    type: "Quiz",
  },
  {
    id: 6,
    title: "AI & Machine Learning Hackathon",
    description: "Build intelligent models and showcase your ML skills in this weekend hackathon.",
    date: "09/15/2025",
    time: "11:00 AM",
    duration: "Completed",
    participants: 85,
    maxParticipants: 100,
    questions: 4,
    status: "Past",
    type: "Hackathon",
  },
  {
    id: 7,
    title: "Fullstack Coding Battle",
    description: "Solve end-to-end fullstack problems using Node.js and React.",
    date: "10/8/2025",
    time: "09:00 PM",
    duration: "Ends in 1h 30m",
    participants: 90,
    maxParticipants: 120,
    questions: 6,
    status: "Ongoing",
    type: "Contest",
  },
  {
    id: 8,
    title: "Kotlin Mobile App Challenge",
    description: "Develop a working Android app using Kotlin within 3 hours.",
    date: "10/15/2025",
    time: "06:00 PM",
    duration: "Starts soon",
    participants: 25,
    maxParticipants: 100,
    questions: 5,
    status: "Upcoming",
    type: "Hackathon",
  },
  {
    id: 9,
    title: "Cybersecurity Awareness Quiz",
    description: "Test your understanding of security practices and online safety.",
    date: "09/20/2025",
    time: "04:00 PM",
    duration: "Completed",
    participants: 60,
    maxParticipants: 100,
    questions: 8,
    status: "Past",
    type: "Quiz",
  },
  {
    id: 10,
    title: "DevOps Tools Challenge",
    description: "Compete to configure CI/CD pipelines using Docker, Jenkins, and GitHub Actions.",
    date: "10/13/2025",
    time: "07:30 PM",
    duration: "Starts in 3 days",
    participants: 10,
    maxParticipants: 75,
    questions: 5,
    status: "Upcoming",
    type: "Contest",
  },
];


export default function ContestsUserPage() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const navigate = useNavigate();

  const filteredContests = dummyContests.filter((c) => c.status === activeTab);

  const stats = {
    total: dummyContests.length,
    live: dummyContests.filter((c) => c.status === "Ongoing").length,
    upcoming: dummyContests.filter((c) => c.status === "Upcoming").length,
    completed: dummyContests.filter((c) => c.status === "Past").length,
  };

  return (
    <div>
      {/* Contest Stats */}
      <Row className="mt-4 text-center">
        <Col>
          <Card className="p-3 bg-light">
            <h5>{stats.total}</h5>
            <p className="mb-0">Total</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-3 bg-success bg-opacity-10">
            <h5>{stats.live}</h5>
            <p className="mb-0">Live Now</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-3 bg-warning bg-opacity-10">
            <h5>{stats.upcoming}</h5>
            <p className="mb-0">Upcoming</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-3 bg-info bg-opacity-10">
            <h5>{stats.completed}</h5>
            <p className="mb-0">Completed</p>
          </Card>
        </Col>
      </Row>

      {/* Tabs */}
      <Row className="mb-3 mt-4">
        <Col>
          <Button
            variant={activeTab === "Ongoing" ? "primary" : "outline-primary"}
            onClick={() => setActiveTab("Ongoing")}
            className="w-100"
          >
            Live Now ({stats.live})
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
            Completed ({stats.completed})
          </Button>
        </Col>
      </Row>

      {/* Contest Cards */}
      <Row>
        {filteredContests.length > 0 ? (
          filteredContests.map((contest) => (
            <Col md={4} key={contest.id} className="mb-4">
              <ContestCard contest={contest} /> {/* ✅ Reusable component */}
            </Col>
          ))
        ) : (
          <p className="text-center mt-4">No contests in this section.</p>
        )}
      </Row>
    </div>
  );
}
