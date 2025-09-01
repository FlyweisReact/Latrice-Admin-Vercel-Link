import React from "react";
import { Edit2, Trash2, Plus } from "lucide-react";

const UploadBlogs = () => {
  const blogs = [
    {
      id: 1,
      date: "04/25/2025",
      headline: "Headline comes here",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-[Rasa] p-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-[#2F2F2F]">Upload Blogs</h1>
        <button className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-2 text-sm mt-4 sm:mt-0">
          <Plus size={16} /> Add A New Blog
        </button>
      </div>

      {/* Blog Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-xs"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.headline}
              className="w-full h-40 object-cover"
            />

            {/* Top-right icons */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button className="bg-white p-1 rounded-full shadow">
                <Edit2 size={16} color="#2F2F2F" />
              </button>
              <button className="bg-white p-1 rounded-full shadow">
                <Trash2 size={16} color="red" />
              </button>
            </div>

            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
              <p className="text-sm font-semibold">{blog.date}</p>
              <p className="text-base font-bold">{blog.headline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadBlogs;
