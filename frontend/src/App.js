import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./components/user/UsersPage";
import DashboardHome from "./components/home/Dashboardhome";
import DashboardHomeAdmin from "./components/home/Dashboardadmin";
import AskQuestionWrapper from "./components/ask_question/AskQuestionWrapper";
import QuestionsPage from "./components/questionlist/QuestionsPage";
import QuestionDetailsWrapper from "./components/questionlist/QuestionDetailsWrapper";
import AiAssistant from "./components/AiAssistant";
import Signup from "./pages/Signup/index";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Login from "./pages/Login/index";
import TagsPage from "./components/tags/TagsPage";
import Articles from "./components/Articles";
import UserProfile from "./components/UserProfilePage/pages/UserProfile";
import UserPublicProfile from "./components/UserProfilePage/pages/UserPublicProfile";
import { UserProvider } from "./components/UserProfilePage/context/UserContext";
import HowToAsk from './components/help/HowToAsk';
import HowToAnswer from './components/help/HowToAnswer';
import WhyEditPosts from './components/help/WhyEditPosts';
import ExploreCollectives from './components/collectives/ExploreCollectives';
import { CollectivesProvider } from './components/collectives/CollectivesContext';
import CollectivesPage from "./components/collectives/CollectivePage";

// Admin Dashboard pages
import UsersAdmin from "./components/adminDashboard/pages/UsersAdmin";
import QuestionsAdmin from "./components/adminDashboard/pages/QuestionsAdmin";
import AnswersAdmin from "./components/adminDashboard/pages/AnswersAdmin";
import TagsAdmin from "./components/adminDashboard/pages/TagsAdmin";
import CollectivesAdmin from "./components/adminDashboard/pages/CollectivesAdmin";
import AnalyticsAdmin from "./components/adminDashboard/pages/AnalyticsAdmin";
import EventsAdminPage from "./components/adminEvents/EventsAdminPage";
import EventsUserPage from "./components/eventsUser/EventsUserPage";
import ContestPage from "./components/eventsUser/ContestPage";
import ProgressPage from "./components/eventsUser/ProgressPage";
import CodeEditorPage from "./components/eventsUser/CodeEditorPage";
import QuizPage from "./components/quiz/QuizPage";

import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <UserProvider>
      <CollectivesProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* User dashboard - Protected */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardHome />
                </ProtectedRoute>
              } 
            />

            {/* Admin dashboard - Protected */}
            <Route 
              path="/admin-dashboard" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <DashboardHomeAdmin />
                </ProtectedRoute>
              } 
            />

            {/* User pages */}
            <Route 
              path="/user" 
              element={
                <ProtectedRoute>
                  <UsersPage />
                </ProtectedRoute>
              } 
            />
            <Route path="/askquestion" element={<ProtectedRoute><AskQuestionWrapper /></ProtectedRoute>} />
            <Route path="/questions" element={<ProtectedRoute><QuestionsPage /></ProtectedRoute>} />
            <Route path="/questions/:id" element={<ProtectedRoute><QuestionDetailsWrapper /></ProtectedRoute>} />
            <Route path="/AiAssistant" element={<ProtectedRoute><AiAssistant /></ProtectedRoute>} />
            <Route path="/tags" element={<ProtectedRoute><TagsPage /></ProtectedRoute>} />
            <Route path="/Articles" element={<ProtectedRoute><Articles /></ProtectedRoute>} />
            <Route path="/profile/*" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
            <Route path="/users/:id/*" element={<ProtectedRoute><UserPublicProfile /></ProtectedRoute>} />

            {/* Help Section */}
            <Route path="/help/how-to-ask" element={<ProtectedRoute><HowToAsk /></ProtectedRoute>} />
            <Route path="/help/how-to-answer" element={<ProtectedRoute><HowToAnswer /></ProtectedRoute>} />
            <Route path="/help/editing" element={<ProtectedRoute><WhyEditPosts /></ProtectedRoute>} />

            {/* Collectives */}
            <Route path="/collectives" element={<ProtectedRoute><ExploreCollectives /></ProtectedRoute>} />
            <Route path="/collectives/:id" element={<ProtectedRoute><CollectivesPage /></ProtectedRoute>} />

            {/* Admin pages - Protected */}
            <Route path="/admin" element={<ProtectedRoute adminOnly={true}><AnalyticsAdmin /></ProtectedRoute>} />
            <Route path="/admin/tags" element={<ProtectedRoute adminOnly={true}><TagsAdmin /></ProtectedRoute>} />
            <Route path="/admin/collectives" element={<ProtectedRoute adminOnly={true}><CollectivesAdmin /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute adminOnly={true}><UsersAdmin /></ProtectedRoute>} />
            <Route path="/admin/questions" element={<ProtectedRoute adminOnly={true}><QuestionsAdmin /></ProtectedRoute>} />
            <Route path="/admin/answers" element={<ProtectedRoute adminOnly={true}><AnswersAdmin /></ProtectedRoute>} />
            <Route path="/admin/events" element={<ProtectedRoute adminOnly={true}><EventsAdminPage /></ProtectedRoute>} />

            {/* Events / Quiz */}
            <Route path="/events" element={<ProtectedRoute><EventsUserPage /></ProtectedRoute>} />
            <Route path="/events/contest" element={<ProtectedRoute><ContestPage /></ProtectedRoute>} />
            <Route path="/events/progress" element={<ProtectedRoute><ProgressPage /></ProtectedRoute>} />
            <Route path="/events/code" element={<ProtectedRoute><CodeEditorPage /></ProtectedRoute>} />
            <Route path="/events/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
          </Routes>
        </Router>
      </CollectivesProvider>
    </UserProvider>
  );
}
