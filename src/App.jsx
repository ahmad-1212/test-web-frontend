import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./components/Layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import CreateTestPage from "./pages/CreateTestPage";
import SearchQuestionPage from "./pages/SearchQuestionPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create-test" element={<CreateTestPage />} />
          <Route path="/question-search" element={<SearchQuestionPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
