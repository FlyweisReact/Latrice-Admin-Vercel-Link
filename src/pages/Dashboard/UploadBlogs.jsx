import React, { useState } from "react";
import { Edit2, Trash2, Plus, X } from "lucide-react";

const UploadBlogs = () => {
  const blogs = [
    {
      id: 1,
      date: "04/25/2025",
      headline: "Headline comes here",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpenEdit = (blog) => {
    setSelectedBlog(blog);
    setIsEditOpen(true);
  };

  return (
    <div className="w-full min-h-screen font-[Rasa] p-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-[#2F2F2F]">Upload Blogs</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-2 text-sm mt-4 sm:mt-0"
        >
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
              <button
                className="bg-white p-1 rounded-full shadow"
                onClick={() => handleOpenEdit(blog)}
              >
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

      {/* ===== Add Blog Modal ===== */}
      {isAddOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsAddOpen(false)}
            >
              <X size={20} />
            </button>

            {/* Form */}
            <div className="flex items-start gap-4 mt-4">
              <div className="w-24 h-24 border rounded-md flex flex-col items-center justify-center text-xs text-gray-500">
                <div className="w-6 h-6 rounded-full border flex items-center justify-center mb-1">
                  📷
                </div>
                Enter thumbnail <br /> image here
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="enter headline here"
                  className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="publishing date"
                  className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
                />
              </div>
            </div>

            <textarea
              placeholder="description."
              rows="4"
              className="w-full border rounded-md px-3 py-2 mt-3 text-sm"
            />

            <button className="w-28 bg-gray-400 text-white py-2 rounded-md mt-4 mx-auto block">
              Add
            </button>
          </div>
        </div>
      )}

      {/* ===== Edit Blog Modal ===== */}
      {isEditOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsEditOpen(false)}
            >
              <X size={20} />
            </button>

            {/* Form */}
            <div className="flex items-start gap-4 mt-4">
              <img
                src={selectedBlog.image}
                alt="thumbnail"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <input
                  type="text"
                  defaultValue={selectedBlog.headline}
                  className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
                />
                <input
                  type="text"
                  defaultValue={selectedBlog.date}
                  className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
                />
              </div>
            </div>

            <textarea
              defaultValue={selectedBlog.description}
              rows="4"
              className="w-full border rounded-md px-3 py-2 mt-3 text-sm"
            />

            <button className="w-28 bg-black text-[#FFD369] py-2 rounded-md mt-4 mx-auto block">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadBlogs;
