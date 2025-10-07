import { useState } from "react";
import AdminEvents from "./AdminEvents";
import { mockContests } from "./data/mockData";
import Layout from "../../Layout/Layout";



export default function EventsAdminPage() {
 
  const [contests, setContests] = useState(mockContests); // removed Contest[] type

  const handleCreateContest = (newContest) => {
    const contest = {
      ...newContest,
      id: `contest-${Date.now()}`,
      participants: Math.floor(Math.random() * 50) + 1, // Random initial participants
    };
    setContests([...contests, contest]);
  };

  const handleUpdateContest = (id, updates) => {
    setContests(
      contests.map((contest) =>
        contest.id === id ? { ...contest, ...updates } : contest
      )
    );
  };

  const handleDeleteContest = (id) => {
    setContests(contests.filter((contest) => contest.id !== id));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <AdminEvents
          contests={contests}
          onCreateContest={handleCreateContest}
          onUpdateContest={handleUpdateContest}
          onDeleteContest={handleDeleteContest}
        />
      </div>
    </Layout>
  );
}
