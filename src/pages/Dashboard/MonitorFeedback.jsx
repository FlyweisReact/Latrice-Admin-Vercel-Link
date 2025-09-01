import React from "react";
import { Star } from "lucide-react";

const MonitorFeedback = () => {
  const reviews = [
    {
      id: "#123456",
      name: "Maria Siphron",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      score: 4.5,
    },
    {
      id: "#123456",
      name: "Zain Rhiel Madsen",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      score: 4.5,
    },
    {
      id: "#123456",
      name: "Marilyn George",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      score: 4.5,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-[Rasa] p-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-[#2F2F2F]">Monitor Feedback</h1>
        <select className="border border-gray-400 rounded px-3 py-1 mt-4 sm:mt-0">
          <option>All</option>
          <option>5 ★</option>
          <option>4 ★</option>
          <option>3 ★</option>
          <option>2 ★</option>
          <option>1 ★</option>
        </select>
      </div>

      {/* Reviews summary */}
      <div className="mt-6 bg-white rounded-xl shadow p-6 border">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#2F2F2F]">Reviews</h2>
          <div className="flex items-center gap-1 text-[#2F2F2F] font-bold text-lg">
            <Star size={18} className="fill-[#2F2F2F]" /> 5.0
            <span className="font-normal text-sm">(417)</span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {[{ star: 5, percent: 98 },
            { star: 4, percent: 0 },
            { star: 3, percent: 1 },
            { star: 2, percent: 2 },
            { star: 1, percent: 0 }
          ].map((row, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-6 text-sm">{row.star} ★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${row.percent}%`,
                    backgroundColor: "#2F2F2F",
                  }}
                />
              </div>
              <span className="w-10 text-sm text-[#2F2F2F]">
                {row.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual reviews */}
      <div className="mt-6 space-y-4">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start justify-between bg-white border rounded-xl shadow p-4"
          >
            {/* Left */}
            <div className="flex items-start gap-4 w-full sm:w-3/4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <span className="text-xs font-semibold bg-[#2F2F2F] text-white px-3 py-1 rounded-full">
                  User ID: {review.id}
                </span>
                <h3 className="mt-2 font-semibold text-[#2F2F2F]">
                  {review.name}
                </h3>
                <p className="text-sm text-[#2F2F2F] mt-1">{review.text}</p>
                <button className="text-xs text-[#2F2F2F] mt-2">
                  Review details ▼
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end w-full sm:w-1/4 mt-4 sm:mt-0">
              <div className="text-[#2F2F2F] text-lg font-bold">
                {review.score}/5 <span className="text-sm font-normal">score</span>
              </div>
              <button className="mt-2 px-6 py-1 rounded-full bg-[#2F2F2F] text-white text-sm">
                ▼
              </button>
              <button className="mt-3 text-red-500 text-sm">🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitorFeedback;
