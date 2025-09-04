import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Hardcoded data for demonstration (in a real app, fetch based on id from API or store)
const getDisputeData = (id) => ({
  user: {
    name: 'Wilson George',
    phone: '+1 (778) 745 2369',
    email: 'email@example.com',
    photo: 'https://via.placeholder.com/100?text=User', // Replace with actual
  },
  shop: {
    name: 'Sexy Braids',
    phone: '+1 (778) 745 2369',
    email: 'email@example.com',
    photo: 'https://via.placeholder.com/100?text=Shop', // Replace with actual
  },
  service: {
    name: 'Loc Retwist',
    price: '$80',
    date: '06/06/2023',
    time: '01:00 PM',
  },
  dispute: {
    pictures: [
      'https://via.placeholder.com/200x120?text=Pic1',
      'https://via.placeholder.com/200x120?text=Pic2',
      'https://via.placeholder.com/200x120?text=Pic3',
    ],
    comment:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
});

const ViewDispute = () => {
  const { id } = useParams();
  const disputeData = getDisputeData(id);

  return (
    <div className="w-full rounded-lg  overflow-hidden font-[Rasa]">
      {/* Header */}
      <div className="flex items-center px-6 ">
        <Link to="/dashboard/dispute-resolution" className="text-gray-600 hover:text-gray-900 mr-2">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold text-gray-900">Resolve This Dispute</h1>
      </div>

      {/* User and Shop Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
        {/* User Details */}
        <div className=" rounded-lg p-4">
          <h2 className="text-base font-medium text-gray-900 mb-4">User Details</h2>
          <div className="flex items-center bg-white rounded-lg p-4 border border-gray-200">
            <img
              src={disputeData.user.photo}
              alt="User"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-medium text-gray-900">{disputeData.user.name}</p>
              <p className="text-sm text-gray-600">{disputeData.user.phone}</p>
              <p className="text-sm text-gray-600">Email ID: {disputeData.user.email}</p>
            </div>
          </div>
        </div>

        {/* Shop Details */}
        <div className=" rounded-lg p-4">
          <h2 className="text-base font-medium text-gray-900 mb-4">Shop Details</h2>
          <div className="flex items-center bg-white rounded-lg p-4 border border-gray-200">
            <img
              src={disputeData.shop.photo}
              alt="Shop"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-medium text-gray-900">{disputeData.shop.name}</p>
              <p className="text-sm text-gray-600">{disputeData.shop.phone}</p>
              <p className="text-sm text-gray-600">Email ID: {disputeData.shop.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="p-6 border border-gray-200 bg-white rounded-lg mx-6">
        <h2 className="text-base font-medium text-gray-900 mb-4">Service Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Name</label>
            <input
              type="text"
              value={disputeData.service.name}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              value={disputeData.service.price}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Dispute Date</label>
            <input
              type="text"
              value={disputeData.service.date}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="text"
              value={disputeData.service.time}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-900 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Dispute Pictures & Comment */}
      <div className="p-6 border border-gray-200 bg-white rounded-lg mx-6 mt-4">
        <h2 className="text-base font-medium text-gray-900 mb-4">Dispute Pictures & Comment</h2>
        <div className="flex gap-4 mb-4">
          {disputeData.dispute.pictures.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={`Dispute picture ${index + 1}`}
              className="w-40 h-24 object-cover rounded-md border border-gray-200"
            />
          ))}
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-md text-sm text-gray-700">
          <p>{disputeData.dispute.comment}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex mt-4 gap-5 mx-6 ">
        <button className="flex-1 py-4 bg-pink-200 text-red-600 font-medium text-center hover:bg-pink-300 transition-colors rounded-2xl">
          Reject
        </button>
        <button className="flex-1 py-4 bg-lime-200 text-green-600 font-medium text-center hover:bg-lime-300 transition-colors rounded-2xl">
          Approve
        </button>
      </div>
    </div>
  );
};

export default ViewDispute;