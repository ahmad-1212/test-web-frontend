import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./components/Layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import CreateTestPage from "./pages/CreateTestPage";
import SearchQuestionPage from "./pages/SearchQuestionPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Providers from "./providers/Providers";

const App = () => {
  return (
    <BrowserRouter>
      <Providers>
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
      </Providers>
    </BrowserRouter>
  );
};

export default App;
