import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Calendar, Clock, Users, HelpCircle, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContestCard({ contest }) {
  const navigate = useNavigate();

  return (
    <Card className="shadow-sm h-100">
      <Card.Body className="d-flex flex-column">
        <div>
          <Card.Title>{contest.title}</Card.Title>
          <Badge
            bg={
              contest.status === "Ongoing"
                ? "primary"
                : contest.status === "Upcoming"
                ? "warning"
                : "secondary"
            }
            className="me-2"
          >
            {contest.status}
          </Badge>
          <Badge bg="info">{contest.type}</Badge>

          <Card.Text className="mt-2 text-muted">{contest.description}</Card.Text>

          <p className="mb-1">
            <Calendar size={16} className="me-2" /> {contest.date} • {contest.time}
          </p>
          <p className="mb-1">
            <Clock size={16} className="me-2" /> {contest.duration}
          </p>
          <p className="mb-1">
            <Users size={16} className="me-2" /> {contest.participants}/{contest.maxParticipants}
          </p>
          <p>
            <HelpCircle size={16} className="me-2" /> {contest.questions} questions
          </p>
        </div>

        <div className="mt-auto pt-3">
          {contest.status === "Ongoing" && (
            <Button
              variant="primary"
              className="w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => navigate("/events/contest")}
            >
              <Play size={16} /> Join Contest
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
