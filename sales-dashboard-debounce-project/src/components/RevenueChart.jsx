import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function RevenueChart({
  sales
}) {

  return (

    <ResponsiveContainer
      width="100%"
      height={300}
    >

      <BarChart data={sales}>

        <CartesianGrid
          strokeDasharray="3 3"
        />

        <XAxis dataKey="product" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="revenue"
          fill="#8884d8"
        />

      </BarChart>

    </ResponsiveContainer>
  );
}