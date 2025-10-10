import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Badge,
  ToggleButtonGroup,
  ToggleButton,
  Spinner,
} from "react-bootstrap";
import {
  Calendar,
  Clock,
  Users,
  HelpCircle,
  Play,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";

// --- Dummy data for your local Contests ---
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
    type: "Contest",
  },
];

// --- Dummy data for Events ---
const dummyApiEvents = [
  {
    id: "evt-001",
    title: "Global Tech Summit 2025",
    description: "Join industry leaders to discuss the future of technology, AI, and cloud computing.",
    date: "November 5, 2025",
    time: "09:00 AM",
    location: "Convention Center, San Francisco",
    url: "#",
    imageUrl: "https://picsum.photos/seed/tech/400/225",
    type: "Event",
  },
  {
    id: "evt-002",
    title: "AI & Machine Learning Expo",
    description: "A premier event for developers and data scientists to explore the latest in ML.",
    date: "October 22, 2025",
    time: "10:00 AM",
    location: "Online / Virtual",
    url: "#",
    imageUrl: "https://picsum.photos/seed/ai/400/225",
    type: "Event",
  },
  {
    id: "evt-003",
    title: "React Forward Conference",
    description: "Deep dive into the React ecosystem with talks from the core team and community.",
    date: "December 1, 2025",
    time: "11:00 AM",
    location: "Austin, TX",
    url: "#",
    imageUrl: "https://picsum.photos/seed/react/400/225",
    type: "Event",
  },
   {
    id: "evt-004",
    title: "Cybersecurity World Forum",
    description: "Learn about the latest threats and defensive strategies from top security experts.",
    date: "November 15, 2025",
    time: "08:30 AM",
    location: "London, UK",
    url: "#",
    imageUrl: "https://picsum.photos/seed/cyber/400/225",
    type: "Event",
  },
];


// --- Card Component for Events ---
const EventCard = ({ event }) => (
  <Card className="shadow-sm h-100">
    <Card.Img variant="top" src={event.imageUrl} style={{ height: '180px', objectFit: 'cover' }} />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{event.title}</Card.Title>
      <Badge bg="success" className="me-2 align-self-start">Event</Badge>
      <Card.Text className="mt-2 text-muted small">{event.description}</Card.Text>
      <div className="mt-auto">
        <p className="mb-1 d-flex align-items-center"><Calendar size={16} className="me-2 flex-shrink-0" /> {event.date} • {event.time}</p>
        <p className="mb-2 d-flex align-items-center"><MapPin size={16} className="me-2 flex-shrink-0" /> {event.location}</p>
        <Button variant="success" className="mt-2 w-100 d-flex align-items-center justify-content-center gap-2" onClick={() => window.open(event.url, "_blank")}>
          <ExternalLink size={16} /> View Event
        </Button>
      </div>
    </Card.Body>
  </Card>
);

// --- Main Page Component ---
export default function EventsUserPage() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [viewType, setViewType] = useState("Event");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (viewType === "Event") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setEvents(dummyApiEvents);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [viewType]);

  const filteredContests = dummyContests.filter((c) => c.status === activeTab);

  const stats = {
    total: dummyContests.length,
    live: dummyContests.filter((c) => c.status === "Ongoing").length,
    upcoming: dummyContests.filter((c) => c.status === "Upcoming").length,
    completed: dummyContests.filter((c) => c.status === "Past").length,
  };

  const renderContent = () => {
    if (viewType === "Event") {
      if (isLoading) {
        return <div className="text-center mt-5"><Spinner animation="border" variant="primary" /><p className="mt-2">Loading events...</p></div>;
      }
      return (
        <Row>
          {events.map(event => (
            <Col md={4} key={event.id} className="mb-4">
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
      );
    }
    
    // Render Contests
    return (
       <Row>
        {filteredContests.length > 0 ? (
          filteredContests.map((contest) => (
            <Col md={4} key={contest.id} className="mb-4">
              {/* --- CONTEST CARD DESIGN FIXED HERE --- */}
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column">
                  {/* This part remains at the top */}
                  <div>
                    <Card.Title>{contest.title}</Card.Title>
                    <Badge bg={contest.status === "Ongoing" ? "primary" : "secondary"} className="me-2">{contest.status}</Badge>
                    <Badge bg="info">{contest.type}</Badge>
                    <Card.Text className="mt-2 text-muted">{contest.description}</Card.Text>
                    <p className="mb-1"><Calendar size={16} className="me-2" /> {contest.date} • {contest.time}</p>
                    <p className="mb-1"><Clock size={16} className="me-2" /> {contest.duration}</p>
                    <p className="mb-1"><Users size={16} className="me-2" /> {contest.participants}/{contest.maxParticipants}</p>
                    <p><HelpCircle size={16} className="me-2" /> {contest.questions} questions</p>
                  </div>
                  
                  {/* This div with mt-auto pushes only the button to the bottom */}
                  <div className="mt-auto pt-3">
                    {contest.status === "Ongoing" && (
                      <Button variant="primary" className="w-100 d-flex align-items-center justify-content-center gap-2" onClick={() => navigate("/events/contest")}>
                        <Play size={16} /> Join Contest
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center mt-4">No contests in this section.</p>
        )}
      </Row>
    );
  }

  return (
    <Layout>
      <div className="mt-4">
        <h4>Contests & Events</h4>

        <Row className="mt-3 mb-3">
          <Col className="d-flex justify-content-start">
            {/* --- TOGGLE BUTTON ORDER FIXED HERE --- */}
            <ToggleButtonGroup type="radio" name="options" value={viewType} onChange={(val) => setViewType(val)} className="shadow-sm overflow-hidden">
              <ToggleButton id="tbg-btn-2" value={"Event"} variant={viewType === "Event" ? "success" : "outline-success"} className="px-4 d-flex align-items-center">
                <Calendar size={16} className="me-2" /> Events
              </ToggleButton>
              <ToggleButton id="tbg-btn-1" value={"Contest"} variant={viewType === "Contest" ? "primary" : "outline-primary"} className="px-4 d-flex align-items-center">
                <Play size={16} className="me-2" /> Contests
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>

        {viewType === 'Contest' && (
          <>
            <Row className="mt-4 text-center">
              <Col><Card className="p-3 bg-light"><h5>{stats.total}</h5><p className="mb-0">Total</p></Card></Col>
              <Col><Card className="p-3 bg-success bg-opacity-10"><h5>{stats.live}</h5><p className="mb-0">Live Now</p></Card></Col>
              <Col><Card className="p-3 bg-warning bg-opacity-10"><h5>{stats.upcoming}</h5><p className="mb-0">Upcoming</p></Card></Col>
              <Col><Card className="p-3 bg-info bg-opacity-10"><h5>{stats.completed}</h5><p className="mb-0">Completed</p></Card></Col>
            </Row>

            <Row className="mb-3 mt-4">
              <Col>
                <Button variant={activeTab === "Ongoing" ? "primary" : "outline-primary"} onClick={() => setActiveTab("Ongoing")} className="w-100">
                  Live Now ({stats.live})
                </Button>
              </Col>
              <Col>
                <Button variant={activeTab === "Upcoming" ? "warning" : "outline-warning"} onClick={() => setActiveTab("Upcoming")} className="w-100">
                  Upcoming ({stats.upcoming})
                </Button>
              </Col>
              <Col>
                <Button variant={activeTab === "Past" ? "secondary" : "outline-secondary"} onClick={() => setActiveTab("Past")} className="w-100">
                  Completed ({stats.completed})
                </Button>
              </Col>
            </Row>
          </>
        )}

        <div className="mt-4">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
}