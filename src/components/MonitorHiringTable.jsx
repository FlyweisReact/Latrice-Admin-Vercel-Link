const hires = [
  {
    id: 1,
    shop: "Sexy Braids",
    provider: "Wilson George",
    date: "06/06/2023",
    time: "1:00 PM - 2:00 PM",
    service: "Loc Retwist",
    price: "$80",
    status: "Accepted",
  },
  {
    id: 2,
    shop: "Nixon Day Spa",
    provider: "Erin Lubin",
    date: "09/10/2023",
    time: "1:00 PM - 2:00 PM",
    service: "Loc Retwist",
    price: "$80",
    status: "Accepted",
  },
  {
    id: 3,
    shop: "Ace Spa",
    provider: "Ashlynn Gouse",
    date: "12/22/2023",
    time: "1:00 PM - 2:00 PM",
    service: "Loc Retwist",
    price: "$80",
    status: "Pending",
  },
  {
    id: 7,
    shop: "RD Skin Care",
    provider: "Justin Botosh",
    date: "05/06/2023",
    time: "1:00 PM - 2:00 PM",
    service: "Loc Retwist",
    price: "$80",
    status: "Rejected",
  },
];

const statusColors = {
  Accepted: "bg-green-500 text-white",
  Pending: "bg-yellow-400 text-black",
  Rejected: "bg-red-500 text-white",
};

const MonitorHiringTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Monitor Hiring</h2>
        <button className="bg-gray-100 px-3 py-2 rounded-lg border">
          Sort By
        </button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">#</th>
            <th className="p-3">Shop Name</th>
            <th className="p-3">Independent Provider</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3">Service</th>
            <th className="p-3">Price Offered</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {hires.map((h, idx) => (
            <tr key={h.id} className="border-t">
              <td className="p-3">{idx + 1}</td>
              <td className="p-3">{h.shop}</td>
              <td className="p-3">{h.provider}</td>
              <td className="p-3">{h.date}</td>
              <td className="p-3">{h.time}</td>
              <td className="p-3">{h.service}</td>
              <td className="p-3">{h.price}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[h.status]}`}
                >
                  {h.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded bg-gray-100">&lt;</button>
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              className={`px-3 py-1 border rounded ${
                n === 1 ? "bg-yellow-400" : "bg-white"
              }`}
            >
              {n}
            </button>
          ))}
          <button className="px-3 py-1 border rounded bg-gray-100">&gt;</button>
        </div>
        <div>
          <select className="border rounded px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>{" "}
          /Page
        </div>
      </div>
    </div>
  );
};

export default MonitorHiringTable;
