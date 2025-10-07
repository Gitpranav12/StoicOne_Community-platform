import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DashboardLayout from "./components/Dashboard";
// import Home from "./pages/Home";
// import Questions from "./pages/Questions";
// import Tags from "./pages/Tags";
// import Chat from "./pages/Chat";
import UsersPage from "./components/user/UsersPage";
import DashboardHome from "./components/home/Dashboardhome";
import DashboardHomeAdmin from "./components/home/Dashboardadmin";
// import ModeratorPage from "./components/moderator/ModeratorPage";
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
import CodeEditorPage from "./components/eventsUser/CodeEditorPage";
import QuizPage from "./components/quiz/QuizPage";

export default function App() {


  return (
    <UserProvider>
      <CollectivesProvider>
        <Router>

          {/* <Routes>
         
          <Route path="/questions" element={<Questions />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/chat" element={<Chat />} />
        </Routes> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* home */}
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/admin-dashboard" element={<DashboardHomeAdmin />} />
            {/* Admin Dashboard with nested tabs
              <Route path="/admin/*" element={<AdminDashboardPage />} /> */}
            {/* User */}
            <Route path="/user" element={<UsersPage />} />
            {/* <Route path="/moderator" element={<ModeratorPage />} /> */}
            <Route path="/askquestion" element={<AskQuestionWrapper />} />
            <Route path="/questions" element={<QuestionsPage />} />
            {/* NEW: Question Details */}
            <Route path="/questions/:id" element={<QuestionDetailsWrapper />} />
            <Route path="/AiAssistant" element={<AiAssistant />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/Articles" element={<Articles />} />
            {/* User profile main page */}
            <Route path="/profile/*" element={<UserProfile />} />

            {/* Help Section */}
            <Route path="/help/how-to-ask" element={<HowToAsk />} />
            <Route path="/help/how-to-answer" element={<HowToAnswer />} />
            <Route path="/help/editing" element={<WhyEditPosts />} />
            {/* Explore all collectives */}
            <Route path="/collectives" element={<ExploreCollectives />} />
            <Route path="/collectives/:id" element={<CollectivesPage />} />

            {/*.......Admin Dashboard routes......  */}
            <Route path="/admin" element={<AnalyticsAdmin />} />
            <Route path="/admin/tags" element={<TagsAdmin />} />
            <Route path="/admin/collectives" element={<CollectivesAdmin />} />
            <Route path="/admin/users" element={<UsersAdmin />} />
            <Route path="/admin/questions" element={<QuestionsAdmin />} />
            <Route path="/admin/answers" element={<AnswersAdmin />} />

            <Route path="/users/:id/*" element={<UserPublicProfile />} />

            <Route path="/admin/events" element={<EventsAdminPage />} />
            <Route path="/events" element={<EventsUserPage />} />
            <Route path="/events/code" element={<CodeEditorPage />} />
            <Route path="/events/quiz" element={<QuizPage />} />

          </Routes>



        </Router>
      </CollectivesProvider>

    </UserProvider>

  );
}
// import { Routes, Route } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ModeratorPage from "./pages/ModeratorPage";
// import MemberPage from "./pages/MemberPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";

// function App() {
//   return (
//     <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//       <Routes>
//         
//         <Route
//           path="/moderator"
//           element={
//             <ProtectedRoute roles={["Moderator"]}>
//               <ModeratorPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;
