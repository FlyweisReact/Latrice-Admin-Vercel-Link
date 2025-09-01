import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "JAN", earnings: 40 },
  { name: "FEB", earnings: 30 },
  { name: "MAR", earnings: 55 },
  { name: "APR", earnings: 90 },
  { name: "MAY", earnings: 60 },
  { name: "JUN", earnings: 25 },
  { name: "JUL", earnings: 95 },
  { name: "AUG", earnings: 40 },
  { name: "SEP", earnings: 28 },
  { name: "OCT", earnings: 12 },
  { name: "NOV", earnings: 65 },
  { name: "DEC", earnings: 100 },
];

const Reports = () => {
  return (
    <div className="w-full min-h-screen bg-white font-[Rasa] p-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-black">Reports</h1>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button className="px-4 py-1 rounded bg-gray-200 text-sm">Day</button>
          <button className="px-4 py-1 rounded bg-gray-200 text-sm">Week</button>
          <button className="px-4 py-1 rounded bg-gray-200 text-sm">Month</button>
          <button className="px-4 py-1 rounded bg-black text-white text-sm">
            Year
          </button>
          <button className="ml-4 flex items-center gap-2 px-4 py-1 rounded border border-gray-400 text-sm">
            <span>⭳</span> Export
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="mt-6 rounded-2xl bg-[#2F2F2F] p-6 shadow-lg">
        {/* Graph Section */}
        <h2 className="text-white text-xl font-bold mb-4">Earning Report.</h2>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#666" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" ticks={[0, 20, 30, 50, 90, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#2F2F2F", border: "none" }}
                labelStyle={{ color: "#fff" }}
                cursor={{ fill: "rgba(255,255,255,0.1)" }}
              />
              <Bar dataKey="earnings" fill="#ffffff" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Breakdown Section */}
      <div className="mt-6 rounded-2xl bg-[#2F2F2F] p-6 shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4">Breakdown</h2>
        <div className="space-y-3 text-base">
          <div className="flex justify-between border-b border-gray-600 pb-2">
            <span className="font-semibold">From Services</span>
            <span>$100,000,00.00</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 pb-2">
            <span className="font-semibold">Promotions</span>
            <span>$50,00.00</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 pb-2">
            <span className="font-semibold">Commission</span>
            <span>$5,50.00</span>
          </div>
          <div className="flex justify-between pt-2 text-lg font-bold">
            <span>Total earning</span>
            <span>$100,055,50.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
