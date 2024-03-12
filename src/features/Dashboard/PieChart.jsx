import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const colors = ["#ef7c3f", "#f19563"];

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{ background: "#f15908" }}
          itemStyle={{ color: "#fff" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
