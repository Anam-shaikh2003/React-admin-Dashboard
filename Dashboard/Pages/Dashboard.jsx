import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card
          color="bg-gradient-to-r from-pink-400 to-red-400"
          title="Weekly Sales"
          amount="$150,000"
          status="Increased by 60%"
        />
        <Card
          color="bg-gradient-to-r from-blue-400 to-blue-600"
          title="Weekly Orders"
          amount="45,633"
          status="Decreased by 10%"
        />
        <Card
          color="bg-gradient-to-r from-green-400 to-teal-500"
          title="Visitors Online"
          amount="95,741"
          status="Increased by 5%"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-mxl shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Sales Distribution</h2>
          <Pie
            data={{
              labels: ["Electronics", "Fashion", "Groceries"],
              datasets: [
                {
                  data: [300, 150, 100],
                  backgroundColor: ["#6366F1", "#EC4899", "#34D399"],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Weekly Revenue</h2>
          <Bar
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  label: "Revenue ($)",
                  data: [12000, 19000, 3000, 5000, 2000, 30000, 25000],
                  backgroundColor: "#3B82F6",
                  borderRadius: 6,
                },
              ],
            }}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ color, title, amount, status }) {
  return (
    <div className={`${color} p-6 rounded-xl text-white shadow-lg`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">{amount}</p>
      <p className="text-sm mt-1">{status}</p>
    </div>
  );
}
