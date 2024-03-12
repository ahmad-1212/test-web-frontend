import Heading from "../components/UI/Heading";
import Dashboard from "../features/Dashboard/Dashboard";

function DashboardPage() {
  return (
    <div className="flex flex-col ml-8 px-6 bg-white pt-10 pb-16">
      <Heading>Dashboard</Heading>
      <Dashboard />
    </div>
  );
}

export default DashboardPage;
