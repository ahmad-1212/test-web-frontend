import { HiOutlineDotsVertical } from "react-icons/hi";

import PerformanceCard from "../../components/UI/PerformanceCard";
import StatusTag from "../../components/UI/StatusTag";
import Table from "../../components/UI/Table";
import Menu from "../../components/UI/Menu";
import Tab from "../../components/UI/Tab";

const TABLE_HEAD = ["Test Name", "Status", "Questions", "Score"];
const TESTS = [
  {
    name: "Test 1",
    status: "in progress",
    score: undefined,
    questions: 5,
  },
  {
    name: "Test 2",
    status: "completed",
    score: 33,
    questions: 10,
  },
  {
    name: "Test 3",
    status: "in progress",
    score: undefined,
    questions: 12,
  },
  {
    name: "Test 4",
    status: "completed",
    score: 88,
    questions: 8,
  },
];

const TABS = ["In Progress", "Completed"];

const Dashboard = () => {
  return (
    <>
      <section className="py-4 flex flex-col gap-3">
        <h3 className="font-[500] text-[1.2rem]">Performance Snapshot</h3>
        <div className="grid grid-cols-3 gap-5">
          <PerformanceCard
            title="Overall Percent Correct"
            obtained="25.7%"
            overallTitle="National Average"
            overall="67.5%"
            position="7/27 Correct/Total Questions taken"
            chart={true}
          />
          <PerformanceCard
            title="Percentile"
            obtained="1st"
            overallTitle="Goal"
            overall="80th"
            position="1st last 100 Questions"
            chart={true}
          />
          <PerformanceCard
            title="Total Questions Taken"
            obtained="27"
            overallTitle="Unique Questions"
            overall="18"
            position="1.8% of Bank Completed (1023 Qs)"
            chart={true}
          />
        </div>
      </section>
      <section className="py-4 flex flex-col gap-3 mt-10">
        <h3 className="font-[500] text-[1.2rem]">Tests</h3>

        <div className="ml-3">
          <Tab tabs={TABS} />
        </div>
        {/* Table */}
        <Table>
          {/* Table Header */}
          <Table.Head>
            <Table.Row>
              {TABLE_HEAD.map((itm) => (
                <th className="px-5 py-3 text-start" key={itm}>
                  {itm}
                </th>
              ))}
              <th></th>
            </Table.Row>
          </Table.Head>

          {/* Table Body */}
          <Table.Body>
            {TESTS.map((test) => (
              <Table.Row key={test.name}>
                <Table.Data>{test.name}</Table.Data>
                <Table.Data>
                  <StatusTag status={test.status} />
                </Table.Data>
                <Table.Data>5</Table.Data>
                <Table.Data>{test.score ? test.score + "%" : "-"}</Table.Data>
                <Table.Data>
                  <div className="relative w-fit">
                    <Menu>
                      <Menu.Toggle>
                        <HiOutlineDotsVertical />
                      </Menu.Toggle>
                      <Menu.List>
                        <li>Resume</li>
                        <li>Rename</li>
                        <li>Delete</li>
                      </Menu.List>
                    </Menu>
                  </div>
                </Table.Data>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>
    </>
  );
};

export default Dashboard;
